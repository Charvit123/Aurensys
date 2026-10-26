import Link from 'next/link';
import Icon from './Icon';
import Reveal from './Reveal';
import styles from './ProjectsComingSoon.module.css';

const covers = [
  { icon: 'target', title: 'The challenge', text: 'The business problem, constraints and what success had to look like.' },
  { icon: 'layers', title: 'Our approach', text: 'How we scoped, designed and planned the solution with the client.' },
  { icon: 'code', title: 'Architecture & stack', text: 'The technical decisions behind a reliable, scalable product.' },
  { icon: 'spark', title: 'Outcomes', text: 'What changed for the business once the product went live.' },
];

/** Shown on /projects while `projects` in src/data/projects.js is empty. */
export default function ProjectsComingSoon() {
  return (
    <>
      <Reveal className={styles.card}>
        <div className="grid-bg" aria-hidden="true" />
        <div className={styles.glow} aria-hidden="true" />

        <div className={styles.copy}>
          <span className={styles.status}>
            <span className={styles.pulse} />
            Coming soon
          </span>
          <h2 className="h-section">Our first case studies are on the way.</h2>
          <p className="lead">
            We’re currently engineering products with our first partners. Detailed case studies — the challenge, our
            approach and the results — will be published here as each project launches.
          </p>
          <div className={styles.actions}>
            <Link href="/contact" className="btn btn-primary">
              Start a project <Icon name="arrow" size={16} />
            </Link>
            <Link href="/#services" className="btn btn-ghost">
              Explore services
            </Link>
          </div>
        </div>

        <div className={styles.stack} aria-hidden="true">
          {[1, 2, 3].map((n) => (
            <div key={n} className={styles.ghost}>
              <div className={styles.ghostCover} />
              <div className={styles.ghostBody}>
                <span className={styles.ghostLabel}>Case study 0{n}</span>
                <span className={styles.line} style={{ width: '62%' }} />
                <span className={styles.line} style={{ width: '88%' }} />
                <span className={styles.line} style={{ width: '40%' }} />
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <div className={styles.coversHead}>
        <Reveal>
          <span className="eyebrow">What you’ll find here</span>
          <h2 className={styles.coversTitle}>Every case study will cover</h2>
        </Reveal>
      </div>
      <div className={styles.covers}>
        {covers.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06} className={styles.cover}>
            <span className={styles.coverIcon}>
              <Icon name={c.icon} size={20} />
            </span>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </Reveal>
        ))}
      </div>
    </>
  );
}
