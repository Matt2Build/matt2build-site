import type { Metadata } from 'next'

export function demoMetadata(title: string, description: string, path: string): Metadata {
  const url = `https://matt2build.com${path}`
  return {
    title: { absolute: `${title} | Jordan Avery` },
    description,
    robots: {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false },
    },
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Jordan Avery`,
      description,
      url,
      type: 'website',
    },
  }
}
