import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://matt2build.com'),
  title: 'Custom Websites for Businesses | Matt2Build',
  description:
    'Custom websites with booking, payments, and workflows for businesses. No templates. $950 build + $75/mo for hosting, maintenance, and support.',
  keywords: [
    'Matt 2 Build',
    'product engineer',
    'frontend developer',
    'premium website design',
    'Next.js developer',
    'product UI design',
    'AI operator systems',
    'OpenClaw',
    'workflow automation',
    'Vercel developer',
    'Supabase developer',
    'Vercel',
    'Supabase',
    'portfolio website developer',
  ],
  authors: [{ name: 'Matt2Build' }],
  creator: 'Matt2Build',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Custom Websites for Businesses | Matt2Build',
    description:
      'Custom websites with booking, payments, and workflows for businesses.',
    type: 'website',
    url: 'https://matt2build.com',
    siteName: 'Matt 2 Build',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Matt2Build — Custom Websites for Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Websites for Businesses | Matt2Build',
    description:
      'Custom websites with booking, payments, and workflows for businesses.',
    images: ['/og-image.png'],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'LocalBusiness',
                  name: 'Matt2Build',
                  description:
                    'Custom websites for businesses with online booking, payment processing, and custom workflows.',
                  url: 'https://matt2build.com',
                  email: 'matt2build@gmail.com',
                  areaServed: 'US',
                  priceRange: '$950+',
                },
                {
                  '@type': 'Service',
                  serviceType: 'Website Design & Development',
                  provider: {
                    '@type': 'LocalBusiness',
                    name: 'Matt2Build',
                  },
                  description:
                    'Custom website builds with online booking, payment processing, and business workflows.',
                  url: 'https://matt2build.com',
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
