import Link from 'next/link';
import Icon from './Icon';
import Reveal from './Reveal';
import styles from './CtaBand.module.css';

export default function CtaBand({
  title = 'Have a complex challenge? Let’s engineer the answer.',
  text = 'Tell us what you’re building. We’ll come back within 24 hours with questions, ideas and a clear next step.',
}) {
  return (
    <section className="section">
      <div className="container">
        <Reveal className={styles.band}>
          <div className={styles.glow} aria-hidden="true" />
          <div className="grid-bg" aria-hidden="true" />
          <div className={styles.inner}>
            <h2 className="h-section">{title}</h2>
            <p className="lead">{text}</p>
            <div className={styles.actions}>
              <Link href="/contact" className="btn btn-primary">
                Start a project <Icon name="arrow" size={16} />
              </Link>
              <Link href="/about" className="btn btn-ghost">
                Meet Aurensys
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
