'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from './Icon';
import styles from './Faq.module.css';

export default function Faq({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className={styles.list}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
            <button
              type="button"
              className={styles.q}
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              {item.q}
              <span className={styles.icon}>
                <Icon name="plus" size={18} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className={styles.aWrap}
                >
                  <p className={styles.a}>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
