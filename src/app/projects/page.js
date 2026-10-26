import PageHero from '@/components/PageHero';
import ProjectsGrid from '@/components/ProjectsGrid';
import ProjectsComingSoon from '@/components/ProjectsComingSoon';
import CtaBand from '@/components/CtaBand';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Projects',
  description: 'Case studies from Aurensys — web platforms, mobile apps, cloud and AI solutions.',
};

export default function ProjectsPage() {
  const hasProjects = projects.length > 0;

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title={
          <>
            Ideas, <span className="gradient-text">engineered.</span>
          </>
        }
        text={
          hasProjects
            ? 'A look at the products we design and build — from real-time platforms to intelligent automation.'
            : 'Our portfolio is being built right now. Here’s what’s coming — and how your project could be one of the first.'
        }
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">{hasProjects ? <ProjectsGrid projects={projects} /> : <ProjectsComingSoon />}</div>
      </section>

      {hasProjects && <CtaBand title="Your project could be next." />}
    </>
  );
}
