import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '../lib/siteConfig';
import { blogPosts } from '../lib/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const now = new Date();

  const routes = [
    { url: '', priority: 1.0, changeFrequency: 'daily' as const },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/blog', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/mahadev-betting-app', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/mahadev-book-id', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
  ].map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
}
