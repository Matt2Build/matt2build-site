import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://matt2build.com/sitemap.xml',
    host: 'https://matt2build.com',
  }
}
