import styles from './ProjectCover.module.css';

/**
 * Generated artwork for a project — no images required.
 * Uses the project's two accent colours and a simple SVG pattern.
 * When you have real screenshots, swap this for next/image.
 */
function Pattern({ type }) {
  switch (type) {
    case 'rings':
      return (
        <g fill="none" stroke="#fff" strokeOpacity=".18">
          {[40, 80, 120, 160, 200].map((r) => (
            <circle key={r} cx="300" cy="200" r={r} />
          ))}
        </g>
      );
    case 'bars':
      return (
        <g fill="#fff" fillOpacity=".14">
          {[60, 110, 80, 150, 120, 190, 160, 230].map((h, i) => (
            <rect key={i} x={70 + i * 60} y={330 - h} width="34" height={h} rx="6" />
          ))}
        </g>
      );
    case 'waves':
      return (
        <g fill="none" stroke="#fff" strokeOpacity=".2" strokeWidth="2">
          {[0, 1, 2, 3, 4].map((i) => (
            <path key={i} d={`M0 ${150 + i * 40} C 150 ${90 + i * 40}, 300 ${230 + i * 40}, 600 ${130 + i * 40}`} />
          ))}
        </g>
      );
    case 'dots':
      return (
        <g fill="#fff" fillOpacity=".2">
          {Array.from({ length: 11 * 7 }).map((_, i) => (
            <circle key={i} cx={30 + (i % 11) * 54} cy={40 + Math.floor(i / 11) * 54} r={(i * 7) % 5 === 0 ? 4 : 2} />
          ))}
        </g>
      );
    case 'grid':
    default:
      return (
        <g stroke="#fff" strokeOpacity=".14">
          {Array.from({ length: 13 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="400" />
          ))}
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 50} x2="600" y2={i * 50} />
          ))}
        </g>
      );
  }
}

export default function ProjectCover({ project, large = false }) {
  const [a, b] = project.accent;
  return (
    <div
      className={`${styles.cover} ${large ? styles.large : ''}`}
      style={{ '--a': a, '--b': b }}
      aria-hidden="true"
    >
      <svg className={styles.pattern} viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice">
        <Pattern type={project.pattern} />
      </svg>
      <div className={styles.window}>
        <div className={styles.bar}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.body}>
          <span className={styles.name}>{project.title}</span>
          <span className={styles.line} style={{ width: '70%' }} />
          <span className={styles.line} style={{ width: '48%' }} />
          <div className={styles.blocks}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}
