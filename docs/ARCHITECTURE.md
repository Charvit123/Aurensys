# Architecture

```
aurensys/
├── public/                     Static files served from the site root
│   ├── logo-mark.svg           Logo symbol only
│   ├── logo-dark.svg           Symbol + wordmark, for dark backgrounds
│   ├── logo-light.svg          Symbol + wordmark, for light backgrounds
│   └── favicon.svg
├── src/
│   ├── app/                    Next.js 16 App Router — one folder per route
│   │   ├── layout.js           Root layout: fonts, global CSS, metadata, Navbar, Footer
│   │   ├── template.js         Page-enter fade animation (re-mounts per route)
│   │   ├── globals.css         Design tokens + shared utility classes (.btn, .container, .section…)
│   │   ├── page.js             Home  (/)
│   │   ├── about/page.js       About (/about)
│   │   ├── projects/page.js    Projects list (/projects)
│   │   ├── projects/[slug]/page.js   Project detail (statically generated, awaits async `params`)
│   │   ├── contact/page.js     Contact (/contact)
│   │   ├── not-found.js        404 page
│   │   ├── icon.svg            Favicon (picked up automatically by Next.js)
│   │   ├── sitemap.js          → /sitemap.xml
│   │   └── robots.js           → /robots.txt
│   ├── components/             Reusable UI (each with its own .module.css)
│   ├── data/                   All editable content
│   │   ├── site.js             Company info, nav links, values, process, commitments, tech stack
│   │   ├── services.js         Service cards
│   │   └── projects.js         Projects / case studies (currently samples)
│   └── styles/                 Page-level CSS Modules (Home, About, Projects, Contact)
├── docs/                       Project documentation
├── next.config.mjs             Next.js config (pins turbopack.root to this folder)
├── eslint.config.mjs           ESLint flat config (eslint-config-next/core-web-vitals)
├── CHANGELOG.md
├── CONTRIBUTING.md
└── CLAUDE.md
```

## Components

| Component | Type | Purpose |
| --- | --- | --- |
| `Navbar` | client | Fixed header, blur on scroll, animated active pill, mobile menu |
| `Footer` | server | Links, contact, socials, giant wordmark |
| `Logo` / `LogoMark` | server | SVG logo with gradient (unique gradient id per instance) |
| `Icon` | server | Inline stroke icons — add new ones to the `paths` map |
| `HomeHero` | client | Home hero with word-by-word reveal and aurora background |
| `HeroPanel` | client | Looping “delivery pipeline” illustration |
| `Reveal` | client | Fade-up on scroll wrapper (`delay`, `y`, `as` props) |
| `SpotlightCard` | client | Card with cursor-following glow |
| `Marquee` | server | CSS-only infinite scroller |
| `Counter` | client | Count-up number when scrolled into view |
| `PageHero` | server | Hero for inner pages |
| `CtaBand` | server | Call-to-action block (custom `title` / `text` / `secondary` button) |
| `ProjectCover` | server | Generated project artwork from accent colours + pattern |
| `ProjectCard` | server | Card linking to a project detail page |
| `ProjectsGrid` | client | Category filter + animated grid |
| `ContactForm` | client | Validated form, EmailJS or `mailto:` fallback |
| `Faq` | client | Accordion |

## Rendering

All pages are statically generated at build time (`○` / `●` in `next build` output). Only components that need
interactivity are client components, so most HTML ships without JavaScript.

## Animation approach

- **CSS** for always-running ambient motion (aurora blobs, marquee, rotating rings, pulse dot).
- **Framer Motion** for entrance animations (`Reveal`), layout animations (nav pill, project filter) and the
  contact/FAQ transitions.
- Everything is disabled or reduced when the user has `prefers-reduced-motion` enabled.
