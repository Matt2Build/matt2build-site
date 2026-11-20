import { JsonLd } from '@/components/json-ld'
import { TeardownForm } from '@/components/teardown-form'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/structured-data'

const title = 'Real Estate Agent Website Review'
const description =
  'Real estate agent website review: send your current site for a short written teardown of speed, mobile, contact flow, and SEO basics.'

export const metadata = pageMetadata({ title, description, path: '/teardown' })

export default function TeardownPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title, description, path: '/teardown' })} />
      <JsonLd data={breadcrumbJsonLd('/teardown', 'Teardown')} />
      <section className="pt-32 pb-8 lg:pt-40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-chip mb-6">Teardown</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Real estate agent website review</h1>
          <p className="text-lg text-gray-300 leading-8">
            Send the URL of the site you use now. I&apos;ll write back with a short teardown of what&apos;s costing
            you leads: speed, mobile, the contact flow, and basic SEO.
          </p>
        </div>
      </section>
      <section className="pb-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <TeardownForm />
        </div>
      </section>
    </>
  )
}
