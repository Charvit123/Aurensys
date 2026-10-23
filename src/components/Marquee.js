import styles from './Marquee.module.css';

/** Infinite, CSS-only scrolling strip. Pauses on hover. */
export default function Marquee({ items }) {
  const row = [...items, ...items];
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {row.map((item, i) => (
          <span key={i} className={styles.item} aria-hidden={i >= items.length}>
            <span className={styles.dot} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
