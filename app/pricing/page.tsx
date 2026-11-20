import Link from 'next/link'
import { FaqList } from '@/components/faq-list'
import { JsonLd } from '@/components/json-ld'
import { PricingCards } from '@/components/pricing-cards'
import { pageMetadata } from '@/lib/metadata'
import { BUILD_PRICE, MONTHLY_PRICE, pricingFaqs } from '@/lib/site'
import { faqJsonLd, webPageJsonLd } from '@/lib/structured-data'

const title = 'Pricing for Real Estate Agent Websites'
const description =
  'Real estate agent websites are $750 to build and $50 a month for hosting, maintenance, and support. Month-to-month. Cancel anytime. You own the domain.'

export const metadata = pageMetadata({ title, description, path: '/pricing' })

export default function PricingPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title, description, path: '/pricing' })} />
      <JsonLd data={faqJsonLd(pricingFaqs, '/pricing')} />

      <section className="pt-32 pb-8 lg:pt-40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-chip mb-6">Pricing</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {BUILD_PRICE} to build. {MONTHLY_PRICE} a month.
          </h1>
          <p className="text-lg text-gray-300 leading-8">
            One price for a custom agent website on the standard stack. Hosting, maintenance, and support after
            that. Month to month. I work with agents anywhere in the United States.
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
