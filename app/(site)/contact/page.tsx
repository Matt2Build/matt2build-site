import { ContactForm } from '@/components/contact-form'
import { JsonLd } from '@/components/json-ld'
import { pageMetadata } from '@/lib/metadata'
import { BUILD_PRICE, CONTACT_EMAIL, MONTHLY_PRICE } from '@/lib/site'
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/structured-data'

const title = 'Realtor Website Designer'
const description =
  `Contact a realtor website designer about a custom agent site. ${BUILD_PRICE} to build, ${MONTHLY_PRICE}/mo for hosting, updates, and support.`

export const metadata = pageMetadata({ title, description, path: '/contact' })

export default function ContactPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title, description, path: '/contact' })} />
      <JsonLd data={breadcrumbJsonLd('/contact', 'Contact')} />
      <section className="pt-32 pb-20 lg:pt-40">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-chip mb-6">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Tell me about your realtor website.</h1>
          <p className="text-lg text-gray-300 leading-8 mb-8">
            Name, email, your market and brokerage, and what you want built. I work with agents anywhere in the
            United States, and I reply within one business day.
          </p>
          <ContactForm />
          <p className="text-center text-gray-400 text-sm mt-6">
            Or email me at{' '}
            <a className="text-matrix-400 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  )
}
