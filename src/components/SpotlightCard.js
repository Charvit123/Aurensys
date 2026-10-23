'use client';

import { useRef } from 'react';
import styles from './SpotlightCard.module.css';

/** Card with a soft glow that follows the cursor (Linear-style). */
export default function SpotlightCard({ children, className = '', as: Tag = 'div', ...rest }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <Tag ref={ref} onMouseMove={onMove} className={`${styles.card} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
