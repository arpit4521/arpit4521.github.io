import { expect, test } from "@playwright/test";
import { createMailto, validateContact } from "../src/lib/contact";
import { personalInfo } from "../src/data/portfolio";

const valid = { name: "Test Person", email: "person@example.com", subject: "Engineering & collaboration", message: "I would like to discuss a software engineering opportunity." };

test("contact validation rejects empty and whitespace-only inputs", () => {
  expect(Object.keys(validateContact({ name: " ", email: " ", subject: " ", message: " " }))).toHaveLength(4);
});

test("contact validation checks email, message length, and maximum lengths", () => {
  expect(validateContact(valid)).toEqual({});
  expect(validateContact({ ...valid, email: "not-an-email" }).email).toBeTruthy();
  expect(validateContact({ ...valid, message: "short" }).message).toBeTruthy();
  expect(validateContact({ ...valid, name: "a".repeat(101) }).name).toBeTruthy();
  expect(validateContact({ ...valid, subject: "a".repeat(151) }).subject).toBeTruthy();
  expect(validateContact({ ...valid, message: "a".repeat(2001) }).message).toBeTruthy();
});

test("mailto encoding preserves content without adding injected headers", () => {
  const url = new URL(createMailto({ ...valid, subject: "Hello\r\nBcc: test@example.com" }));
  expect(url.protocol).toBe("mailto:");
  expect(url.pathname).toBe(personalInfo.email);
  expect(url.searchParams.get("subject")).toBe("Hello  Bcc: test@example.com");
  expect(url.searchParams.get("body")).toContain(valid.message);
  expect(url.searchParams.get("body")).toContain(valid.email);
  expect(url.searchParams.has("bcc")).toBe(false);
});
