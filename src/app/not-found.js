import Link from 'next/link';
import { LogoMark } from '@/components/Logo';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: '80vh', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
      <div className="grid-bg" aria-hidden="true" />
      <div className="container" style={{ position: 'relative', display: 'grid', justifyItems: 'center', gap: 20 }}>
        <LogoMark size={56} />
        <span className="eyebrow">Error 404</span>
        <h1 className="h-section">This page hasn’t been engineered yet.</h1>
        <p className="lead">The link may be broken or the page may have moved.</p>
        <Link href="/" className="btn btn-primary" style={{ marginTop: 8 }}>
          Back to home
        </Link>
      </div>
    </section>
  );
}
