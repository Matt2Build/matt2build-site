import Link from 'next/link'
import { FaqList } from '@/components/faq-list'
import { JsonLd } from '@/components/json-ld'
import { PricingCards } from '@/components/pricing-cards'
import { Screenshot } from '@/components/screenshot'
import { pageMetadata } from '@/lib/metadata'
import {
  BUILD_PRICE,
  featuredProjects,
  homeFaqs,
  MONTHLY_PRICE,
  standardStack,
} from '@/lib/site'
import { faqJsonLd, webPageJsonLd } from '@/lib/structured-data'

const title = 'Websites and Tools for Real Estate Agents'
const description =
  'Custom websites and tools for real estate agents anywhere in the U.S., built by a working agent. $750 to build. $50 a month. You own the domain.'

export const metadata = pageMetadata({ title, description, path: '/', absolute: true })

const steps = [
  {
    title: 'Tell me what you want',
    body: 'Your market, your brokerage, and what the site should do. I work with agents anywhere in the United States.',
  },
  {
    title: 'I build it',
    body: 'A custom site on the standard stack. If you want a tool beyond that, I quote it before I start.',
  },
  {
    title: 'You launch',
    body: `The domain is yours. I host the site and keep it maintained for ${MONTHLY_PRICE} a month. Cancel anytime.`,
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title, description, path: '/' })} />
      <JsonLd data={faqJsonLd(homeFaqs, '/')} />

      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-chip mb-8">For real estate agents anywhere in the U.S.</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Websites and tools for real estate agents.
          </h1>
          <p className="text-2xl md:text-3xl text-matrix-500 glow-text mb-8">Built by a working agent.</p>
          <p className="text-lg text-gray-300 leading-8 mb-4">
            I&apos;m Matt Salit. I&apos;ve been a Snohomish County, Washington realtor and an NWMLS member for 12
            years, and I build software for the work. I make custom websites and tools for agents anywhere in the
            United States.
          </p>
          <p className="text-lg text-gray-400 leading-8 mb-8">
            Your site is built around what you want. It isn&apos;t a template. Every build includes my standard
            stack, and you own the domain. If you change brokerages, the site stays with you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link href="/contact" className="btn-primary">
              Start a project
            </Link>
            <Link href="/pricing" className="btn-secondary">
              See pricing
            </Link>
          </div>
          <p className="text-sm text-gray-500 font-mono">I reply within one business day.</p>
        </div>
      </section>

      <section className="py-16" aria-labelledby="how-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="how-heading" className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            How a build goes
          </h2>
          <ol className="space-y-8">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-6 items-start">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-matrix-500/20 border border-matrix-500/40 flex items-center justify-center text-matrix-400 font-bold">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 leading-7">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16" aria-labelledby="stack-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="stack-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
              The standard stack
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Included in the {BUILD_PRICE} build. The design is custom. These pieces come with it.
            </p>
          </div>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {standardStack.map((item) => (
              <li key={item.title} className="p-6 bg-cyber-light/30 rounded-lg border border-cyber-light">
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 leading-7">{item.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16" aria-labelledby="ownership-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2">
          <div className="p-8 rounded-xl border border-matrix-500/20 bg-cyber-light/20">
            <h2 id="ownership-heading" className="text-2xl font-bold text-white mb-3">
              The site stays with you
            </h2>
            <p className="text-gray-300 leading-7">
              You own your domain. Register it in your name. If you leave your brokerage, the site goes with you.
              A site your brokerage provides is usually tied to the brokerage. This one isn&apos;t.
            </p>
          </div>
          <div className="p-8 rounded-xl border border-cyber-light bg-cyber-light/20">
            <h2 className="text-2xl font-bold text-white mb-3">No IDX. No listing feed.</h2>
            <p className="text-gray-300 leading-7">
              I don&apos;t include IDX or MLS listing feeds. MLS rules don&apos;t allow a feed of listings on a
              marketing site like this. I build the marketing site and the tools you own.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="work-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 id="work-heading" className="text-3xl md:text-4xl font-bold text-white mb-3">
                Work
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl">
                Real estate products I built. They are the proof, not a menu of templates.
              </p>
            </div>
            <Link href="/portfolio" className="text-matrix-400 hover:underline">
              All work
            </Link>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {featuredProjects.map((project) => {
              const shot = project.shots[0]
              return (
                <article key={project.id} className="flex flex-col">
                  <Screenshot src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} />
                  <h3 className="text-xl font-semibold text-white mt-4">{project.title}</h3>
                  <p className="text-gray-400 mt-2 leading-7 flex-1">{project.summary}</p>
                  <p className="mt-3 text-sm">
                    <Link className="text-matrix-400 hover:underline" href={`/portfolio#${project.id}`}>
                      Case study
                    </Link>
                    {project.href ? (
                      <>
                        <span className="text-gray-600"> · </span>
                        <a className="text-matrix-400 hover:underline" href={project.href} target="_blank" rel="noopener noreferrer">
                          {project.linkLabel}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      </>
                    ) : (
                      <span className="text-gray-500"> · Screenshots only</span>
                    )}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16" aria-labelledby="pricing-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
              {BUILD_PRICE} to build. {MONTHLY_PRICE} a month.
            </h2>
            <p className="text-gray-400 text-lg">
              One build fee. Hosting, maintenance, and support after that. Month to month.
            </p>
          </div>
          <PricingCards />
          <p className="text-center text-gray-400 mt-6">
            Custom tools beyond the standard stack are quoted separately.{' '}
            <Link href="/pricing" className="text-matrix-400 hover:underline">
              Pricing details
            </Link>
          </p>
        </div>
      </section>

      <section id="faq" className="py-16" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Questions
          </h2>
          <FaqList faqs={homeFaqs} />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tell me what you want built.</h2>
          <p className="text-gray-400 text-lg mb-8">Agents anywhere in the United States are welcome.</p>
          <Link href="/contact" className="btn-primary inline-block">
            Contact
          </Link>
        </div>
      </section>
    </>
  )
}
