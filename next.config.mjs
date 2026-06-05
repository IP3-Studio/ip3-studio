// Two deployment targets:
//   - default (BUILD_TARGET unset): dynamic build for Vercel / `next start`.
//   - BUILD_TARGET=static: full static export to `out/` for any static host.

const isStatic = process.env.BUILD_TARGET === 'static';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isStatic && {
    output: 'export',
    images: { unoptimized: true },
    trailingSlash: true,
  }),
};

export default nextConfig;
