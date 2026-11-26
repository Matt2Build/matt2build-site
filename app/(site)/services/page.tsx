import Link from 'next/link'
import { TrackedLink } from '@/components/tracked-link'
import { JsonLd } from '@/components/json-ld'
import { pageMetadata } from '@/lib/metadata'
import { BUILD_PRICE, MONTHLY_PRICE, standardStack } from '@/lib/site'
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/structured-data'

const title = 'Custom Website for Realtors'
const description =
  `Custom websites for realtors: design, bio, contact form, booking, SEO, and analytics. ${BUILD_PRICE} to build, ${MONTHLY_PRICE}/mo for hosting and support.`

export const metadata = pageMetadata({ title, description, path: '/services' })

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title, description, path: '/services' })} />
      <JsonLd data={breadcrumbJsonLd('/services', 'Services')} />
      <section className="pt-32 pb-8 lg:pt-40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-chip mb-6">Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Custom websites for realtors.</h1>
          <p className="text-lg text-gray-300 leading-8">
            I build custom websites, and tools when you need them, for real estate agents anywhere in the United
            States. The {BUILD_PRICE} build is a custom design on the standard stack, launched on a domain in your
            own account.{' '}
            <TrackedLink href="/demo" className="text-matrix-400 hover:underline" event="demo_opened" properties={{ location: 'services' }}>
              See a live demo
            </TrackedLink>{' '}
            of that kind of site.
          </p>
        </div>
      </section>

      <section className="py-12" aria-labelledby="stack-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="stack-heading" className="text-3xl font-bold text-white mb-8">
            Standard stack
          </h2>
          <div className="space-y-8">
            {standardStack.map((item, index) => (
              <article key={item.title} className="grid gap-2 sm:grid-cols-[3rem_minmax(0,1fr)]">
                <p className="font-mono text-matrix-400">{String(index + 1).padStart(2, '0')}</p>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 leading-7">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12" aria-labelledby="not-included">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2">
          <div className="p-8 rounded-xl border border-cyber-light">
            <h2 id="not-included" className="text-2xl font-bold text-white mb-3">
              Not included: listing search
            </h2>
            <p className="text-gray-300 leading-7">
              Listing search (IDX) is licensed through your own MLS and broker, so it isn&apos;t included in the
              build.
            </p>
          </div>
          <div className="p-8 rounded-xl border border-cyber-light">
            <h2 className="text-2xl font-bold text-white mb-3">You own it</h2>
            <p className="text-gray-300 leading-7">
              You own your domain. I register it in your own registrar account, or I transfer it to you. I can
              connect it and manage DNS, email records, and renewals. It stays yours if you{' '}
              <Link href="/brokerage-switch" className="text-matrix-400 hover:underline">
                change brokerages
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-3">Beyond the stack</h2>
          <p className="text-gray-300 leading-7 mb-4">
            The {BUILD_PRICE} build is the custom site. {MONTHLY_PRICE}/month covers hosting, maintenance, domain
            management, and back-end support. Month to month. Cancel anytime. No cancellation fee. A calculator, a
            dashboard, or another tool past that is priced on its own before I start.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Tell me what you want.</h2>
          <p className="text-gray-400 text-lg mb-8">I&apos;ll reply within one business day.</p>
          <Link href="/contact" className="btn-primary inline-block">
            Contact
          </Link>
        </div>
      </section>
    </>
  )
}
