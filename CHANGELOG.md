# Changelog

All notable changes to the Aurensys website are recorded here.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses
[Semantic Versioning](https://semver.org/).

**Rule:** every prompt / task that changes the project adds an entry here *in the same commit*.
See [CONTRIBUTING.md](CONTRIBUTING.md#updating-the-changelog) for the format.

## [Unreleased]

### Fixed

- **Home hero (mobile)**: the pipeline panel and hero buttons could overflow the right edge on Android phones
  (e.g. Samsung with larger system font) — most visibly in the “Building” state. Hero grid columns now use
  `minmax(0, 1fr)`, panel children can shrink (`min-width: 0`), and the panel uses tighter padding under 480px.
- **Home hero panel**: the status badge has a fixed minimum width, so “Building” and “Live” look identical in size
  and the header no longer shifts while the animation loops.
- **Home hero (tablet / zoomed desktop, ≤ 960px)**: the panel now spans the full content width instead of being
  capped at 560px, removing the empty gap on the right.

### Added

- **Repo**: `.gitattributes` (`* text=auto eol=lf`) so files re-saved with Windows (CRLF) line endings no longer show
  up as modified in git.

## [1.2.0] — 2026-10-26

Ready for hosting: no placeholder projects, automatic deploys.

### Added

- **Projects page**: “Coming soon” state (`ProjectsComingSoon` component) shown while there are no projects —
  status badge, placeholder case-study cards with a light shimmer, what each case study will cover, and CTAs to
  Contact and Services.
- **Deployment**: GitHub Actions CI (`.github/workflows/ci.yml`) runs `npm ci`, lint and build on every push to
  `main` and every pull request.
- **Docs**: `docs/DEPLOYMENT.md` — Vercel Git integration setup (push to `main` = production deploy, PR = preview),
  custom domain, rollback and environment variables.

### Changed

- **Home page**: “Selected work” section only renders when at least one project exists.
- **Docs**: README (pages table, deploy section, go-live checklist), ARCHITECTURE and CONTENT_GUIDE updated for the
  Coming soon state and deployment flow.
- **Version**: bumped to 1.2.0.
- **CTA band**: secondary button renamed from “Meet Aurensys” to “About Aurensys” (it links to the About page) and
  made configurable via a `secondary` prop (`{ label, href }`, or `null` to hide it).
- **About page**: CTA band's secondary button now says “See our work” and links to `/projects`, instead of linking
  back to the About page itself.
- **Navbar**: the “Start a project” button is hidden on the Contact page (desktop and mobile menu), since it
  linked to the page the visitor is already on. On desktop it keeps its space so the nav links don't shift.

### Removed

- **Projects**: all 6 sample/dummy projects and the “Sample” badge / notice, so no placeholder work is published.

## [1.1.0] — 2026-10-23

Upgrade to Next.js 16 and React 19.

### Changed

- **Dependencies**: upgraded to Next.js 16 (`next`, `eslint-config-next` ^16.4.3), React 19 (`react`, `react-dom`
  ^19.2.0) and ESLint 9; added `package-lock.json` to the repo for reproducible installs; `engines.node` set to
  `>=20.9.0` (Next.js 16 minimum).
- **Project detail page**: `params` is now awaited in the page and `generateMetadata` (required by Next.js 16).
- **Linting**: replaced the removed `next lint` with the ESLint CLI (`npm run lint` → `eslint .`) and migrated
  `.eslintrc.json` to flat config `eslint.config.mjs`.
- **Navbar**: mobile menu now closes via link `onClick` instead of a `setState` inside an effect, and the initial
  scroll check runs in `requestAnimationFrame` (complies with React Hooks v7 `set-state-in-effect` rule).
- **Footer**: copyright year computed once at module level (keeps render pure).
- **Layout**: added `data-scroll-behavior="smooth"` to `<html>` so page navigations still jump instantly to the top
  while in-page anchor links scroll smoothly (Next.js 16 default changed).
- **Docs**: README, ARCHITECTURE, CONTRIBUTING and CLAUDE.md updated for Next.js 16 / React 19 / Node 20.9+;
  CONTRIBUTING now asks to commit `package-lock.json` with dependency changes.
- **Version**: bumped to 1.1.0.

### Fixed

- **Build config**: set `turbopack.root` and `outputFileTracingRoot` in `next.config.mjs` so Next.js no longer
  detects the `package-lock.json` in the parent (Desktop) folder as the workspace root.

## [1.0.0] — 2026-10-23

Initial release of the new Aurensys website, replacing the previous Dsync Dev site.

### Added

- **Project setup**: Next.js 14 (App Router), React 18, CSS Modules, Framer Motion, ESLint (`next/core-web-vitals`),
  `@/*` import alias, `.env.example`, `.gitignore`.
- **Brand identity**
  - Logo mark: a rising “A” with a core node, gold → amber gradient (`public/logo-mark.svg`).
  - Full logos for dark and light backgrounds (`public/logo-dark.svg`, `public/logo-light.svg`) and favicon / app icon.
  - Dark colour palette with gold/amber accent, indigo + teal supporting colours, documented in `docs/BRAND.md`.
  - Typography: Sora (display) + Inter (body), self-hosted via Fontsource.
- **Layout**: sticky blurred navbar with animated active pill and mobile menu; footer with links, contact and
  oversized wordmark; skip-to-content link; soft page transition (`template.js`).
- **Home page** (`/`): animated hero with aurora background and live “delivery pipeline” panel; technology marquee;
  6 service cards with cursor-following spotlight; core values; 4-step process; animated commitment counters;
  selected work; call-to-action band.
- **About page** (`/about`): story, brand meaning, mission/vision/promise, core values, how we work, tech stack.
- **Projects page** (`/projects`): category filter with animated layout, 6 sample projects with generated cover
  artwork (no images needed), “Sample” badge + notice for placeholder content.
- **Project detail page** (`/projects/[slug]`): challenge, solution, outcomes, sidebar facts, related projects;
  statically generated.
- **Contact page** (`/contact`): validated form (name, email, company, budget, services, message) with EmailJS
  support and `mailto:` fallback, contact details, “what happens next”, FAQ accordion.
- **SEO**: per-page metadata, Open Graph/Twitter tags, `sitemap.xml`, `robots.txt`, custom 404 page.
- **Accessibility**: semantic landmarks, focus styles, ARIA on menu/filters/accordion, `prefers-reduced-motion` support.
- **Docs**: `README.md`, `CHANGELOG.md`, `CONTRIBUTING.md`, `CLAUDE.md`, `docs/ARCHITECTURE.md`, `docs/BRAND.md`,
  `docs/CONTENT_GUIDE.md`.

### Notes

- Contact details (`hello@aurensys.com`, social links) and `site.url` are placeholders — update in `src/data/site.js`.
- All projects are sample concepts (`isSample: true`) until real case studies are available.
