'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Icon from './Icon';
import styles from './HeroPanel.module.css';

const stages = ['Discover', 'Design', 'Engineer', 'Launch'];
const logs = [
  { t: 'requirements.md', s: 'validated' },
  { t: 'architecture', s: 'approved' },
  { t: 'api · 142 tests', s: 'passing' },
  { t: 'deploy → production', s: 'live' },
];

/** Decorative "delivery pipeline" panel shown in the home hero. */
export default function HeroPanel() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(reduce ? stages.length : 0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setStep((s) => (s >= stages.length + 1 ? 0 : s + 1)), 1400);
    return () => clearInterval(id);
  }, [reduce]);

  const done = Math.min(step, stages.length);
  const progress = (done / stages.length) * 100;

  return (
    <div className={styles.panel} aria-hidden="true">
      <div className={styles.head}>
        <div className={styles.dots}>
          <span />
          <span />
          <span />
        </div>
        <span className={styles.path}>aurensys / your-product</span>
        <span className={`${styles.status} ${done === stages.length ? styles.live : ''}`}>
          <span className={styles.pulse} />
          {done === stages.length ? 'Live' : 'Building'}
        </span>
      </div>

      <div className={styles.body}>
        <div className={styles.stages}>
          {stages.map((s, i) => {
            const state = i < done ? 'done' : i === done ? 'active' : 'todo';
            return (
              <div key={s} className={`${styles.stage} ${styles[state]}`}>
                <span className={styles.badge}>{state === 'done' ? <Icon name="check" size={14} strokeWidth={2.6} /> : i + 1}</span>
                <span>{s}</span>
              </div>
            );
          })}
        </div>

        <div className={styles.track}>
          <motion.div className={styles.fill} animate={{ width: `${progress}%` }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} />
        </div>

        <div className={styles.logs}>
          {logs.map((l, i) => (
            <motion.div
              key={l.t}
              className={styles.log}
              animate={{ opacity: i < done ? 1 : 0.25 }}
              transition={{ duration: 0.4 }}
            >
              <span className={styles.prompt}>›</span>
              <span className={styles.logText}>{l.t}</span>
              <span className={`${styles.logState} ${i < done ? styles.ok : ''}`}>{i < done ? l.s : 'queued'}</span>
            </motion.div>
          ))}
        </div>

        <div className={styles.metrics}>
          <div>
            <span className={styles.mLabel}>Uptime</span>
            <span className={styles.mValue}>99.9%</span>
          </div>
          <div>
            <span className={styles.mLabel}>p95 latency</span>
            <span className={styles.mValue}>84ms</span>
          </div>
          <div>
            <span className={styles.mLabel}>Coverage</span>
            <span className={styles.mValue}>92%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
