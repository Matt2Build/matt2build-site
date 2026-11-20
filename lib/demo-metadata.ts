import type { Metadata } from 'next'

const DEMO_SHARE_IMAGE = {
  url: 'https://matt2build.com/og-demo.png',
  width: 1200,
  height: 630,
  alt: 'Find your place in Lakeview. Demo site by Matt2Build for Jordan Avery, a sample agent.',
}

export function demoMetadata(title: string, description: string, path: string): Metadata {
  const url = `https://matt2build.com${path}`
  const fullTitle = `${title} | Jordan Avery`

  return {
    title: { absolute: fullTitle },
    description,
    robots: {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false },
    },
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: 'website',
      images: [DEMO_SHARE_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [DEMO_SHARE_IMAGE],
    },
  }
}
