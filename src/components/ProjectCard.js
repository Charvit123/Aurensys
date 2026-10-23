import Link from 'next/link';
import ProjectCover from './ProjectCover';
import Icon from './Icon';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.slug}`} className={styles.card}>
      <div className={styles.media}>
        <ProjectCover project={project} />
        {project.isSample && <span className={styles.badge}>Sample</span>}
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span>{project.industry}</span>
          <span className={styles.sep} />
          <span>{project.category}</span>
        </div>
        <h3 className={styles.title}>
          {project.title}
          <Icon name="arrowUpRight" size={20} className={styles.arrow} />
        </h3>
        <p className={styles.text}>{project.summary}</p>
        <div className={styles.tags}>
          {project.stack.slice(0, 4).map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
