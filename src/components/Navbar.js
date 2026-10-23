'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo';
import Icon from './Icon';
import { navLinks } from '@/data/site';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    // Check the initial position outside the effect body (react-hooks/set-state-in-effect)
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const closeMenu = () => setOpen(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className={`${styles.header} ${scrolled || open ? styles.scrolled : ''}`}>
      <nav className={`container ${styles.nav}`} aria-label="Main">
        <Link href="/" onClick={closeMenu} className={styles.brand} aria-label="Aurensys home">
          <Logo />
        </Link>

        <ul className={styles.links}>
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`${styles.link} ${isActive(l.href) ? styles.active : ''}`}
                aria-current={isActive(l.href) ? 'page' : undefined}
              >
                {isActive(l.href) && (
                  <motion.span layoutId="nav-pill" className={styles.pill} transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
                )}
                <span className={styles.linkText}>{l.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Link href="/contact" className={`btn btn-primary btn-sm ${styles.cta}`}>
            Start a project
            <Icon name="arrow" size={16} />
          </Link>
          <button
            type="button"
            className={styles.toggle}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className={styles.mobile}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="container">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.05 }}
                >
                  <Link
                    href={l.href}
                    onClick={closeMenu}
                    className={`${styles.mobileLink} ${isActive(l.href) ? styles.mobileActive : ''}`}
                  >
                    {l.label}
                    <Icon name="arrowUpRight" size={20} />
                  </Link>
                </motion.li>
              ))}
              <li>
                <Link href="/contact" onClick={closeMenu} className="btn btn-primary" style={{ width: '100%', marginTop: 16 }}>
                  Start a project <Icon name="arrow" size={16} />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
