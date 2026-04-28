'use client'

import { FormEvent, useState } from 'react'

const features = [
  {
    title: 'Custom Website',
    description:
      'Built specifically for your business — no generic templates that look like everyone else.',
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
  },
  {
    title: 'Online Booking',
    description:
      'Let customers book appointments directly on your site — works with your existing calendar.',
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
  },
  {
    title: 'Payment Processing',
    description:
      'Accept credit cards securely. Get paid for bookings, deposits, or services online.',
    icon: (
      <svg className="w-6 h-6 text-matrix-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3Z"
        />
      </svg>
    ),
  },
  {
    title: 'Mobile-First Design',
    description: 'Your site looks great and works perfectly on phones, tablets, and desktops.',
    icon: (
      <svg className="w-6 h-6 text-matrix-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z"
        />
      </svg>
    ),
  },
  {
    title: 'Fast & Reliable',
    description:
      'Hosted on premium infrastructure. Loads fast, stays up, keeps your business online 24/7.',
    icon: (
      <svg className="w-6 h-6 text-matrix-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7Z"
        />
      </svg>
    ),
  },
  {
    title: 'Ongoing Support',
    description:
      "Need updates or changes? I'm here to help. No waiting weeks for simple edits.",
    icon: (
      <svg className="w-6 h-6 text-matrix-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m18.364 5.636-3.536 3.536m0 5.656 3.536 3.536M9.172 9.172 5.636 5.636m3.536 9.192-3.536 3.536M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-5 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        />
      </svg>
    ),
  },
]

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

const projects = [
  {
    href: 'https://gridviewpro.com',
    title: 'GridView Pro',
    eyebrow: 'Multi-pane AI workspace',
    tag: 'AI & Productivity',
    accent: 'text-matrix-500',
    bg: 'from-emerald-900/50',
    description: 'Desktop workspace with stronger hierarchy and workflow templates.',
  },
  {
    href: 'https://moving2pnw.com',
    title: 'Moving2PNW',
    eyebrow: 'Real estate market data',
    tag: 'Real Estate Intelligence',
    accent: 'text-blue-400',
    bg: 'from-blue-900/50',
    description: 'Washington housing and migration intelligence dashboards.',
  },
  {
    href: 'https://dist-livid-mu.vercel.app',
    title: 'Compass Property Service',
    eyebrow: 'Bulk materials delivery',
    tag: 'Bulk Materials & Delivery',
    accent: 'text-orange-400',
    bg: 'from-orange-900/50',
    description: 'Online gravel/topsoil booking with delivery scheduling and quote requests.',
  },
]

