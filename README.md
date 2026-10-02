# Sathwik Vadala — Portfolio

AI Product Engineer / Full-Stack AI Developer portfolio. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion and React Icons.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

Other checks: `npm run lint`, `npm run typecheck`.

## Replace the placeholders

Search the project for `your-` to find every placeholder.

| What | Where |
| --- | --- |
| Email, GitHub, LinkedIn | `lib/config.ts` (top of file) |
| Resume | drop a PDF at `public/resume.pdf` (path set in `lib/config.ts`) |
| Site URL for SEO | set `NEXT_PUBLIC_SITE_URL` (for example in `.env.local`) |
| Live GitHub repos (optional) | set `githubUsername` in `lib/config.ts`; empty means no API call |
| Project GitHub / demo links | `github` and `demo` fields in `lib/data.ts` (null shows "link coming soon") |
| Real screenshots | put an image in `public/` and set `image: { src, alt }` on the project in `lib/data.ts` |
| Experience dates, extra roles | `experience` array in `lib/data.ts` |
| Case study outcomes, FastHire99 / FastTrade99 details | `lib/data.ts` (marked "Placeholder") |
| Colors | `tailwind.config.ts` (`accent` is the single accent color) |

## Structure

```
app/          layout, page, metadata, favicon, OG image, robots
components/   Navbar, Providers, ui/ primitives, projects/ card + previews
sections/     Hero, About, Experience, Projects, AIEngineering, Skills,
              Education, GitHubSection, Contact, Footer
lib/          config.ts (personal details), data.ts (content), skills.ts, github.ts
styles/       globals.css
```

## Notes

- Project previews are abstract illustrations, labelled as such. They are not screenshots.
- No metrics, user counts, stars, or proficiency percentages are shown anywhere.
- Motion respects `prefers-reduced-motion`.
- Fonts (Bricolage Grotesque, Hanken Grotesk) load through `next/font/google`, so the first build needs internet access.
- Deploy to Vercel by importing the repo; no extra configuration is needed.
