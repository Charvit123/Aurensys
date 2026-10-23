# Notes for AI assistants (Claude, etc.)

This is the Aurensys company website — Next.js 16 App Router (Turbopack), React 19, JavaScript, CSS Modules,
Framer Motion.

Next.js 16 notes: `params`/`searchParams` are Promises (always `await` them); `next lint` no longer exists
(`npm run lint` runs the ESLint CLI with `eslint.config.mjs`); React Hooks v7 lint rules forbid calling
`setState` synchronously inside an effect body.

## Always

- **Update `CHANGELOG.md` for every task that changes files**, under `## [Unreleased]`, using the
  Added / Changed / Fixed / Removed headings described in `CONTRIBUTING.md`. One bullet per change,
  area in bold. Do this in the same change set, not as a follow-up.
- If you add a page, component, data file or doc, update `docs/ARCHITECTURE.md` (and `README.md` if it
  lists pages).
- Keep content in `src/data/`; use design tokens from `src/app/globals.css`; follow `docs/BRAND.md`.
- Keep animations light and respect `prefers-reduced-motion`.
- Run `npm run lint` and `npm run build` before finishing.

## Brand quick reference

- Name: Aurensys · Tagline: “Engineering the Future.” · Meaning: “Innovation Through Engineering”
- Values: Innovation, Quality, Reliability, Scalability
- Promise: Turning complex business challenges into effective software solutions.
- Primary accent: gold `#F5B544` → amber `#FF8A4C` gradient on near-black `#07080C`.
