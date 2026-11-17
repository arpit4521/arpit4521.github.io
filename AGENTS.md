# Portfolio project

- Next.js App Router, React, TypeScript, Tailwind CSS, Lucide; locally bundled Fontsource fonts. Component styling and design tokens are in `src/app/globals.css`.
- Profile, experience, projects, domains, and coding milestones are centralized in `src/data/portfolio.ts`.
- Keep Software Engineer as Arpit's primary identity. Never invent metrics, repositories, or credentials.
- Run `npm run dev` for development, `npm run build` for production, `npm run typecheck` for TypeScript checks, and `npm test` for Playwright browser tests plus contact validation tests.
- Browser tests require `npx playwright install chromium`; they start a production server automatically after a successful build.
- This machine has Node 22.22.2 in Ubuntu-22.04 at `/home/1000335157/.nvm/versions/node/v22.22.2/bin`. The project is accessible there at `/mnt/c/Users/1000335157/Documents/portfolio`. Windows does not currently have Node on PATH.
- On this Windows machine commands can run with `wsl.exe -d Ubuntu-22.04 -- env PATH=/home/1000335157/.nvm/versions/node/v22.22.2/bin:/usr/local/bin:/usr/bin:/bin npm run build` from the project directory.
- The actual photograph belongs at `public/profile.jpg`. Asset existence is checked during rendering. Rebuild production after adding it. Without the photo, display the conceptual engineering illustration, not a fake portrait.
- Do not show résumé request/download actions or the footer copyright/tagline row; the user explicitly removed them.
- Contact form validation creates an encoded mailto draft. There is no configured email backend; never display a sent confirmation.
- Social profiles use the supplied URLs and open with `noopener noreferrer`. Project diagrams are conceptual, not screenshots.
- No production domain has been supplied. Do not invent a canonical URL or social-preview image URL.
- Scroll-reveal effects must not lower text opacity: offscreen opacity reduction caused Lighthouse contrast failures. Browser tests cover both normal and reduced-motion modes, including expanded content and validation errors.
- For Lighthouse in WSL, launch the installed Playwright Chromium with `--headless --remote-debugging-port=9222` and a temporary `--user-data-dir`, then run Lighthouse with `--port=9222`. Automatic Chrome launching misidentifies the WSL temporary-directory path.
