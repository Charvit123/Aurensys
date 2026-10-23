# Changelog

All notable changes to the Aurensys website are recorded here.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses
[Semantic Versioning](https://semver.org/).

**Rule:** every prompt / task that changes the project adds an entry here *in the same commit*.
See [CONTRIBUTING.md](CONTRIBUTING.md#updating-the-changelog) for the format.

## [Unreleased]

_Nothing yet._

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
