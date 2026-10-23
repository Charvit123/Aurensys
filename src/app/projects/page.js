import PageHero from '@/components/PageHero';
import ProjectsGrid from '@/components/ProjectsGrid';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import { projects } from '@/data/projects';
import styles from '@/styles/Projects.module.css';

export const metadata = {
  title: 'Projects',
  description: 'Selected work and case studies from Aurensys — web platforms, mobile apps, cloud and AI solutions.',
};

export default function ProjectsPage() {
  const hasSamples = projects.some((p) => p.isSample);

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title={
          <>
            Ideas, <span className="gradient-text">engineered.</span>
          </>
        }
        text="A look at the kind of products we design and build — from real-time platforms to intelligent automation."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {hasSamples && (
            <Reveal className={styles.notice}>
              <span className={styles.noticeDot} />
              Full client case studies are on the way. Projects marked “Sample” are concept studies that show the
              type of work we take on.
            </Reveal>
          )}
          <ProjectsGrid projects={projects} />
        </div>
      </section>

      <CtaBand title="Your project could be next." />
    </>
  );
}
