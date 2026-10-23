import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SpotlightCard from '@/components/SpotlightCard';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/Icon';
import { LogoMark } from '@/components/Logo';
import { site, values, techStack } from '@/data/site';
import styles from '@/styles/About.module.css';

export const metadata = {
  title: 'About us',
  description:
    'Aurensys represents innovation, engineering excellence and intelligent technology. Learn about our mission, values and the way we build software.',
};

const pillars = [
  {
    icon: 'target',
    title: 'Our mission',
    text: 'Turn complex business challenges into effective software solutions that are simple to use and built to last.',
  },
  {
    icon: 'eye',
    title: 'Our vision',
    text: 'To be the engineering partner growing businesses trust to transform ideas into powerful, future-ready digital products.',
  },
  {
    icon: 'shield',
    title: 'Our promise',
    text: 'Clear communication, honest timelines and software you fully own, designed for reliability and scale from day one.',
  },
];

const principles = [
  { title: 'Engineers first', text: 'You work directly with the people who design and write your software, no hand-offs.' },
  { title: 'Transparent by default', text: 'Shared boards, weekly demos and plain-language updates. No surprises.' },
  { title: 'Built to scale', text: 'Architecture, tests and CI/CD are set up early so growth never means a rewrite.' },
  { title: 'Long-term partners', text: 'We support, monitor and improve what we ship long after launch day.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Aurensys"
        title={
          <>
            Innovation through <span className="gradient-text">engineering.</span>
          </>
        }
        text="Aurensys represents innovation, engineering excellence and intelligent technology. We exist to turn ambitious ideas into software that works, scales and lasts."
      />

      {/* Story */}
      <section className={`section ${styles.storySection}`}>
        <div className={`container ${styles.story}`}>
          <Reveal className={styles.storyArt}>
            <div className={styles.emblem}>
              <div className={styles.ring} />
              <div className={styles.ring2} />
              <LogoMark size={120} />
            </div>
            <div className={styles.emblemCaption}>
              <span className={styles.capName}>{site.name}</span>
              <span className={styles.capTag}>{site.tagline}</span>
            </div>
          </Reveal>

          <div className={styles.storyText}>
            <Reveal>
              <span className="eyebrow">Our story</span>
              <h2 className="h-section">A name built around a vision.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                Our name reflects our vision of transforming ideas into powerful software solutions. We combine
                creativity, engineering expertise and modern technologies to build reliable, scalable and
                future-ready digital products that help businesses grow.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="muted">
                Every engagement starts with understanding the business behind the brief. We ask the hard questions
                early, choose technology for the problem rather than the trend, and keep you involved at every step,
                so what we deliver solves the challenge you actually have.
              </p>
            </Reveal>
            <Reveal delay={0.2} className={styles.facts}>
              <div>
                <span className={styles.factLabel}>Industry</span>
                <span className={styles.factValue}>{site.industry}</span>
              </div>
              <div>
                <span className={styles.factLabel}>Brand meaning</span>
                <span className={styles.factValue}>{site.meaning}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission / vision / promise */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className={`container ${styles.pillars}`}>
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <SpotlightCard className={styles.pillar}>
                <span className={styles.pillarIcon}>
                  <Icon name={p.icon} size={22} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* Core values */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Core values</span>
            <h2 className="h-section">What we stand for.</h2>
          </Reveal>
          <div className={styles.values}>
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className={styles.valueCard}>
                <span className={styles.valueIndex}>0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className={`section ${styles.workSection}`}>
        <div className={`container ${styles.how}`}>
          <Reveal>
            <span className="eyebrow">How we work</span>
            <h2 className="h-section">Small, senior teams. Big ownership.</h2>
            <p className="lead" style={{ marginTop: 18 }}>
              We keep teams focused and accountable, so decisions are fast and quality stays high.
            </p>
          </Reveal>
          <div className={styles.principles}>
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06} className={styles.principle}>
                <Icon name="check" size={18} strokeWidth={2.2} className={styles.check} />
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Technology</span>
            <h2 className="h-section">The right tools for each problem.</h2>
          </Reveal>
          <div className={styles.stack}>
            {Object.entries(techStack).map(([group, items], i) => (
              <Reveal key={group} delay={i * 0.06} className={styles.stackGroup}>
                <h3>{group}</h3>
                <div className={styles.stackItems}>
                  {items.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Let’s build what’s next, together."
        secondary={{ label: 'See our work', href: '/projects' }}
      />
    </>
  );
}
