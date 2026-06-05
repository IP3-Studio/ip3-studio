import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://ip3.studio/sitemap.xml',
    host: 'https://ip3.studio',
  };
}
