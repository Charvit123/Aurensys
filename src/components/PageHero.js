import Reveal from './Reveal';
import styles from './PageHero.module.css';

/** Hero used at the top of inner pages (About, Projects, Contact). */
export default function PageHero({ eyebrow, title, text, children }) {
  return (
    <section className={styles.hero}>
      <div className="grid-bg" aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <Reveal>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className={styles.title}>{title}</h1>
        </Reveal>
        {text && (
          <Reveal delay={0.1}>
            <p className={`lead ${styles.text}`}>{text}</p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
