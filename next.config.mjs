const nextConfig = {
  skipTrailingSlashRedirect: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
    ]
  },
  async redirects() {
    const hosts = ['www.brokerworkshop.com', 'matt2build.com', 'www.matt2build.com']
    const hostRedirects = hosts.map((host) => ({
      source: '/:path*',
      has: [{ type: 'host', value: host }],
      destination: 'https://brokerworkshop.com/:path*',
      statusCode: 308,
    }))
    // Old /home links from the domain's previous owner should land on the homepage.
    const legacyRedirects = [{ source: '/home', destination: '/', statusCode: 308 }]
    return [...hostRedirects, ...legacyRedirects]
  },
  headers() {
    const turnstile = Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY)
    const challenge = turnstile ? ' https://challenges.cloudflare.com' : ''
    const frameSrc = turnstile ? "; frame-src https://challenges.cloudflare.com" : ''
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value:
              `default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'${challenge}; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data:; font-src 'self' data:; connect-src 'self'${challenge}${frameSrc}; frame-ancestors 'none'; base-uri 'self';`,
          },
        ],
      },
    ]
  },
}

export default nextConfig
