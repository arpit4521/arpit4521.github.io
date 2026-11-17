import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { existsSync } from "node:fs";
import path from "node:path";
import { navigation, personalInfo, socialLinks } from "../src/data/portfolio";

test("renders the complete portfolio without browser errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page).toHaveTitle("Arpit Gupta — Software Engineer");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Arpit Gupta.");
  for (const { id } of navigation) await expect(page.locator(`#${id}`)).toBeAttached();
  await expect(page.locator(".experience-row")).toHaveCount(3);
  await expect(page.locator(".project-card")).toHaveCount(4);
  await expect(page.locator(".domain")).toHaveCount(7);
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", "Arpit Gupta — Software Engineer");
  expect(errors).toEqual([]);
});

test("all external profiles use verified links and safe new tabs", async ({ page }) => {
  await page.goto("/");
  for (const { href } of socialLinks) {
    const links = page.locator(`a[href="${href}"]`);
    expect(await links.count()).toBeGreaterThan(0);
    for (const link of await links.all()) {
      await expect(link).toHaveAttribute("target", "_blank");
      await expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  }
  for (const link of await page.locator('a[href^="#"]').all()) {
    const href = await link.getAttribute("href");
    expect(href).not.toBe("#");
    await expect(page.locator(href!)).toBeAttached();
  }
});

test("reflects the revised experience, core subjects, and simplified sections", async ({ page }) => {
  await page.goto("/");
  const westernDigital = page.locator(".experience-row").filter({ has: page.getByRole("heading", { name: "Western Digital" }) });
  await expect(westernDigital).toContainText("Oct 2025 — Nov 2026");
  await expect(page.getByText("CURRENT ROLE", { exact: true })).toHaveCount(0);
  await expect(page.getByText("Solutions Organization", { exact: true })).toHaveCount(0);
  await expect(page.locator(".role-heading").getByText("Hardware Assisted Verification", { exact: true })).toHaveCount(2);
  const subjects = page.getByRole("list", { name: "Core subjects" });
  await expect(subjects.getByRole("listitem")).toHaveText([
    "Object-Oriented Programming",
    "Embedded Systems",
    "Digital Electronics",
    "Computer Architecture",
    "Microprocessors",
    "Computer Networks",
    "Information Theory and Computing",
  ]);
  await expect(page.locator("#about .about-narrative > p")).toHaveCount(3);
  await expect(page.locator("#problem-solving .stat")).toHaveCount(3);
  await expect(page.locator("#problem-solving").getByRole("link")).toHaveCount(0);
  await expect(page.locator("#problem-solving").getByText("DATA STRUCTURES & ALGORITHMS", { exact: true })).toHaveCount(0);
  await expect(page.getByText("Career milestones, not live statistics.", { exact: true })).toHaveCount(0);
  await expect(page.getByText("Not separate identities.", { exact: true })).toHaveCount(0);
  await expect(page.getByText("Interconnected ways of understanding a system.", { exact: true })).toHaveCount(0);
});

test("mobile navigation supports selection and Escape", async ({ page, isMobile }) => {
  test.skip(!isMobile);
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open navigation" });
  await toggle.click();
  await expect(page.getByRole("navigation", { name: "Main navigation" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(toggle).toBeFocused();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await toggle.click();
  await page.getByRole("navigation").getByRole("link", { name: "Projects", exact: true }).click();
  await expect(page).toHaveURL(/#projects$/);
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
});

test("projects, experience, and expertise expand with keyboard controls", async ({ page }) => {
  await page.goto("/");
  const project = page.locator(".project-details").first();
  await project.locator("summary").focus();
  await page.keyboard.press("Enter");
  await expect(project).toHaveAttribute("open", "");
  await expect(project.getByRole("heading", { name: "Engineering approach" })).toBeVisible();
  await project.locator("summary").click();
  await expect(project).not.toHaveAttribute("open");
  const experience = page.locator(".contribution-details").first();
  await experience.locator("summary").click();
  await expect(experience.locator("li")).toHaveCount(4);
  const domain = page.locator(".domain").nth(1);
  await domain.locator("summary").click();
  await expect(domain.locator(".domain-content")).toBeVisible();
});

test("contact form validates and prepares a draft without claiming to send", async ({ page }) => {
  await page.goto("/#contact");
  await page.getByRole("button", { name: "Prepare email" }).click();
  await expect(page.locator(".field-error")).toHaveCount(4);
  await expect(page.getByLabel("Your name")).toBeFocused();
  await page.getByLabel("Your name").fill("Test Person");
  await page.getByLabel("Email address").fill("not-an-email");
  await page.getByRole("textbox", { name: "Subject", exact: true }).fill("Software & systems");
  await page.getByLabel("Your message").fill("I would love to discuss engineering.");
  await page.getByRole("button", { name: "Prepare email" }).click();
  await expect(page.locator("#error-email")).toBeVisible();
  await page.getByLabel("Email address").fill("person@example.com");
  await page.getByRole("button", { name: "Prepare email" }).click();
  const draft = page.getByRole("link", { name: "Open email draft" });
  await expect(draft).toBeVisible();
  const url = new URL((await draft.getAttribute("href"))!);
  expect(url.pathname).toBe(personalInfo.email);
  expect(url.searchParams.get("subject")).toBe("Software & systems");
  expect(url.searchParams.get("body")).toContain("person@example.com");
  await expect(page.getByText("Nothing is sent from this website.", { exact: false })).toBeVisible();
  await page.getByLabel("Your message").fill("An updated message to invalidate the previous draft.");
  await expect(draft).toHaveCount(0);
});

test("omits résumé actions and the footer copyright/tagline row", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: /résumé|resume/i })).toHaveCount(0);
  await expect(page.locator('a[download], a[href*="Resume"], a[href$=".pdf"]')).toHaveCount(0);
  await expect(page.getByRole("contentinfo")).not.toContainText("©");
  await expect(page.getByText("Thoughtful software. A broader perspective.", { exact: true })).toHaveCount(0);
  await page.getByRole("link", { name: "Back to top", exact: true }).click();
  await expect(page).toHaveURL(/#top$/);
});

test("does not expose a broken photograph", async ({ page }) => {
  await page.goto("/");
  const photoExists = existsSync(path.join(process.cwd(), "public", personalInfo.profileImage));
  if (photoExists) {
    await expect(page.getByAltText("Arpit Gupta, Software Engineer")).toBeVisible();
    expect(await page.locator("img").evaluateAll((images) => images.every((image) => image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0))).toBe(true);
  } else await expect(page.locator("img")).toHaveCount(0);
});

test("responsive layouts do not overflow at common widths", async ({ page }) => {
  for (const width of [320, 375, 390, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `Overflow at ${width}px`).toBe(true);
  }
});

test("default motion preserves text contrast throughout the document", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".hero-copy")).toHaveCSS("opacity", "1");
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  expect(results.violations).toEqual([]);
});

