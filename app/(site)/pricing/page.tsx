import Link from 'next/link'
import { FaqList } from '@/components/faq-list'
import { JsonLd } from '@/components/json-ld'
import { ComparisonTable } from '@/components/comparison-table'
import { PricingCards } from '@/components/pricing-cards'
import { pageMetadata } from '@/lib/metadata'
import { BUILD_PRICE, MONTHLY_PRICE, pricingFaqs } from '@/lib/site'
import { breadcrumbJsonLd, faqJsonLd, webPageJsonLd } from '@/lib/structured-data'

const title = 'Real Estate Agent Website Pricing'
const description =
  'Real estate agent website pricing: $750 to build. Optional $50 a month for hosting, maintenance, domain management, and support.'

export const metadata = pageMetadata({ title, description, path: '/pricing' })

export default function PricingPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title, description, path: '/pricing' })} />
      <JsonLd data={breadcrumbJsonLd('/pricing', 'Pricing')} />
      <JsonLd data={faqJsonLd(pricingFaqs, '/pricing')} />

      <section className="pt-32 pb-8 lg:pt-40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-chip mb-6">Pricing</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real estate agent website pricing
          </h1>
          <p className="text-3xl md:text-4xl font-bold text-white mb-4">{BUILD_PRICE} to build.</p>
          <p className="text-lg text-gray-300 leading-8">
            Want it handled? {MONTHLY_PRICE}/month covers hosting, maintenance, domain management and back-end
            support. Month to month, cancel anytime. I build for agents anywhere in the United States.
          </p>
        </div>
      </section>

      <section className="py-12" aria-labelledby="prices">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="prices" className="sr-only">
            Build fee and monthly support
          </h2>
          <PricingCards />
          <p className="text-gray-400 text-center mt-8 leading-7">
            Custom tools beyond the standard stack are quoted separately. I don&apos;t include IDX or MLS listing
            feeds.
          </p>
        </div>
      </section>

      <section id="compare" className="scroll-mt-24 py-12" aria-labelledby="compare-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="compare-heading" className="text-3xl font-bold text-white mb-8">
            How it compares
          </h2>
          <ComparisonTable />
        </div>
      </section>

      <section className="py-12" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="text-3xl font-bold text-white mb-8 text-center">
            Pricing questions
          </h2>
          <FaqList faqs={pricingFaqs} />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready when you are.</h2>
          <Link href="/contact" className="btn-primary inline-block">
            Start a project
          </Link>
        </div>
      </section>
    </>
  )
}
