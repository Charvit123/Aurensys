import '@fontsource-variable/inter';
import '@fontsource-variable/sora';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { site } from '@/data/site';

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    'Aurensys',
    'software development company',
    'IT solutions',
    'web application development',
    'mobile app development',
    'cloud and DevOps',
    'custom software',
  ],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
};

export const viewport = {
  themeColor: '#07080c',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