type SubmitState = 'idle' | 'sending' | 'success' | 'error'

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitState('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message,
          projectType: 'Custom Website Build',
          timeline: 'Not specified',
        }),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setName('')
      setEmail('')
      setMessage('')
      setSubmitState('success')
    } catch {
      setSubmitState('error')
    }
  }

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
      <div
        className="fixed inset-0 pointer-events-none z-50"
        style={{
          background: 'linear-gradient(rgba(34,197,94,0.25), rgba(34,197,94,0.05))',
          transform: 'translateY(0vh)',
          height: '2px',
          transition: 'transform 0.05s linear',
        }}
      />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-matrix-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-matrix-500/5 rounded-full blur-3xl pointer-events-none" />

      <nav className="fixed top-0 z-40 w-full border-b border-matrix-500/20 bg-cyber-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-matrix-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <polyline points="4 17 10 11 4 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="12" x2="20" y1="19" y2="19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xl font-bold font-mono text-white">
                matt<span className="text-matrix-500">2</span>build
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="link-hover text-gray-300 hover:text-matrix-400 transition-colors">
                How It Works
              </a>
              <a href="#what-you-get" className="link-hover text-gray-300 hover:text-matrix-400 transition-colors">
                What You Get
              </a>
              <a href="#pricing" className="link-hover text-gray-300 hover:text-matrix-400 transition-colors">
                Pricing
              </a>
              <a href="#faq" className="link-hover text-gray-300 hover:text-matrix-400 transition-colors">
                FAQ
              </a>
              <a href="#contact" className="link-hover text-gray-300 hover:text-matrix-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-matrix-500/10 border border-matrix-500/25 mb-8">
              <span className="text-matrix-400 text-sm font-mono">Built for trades, service businesses, and local operations.</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-white">Your next customer is looking for you online.</span>
              <span className="block text-matrix-500 glow-text">Make sure they find something good.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Building custom websites with online booking, payment processing, and business custom workflows
              for your trade that actually save you time — automated intake forms, customer portals, document
              generation, order management, and more.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <a
                href="#contact"
                className="btn-primary flex items-center space-x-2 px-6 py-3 bg-matrix-500 text-cyber-dark font-bold rounded hover:bg-matrix-400 transition-colors"
              >
                <span>Start Your Project →</span>
              </a>
              <a
                href="#pricing"
                className="btn-secondary px-6 py-3 border border-matrix-500/50 text-matrix-400 rounded hover:border-matrix-500 hover:text-matrix-300 transition-colors"
              >
                See Pricing
              </a>
            </div>
            <p className="text-sm text-gray-500 font-mono">Response time: 24hrs or less</p>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-4 text-sm text-gray-500 font-mono">what-you-get.ts</span>
              </div>
              <div className="p-6 font-mono text-sm md:text-base">
                <div className="text-gray-500">// why businesses choose custom</div>
                <div className="mt-4 text-gray-300 leading-7">
                  <span className="text-purple-400">const</span> <span className="text-cyan-400">message</span> ={' '}
                  <span className="text-green-400">
                    "I build websites that actually work for your business — with booking systems, payment
                    processing, and workflows that save you time. No templates. No gimmicks. Just results."
                  </span>
                </div>
                <div className="mt-4 text-matrix-500">&gt; premium custom sites with real functionality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20">
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

      <section id="what-you-get" className="py-20 bg-cyber-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-chip mx-auto mb-4">What You Get</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything your business needs</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Built to look professional and work flawlessly online.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="feature-card p-6 bg-cyber-light/30 rounded-lg border border-cyber-light hover:border-matrix-500/50 transition-colors"
              >
                <div className="w-12 h-12 bg-matrix-500/10 rounded flex items-center justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-chip mx-auto mb-4">Pricing</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, transparent pricing</h2>
            <p className="text-gray-400 text-lg">One build fee. Low monthly retainer. No surprises.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="pricing-card bg-gradient-to-b from-matrix-500/10 to-cyber-dark border border-matrix-500/20 rounded-xl p-8">
              <div className="text-sm font-medium text-matrix-400 uppercase tracking-wide mb-2">One-Time Build</div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold text-white">$950</span>
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
                <span className="text-5xl font-bold text-white">$75</span>
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

          <div className="text-center mt-8">
            <a href="#contact" className="inline-block px-8 py-4 btn-primary bg-matrix-500 text-cyber-dark font-bold rounded hover:bg-matrix-400 transition-colors">
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

      <section className="py-20 bg-cyber-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-chip mx-auto mb-4">Projects</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Recent work</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Custom-built sites with real functionality.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <a key={project.title} href={project.href} target="_blank" rel="noopener noreferrer" className="project-card group">
                <div className={`aspect-video bg-gradient-to-br ${project.bg} to-cyber-dark border border-cyber-light rounded-lg overflow-hidden mb-4`}>
                  <div className="w-full h-full flex items-center justify-center bg-cyber-light/20 group-hover:bg-cyber-light/30 transition-colors">
                    <div className="text-center p-4">
                      <div className={`text-2xl font-bold ${project.accent} mb-2`}>{project.title.replace('Compass Property Service', 'Compass Property')}</div>
                      <div className="text-sm text-gray-400 mb-2">{project.eyebrow}</div>
                      <div className="inline-block px-2 py-1 rounded text-xs font-mono bg-matrix-500/10 border border-matrix-500/25 text-matrix-400">{project.tag}</div>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-matrix-400 transition-colors">{project.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{project.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-cyber-dark/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-chip mx-auto mb-4">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            <details className="group bg-cyber-light/30 rounded-lg border border-cyber-light hover:border-matrix-500/50 transition-colors">
              <summary className="px-6 py-4 cursor-pointer text-white font-semibold select-none list-none flex items-center justify-between">
                How long does a build take?
                <svg className="w-5 h-5 text-matrix-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-400">
                Most sites are live within 1–2 weeks.
              </div>
            </details>

            <details className="group bg-cyber-light/30 rounded-lg border border-cyber-light hover:border-matrix-500/50 transition-colors">
              <summary className="px-6 py-4 cursor-pointer text-white font-semibold select-none list-none flex items-center justify-between">
                Do I need to supply all the content?
                <svg className="w-5 h-5 text-matrix-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-400">
                No. I&apos;ll help write the copy, source images if needed.
              </div>
            </details>

            <details className="group bg-cyber-light/30 rounded-lg border border-cyber-light hover:border-matrix-500/50 transition-colors">
              <summary className="px-6 py-4 cursor-pointer text-white font-semibold select-none list-none flex items-center justify-between">
                What if I already have a website?
                <svg className="w-5 h-5 text-matrix-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-400">
                I can rebuild it, migrate it, or improve what you have.
              </div>
            </details>

            <details className="group bg-cyber-light/30 rounded-lg border border-cyber-light hover:border-matrix-500/50 transition-colors">
              <summary className="px-6 py-4 cursor-pointer text-white font-semibold select-none list-none flex items-center justify-between">
                What&apos;s included in the monthly retainer?
                <svg className="w-5 h-5 text-matrix-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-400">
                Hosting, backups, security, content updates, edits, and priority support.
              </div>
            </details>

            <details className="group bg-cyber-light/30 rounded-lg border border-cyber-light hover:border-matrix-500/50 transition-colors">
              <summary className="px-6 py-4 cursor-pointer text-white font-semibold select-none list-none flex items-center justify-between">
                Is there a contract?
                <svg className="w-5 h-5 text-matrix-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-400">
                No. Month-to-month. Cancel anytime.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="section-chip mx-auto mb-4">Contact</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let&apos;s talk</h2>
            <p className="text-gray-400 text-lg">
              Tell me about your business and what you need. I&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <form className="p-8 bg-cyber-light/30 rounded-xl border border-cyber-light" onSubmit={onSubmit}>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full px-4 py-3 bg-cyber-dark border border-cyber-light rounded text-white placeholder-gray-500 focus:outline-none focus:border-matrix-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full px-4 py-3 bg-cyber-dark border border-cyber-light rounded text-white placeholder-gray-500 focus:outline-none focus:border-matrix-500 transition-colors"
                  placeholder="you@yourbusiness.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Tell me about your business</label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="w-full px-4 py-3 bg-cyber-dark border border-cyber-light rounded text-white placeholder-gray-500 focus:outline-none focus:border-matrix-500 transition-colors resize-none"
                  placeholder="What does your business do? What do you need your website to do for you?"
                />
              </div>

              {submitState === 'success' && (
                <div className="rounded-lg border border-matrix-500/30 bg-matrix-500/10 px-4 py-3 text-sm text-matrix-400">
                  Message sent. I&apos;ll get back to you within 24 hours.
                </div>
              )}

              {submitState === 'error' && (
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  Something went wrong. Try again or email matt2build@gmail.com directly.
                </div>
              )}

              <button
                type="submit"
                disabled={submitState === 'sending'}
                className="w-full px-6 py-4 btn-primary bg-matrix-500 text-cyber-dark font-bold rounded hover:bg-matrix-400 transition-colors disabled:opacity-60"
              >
                {submitState === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            Or email me directly at{' '}
            <a href="mailto:matt2build@gmail.com" className="text-matrix-400 hover:underline">
              matt2build@gmail.com
            </a>
          </p>
        </div>
      </section>

      <footer className="py-8 border-t border-cyber-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-matrix-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"
                />
              </svg>
              <span className="text-lg font-bold font-mono">
                matt<span className="text-matrix-500">2</span>build
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-matrix-500/10 border border-matrix-500/25">
                <svg className="w-4 h-4 text-matrix-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7Z" />
                </svg>
                <span className="text-matrix-400 text-xs font-mono">Response time: 24hrs or less</span>
              </div>
              <div className="text-gray-500 text-sm">© 2026 Matt2Build. Custom websites for businesses.</div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
