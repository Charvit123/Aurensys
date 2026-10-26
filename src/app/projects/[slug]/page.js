import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProjectCover from '@/components/ProjectCover';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/Icon';
import { getProject, projects } from '@/data/projects';
import styles from '@/styles/Projects.module.css';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Next.js 16: `params` is a Promise and must be awaited.
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: `${project.title} — ${project.subtitle}`, description: project.summary };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <section className={styles.detailHero}>
        <div className="grid-bg" aria-hidden="true" />
        <div className="container" style={{ position: 'relative' }}>
          <Reveal>
            <Link href="/projects" className={styles.back}>
              <Icon name="arrow" size={16} className={styles.backIcon} /> All projects
            </Link>
            <div className={styles.detailMeta}>
              <span className="chip">{project.category}</span>
              <span className="chip">{project.industry}</span>
              <span className="chip">{project.year}</span>
            </div>
            <h1 className={styles.detailTitle}>{project.title}</h1>
            <p className="lead" style={{ maxWidth: 680, marginTop: 16 }}>
              {project.subtitle}. {project.summary}
            </p>
          </Reveal>
          <Reveal delay={0.12} style={{ marginTop: 48 }}>
            <ProjectCover project={project} large />
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className={`container ${styles.detailBody}`}>
          <div className={styles.detailMain}>
            <Reveal className={styles.block}>
              <h2>The challenge</h2>
              <p>{project.challenge}</p>
            </Reveal>
            <Reveal className={styles.block}>
              <h2>Our solution</h2>
              <p>{project.solution}</p>
            </Reveal>
            <Reveal className={styles.block}>
              <h2>Outcomes</h2>
              <ul className={styles.outcomes}>
                {project.outcomes.map((o) => (
                  <li key={o}>
                    <Icon name="check" size={18} strokeWidth={2.2} />
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal as="aside" className={styles.sidebar} delay={0.1}>
            <div>
              <span className={styles.sideLabel}>Industry</span>
              <span>{project.industry}</span>
            </div>
            <div>
              <span className={styles.sideLabel}>Service</span>
              <span>{project.category}</span>
            </div>
            <div>
              <span className={styles.sideLabel}>Year</span>
              <span>{project.year}</span>
            </div>
            <div>
              <span className={styles.sideLabel}>Tech stack</span>
              <div className={styles.sideStack}>
                {project.stack.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">More work</span>
            <h2 className="h-section">Other projects</h2>
          </Reveal>
          <div className={styles.others}>
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
