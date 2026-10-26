// ---------------------------------------------------------------------------
// PROJECTS / CASE STUDIES
//
// While this list is empty, /projects shows a "Coming soon" page and the
// "Selected work" section on the Home page is hidden automatically.
//
// To publish a project, add an object like the one below (see
// docs/CONTENT_GUIDE.md for every field). It appears on /projects, gets its own
// page at /projects/<slug>, is added to the sitemap, and the first three show
// on the Home page.
//
// {
//   slug: 'acme-portal',
//   title: 'Acme Portal',
//   subtitle: 'Customer self-service portal',
//   category: 'Web',                 // one of `categories` below
//   industry: 'Manufacturing',
//   year: '2026',
//   accent: ['#F5B544', '#7C83FF'],  // colours for the generated cover art
//   pattern: 'grid',                 // grid | rings | bars | waves | dots
//   summary: 'One or two sentences shown on the card.',
//   challenge: 'What problem did the client have?',
//   solution: 'What did we build and how?',
//   outcomes: ['Result one', 'Result two', 'Result three'],
//   stack: ['Next.js', 'Node.js', 'PostgreSQL'],
// },
// ---------------------------------------------------------------------------

export const categories = ['All', 'Web', 'Mobile', 'Cloud', 'AI'];

export const projects = [];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
