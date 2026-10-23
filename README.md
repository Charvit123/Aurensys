<p align="center">
  <img src="public/logo-dark.svg" alt="Aurensys" width="260" />
</p>

<p align="center"><strong>Engineering the Future.</strong></p>

# Aurensys — Company Website

The official marketing website for **Aurensys**, a software development & IT solutions company.

> Turning complex business challenges into effective software solutions.

## Tech stack

| Area        | Choice                                              |
| ----------- | --------------------------------------------------- |
| Framework   | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| UI          | React 19, plain JavaScript                          |
| Styling     | CSS Modules + global design tokens (`globals.css`)  |
| Animation   | [Framer Motion](https://www.framer.com/motion/) + CSS keyframes |
| Fonts       | Sora (headings) + Inter (body) via Fontsource — self-hosted, no Google request |
| Contact     | EmailJS (optional) with a `mailto:` fallback        |
| Hosting     | Vercel (recommended)                                |

## Pages

| Route               | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| `/`                 | Home — hero, services, values, process, commitments, selected work, CTA |
| `/about`            | About us — story, mission/vision/promise, values, how we work, tech stack |
| `/projects`         | Projects with category filter (currently **sample data**)     |
| `/projects/[slug]`  | Project / case-study detail page                              |
| `/contact`          | Contact form, contact details, next steps, FAQ                |
| `*`                 | Custom 404                                                    |

`sitemap.xml` and `robots.txt` are generated automatically.

## Getting started

Requirements: **Node.js 20.9+** (Node 22 LTS recommended).

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint CLI with eslint-config-next (flat config: eslint.config.mjs)
```

## Contact form setup (optional)

The form works out of the box by opening the visitor's email app with the message pre-filled.
To send messages directly instead:

1. Create a free account at [emailjs.com](https://www.emailjs.com), add an email service and a template.
2. In the template, use these variables: `{{from_name}}`, `{{reply_to}}`, `{{company}}`, `{{budget}}`, `{{interests}}`, `{{message}}`.
3. Copy `.env.example` to `.env.local` and fill in the three IDs.
4. On Vercel, add the same three variables under **Project → Settings → Environment Variables**.

## Editing content

Almost all text lives in `src/data/` — you rarely need to touch components.
See **[docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md)** for step-by-step instructions (adding a real project, changing contact details, etc.).

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, **Add New → Project**, import the repo. The defaults (Next.js preset) are correct.
3. Add the EmailJS environment variables if you use them.
4. After you connect your real domain, update `site.url` in `src/data/site.js`.

## Documentation

| File | Purpose |
| --- | --- |
| [CHANGELOG.md](CHANGELOG.md) | Every change made to the project, newest first |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Workflow, conventions and how to update the changelog |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Folder structure and how the pieces fit together |
| [docs/BRAND.md](docs/BRAND.md) | Logo, colour palette, typography and voice |
| [docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md) | How to update text, projects and contact details |
| [CLAUDE.md](CLAUDE.md) | Instructions for AI assistants working on this repo |

## Before going live — checklist

- [ ] Replace placeholder email `hello@aurensys.com` and social links in `src/data/site.js`
- [ ] Set the final domain in `site.url`
- [ ] Replace sample projects in `src/data/projects.js` with real case studies (or remove `isSample`)
- [ ] Configure EmailJS (optional)
- [ ] Add an Open Graph image (`src/app/opengraph-image.png`, 1200×630)

---

© Aurensys. All rights reserved.
