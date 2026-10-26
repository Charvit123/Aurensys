// Central place for brand + company info. Update values here and they
// propagate across the whole website (nav, footer, contact page, SEO).

export const site = {
  name: 'Aurensys',
  tagline: 'Engineering the Future.',
  industry: 'Software Development & IT Solutions',
  meaning: 'Innovation Through Engineering',
  promise: 'Turning complex business challenges into effective software solutions.',
  description:
    'Aurensys is a software development and IT solutions company. We combine creativity, engineering expertise and modern technologies to build reliable, scalable and future-ready digital products.',
  url: 'https://aurensys.vercel.app', // TODO: replace with the final domain
  // TODO: replace placeholder contact details with real ones
  email: 'hello@aurensys.com',
  phone: '',
  location: 'India · Working with clients worldwide',
  responseTime: 'We reply within 24 hours',
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export const values = [
  {
    title: 'Innovation',
    text: 'We look past the obvious solution and choose the approach that moves your business forward.',
  },
  {
    title: 'Quality',
    text: 'Clean architecture, reviewed code and automated tests are part of every delivery, not an extra.',
  },
  {
    title: 'Reliability',
    text: 'Predictable timelines, honest communication and systems that keep running when it matters.',
  },
  {
    title: 'Scalability',
    text: 'We engineer for tomorrow’s traffic, team and features so your product grows without rewrites.',
  },
];

export const process = [
  {
    step: '01',
    title: 'Discover',
    text: 'We dig into your business, users and constraints to define the real problem and a clear scope.',
  },
  {
    step: '02',
    title: 'Design',
    text: 'Architecture, UX flows and interface design, validated with you before a line of production code.',
  },
  {
    step: '03',
    title: 'Engineer',
    text: 'Short sprints, weekly demos and transparent progress. You see the product take shape every week.',
  },
  {
    step: '04',
    title: 'Launch & Scale',
    text: 'Automated deployments, monitoring and ongoing support as your product and user base grow.',
  },
];

export const commitments = [
  { value: 24, suffix: 'h', label: 'Response time on every enquiry' },
  { value: 100, suffix: '%', label: 'Source code ownership for clients' },
  { value: 2, suffix: '-week', label: 'Sprints with a live demo each cycle' },
  { value: 99.9, suffix: '%', label: 'Uptime target for production systems', decimals: 1 },
];

export const techStack = {
  Frontend: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
  Backend: ['Node.js', 'Java', 'Spring Boot', 'Express', 'GraphQL'],
  Mobile: ['React Native', 'Flutter'],
  'Data & Cloud': ['PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Kubernetes'],
};

export const marqueeTech = [
  'React', 'Next.js', 'Angular', 'Node.js', 'Java', 'Spring Boot', 'TypeScript',
  'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'Flutter', 'GraphQL', 'Redis',
];
