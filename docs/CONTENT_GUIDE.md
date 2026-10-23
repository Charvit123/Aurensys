# Content Guide

Almost every word on the site lives in `src/data/`. Edit, save, and the dev server reloads instantly.

## Company details, email, socials

`src/data/site.js` → `site` object: `email`, `phone`, `location`, `socials`, `url`.
These feed the navbar, footer, contact page and SEO tags.

## Values, process steps, commitments, tech stack

Also in `src/data/site.js` (`values`, `process`, `commitments`, `techStack`, `marqueeTech`).

## Services

`src/data/services.js`. Each service has an `icon` key — available icons are listed in
`src/components/Icon.js` (`code`, `browser`, `mobile`, `cloud`, `spark`, `pen`, `layers`, `shield`, …).

## Adding a real project

Open `src/data/projects.js` and add (or edit) an object:

```js
{
  slug: 'acme-portal',              // URL: /projects/acme-portal  (lowercase, dashes)
  title: 'Acme Portal',
  subtitle: 'Customer self-service portal',
  category: 'Web',                  // must be one of `categories` (Web, Mobile, Cloud, AI)
  industry: 'Manufacturing',
  year: '2026',
  accent: ['#F5B544', '#7C83FF'],   // two colours for the generated cover art
  pattern: 'grid',                  // grid | rings | bars | waves | dots
  summary: 'One or two sentences shown on the card.',
  challenge: 'What problem did the client have?',
  solution: 'What did we build and how?',
  outcomes: ['Result one', 'Result two', 'Result three'],
  stack: ['Next.js', 'Node.js', 'PostgreSQL'],
  isSample: false,                  // false = real project, hides the “Sample” badge
}
```

- The first three projects in the array appear on the Home page under “Selected work”.
- When **no** project has `isSample: true`, the notice banner on `/projects` disappears automatically.
- To add a new category, add it to the `categories` array.

### Using real screenshots later

`ProjectCover` generates artwork so no images are required. To use a screenshot, put it in
`public/projects/<slug>.jpg`, add `image: '/projects/<slug>.jpg'` to the project, and render it with
`next/image` inside `ProjectCover` when `project.image` is set.

## Contact page FAQ and “what happens next”

`src/app/contact/page.js` → `faqs` and `nextSteps` arrays at the top of the file.

## About page mission / principles

`src/app/about/page.js` → `pillars` and `principles` arrays at the top of the file.

## Remember

Add a line to `CHANGELOG.md` under `[Unreleased]` for every change.
