'use client'

import { FormEvent, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  Boxes,
  Briefcase,
  CheckCircle2,
  Code2,
  Cpu,
  Github,
  Globe,
  LayoutTemplate,
  LineChart,
  Mail,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  Wrench,
  Zap,
} from 'lucide-react'

type WorkItem = {
  title: string
  category: string
  description: string
  highlights: string[]
  image?: string
  alt?: string
  terminalTitle?: string
  terminalCommand?: string
  terminalLines?: string[]
  terminalFooter?: string
}

const heroStats = [
  { value: 'Web + Product', label: 'design-forward builds with real delivery' },
  { value: 'AI + Ops', label: 'operator systems, automation, and routing' },
  { value: 'Launch Ready', label: 'deploys, CRM flows, auth, and iteration' },
]

const heroSlides = [
  {
    src: '/gridview-workspace.png',
    alt: 'GridView Pro workspace interface',
    label: 'GridView Pro / workspace UI',
  },
  {
    src: '/moving2pnw-overview.png',
    alt: 'Moving2PNW market overview dashboard',
    label: 'Moving2PNW / market overview',
  },
  {
    src: '/moving2pnw-migration.png',
    alt: 'Moving2PNW migration heat map',
    label: 'Moving2PNW / migration + affordability',
  },
]

const stack = [
  { icon: Code2, name: 'Next.js', desc: 'sites, apps, and product surfaces' },
  { icon: Zap, name: 'Vercel', desc: 'deployments, previews, and release flow' },
  { icon: Cpu, name: 'OpenRouter', desc: 'model routing and AI execution' },
  { icon: Terminal, name: 'Supabase', desc: 'data, auth, storage, and admin systems' },
  { icon: Github, name: 'GitHub', desc: 'code, repos, branches, and shipping' },
  { icon: Workflow, name: 'Telegram', desc: 'remote operator communication' },
]

const work: WorkItem[] = [
  {
    title: 'GridView Pro',
    category: 'Product UI / Desktop Workspace',
    description:
      'A multi-pane AI workspace with stronger hierarchy, reusable workflows, and a more premium control-surface feel than the average browser tool.',
    image: '/gridview-workspace.png',
    alt: 'GridView Pro multi-pane workspace interface',
    highlights: ['multi-panel interface', 'workflow templates', 'dense utility with cleaner hierarchy'],
    terminalLines: [
      '✓ browser-like panes with reusable layouts',
      '✓ utility-dense workspace with cleaner visual control',
      '✓ stronger product feel than a generic AI dashboard',
    ],
    terminalCommand: '$ gridview --templates --focus-mode',
    terminalTitle: 'gridview / product surface',
    terminalFooter: '> premium UI that feels built, not templated',
  },
  {
    title: 'Moving2PNW',
    category: 'Market Intelligence / Consumer Product',
    description:
      'A Washington housing and migration intelligence surface designed to make dense market data feel useful, credible, and conversion-friendly.',
    image: '/moving2pnw-overview.png',
    alt: 'Moving2PNW market overview dashboard',
    highlights: ['market overview dashboards', 'buyer vs seller framing', 'real-estate-specific product direction'],
    terminalLines: [
      '✓ migration and affordability surfaces',
      '✓ clearer market framing for real users',
      '✓ data-heavy product made more usable and credible',
    ],
    terminalCommand: '$ market-report --county king --window 90d',
    terminalTitle: 'moving2pnw / data product',
    terminalFooter: '> market intelligence without dry enterprise UX',
  },
  {
    title: 'NextAgent',
    category: 'Lead Workflow / CRM Ops',
    description:
      'Offer intake, gated review, storage, email handling, and admin operations shaped into a cleaner real-estate workflow from submission to follow-through.',
    highlights: ['offer capture flow', 'CRM + admin logic', 'protected internal review path'],
    terminalTitle: 'nextagent / crm workflow',
    terminalCommand: '$ intake --store --notify --review',
    terminalLines: [
      '✓ offer submitted from public flow',
      '✓ CRM row stored + admin access gated',
      '✓ email notifications and document handling online',
    ],
    terminalFooter: '> lead capture to internal ops without the usual mess',
  },
  {
    title: 'Cleo / OpenClaw',
    category: 'AI Operator Infrastructure',
    description:
      'Model routing, browser tooling, Telegram control, auth recovery, and verified execution paths for an AI system that can actually operate.',
    highlights: ['remote execution', 'multi-model routing', 'tooling + continuity hardening'],
    terminalTitle: 'operator / live system',
    terminalCommand: '$ route --models --tools --channels',
    terminalLines: [
      '✓ Kimi / GPT-5 mini / Grok fallback chain',
      '✓ Telegram control path + browser tooling',
      '✓ auth recovery, deploy checks, and continuity',
    ],
    terminalFooter: '> remote execution with verified results',
  },
]

