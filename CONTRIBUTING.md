# Contributing

## Workflow

1. Create a branch from `main`: `git checkout -b feat/short-description`
2. Make your changes and run `npm run lint` and `npm run build` locally.
3. **Add an entry to `CHANGELOG.md`** (see below).
4. Commit using [Conventional Commits](https://www.conventionalcommits.org/):
   `feat: add careers page`, `fix: navbar overlap on iPad`, `docs: update brand guide`, `style: …`, `refactor: …`, `chore: …`
5. Open a pull request into `main`. Vercel creates a preview deployment automatically.

## Updating the changelog

Every change — whether you write it yourself or ask an AI assistant to make it — gets a changelog entry
**in the same commit**.

1. Add your notes under `## [Unreleased]` using these headings (only the ones you need):
   - `### Added` — new pages, sections, components, features
   - `### Changed` — changes to existing behaviour, content or design
   - `### Fixed` — bug fixes
   - `### Removed` — removed features or files
2. Write one bullet per change, starting with the area in bold, e.g.
   `- **Contact page**: added phone number to the contact details.`
3. When you release / deploy to production, rename `[Unreleased]` to the new version with today's date
   (`## [1.1.0] — 2026-11-05`) and add a fresh empty `[Unreleased]` section above it.

Versioning:

- **Patch** (1.0.**x**) — fixes, copy tweaks
- **Minor** (1.**x**.0) — new sections, pages or features
- **Major** (**x**.0.0) — redesigns or breaking structural changes

## Code conventions

- JavaScript + JSX, functional components, one component per file in `src/components/`.
- Styles: one CSS Module per component/page; shared tokens and utility classes live in `src/app/globals.css`.
  Use the CSS variables (`var(--gold)`, `var(--border)` …) instead of hard-coded colours.
- Content belongs in `src/data/*`, not hard-coded inside components.
- Mark a component `'use client'` only when it needs state, effects, event handlers or Framer Motion.
- Keep animations subtle and always respect `prefers-reduced-motion` (use `useReducedMotion` or the `<Reveal>` helper).
- Imports use the `@/` alias (`@/components/Icon`, `@/data/site`).
