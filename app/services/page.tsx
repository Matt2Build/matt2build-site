import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services — What We Build | Matt2Build',
  description:
    'Custom websites with online booking, payment processing, mobile-first design, fast hosting, and ongoing support. Built specifically for your business.',
  openGraph: {
    title: 'Services — What We Build | Matt2Build',
    description: 'Custom websites with booking, payments, and business workflows.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://matt2build.com/services',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const services = [
  {
    title: 'Custom Website',
    description:
      'Every site is built from scratch for your specific business. No cookie-cutter templates that look like everyone else. Your site will reflect your brand, your services, and your customers.',
    icon: (
      <svg className="w-6 h-6 text-matrix-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.75 17 9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
        />
      </svg>
    ),
    details: [
      'Custom design that reflects your brand',
      'Clean, professional layout',
      'SEO-friendly structure from day one',
      'Built for your specific business and customers',
    ],
  },
  {
    title: 'Online Booking',
    description:
      'Let customers book appointments directly on your site 24/7. Integrates with your existing calendar systems so you never double-book again.',
    icon: (
      <svg className="w-6 h-6 text-matrix-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"
        />
      </svg>
    ),
    details: [
      'Direct online appointment booking',
      'Calendar sync to avoid double-bookings',
      'Customer self-service scheduling',
      'Works with your existing tools',
    ],
  },
  {
    title: 'Payment Processing',
    description:
      'Accept credit cards securely on your site. Whether it&apos;s bookings, deposits, invoices, or services — get paid online without hassle.',
    icon: (
      <svg className="w-6 h-6 text-matrix-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3Z" />
      </svg>
    ),
    details: [
      'Secure Stripe integration',
      'Accept credit cards online',
      'Bookings, deposits, and invoices',
      'Automated payment confirmations',
    ],
  },
  {
    title: 'Mobile-First Design',
    description:
      'More than half of your customers are on their phones. Your site will look and work perfectly on every device — phones, tablets, and desktops.',
    icon: (
      <svg className="w-6 h-6 text-matrix-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z" />
      </svg>
    ),
    details: [
      'Designed for mobile first',
      'Responsive across all screen sizes',
      'Fast load on cellular networks',
      'Touch-friendly navigation',
    ],
  },
  {
    title: 'Fast & Reliable',
    description:
      'Hosted on premium Vercel infrastructure. Your site loads fast, stays online 24/7, and keeps your business accessible to customers when they need it.',
    icon: (
      <svg className="w-6 h-6 text-matrix-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7Z" />
      </svg>
    ),
    details: [
      'Vercel global CDN hosting',
      'Sub-second page load times',
      '99.9% uptime infrastructure',
      'Automatic security updates',
    ],
  },
  {
    title: 'Ongoing Support',
    description:
      'Need updates, changes, or new features? I&apos;m here to help. No waiting weeks for a developer. Your retainer covers content updates, edits, and maintenance.',
    icon: (
      <svg className="w-6 h-6 text-matrix-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m18.364 5.636-3.536 3.536m0 5.656 3.536 3.536M9.172 9.172 5.636 5.636m3.536 9.192-3.536 3.536M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-5 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
      </svg>
    ),
    details: [
      'Content updates included',
      'Priority support with 24hr response',
      'Regular backups & security',
      'Performance monitoring',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-cyber-dark text-gray-100 relative overflow-hidden">
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-10"
        style={{
          background:
            'linear-gradient(rgba(34,197,94,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.12) 1px, transparent 1px)',
          backgroundSize: '100% 4px',
        }}
      />
      <div className="scanline" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-matrix-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-matrix-500/5 rounded-full blur-3xl pointer-events-none" />

      <nav className="fixed top-0 z-40 w-full border-b border-matrix-500/20 bg-cyber-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-matrix-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <polyline points="4 17 10 11 4 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="12" x2="20" y1="19" y2="19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xl font-bold font-mono text-white">
                matt<span className="text-matrix-500">2</span>build
              </span>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="link-hover text-gray-300 hover:text-matrix-400 transition-colors">
                Home
              </a>
              <a href="/services" className="link-hover text-matrix-400 transition-colors">
                Services
              </a>
              <a href="/portfolio" className="link-hover text-gray-300 hover:text-matrix-400 transition-colors">
                Portfolio
              </a>
              <a href="/pricing" className="link-hover text-gray-300 hover:text-matrix-400 transition-colors">
                Pricing
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-matrix-500/10 border border-matrix-500/25 mb-8">
              <span className="text-matrix-400 text-sm font-mono">Built for trades, service businesses, and local operations.</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="text-white">Services —</span>
              <span className="block text-matrix-500 glow-text">What We Build</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Custom websites with booking systems, payment processing, and business workflows that save you time — built specifically for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-cyber-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service) => (
              <div key={service.title} className="grid lg:grid-cols-2 gap-10 items-start">
                <div className="feature-card p-8 bg-cyber-light/30 rounded-xl border border-cyber-light hover:border-matrix-500/50 transition-colors">
                  <div className="w-14 h-14 bg-matrix-500/10 rounded-lg flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">{service.title}</h2>
                  <p className="text-gray-400 text-lg leading-relaxed">{service.description}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-matrix-400 mb-4 font-mono">What&apos;s included</h3>
                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-matrix-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 13 4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-chip mx-auto mb-4">How It Works</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Three steps to a site that works</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">No back-and-forth for months. I handle it.</p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-matrix-500/20 border border-matrix-500/40 flex items-center justify-center text-matrix-400 font-bold text-lg">1</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Tell Me What You Need</h3>
                <p className="text-gray-400">Describe your business, your services, what you want online.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-matrix-500/20 border border-matrix-500/40 flex items-center justify-center text-matrix-400 font-bold text-lg">2</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">I Build It</h3>
                <p className="text-gray-400">Custom site with booking, payments, and workflows built for your business.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-matrix-500/20 border border-matrix-500/40 flex items-center justify-center text-matrix-400 font-bold text-lg">3</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">You Go Live</h3>
                <p className="text-gray-400">Launch day. You get a site that works — and I&apos;m here for any updates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cyber-dark/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-gray-400 text-lg mb-8">Tell me about your business and I&apos;ll show you what&apos;s possible online.</p>
          <a
            href="/#contact"
            className="inline-block px-8 py-4 btn-primary bg-matrix-500 text-cyber-dark font-bold rounded hover:bg-matrix-400 transition-colors"
          >
            Get a Free Consultation →
          </a>
        </div>
      </section>

      <footer className="py-8 border-t border-cyber-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-matrix-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z" />
              </svg>
              <span className="text-lg font-bold font-mono">
                matt<span className="text-matrix-500">2</span>build
              </span>
            </div>
            <div className="text-gray-500 text-sm">© 2026 Matt2Build. Custom websites for businesses.</div>
          </div>
        </div>
      </footer>
    </main>
  )
}
