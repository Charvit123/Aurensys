'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Link to an in-page anchor (e.g. "/#web-applications") that always scrolls,
 * even when clicked repeatedly. A normal <Link> does nothing on the second
 * click because the URL hasn't changed.
 * - Same page: smooth-scrolls to the element and briefly highlights it.
 * - Other page: normal Next.js navigation to the anchor.
 */
export default function ScrollLink({ href, onClick, children, ...rest }) {
  const pathname = usePathname();

  const handleClick = (e) => {
    onClick?.(e);
    const [path, hash] = href.split('#');
    if (!hash || (path || '/') !== pathname) return;

    const el = document.getElementById(hash);
    if (!el) return;

    e.preventDefault();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${hash}`);

    // brief highlight so it's clear which item was selected
    el.setAttribute('data-flash', '');
    window.setTimeout(() => el.removeAttribute('data-flash'), 1600);
  };

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
