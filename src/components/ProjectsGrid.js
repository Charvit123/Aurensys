'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { categories } from '@/data/projects';
import styles from './ProjectsGrid.module.css';

export default function ProjectsGrid({ projects }) {
  const [active, setActive] = useState('All');
  const list = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className={styles.filters} role="tablist" aria-label="Filter projects">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={active === c}
            className={`${styles.filter} ${active === c ? styles.active : ''}`}
            onClick={() => setActive(c)}
          >
            {active === c && <motion.span layoutId="filter-pill" className={styles.pill} transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
            <span className={styles.label}>{c}</span>
          </button>
        ))}
      </div>

      <motion.div layout className={styles.grid}>
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {list.length === 0 && <p className={styles.empty}>No projects in this category yet — check back soon.</p>}
    </>
  );
}
