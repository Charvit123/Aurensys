// ---------------------------------------------------------------------------
// PROJECTS — SAMPLE DATA
// These are placeholder concepts so the Projects page has content until real
// case studies are ready. Every entry has `isSample: true`, which shows a
// small "Sample" badge on the card. When you add a real project, set
// `isSample: false` (or remove it) and replace the text.
// `accent` drives the generated cover artwork, so no images are needed.
// ---------------------------------------------------------------------------

export const categories = ['All', 'Web', 'Mobile', 'Cloud', 'AI'];

export const projects = [
  {
    slug: 'fleetline-logistics-platform',
    title: 'Fleetline',
    subtitle: 'Real-time logistics & fleet management platform',
    category: 'Web',
    industry: 'Logistics',
    year: '2026',
    accent: ['#F5B544', '#FF8A4C'],
    pattern: 'grid',
    summary:
      'A dispatch dashboard that tracks vehicles live, optimises routes and automates delivery updates for customers.',
    challenge:
      'Dispatchers were juggling spreadsheets, phone calls and three separate tools to track a growing fleet, which led to missed delivery windows.',
    solution:
      'We designed a single real-time dashboard with live map tracking, drag-and-drop dispatching and automated SMS/email notifications, backed by an event-driven Node.js API.',
    outcomes: ['Single source of truth for dispatch', 'Live vehicle tracking', 'Automated customer notifications'],
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    isSample: true,
  },
  {
    slug: 'medisync-patient-app',
    title: 'MediSync',
    subtitle: 'Patient appointment & health records app',
    category: 'Mobile',
    industry: 'Healthcare',
    year: '2026',
    accent: ['#7C83FF', '#4FD1C5'],
    pattern: 'rings',
    summary:
      'A cross-platform app for booking appointments, receiving reminders and viewing prescriptions in one place.',
    challenge:
      'A clinic network needed patients to self-serve bookings and records without compromising privacy or overloading reception staff.',
    solution:
      'A Flutter app with secure authentication, role-based access, calendar sync and push reminders, integrated with the clinic’s existing system through a Spring Boot gateway.',
    outcomes: ['Self-service booking', 'Secure records access', 'Automated reminders'],
    stack: ['Flutter', 'Spring Boot', 'Java', 'PostgreSQL'],
    isSample: true,
  },
  {
    slug: 'ledgerly-finance-dashboard',
    title: 'Ledgerly',
    subtitle: 'Finance analytics dashboard for SMEs',
    category: 'Web',
    industry: 'FinTech',
    year: '2025',
    accent: ['#4FD1C5', '#F5B544'],
    pattern: 'bars',
    summary:
      'Cash-flow forecasting, invoice tracking and clear reports that help small businesses make faster decisions.',
    challenge:
      'Business owners had their numbers spread across bank statements and accounting exports, with no quick view of where cash was going.',
    solution:
      'An Angular dashboard with bank-feed imports, automatic categorisation and interactive forecasting charts, served by a typed GraphQL API.',
    outcomes: ['Unified financial overview', 'Automated categorisation', 'Exportable reports'],
    stack: ['Angular', 'TypeScript', 'GraphQL', 'MongoDB'],
    isSample: true,
  },
  {
    slug: 'nimbus-cloud-migration',
    title: 'Nimbus',
    subtitle: 'Legacy-to-cloud migration & DevOps setup',
    category: 'Cloud',
    industry: 'Retail',
    year: '2025',
    accent: ['#FF8A4C', '#7C83FF'],
    pattern: 'waves',
    summary:
      'Moving a monolithic on-premise system to containerised cloud services with zero-downtime deployments.',
    challenge:
      'An ageing on-premise server limited releases to once a month and struggled during seasonal traffic peaks.',
    solution:
      'We containerised the application, introduced CI/CD pipelines and auto-scaling on Kubernetes, and added monitoring and alerting from day one.',
    outcomes: ['Zero-downtime releases', 'Auto-scaling for peak traffic', 'Full observability'],
    stack: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions'],
    isSample: true,
  },
  {
    slug: 'scribe-ai-document-assistant',
    title: 'Scribe AI',
    subtitle: 'Intelligent document processing assistant',
    category: 'AI',
    industry: 'Legal & Operations',
    year: '2026',
    accent: ['#F5B544', '#7C83FF'],
    pattern: 'dots',
    summary:
      'Extracts key data from contracts and invoices, then routes it to the right workflow automatically.',
    challenge:
      'Operations teams spent hours each week manually reading documents and re-typing data into other systems.',
    solution:
      'An AI-assisted pipeline that classifies documents, extracts fields with confidence scores and sends low-confidence items for quick human review.',
    outcomes: ['Hours of manual entry removed', 'Human-in-the-loop review', 'Audit trail for every document'],
    stack: ['Python', 'Node.js', 'React', 'AWS'],
    isSample: true,
  },
  {
    slug: 'campus-connect-portal',
    title: 'CampusConnect',
    subtitle: 'Student & faculty engagement portal',
    category: 'Web',
    industry: 'Education',
    year: '2025',
    accent: ['#4FD1C5', '#7C83FF'],
    pattern: 'grid',
    summary:
      'Timetables, announcements, assignments and messaging for an institute, unified in one responsive portal.',
    challenge:
      'Students and faculty relied on scattered group chats and notice boards, so important updates were regularly missed.',
    solution:
      'A responsive React portal with role-based dashboards, real-time notifications and an admin panel for staff, built on a scalable Node.js backend.',
    outcomes: ['One portal for all updates', 'Real-time notifications', 'Role-based dashboards'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    isSample: true,
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
