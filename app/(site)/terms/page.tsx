import Link from 'next/link'
import { JsonLd } from '@/components/json-ld'
import { pageMetadata } from '@/lib/metadata'
import { BUILD_PRICE, CONTACT_EMAIL, MONTHLY_PRICE, POLICY_UPDATED, PRICE_LINE } from '@/lib/site'
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/structured-data'

const title = 'Terms of Service'
const description =
  `Terms for BrokerWorkshop realtor websites: ${PRICE_LINE}`

export const metadata = pageMetadata({ title, description, path: '/terms' })

export default function TermsPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title, description, path: '/terms' })} />
      <JsonLd data={breadcrumbJsonLd('/terms', 'Terms')} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40">
        <p className="section-chip mb-6">BrokerWorkshop</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: {POLICY_UPDATED}</p>

        <div className="space-y-8 text-gray-300 leading-8">
          <section>
            <p>
              These terms cover brokerworkshop.com and the website work I offer as BrokerWorkshop. Questions can go to{' '}
              <a className="text-matrix-400 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">The work</h2>
            <p>
              I design and build custom websites and tools for real estate agents anywhere in the United States. A
              standard site build is {BUILD_PRICE}, paid once. Hosting, maintenance, domain management, and
              back-end support are {MONTHLY_PRICE} a month. It&apos;s month to month. Cancel anytime. No contract and
              no cancellation fee. A tool past the usual site is priced on its own before I start.
            </p>
            <p className="mt-4">
              The standard stack is a custom design, a mobile-first layout, a bio and about page, a contact and
              lead form, a consultation booking link, SEO setup and structured data, analytics, and launch.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">What I don&apos;t include</h2>
            <p>
              Listing search (IDX) is licensed through your own MLS and broker, so it isn&apos;t included in the
              build.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Your domain and your site</h2>
            <p>
              You own your domain. I register it in your own registrar account, or I transfer it to you. I can
              connect it and manage DNS, email records, and renewals. The registrar bill stays with you. The site
              stays yours if you change brokerages.
            </p>
            <p className="mt-4">
              Cancel anytime. No contract and no cancellation fee. I&apos;ll hand over your domain, the site&apos;s
              code and files, and your images and content, so you can host it anywhere. Stock images transfer only
              within their license. I&apos;ll also give you an analytics export.
            </p>
            <p className="mt-4">
              What doesn&apos;t transfer: my hosting account, my shared email-sending setup, and ongoing support.
              Form messages already go to your own email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Using this site</h2>
            <p>
              Use the site and the contact form for lawful inquiries about the work. Don&apos;t send someone
              else&apos;s personal information without a reason to, and don&apos;t try to break the site or the
              form.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">No promised results</h2>
            <p>
              I don&apos;t guarantee search rankings, a number of leads, or closed sales. I build the site we
              agree on and keep it running while you stay on the monthly plan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Liability</h2>
            <p>
              The site and the services are provided as available. To the extent the law allows, I am not liable
              for indirect or consequential damages from using this site or from a site I build for you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Changes</h2>
            <p>I can update these terms. The date at the top is the current version.</p>
          </section>
        </div>

        <p className="mt-10">
          <Link className="text-matrix-400 hover:underline" href="/">
            Back to home
          </Link>
        </p>
      </article>
    </>
  )
}
