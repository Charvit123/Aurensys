import { useId } from 'react';
import styles from './Logo.module.css';

/** Aurensys logo mark — a rising "A" with a core node. */
export function LogoMark({ size = 32, className = '' }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id={`g${id}`} x1="8" y1="6" x2="40" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFD98A" />
          <stop offset=".45" stopColor="#F5B544" />
          <stop offset="1" stopColor="#FF8A4C" />
        </linearGradient>
      </defs>
      <path
        d="M9.5 40.5 24 8.5l14.5 32"
        stroke={`url(#g${id})`}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="32" r="3.6" fill={`url(#g${id})`} />
    </svg>
  );
}

/** Mark + wordmark */
export default function Logo({ size = 30 }) {
  return (
    <span className={styles.logo}>
      <LogoMark size={size} className={styles.mark} />
      <span className={styles.word}>aurensys</span>
    </span>
  );
}
