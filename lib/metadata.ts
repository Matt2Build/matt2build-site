import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL, X_HANDLE } from './site'

export function absoluteUrl(path: string): string {
  if (path === '/') return SITE_URL
  return `${SITE_URL}${path}`
}

export function pageMetadata({
  title,
  description,
  path,
  absolute = false,
}: {
  title: string
  description: string
  path: string
  absolute?: boolean
}): Metadata {
  const url = absoluteUrl(path)
  const fullTitle = `${title} | ${SITE_NAME}`
  const image = {
    url: `${SITE_URL}/og-image.png`,
    width: 1200,
    height: 630,
    alt: 'BrokerWorkshop — custom websites for real estate agents, built by a licensed realtor.',
  }

  return {
    title: absolute ? { absolute: fullTitle } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: X_HANDLE,
      images: [`${SITE_URL}/og-image.png`],
    },
  }
}
