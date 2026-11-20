import { TrackedLink } from '@/components/tracked-link'
import { JsonLd } from '@/components/json-ld'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/structured-data'

const title = 'Keep Your Site If You Switch'
const description =
  "Your agent website stays yours if you change brokerages. The domain is in your own account. Update the name and logo. You don't start over."

export const metadata = pageMetadata({ title, description, path: '/brokerage-switch' })

export default function BrokerageSwitchPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title, description, path: '/brokerage-switch' })} />
      <JsonLd data={breadcrumbJsonLd('/brokerage-switch', 'Switching brokerages')} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40">
        <p className="section-chip mb-6">Your site</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Your site stays yours if you switch brokerages.
        </h1>
        <div className="space-y-8 text-lg text-gray-300 leading-8">
          <p>I build the site for you, not for your brokerage. If you change companies, the site comes with you.</p>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">The site is yours</h2>
            <p>
              The site and the domain are yours. I register the domain in your own registrar account, or I transfer
              it to you. It is not in your brokerage&apos;s name.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Switching is an update</h2>
            <p>
              Changing brokerages means updating your brokerage name, logo, and contact details. You don&apos;t start
              over with a new site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">What keeps working</h2>
            <p>
              The address stays the same. People who bookmarked you still land on your site. Your traffic and your
              Google history stay with that address. I don&apos;t promise a ranking. I keep the same site in place.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">A brokerage site is different</h2>
            <p>
              A site your brokerage gives you often disappears when you leave. This one doesn&apos;t. You can take the
              domain, the code, and your content with you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">The rules still apply</h2>
            <p>
              Brokerage and MLS advertising rules still apply. Your brokerage name has to show the way your
              state&apos;s rules require.
            </p>
          </section>
        </div>

        <p className="mt-12">
          <TrackedLink
            href="/contact"
            className="btn-primary inline-block"
            event="brokerage_switch_cta_clicked"
            properties={{ location: 'brokerage_page' }}
          >
            Tell me about your move
          </TrackedLink>
        </p>
      </article>
    </>
  )
}