const services = [
  {
    icon: Globe,
    title: 'High-End Websites',
    description:
      'Landing pages, portfolios, and service sites that need to feel premium on load instead of template-built.',
  },
  {
    icon: LayoutTemplate,
    title: 'Product UI + Frontend Systems',
    description:
      'Sharper interfaces for tools, dashboards, internal apps, and products that need stronger design judgment.',
  },
  {
    icon: Bot,
    title: 'AI Operator Workflows',
    description:
      'Agent surfaces, model routing, remote control, workflow automation, and practical AI systems that do real work.',
  },
  {
    icon: Wrench,
    title: 'Build + Deploy Infrastructure',
    description:
      'Git, Vercel, auth, storage, CMS/CRM flows, and the glue required to actually ship and maintain what gets built.',
  },
]

const googleWorkspaceCapabilities = [
  'Read Gmail messages for summaries and workflow context',
  'Send Gmail drafts and follow-up messages',
  'Create or update Google Calendar events',
  'Read Google Contacts for lookup and communication tasks',
  'Create and update Google Docs, Sheets, and Drive files',
]

const differentiators = [
  'Design taste + execution, not one without the other',
  'Frontend systems tied to real workflows behind the scenes',
  'Shipping, not just mockups or AI theater',
  'Business-useful builds instead of generic agency filler',
]

const fit = [
  'Founders who need a sharper first impression',
  'Operators with messy workflows that need to become systems',
  'Real-estate and service businesses that need cleaner digital intake',
  'Teams who need design taste and execution in the same person',
]

const process = [
  {
    step: '01',
    title: 'Direction',
    description: 'Clarify the offer, audience, and where the site or product should create leverage.',
  },
  {
    step: '02',
    title: 'Design + System',
    description: 'Shape the visual language, hierarchy, copy structure, and core experience.',
  },
  {
    step: '03',
    title: 'Build + Ship',
    description: 'Implement, wire the tools, verify flows, and deploy something that is actually usable.',
  },
]

const clientTypes = [
  {
    icon: Rocket,
    title: 'Founders shipping fast',
    description: 'People who need the site or product surface to catch up to the quality of the idea.',
  },
  {
    icon: Workflow,
    title: 'Operators with messy systems',
    description: 'Teams whose lead flow, intake, tooling, or internal process still feels stitched together.',
  },
  {
    icon: LineChart,
    title: 'Real-estate + service businesses',
    description: 'Client-facing businesses that need more trust, better UX, and cleaner internal follow-through.',
  },
]

const caseStudies = [
  {
    title: 'GridView Pro',
    problem: 'Most AI workspaces feel cluttered, flat, or too generic to use for serious workflows.',
    solution: 'Built a denser multi-panel interface with better hierarchy, reusable templates, and stronger visual control.',
    impact: 'Turns a novelty layout into a product surface that feels higher-end and more useful.',
  },
  {
    title: 'Moving2PNW',
    problem: 'Market data is usually either too dry for consumers or too shallow to build trust.',
    solution: 'Turned migration and housing signals into clean, navigable dashboards with stronger framing and utility.',
    impact: 'Makes a data-heavy product feel credible, understandable, and conversion-ready.',
  },
  {
    title: 'Cleo / OpenClaw',
    problem: 'AI systems are often impressive in demos but weak in continuity, tooling, and real execution.',
    solution: 'Hardened a live operator system with model routing, browser control, Telegram access, auth recovery, and verification.',
    impact: 'Moves the system closer to something that can actually operate, not just chat.',
  },
]

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Matt 2 Build',
      url: 'https://matt2build.com',
      sameAs: ['https://github.com/Matt2Build'],
      email: 'mailto:matt2build@gmail.com',
      jobTitle: 'Product-Focused Developer and Systems Builder',
      knowsAbout: [
        'Next.js',
        'Vercel',
        'Supabase',
        'OpenRouter',
        'AI operator systems',
        'frontend development',
        'product design',
        'workflow automation',
      ],
    },
    {
      '@type': 'ProfessionalService',
      name: 'Matt 2 Build',
      url: 'https://matt2build.com',
      description:
        'Premium websites, product interfaces, AI-assisted workflows, and deploy-ready systems for founders and teams.',
      areaServed: 'United States',
      serviceType: [
        'Website design and development',
        'Frontend product development',
        'AI workflow systems',
        'CRM and automation setup',
      ],
    },
  ],
}

