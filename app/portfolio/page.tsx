import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio — Recent Work | Matt2Build',
  description:
    'Custom websites built for businesses. See recent projects including AI workspaces, real estate dashboards, and bulk materials booking systems.',
  openGraph: {
    title: 'Portfolio — Recent Work | Matt2Build',
    description: 'Custom websites built for businesses.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://matt2build.com/portfolio',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const projects = [
  {
    href: 'https://gridviewpro.com',
    title: 'GridView Pro',
    eyebrow: 'Multi-pane AI workspace',
    tag: 'AI & Productivity',
    accent: 'text-matrix-500',
    bg: 'from-emerald-900/50',
    description:
      'Desktop workspace with stronger hierarchy and workflow templates. Built for power users who need to manage multiple AI workflows simultaneously.',
    features: ['Multi-pane layout', 'AI-powered workflows', 'Clean hierarchy', 'Fast performance'],
  },
  {
    href: 'https://moving2pnw.com',
    title: 'Moving2PNW',
    eyebrow: 'Real estate market data',
    tag: 'Real Estate Intelligence',
    accent: 'text-blue-400',
    bg: 'from-blue-900/50',
    description:
      'Washington housing and migration intelligence dashboards. Data-driven insights for people relocating to the Pacific Northwest.',
    features: ['Market data dashboards', 'Migration analytics', 'Housing trends', 'Interactive visualizations'],
  },
  {
    href: 'https://dist-livid-mu.vercel.app',
    title: 'Compass Property Service',
    eyebrow: 'Bulk materials delivery',
    tag: 'Bulk Materials & Delivery',
    accent: 'text-orange-400',
    bg: 'from-orange-900/50',
    description:
      'Online gravel and topsoil booking with delivery scheduling and quote requests. Full e-commerce functionality for a bulk materials business.',
    features: ['Online booking', 'Delivery scheduling', 'Quote requests', 'Payment processing'],
  },
]

export default function PortfolioPage() {
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
              <a href="/services" className="link-hover text-gray-300 hover:text-matrix-400 transition-colors">
                Services
              </a>
              <a href="/portfolio" className="link-hover text-matrix-400 transition-colors">
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
              <span className="text-matrix-400 text-sm font-mono">Built for real businesses. Real functionality.</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="text-white">Portfolio —</span>
              <span className="block text-matrix-500 glow-text">Recent Work</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Custom websites with booking systems, payment processing, and real functionality — not just templates.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-cyber-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className={`aspect-video bg-gradient-to-br ${project.bg} to-cyber-dark border border-cyber-light rounded-lg overflow-hidden mb-6`}>
                  <div className="w-full h-full flex items-center justify-center bg-cyber-light/20 group-hover:bg-cyber-light/30 transition-colors">
                    <div className="text-center p-4">
                      <div className={`text-3xl font-bold ${project.accent} mb-2`}>
                        {project.title.replace('Compass Property Service', 'Compass Property')}
                      </div>
                      <div className="text-lg text-gray-400 mb-3">{project.eyebrow}</div>
                      <div className="inline-block px-3 py-1.5 rounded text-sm font-mono bg-matrix-500/10 border border-matrix-500/25 text-matrix-400">
                        {project.tag}
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-white group-hover:text-matrix-400 transition-colors mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded text-xs font-mono bg-matrix-500/10 border border-matrix-500/25 text-matrix-400"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Build Process */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-chip mx-auto mb-4">The Process</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How projects get built</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">From first conversation to launch — handled end to end.</p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-matrix-500/20 border border-matrix-500/40 flex items-center justify-center text-matrix-400 font-bold text-lg">1</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Discovery</h3>
                <p className="text-gray-400">We talk about your business, your customers, and what you need your site to do.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-matrix-500/20 border border-matrix-500/40 flex items-center justify-center text-matrix-400 font-bold text-lg">2</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Design & Build</h3>
                <p className="text-gray-400">Custom design, clean code, booking systems, payments — everything built specifically for you.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-matrix-500/20 border border-matrix-500/40 flex items-center justify-center text-matrix-400 font-bold text-lg">3</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Launch & Support</h3>
                <p className="text-gray-400">Your site goes live on premium infrastructure. I handle hosting, updates, and any changes you need.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cyber-dark/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to build something like this?</h2>
          <p className="text-gray-400 text-lg mb-8">Let&apos;s talk about what your business needs online.</p>
          <a
            href="/#contact"
            className="inline-block px-8 py-4 btn-primary bg-matrix-500 text-cyber-dark font-bold rounded hover:bg-matrix-400 transition-colors"
          >
            Start Your Project →
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
