import { createRequire } from 'module';

const require = createRequire(import.meta.url);
require('./scripts/fix-win-fs.cjs');

if (process.platform === 'win32') {
  const patchFlag = `--require ${process.cwd().replace(/\\/g, '/')}/scripts/fix-win-fs.cjs`;
  if (!process.env.NODE_OPTIONS || !process.env.NODE_OPTIONS.includes('fix-win-fs.cjs')) {
    process.env.NODE_OPTIONS = `${process.env.NODE_OPTIONS || ''} ${patchFlag}`.trim();
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.symlinks = false;
    return config;
  },
};

export default nextConfig;
