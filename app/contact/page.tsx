import { ContactForm } from '@/components/contact-form'
import { JsonLd } from '@/components/json-ld'
import { pageMetadata } from '@/lib/metadata'
import { CONTACT_EMAIL } from '@/lib/site'
import { webPageJsonLd } from '@/lib/structured-data'

const title = 'Contact Matt Salit'
const description =
  'Tell Matt Salit what you want built. He works with real estate agents anywhere in the United States. Email matt2build@gmail.com.'

export const metadata = pageMetadata({ title, description, path: '/contact' })

export default function ContactPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title, description, path: '/contact' })} />
      <section className="pt-32 pb-20 lg:pt-40">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-chip mb-6">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Tell me what you need.</h1>
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