function WorkCard({
  item,
  index,
}: {
  item: WorkItem
  index: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="work-card"
    >
      {item.image ? (
        <div className="work-media">
          <Image
            src={item.image}
            alt={item.alt ?? item.title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      ) : (
        <div className="terminal work-terminal">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="ml-4 text-xs text-gray-500 font-mono">{item.terminalTitle ?? 'live system'}</span>
          </div>
          <div className="p-5 font-mono text-sm text-gray-300">
            <div className="text-matrix-500">{item.terminalCommand ?? '$ system status'}</div>
            {item.terminalLines?.map((line) => (
              <div key={line} className="mt-2 first:mt-2">
                {line}
              </div>
            ))}
            <div className="mt-4 text-cyan-400">{item.terminalFooter ?? '> verified execution path'}</div>
          </div>
        </div>
      )}

      <div className="p-6 lg:p-7">
        <div className="section-chip mb-4">{item.category}</div>
        <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
        <p className="text-gray-400 leading-7 mb-5">{item.description}</p>
        <ul className="space-y-2">
          {item.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-3 text-sm text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-matrix-500 mt-0.5 shrink-0" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <details className="work-details mt-5">
          <summary className="work-details-summary">More project detail</summary>
          <div className="work-details-body">
            {item.terminalLines?.map((line) => (
              <div key={line} className="text-gray-300 text-sm leading-7">
                {line}
              </div>
            ))}
          </div>
        </details>
      </div>
    </motion.article>
  )
}

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0)
  const [inquiry, setInquiry] = useState({
    name: '',
    email: '',
    projectType: 'Website Build',
    timeline: '',
    details: '',
  })

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroSlides.length)
    }, 3200)

    return () => window.clearInterval(interval)
  }, [])

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const submitInquiry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inquiry),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setInquiry({
          name: '',
          email: '',
          projectType: 'Website Build',
          timeline: '',
          details: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="scanline" />

      <nav className="fixed top-0 z-50 w-full border-b border-cyber-light/20 bg-cyber-dark/82 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-matrix-500" />
              <span className="text-xl font-bold font-mono text-white">
                matt<span className="text-matrix-500">2</span>build
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#work" className="link-hover text-gray-300 hover:text-matrix-500 transition-colors">
                Work
              </Link>
              <Link href="#work-with-me" className="link-hover text-gray-300 hover:text-matrix-500 transition-colors">
                Work With Me
              </Link>
              <Link href="#process" className="link-hover text-gray-300 hover:text-matrix-500 transition-colors">
                Process
              </Link>
              <Link href="#about" className="link-hover text-gray-300 hover:text-matrix-500 transition-colors">
                About
              </Link>
              <a
                href="https://github.com/Matt2Build"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-matrix-500 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="hero-stack">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="hero-copy"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-matrix-500/10 border border-matrix-500/25 mb-8">
              <Sparkles className="w-4 h-4 text-matrix-500" />
              <span className="text-matrix-400 text-sm font-mono">Matt 2 Build / premium digital products</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                <span className="text-white">Matt 2 Build</span>
                <span className="block text-matrix-500 glow-text">
                  websites, product interfaces, and AI systems built to win trust fast
                </span>
              </h1>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <a href="mailto:matt2build@gmail.com" className="btn-primary flex items-center space-x-2">
                  <span>Start a Project</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link href="#work" className="btn-secondary flex items-center space-x-2">
                  <span>See Selected Work</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="terminal hero-terminal"
            >
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-sm text-gray-500 font-mono">hero-message.ts</span>
              </div>
              <div className="p-6 md:p-7 font-mono text-sm md:text-base">
                <div className="text-gray-500">// why people remember the work</div>
                <div className="mt-5 text-gray-300 leading-8">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-cyan-400">message</span> ={' '}
                  <span className="text-green-400">
                    "I build the kind of client-facing surfaces people remember: premium websites, sharper product UI, cleaner workflows, and the systems behind them so the whole operation actually ships."
                  </span>
                </div>
                <div className="mt-5 text-matrix-500">{'>'} premium presentation with real delivery behind it</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22 }}
              className="hero-panel"
            >
              <div className="hero-panel-main">
                {heroSlides.map((slide, index) => (
                  <div
                    key={slide.src}
                    className={`hero-slide ${index === heroIndex ? 'is-active' : ''}`}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 1024px) 100vw, 60rem"
                    />
                  </div>
                ))}
                <div className="hero-slide-label">{heroSlides[heroIndex]?.label}</div>
              </div>
              <div className="hero-panel-overlay">
                <div className="hero-panel-title-wrap">
                  <div className="section-chip mb-3">Hireable focus</div>
                  <h3 className="hero-panel-title">What clients hire me for</h3>
                </div>
                <div className="hero-panel-grid">
                  <div className="space-y-3">
                    <div className="hero-line">
                      <Briefcase className="w-4 h-4 text-matrix-500" />
                      <span>Premium websites that don’t feel templated</span>
                    </div>
                    <div className="hero-line">
                      <Code2 className="w-4 h-4 text-matrix-500" />
                      <span>Product UI with stronger hierarchy and cleaner execution</span>
                    </div>
                    <div className="hero-line">
                      <Bot className="w-4 h-4 text-matrix-500" />
                      <span>AI-assisted systems, workflows, and remote operator tooling</span>
                    </div>
                    <div className="hero-line">
                      <Rocket className="w-4 h-4 text-matrix-500" />
                      <span>Git, Vercel, CRM, storage, auth, and deploy-ready delivery</span>
                    </div>
                  </div>
                  <div className="hero-stats-stack">
                    {heroStats.map((stat) => (
                      <div key={stat.value} className="hero-stat-card">
                        <div className="text-sm font-mono text-matrix-500 mb-2">{stat.value}</div>
                        <div className="text-sm text-gray-300 leading-6">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="py-16 bg-cyber-dark/55">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-12 text-center"
          >
            <div className="section-chip mx-auto mb-5">Core Stack</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The tools behind the sites, workflows, and systems people are hiring for
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {stack.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="stack-card"
              >
                <item.icon className="w-8 h-8 text-matrix-500 mx-auto mb-4" />
                <div className="text-white text-xl font-semibold mb-2 text-center">{item.name}</div>
                <div className="text-gray-400 text-center leading-7">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="py-20 bg-cyber-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-14 max-w-3xl mx-auto text-center"
          >
            <div className="section-chip mb-5">Selected work</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
              Product surfaces and workflow systems built around real use, not just mockups
            </h2>
            <p className="text-gray-400 text-lg leading-8">
              The strongest work here isn’t just aesthetic. It combines design taste, practical UX, and the build
              discipline needed to turn ideas into tools people can actually use.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {work.map((item, index) => (
              <WorkCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 max-w-3xl"
          >
            <div className="section-chip mb-5">Why it works</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              The value is not just design. It is cleaner execution around a real business problem.
            </h2>
            <p className="text-gray-400 text-lg leading-8">
              The strongest builds here solve for trust, clarity, and usefulness at the same time. That is what
              makes the work more hireable than a page that only looks good in screenshots.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 mb-10">
            {differentiators.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="proof-card"
              >
                <div className="proof-detail">{item}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="card p-6"
              >
                <div className="section-chip mb-4">{study.title}</div>
                <div className="space-y-4 text-sm leading-7">
                  <div>
                    <div className="text-matrix-500 font-mono mb-1">Problem</div>
                    <p className="text-gray-300">{study.problem}</p>
                  </div>
                  <div>
                    <div className="text-matrix-500 font-mono mb-1">Build</div>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                  <div>
                    <div className="text-matrix-500 font-mono mb-1">Why it matters</div>
                    <p className="text-gray-300">{study.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cyber-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] items-start">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="section-chip mb-5">Who I work with</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                Best for people who need better taste and better systems at the same time
              </h2>
              <p className="text-gray-400 text-lg leading-8">
                If the business is solid but the site, interface, or workflow still feels weaker than it should,
                that is usually the right kind of project for me.
              </p>
            </motion.div>

            <div className="grid gap-6">
              {clientTypes.map((client, index) => (
                <motion.div
                  key={client.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="card p-6 flex gap-4"
                >
                  <client.icon className="w-8 h-8 text-matrix-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{client.title}</h3>
                    <p className="text-gray-400 leading-7">{client.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work-with-me" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className="section-chip mb-5">Ways To Work With Me</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                Clear ways to use me when you need stronger presentation, systems, or delivery
              </h2>
              <p className="text-gray-400 text-lg leading-8 mb-8">
                I’m most useful when a business needs the front-end experience to look better, feel more credible,
                and actually connect to the systems behind it.
              </p>

              <div className="card p-6">
                <div className="text-sm font-mono text-matrix-500 mb-4">Best fit</div>
                <ul className="space-y-3">
                  {fit.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-matrix-500 mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="card p-6"
                >
                  <service.icon className="w-8 h-8 text-matrix-500 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-7">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-cyber-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-14"
          >
            <div className="section-chip mx-auto mb-5">Process</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built to go from idea to shipped system without losing polish
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-8">
              The point is not just to make something attractive. The point is to make it believable, useful, and
              operable once real people touch it.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="card p-6"
              >
                <div className="text-matrix-500 font-mono text-sm mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-7">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className="section-chip mb-5">About Matt 2 Build</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                Design taste, product instincts, and enough systems thinking to make the whole thing hold up
              </h2>
              <p className="text-gray-400 text-lg leading-8 mb-6">
                The work is strongest where brand, UI, and operations overlap: the site needs to look better, the
                workflow needs to work, and the tooling behind it needs to stay manageable after launch.
              </p>
              <p className="text-gray-400 leading-8 mb-8">
                That includes product-facing sites, internal systems, lead flows, AI-assisted operator setups,
                dashboards, and the deployment paths that make everything usable outside of a demo.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href="mailto:matt2build@gmail.com"
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-matrix-500 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>matt2build@gmail.com</span>
                </a>
                <a
                  href="https://github.com/Matt2Build"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-matrix-500 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>github.com/Matt2Build</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="terminal"
            >
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-sm text-gray-500 font-mono">operator-profile.ts</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="text-gray-500">// Matt 2 Build</div>
                <div className="mt-4 text-gray-300">
                  <span className="text-purple-400">const</span> <span className="text-cyan-400">profile</span> = {'{'}
                </div>
                <div className="pl-4 text-gray-300">
                  focus: <span className="text-green-400">'premium web + product systems'</span>,
                </div>
                <div className="pl-4 text-gray-300">
                  builds: [<span className="text-green-400">'sites'</span>, <span className="text-green-400">'product UI'</span>, <span className="text-green-400">'AI ops'</span>, <span className="text-green-400">'CRM workflows'</span>],
                </div>
                <div className="pl-4 text-gray-300">
                  shipped: [<span className="text-green-400">'GridView Pro'</span>, <span className="text-green-400">'Moving2PNW'</span>, <span className="text-green-400">'NextAgent'</span>, <span className="text-green-400">'Cleo'</span>],
                </div>
                <div className="pl-4 text-gray-300">
                  stack: [<span className="text-green-400">'Next.js'</span>, <span className="text-green-400">'Vercel'</span>, <span className="text-green-400">'Supabase'</span>, <span className="text-green-400">'OpenRouter'</span>, <span className="text-green-400">'GitHub'</span>],
                </div>
                <div className="pl-4 text-gray-300">
                  goal: <span className="text-green-400">'make the first impression and the system behind it both stronger'</span>
                </div>
                <div className="text-gray-300">{'}'}</div>
                <div className="mt-4 text-matrix-500">{'>'} Sharper presentation. Cleaner execution. Better leverage.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cyber-dark border-y border-cyber-light/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="cta-panel text-center"
          >
            <div className="section-chip mx-auto mb-5">Let’s build</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
              If the site, workflow, or product surface feels weaker than the business behind it, that’s fixable.
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-8 max-w-3xl mx-auto mb-8">
              Whether it’s a premium public site, a product interface, or an internal system that needs to stop
              feeling patched together, I can help turn it into something stronger and more usable.
            </p>
            <div className="audit-offer mb-8">
              <div className="section-chip mx-auto mb-4">Low-friction way to start</div>
              <p className="text-gray-300 leading-8 max-w-2xl mx-auto">
                Send me your current site, product, or workflow and I’ll tell you what is making it feel weaker than
                it should, where trust is leaking, and what I would tighten first.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:matt2build@gmail.com" className="btn-primary">
                Start a Project
              </a>
              <a href="mailto:matt2build@gmail.com?subject=Matt%202%20Build%20Audit" className="btn-secondary">
                Request an Audit
              </a>
              <a href="mailto:matt2build@gmail.com?subject=Matt%202%20Build%20Idea" className="btn-secondary">
                Talk Through an Idea
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="google-workspace" className="py-20 bg-cyber-dark/55">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="card p-8 md:p-10"
          >
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
              <div>
                <div className="section-chip mb-5">Google Workspace App</div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  Matt 2 Build also runs Google-connected assistant workflows on the same verified domain
                </h2>
                <p className="text-gray-400 text-lg leading-8 mb-6">
                  The Matt2Build application supports authorized Gmail, Calendar, Contacts, Docs, Sheets, and Drive
                  workflows for drafting, scheduling, document creation, file organization, and productivity tasks.
                  This is the same brand, domain, privacy policy, and support contact used in the Google OAuth consent
                  screen.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="/privacy" className="btn-primary">
                    Privacy Policy
                  </a>
                  <a href="/terms" className="btn-secondary">
                    Terms of Service
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl border border-cyber-light/15 bg-cyber-darker/70 p-6">
                  <div className="text-sm font-mono text-matrix-500 mb-3">Google scope-backed functionality</div>
                  <ul className="space-y-3 text-gray-300 leading-7">
                    {googleWorkspaceCapabilities.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-matrix-500 mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-cyber-light/15 bg-cyber-darker/70 p-6 text-sm text-gray-400 leading-7">
                  Support email:{' '}
                  <a className="text-matrix-400 hover:underline" href="mailto:matt2build@gmail.com">
                    matt2build@gmail.com
                  </a>
                  <br />
                  Verified domain: matt2build.com
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="inquiry" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <div>
              <div className="section-chip mb-5">Inquiry Form</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                Give me the project basics and I’ll know how to respond faster
              </h2>
              <p className="text-gray-400 text-lg leading-8">
                This creates a structured inquiry email so the first conversation starts with something useful instead
                of a blank slate.
              </p>
            </div>

            <form onSubmit={submitInquiry} className="card p-6 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="form-field">
                  <span>Name</span>
                  <input
                    value={inquiry.name}
                    onChange={(event) => setInquiry({ ...inquiry, name: event.target.value })}
                    required
                    className="form-input"
                  />
                </label>
                <label className="form-field">
                  <span>Email</span>
                  <input
                    type="email"
                    value={inquiry.email}
                    onChange={(event) => setInquiry({ ...inquiry, email: event.target.value })}
                    required
                    className="form-input"
                  />
                </label>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="form-field">
                  <span>Project Type</span>
                  <select
                    value={inquiry.projectType}
                    onChange={(event) => setInquiry({ ...inquiry, projectType: event.target.value })}
                    className="form-input"
                  >
                    <option>Website Build</option>
                    <option>Product / UI Work</option>
                    <option>AI Workflow / System Setup</option>
                    <option>Ongoing Technical Support</option>
                  </select>
                </label>
                <label className="form-field">
                  <span>Timeline</span>
                  <input
                    value={inquiry.timeline}
                    onChange={(event) => setInquiry({ ...inquiry, timeline: event.target.value })}
                    placeholder="ASAP / this month / exploring"
                    className="form-input"
                  />
                </label>
              </div>
              <label className="form-field">
                <span>What needs help?</span>
                <textarea
                  value={inquiry.details}
                  onChange={(event) => setInquiry({ ...inquiry, details: event.target.value })}
                  placeholder="Tell me what feels weak, what you want built, and what outcome you want."
                  rows={6}
                  className="form-input form-textarea"
                />
              </label>
              {submitStatus === 'success' && (
                <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-medium">Message sent successfully!</span>
                  </div>
                  <p className="mt-2 text-sm text-green-300">
                    Thanks for reaching out. I'll review your inquiry and get back to you shortly.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Something went wrong</span>
                  </div>
                  <p className="mt-2 text-sm text-red-300">
                    Please try again or email me directly at matt2build@gmail.com.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Structured Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-cyber-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Terminal className="w-5 h-5 text-matrix-500" />
              <span className="text-lg font-bold font-mono text-white">
                matt<span className="text-matrix-500">2</span>build
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-matrix-500 transition-colors">
                Privacy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-matrix-500 transition-colors">
                Terms
              </a>
              <div className="text-gray-500 font-mono">
                © 2026 matt2build. Premium web, product, and AI systems.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
