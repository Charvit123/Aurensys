'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import Icon from './Icon';
import ScrollLink from './ScrollLink';
import HeroPanel from './HeroPanel';
import { site } from '@/data/site';
import styles from './HomeHero.module.css';

const ease = [0.22, 1, 0.36, 1];

export default function HomeHero() {
  const reduce = useReducedMotion();
  const fade = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  });

  const words = ['Engineering', 'the'];

  return (
    <section className={styles.hero}>
      <div className={styles.aurora} aria-hidden="true">
        <span className={styles.blob1} />
        <span className={styles.blob2} />
        <span className={styles.blob3} />
      </div>
      <div className="grid-bg" aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <motion.span className={styles.pill} {...fade(0)}>
            <span className={styles.pillDot} />
            {site.industry}
          </motion.span>

          <h1 className={`h-display ${styles.title}`}>
            {words.map((w, i) => (
              <motion.span
                key={w}
                className={styles.word}
                initial={reduce ? false : { opacity: 0, y: 30, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease }}
              >
                {w}
              </motion.span>
            ))}
            <motion.span
              className={`${styles.word} gradient-text`}
              initial={reduce ? false : { opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
            >
              future.
            </motion.span>
          </h1>

          <motion.p className={`lead ${styles.lead}`} {...fade(0.45)}>
            Aurensys turns complex business challenges into reliable, scalable software. We design, build and
            run digital products that help companies grow.
          </motion.p>

          <motion.div className={styles.actions} {...fade(0.55)}>
            <Link href="/contact" className="btn btn-primary">
              Start a project <Icon name="arrow" size={16} />
            </Link>
            <ScrollLink href="/#services" className="btn btn-ghost">
              Explore services
            </ScrollLink>
          </motion.div>

          <motion.ul className={styles.points} {...fade(0.65)}>
            {['Innovation', 'Quality', 'Reliability', 'Scalability'].map((v) => (
              <li key={v}>
                <Icon name="check" size={16} strokeWidth={2.2} />
                {v}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className={styles.visual}
          initial={reduce ? false : { opacity: 0, y: 40, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease }}
        >
          <HeroPanel />
        </motion.div>
      </div>
    </section>
  );
}
