import type { Metadata } from 'next'
import ContactForm from '../../components/contact-form'

export const metadata: Metadata = {
  title: 'Pricing — Custom Websites That Work | Matt2Build',
  description:
    'Transparent pricing for custom websites. $750 one-time build, $50/mo retainer. No hidden fees. Built for trades, service businesses, and local operations.',
  openGraph: {
    title: 'Pricing — Custom Websites That Work | Matt2Build',
    description: 'Transparent pricing for custom websites. No hidden fees.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://matt2build.com/pricing',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const buildItems = [
  'Custom website built for your business',
  'Online booking system integrated',
  'Payment processing setup',
  'Mobile-responsive design',
  'SEO optimization',
  'Launch & deployment',
]

const retainerItems = [
  'Premium hosting included',
  'Regular backups & security',
  'Content updates & edits',
  'Backend maintenance',
  'Priority support',
  'Performance monitoring',
]

const faqs = [
  {
    question: 'How long does a build take?',
    answer: 'Most sites are live within 1–2 weeks.',
  },
  {
    question: 'Do I need to supply all the content?',
    answer: "No. I'll help write the copy, source images if needed.",
  },
  {
    question: "What if I already have a website?",
    answer: "I can rebuild it, migrate it, or improve what you have.",
  },
  {
    question: "What's included in the monthly retainer?",
    answer: 'Hosting, backups, security, content updates, edits, and priority support.',
  },
  {
    question: 'Is there a contract?',
    answer: 'No. Month-to-month. Cancel anytime.',
  },
]

export default function PricingPage() {
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
              <a href="/portfolio" className="link-hover text-gray-300 hover:text-matrix-400 transition-colors">
                Portfolio
              </a>
              <a href="/pricing" className="link-hover text-matrix-400 transition-colors">
                Pricing
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-matrix-500/10 border border-matrix-500/25 mb-8">
              <span className="text-matrix-400 text-sm font-mono">No hidden fees. No surprise invoices.</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="text-white">Pricing —</span>
              <span className="block text-matrix-500 glow-text">Custom Websites That Work</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              One clear build fee. Low monthly retainer. Everything you need to get found online and get paid.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="pricing-card bg-gradient-to-b from-matrix-500/10 to-cyber-dark border border-matrix-500/20 rounded-xl p-8">
              <div className="text-sm font-medium text-matrix-400 uppercase tracking-wide mb-2">One-Time Build</div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold text-white">$750</span>
              </div>
              <p className="text-gray-400 mb-3">Complete custom website build with all features.</p>
              <p className="text-sm text-gray-500 mb-3">No contract — cancel anytime.</p>
              <ul className="space-y-3 text-sm">
                {buildItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-matrix-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 13 4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pricing-card bg-gradient-to-b from-cyber-light/30 to-cyber-dark border border-cyber-light/50 rounded-xl p-8">
              <div className="text-sm font-medium text-matrix-400 uppercase tracking-wide mb-2">Monthly Retainer</div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold text-white">$50</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-400 mb-3">Hosting, maintenance, edits, and support.</p>
              <p className="text-sm text-gray-500 mb-3">That&apos;s less than most businesses spend on coffee and gas each month to keep your front door open online.</p>
              <ul className="space-y-3 text-sm">
                {retainerItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-matrix-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 13 4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/#contact" className="inline-block px-8 py-4 btn-primary bg-matrix-500 text-cyber-dark font-bold rounded hover:bg-matrix-400 transition-colors">
              Get Started
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
              </svg>
              <span>Built on Vercel</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
              </svg>
              <span>Payments powered by Stripe</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-cyber-dark/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-chip mx-auto mb-4">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group bg-cyber-light/30 rounded-lg border border-cyber-light hover:border-matrix-500/50 transition-colors">
                <summary className="px-6 py-4 cursor-pointer text-white font-semibold select-none list-none flex items-center justify-between">
                  {faq.question}
                  <svg className="w-5 h-5 text-matrix-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-gray-400">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactForm />

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
