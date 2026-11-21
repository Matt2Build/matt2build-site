import type { Metadata } from 'next'
import { StartForm } from '@/components/start-form'
import { JsonLd } from '@/components/json-ld'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/structured-data'

const title = 'Start checklist'
const description =
  'Send the details for a BrokerWorkshop agent website: brokerage, logo link, bio, domain, and the pages you want.'

export const metadata: Metadata = {
  ...pageMetadata({ title, description, path: '/start' }),
  robots: { index: false, follow: false },
}

export default function StartPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title, description, path: '/start' })} />
      <JsonLd data={breadcrumbJsonLd('/start', 'Start')} />
      <section className="pt-32 pb-20 lg:pt-40">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-chip mb-6">Start</p>
          <h1 className="text-4xl font-bold text-white mb-4">Start checklist</h1>
          <p className="text-gray-300 leading-7 mb-8">
            Fill this out once so the build is not waiting on missing details. Logo and headshot are links, not file
            uploads. Websites live within 48 hours of getting your content.
          </p>
          <StartForm />
        </div>
      </section>
    </>
  )
}
