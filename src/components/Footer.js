import Link from 'next/link';
import Logo from './Logo';
import Icon from './Icon';
import { navLinks, site } from '@/data/site';
import { services } from '@/data/services';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Link href="/" aria-label="Aurensys home">
              <Logo />
            </Link>
            <p className={styles.tagline}>{site.tagline}</p>
            <p className={styles.blurb}>{site.promise}</p>
            <a href={`mailto:${site.email}`} className={styles.email}>
              <Icon name="mail" size={18} />
              {site.email}
            </a>
          </div>

          <div className={styles.cols}>
            <div>
              <h3 className={styles.colTitle}>Company</h3>
              <ul>
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={styles.colTitle}>Services</h3>
              <ul>
                {services.slice(0, 5).map((s) => (
                  <li key={s.title}>
                    <Link href="/#services">{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={styles.colTitle}>Follow</h3>
              <ul>
                {site.socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {year} Aurensys. All rights reserved.</p>
          <p>{site.industry}</p>
        </div>
      </div>

      <div className={styles.giant} aria-hidden="true">
        aurensys
      </div>
    </footer>
  );
}
