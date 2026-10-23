'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * Fades + slides children in when they scroll into view (once).
 * Usage: <Reveal delay={0.1}>...</Reveal>
 */
export default function Reveal({ children, delay = 0, y = 24, as = 'div', className, style }) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
