import type { MetadataRoute } from 'next';
import { blogPosts } from '../lib/blog';

const siteUrl = 'https://pulseacademic.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/blog', '/school-access', '/privacy', '/terms'].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date('2026-04-30'),
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...blogRoutes];
}
