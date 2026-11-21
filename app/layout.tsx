import type { Metadata } from 'next'
import { AnalyticsProvider } from '@/components/analytics-provider'
import { SITE_NAME, X_HANDLE } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://brokerworkshop.com'),
  title: {
    default: 'Real Estate Agent Website Builder',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Custom real estate agent websites from a licensed realtor. $750 to build. $50 a month for hosting, maintenance, domain management, and back-end support.',
  keywords: [
    'real estate agent website',
    'realtor website designer',
    'custom website for realtors',
    'real estate agent website builder',
    'websites for realtors',
    'BrokerWorkshop',
  ],
  authors: [{ name: 'Matt Salit', url: 'https://brokerworkshop.com' }],
  creator: 'Matt Salit',
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Real Estate Agent Website Builder | BrokerWorkshop',
    description:
      'Custom real estate agent websites from a licensed realtor. $750 to build. $50 a month for hosting, maintenance, domain management, and back-end support.',
    type: 'website',
    locale: 'en_US',
    url: 'https://brokerworkshop.com',
    siteName: SITE_NAME,
    images: [
      {
        url: 'https://brokerworkshop.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BrokerWorkshop — custom websites for real estate agents, built by a licensed realtor.',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Agent Website Builder | BrokerWorkshop',
    description:
      'Custom real estate agent websites from a licensed realtor. $750 to build. $50 a month for hosting, maintenance, domain management, and back-end support.',
    creator: X_HANDLE,
    images: ['https://brokerworkshop.com/og-image.png'],
  },
  icons: {
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  verification: {
    google: '3ec2a664f5fa558d',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-cyber-dark text-gray-100">
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </body>
    </html>
  )
}
