import Link from 'next/link';
import HomeHero from '@/components/HomeHero';
import Marquee from '@/components/Marquee';
import Reveal from '@/components/Reveal';
import SpotlightCard from '@/components/SpotlightCard';
import Counter from '@/components/Counter';
import ProjectCard from '@/components/ProjectCard';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/Icon';
import { services } from '@/data/services';
import { commitments, marqueeTech, process, values, site } from '@/data/site';
import { projects } from '@/data/projects';
import styles from '@/styles/Home.module.css';

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Technologies strip */}
      <section className={styles.tech} aria-label="Technologies we work with">
        <div className="container">
          <p className={styles.techLabel}>Built with modern, proven technology</p>
        </div>
        <Marquee items={marqueeTech} />
      </section>

      {/* Services */}
      <section id="services" className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What we do</span>
            <h2 className="h-section">End-to-end engineering for products that need to work.</h2>
            <p className="lead" style={{ marginTop: 18 }}>
              From the first idea to production and beyond — one team that designs, builds, deploys and supports
              your software.
            </p>
          </Reveal>

          <div className={styles.services}>
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <SpotlightCard className={styles.service}>
                  <span className={styles.serviceIcon}>
                    <Icon name={s.icon} size={22} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Values */}
      <section className="section">
        <div className={`container ${styles.values}`}>
          <Reveal className={styles.valuesHead}>
            <span className="eyebrow">Why Aurensys</span>
            <h2 className="h-section">
              {site.meaning.split(' ').slice(0, 2).join(' ')}{' '}
              <span className="gradient-text">{site.meaning.split(' ').slice(2).join(' ')}</span>
            </h2>
            <p className="lead" style={{ marginTop: 18 }}>
              Four principles shape every decision we make, from the first architecture sketch to the last line of
              code.
            </p>
            <Link href="/about" className="btn btn-ghost" style={{ marginTop: 28 }}>
              Our story <Icon name="arrow" size={16} />
            </Link>
          </Reveal>

          <div className={styles.valueList}>
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06} className={styles.value}>
                <span className={styles.valueNum}>0{i + 1}</span>
                <div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={`section ${styles.processSection}`}>
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">How we work</span>
            <h2 className="h-section">A clear process, from idea to impact.</h2>
          </Reveal>

          <div className={styles.process}>
            <div className={styles.processLine} aria-hidden="true" />
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.12} className={styles.step}>
                <span className={styles.stepNum}>{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className={styles.stats} aria-label="Our commitments">
        <div className={`container ${styles.statsGrid}`}>
          {commitments.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08} className={styles.stat}>
              <span className={styles.statValue}>
                <Counter value={c.value} suffix={c.suffix} decimals={c.decimals || 0} />
              </span>
              <span className={styles.statLabel}>{c.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="section">
        <div className="container">
          <div className={styles.workHead}>
            <Reveal className="section-head" style={{ marginBottom: 0 }}>
              <span className="eyebrow">Selected work</span>
              <h2 className="h-section">Products we’re proud to engineer.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="/projects" className="btn btn-ghost">
                View all projects <Icon name="arrow" size={16} />
              </Link>
            </Reveal>
          </div>

          <div className={styles.work}>
            {projects.slice(0, 3).map((p, i) => (
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
