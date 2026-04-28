import type { MetadataRoute } from 'next'

const baseUrl = 'https://matt2build.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-04-28T20:00:00Z')

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
