import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://matt2build.com'),
  title: {
    default: 'Custom Websites for Businesses | Matt2Build',
    template: '%s | Matt2Build',
  },
  description:
    'Custom websites with online booking, payment processing, and custom workflows for trades and service businesses. $750 build + $50/mo hosting & support.',
  keywords: [
    'custom website design',
    'website development for small business',
    'online booking website',
    'payment processing website',
    'custom web developer',
    'website for trades',
    'website for contractors',
    'service business website',
    'local business website',
    'website with booking system',
    'affordable custom website',
    'Matt2Build',
  ],
  authors: [{ name: 'Matt', url: 'https://matt2build.com' }],
  creator: 'Matt2Build',
  publisher: 'Matt2Build',
  alternates: {
    canonical: 'https://matt2build.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Custom Websites for Businesses | Matt2Build',
    description:
      'Custom websites with online booking, payment processing, and custom workflows for trades and service businesses.',
    type: 'website',
    locale: 'en_US',
    url: 'https://matt2build.com',
    siteName: 'Matt2Build',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Matt2Build — Custom Websites with Booking, Payments & Workflows',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Websites for Businesses | Matt2Build',
    description:
      'Custom websites with online booking, payment processing, and custom workflows for trades and service businesses.',
    creator: '@matt2build',
    images: ['/og-image.png'],
  },
  verification: {
    google: '3ec2a664f5fa558d',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {/* Lightweight Plausible Analytics snippet */}
        <script async defer data-domain="matt2build.com" src="https://plausible.io/js/plausible.js"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  name: 'Matt2Build',
                  url: 'https://matt2build.com',
                  description: 'Custom websites for businesses with online booking, payment processing, and custom workflows.',
                },
                {
                  '@type': 'Organization',
                  '@id': 'https://matt2build.com/#organization',
                  name: 'Matt2Build',
                  url: 'https://matt2build.com',
                  email: 'matt2build@gmail.com',
                  sameAs: [
  "https://www.linkedin.com/in/matt-salit-8108003ba/",
  "https://x.com/Matt2Build"
],
                },
                {
                  '@type': 'LocalBusiness',
                  '@id': 'https://matt2build.com/#localbusiness',
                  name: 'Matt2Build',
                  description:
                    'Custom websites for businesses with online booking, payment processing, and custom workflows.',
                  url: 'https://matt2build.com',
                  email: 'matt2build@gmail.com',
                  areaServed: {
                    '@type': 'Country',
                    name: 'United States',
                  },
                  priceRange: '$750+',
                  knowsAbout: ['Web Design', 'Web Development', 'E-commerce', 'Online Booking Systems'],
                },
                {
                  '@type': 'Service',
                  '@id': 'https://matt2build.com/#service',
                  serviceType: 'Custom Website Design & Development',
                  provider: {
                    '@id': 'https://matt2build.com/#localbusiness',
                  },
                  description:
                    'Custom website builds with online booking, payment processing, and business workflows for trades and service businesses.',
                  url: 'https://matt2build.com',
                  areaServed: {
                    '@type': 'Country',
                    name: 'United States',
                  },
                  offers: {
                    '@type': 'Offer',
                    price: '750',
                    priceCurrency: 'USD',
                    description: 'One-time custom website build fee',
                  },
                  aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '5',
                    bestRating: '5',
                    worstRating: '1',
                    ratingCount: '3',
                  },
                },
                {
                  '@type': 'WebPage',
                  '@id': 'https://matt2build.com/#webpage',
                  url: 'https://matt2build.com',
                  name: 'Custom Websites for Businesses | Matt2Build',
                  description: 'Custom websites with booking, payments, and workflows for businesses.',
                  isPartOf: {
                    '@id': 'https://matt2build.com/#website',
                  },
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}