test("respects reduced motion and has no serious accessibility violations", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(await page.locator("html").evaluate((element) => getComputedStyle(element).scrollBehavior)).toBe("auto");
  expect(await page.locator(".hero-copy").evaluate((element) => getComputedStyle(element).animationName)).toBe("none");
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  expect(results.violations).toEqual([]);
  await page.locator("details").evaluateAll((elements) => elements.forEach((element) => element.setAttribute("open", "")));
  await page.getByRole("button", { name: "Prepare email" }).click();
  const expandedResults = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  expect(expandedResults.violations).toEqual([]);
});

test("capture desktop, tablet, and mobile renders", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop");
  for (const width of [1440, 768, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: testInfo.outputPath(`portfolio-${width}.png`), fullPage: true });
    await page.screenshot({ path: testInfo.outputPath(`hero-${width}.png`) });
    for (const id of ["about", "experience", "projects", "expertise", "problem-solving", "contact"]) {
      await page.locator(`#${id}`).screenshot({ path: testInfo.outputPath(`${id}-${width}.png`), style: ".site-header, .skip-link { visibility: hidden !important; }" });
    }
    await page.getByRole("contentinfo").screenshot({ path: testInfo.outputPath(`footer-${width}.png`), style: ".site-header, .skip-link { visibility: hidden !important; }" });
  }
});
