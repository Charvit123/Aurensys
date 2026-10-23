import { site } from '@/data/site';
import { projects } from '@/data/projects';

export default function sitemap() {
  const now = new Date();
  const pages = ['', '/about', '/projects', '/contact'].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: p === '' ? 1 : 0.8,
  }));
  const work = projects.map((p) => ({
    url: `${site.url}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.5,
  }));
  return [...pages, ...work];
}
