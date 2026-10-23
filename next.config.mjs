import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Pin the workspace root to this folder. Without this, Next.js picks up any
  // package-lock.json found in a parent directory (e.g. the Desktop) and warns.
  turbopack: {
    root: projectRoot,
  },
  outputFileTracingRoot: projectRoot,
};

export default nextConfig;
