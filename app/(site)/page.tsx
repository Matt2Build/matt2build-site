import Link from 'next/link'
import { JsonLd } from '@/components/json-ld'
import { pageMetadata } from '@/lib/metadata'
import { BUILD_PRICE, MONTHLY_PRICE } from '@/lib/site'
import { webPageJsonLd } from '@/lib/structured-data'

const title = 'Real Estate Agent Website Builder'
const description =
  'Custom real estate agent websites from a licensed realtor. $750 to build. Optional $50 a month for hosting and support.'

export const metadata = pageMetadata({ title, description, path: '/', absolute: true })

const benefits = [
  { title: 'Custom design', line: 'Designed around you and your market.' },
  { title: 'You own the domain', line: 'I can register and manage it in your name.' },
  { title: 'Built by an agent', line: 'Selling homes since 2014, and I build the tools.' },
  { title: 'Anywhere in the U.S.', line: 'I work with agents in any state.' },
]

const steps = [
  { title: 'Tell me', line: 'Your market and what you want.' },
  { title: 'I build it', line: 'A custom site on a standard stack.' },
  { title: 'You launch', line: 'Live on your domain. Monthly help is optional.' },
]

const showcase = [
  {
    title: 'WorkflowRealtor',
    line: 'Pipeline, clients, and deadlines. Screenshots only.',
    study: '/portfolio#workflowrealtor',
    src: '/workflowrealtor-home-desktop.webp',
    alt: 'WorkflowRealtor sign-in screen with the headline Your business dashboard first.',
    width: 1200,
    height: 750,
  },
  {
    title: 'MoverMath',
    line: 'Compare U.S. states and counties for a move.',
    study: '/portfolio#movermath',
    external: 'https://movermath.com',
    linkLabel: 'movermath.com',
    src: '/movermath-home-desktop.webp',
    alt: 'MoverMath map of median household income across U.S. states.',
    width: 1200,
    height: 750,
  },
  {
    title: 'WriteMyOffer',
    line: 'The buyer-offer site I built for my own business.',
    study: '/portfolio#writemyoffer',
    external: 'https://writemyoffer.com',
    linkLabel: 'writemyoffer.com',
    src: '/writemyoffer-home-desktop.webp',
    alt: 'WriteMyOffer homepage with the headline You Found the House. You Get the Savings.',
    width: 1200,
    height: 750,
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title, description, path: '/' })} />

      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12">
          <div>
            <p className="section-chip mb-6">Agents anywhere in the U.S.</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              Websites and tools for real estate agents.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed">
              I build custom websites and tools for agents anywhere in the U.S. I&apos;m a licensed realtor since 2014,
              and the site stays yours if you change brokerages.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary">
                Start a project
              </Link>
              <Link href="/demo" className="btn-secondary">
                See a live demo
              </Link>
            </div>
          </div>

          <div className="hero-stage">
            <div className="device-float">
              <img
                src="/movermath-home-desktop-800.webp"
                alt="MoverMath map of median household income across U.S. states."
                width={800}
                height={500}
                decoding="async"
              />
            </div>
            <div className="device-laptop">
              <div className="device-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <img
                src="/workflowrealtor-home-desktop.webp"
                srcSet="/workflowrealtor-home-desktop-800.webp 800w, /workflowrealtor-home-desktop.webp 1200w"
                sizes="(min-width: 1024px) 520px, 92vw"
                alt="WorkflowRealtor sign-in screen with the headline Your business dashboard first."
                width={1200}
                height={750}
                decoding="async"
              />
            </div>
            <div className="device-phone">
              <img
                src="/writemyoffer-home-mobile.webp"
                alt="WriteMyOffer homepage on a phone, with the same headline and a start button."
                width={780}
                height={1688}
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16" aria-labelledby="benefits-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="benefits-heading" className="sr-only">
            What you get
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <li key={item.title} className="home-card rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="text-white font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-6">{item.line}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16" aria-labelledby="work-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 id="work-heading" className="text-3xl sm:text-4xl font-bold text-white">
              Work
            </h2>
            <Link href="/portfolio" className="text-matrix-400 hover:underline shrink-0">
              All work
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {showcase.map((item) => (
              <article key={item.title} className="home-card rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
                <Link href={item.study} className="block aspect-video overflow-hidden bg-black">
                  <img
                    src={item.src}
                    srcSet={`${item.src.replace('.webp', '-800.webp')} 800w, ${item.src} 1200w`}
                    sizes="(min-width: 768px) 30vw, 92vw"
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top"
                  />
                </Link>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white">
                    <Link href={item.study} className="hover:text-matrix-400">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 leading-6">{item.line}</p>
                  {item.external ? (
                    <p className="mt-3 text-sm">
                      <a className="text-matrix-400 hover:underline" href={item.external} target="_blank" rel="noopener noreferrer">
                        {item.linkLabel}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="how-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="how-heading" className="text-3xl sm:text-4xl font-bold text-white mb-8">
            How it works
          </h2>
          <ol className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-white/10 p-6">
                <p className="font-mono text-matrix-400 text-sm">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-gray-400">{step.line}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="pricing" className="py-8" aria-labelledby="pricing-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-matrix-500/25 bg-matrix-500/[0.06] px-6 py-10 sm:px-10 sm:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-bold text-white">
                {BUILD_PRICE} to build.
              </h2>
              <p className="mt-3 text-gray-300">
                Want it handled? {MONTHLY_PRICE}/month covers hosting, maintenance, domain management and back-end
                support. Month to month, cancel anytime.
              </p>
              <p className="mt-3">
                <Link href="/pricing#compare" className="text-matrix-400 hover:underline">
                  See how it compares
                </Link>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/pricing" className="btn-primary">
                See pricing
              </Link>
              <Link href="/services" className="btn-secondary">
                What&apos;s included
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 px-6 py-12 sm:px-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Tell me what you want built.</h2>
            <p className="mt-3 text-gray-400">Agents anywhere in the United States.</p>
            <p className="mt-2 text-gray-400">
              <Link href="/teardown" className="text-matrix-400 hover:underline">
                Send your current site
              </Link>{' '}
              for a short written teardown.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Start a project
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
