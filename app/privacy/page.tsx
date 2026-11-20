import Link from 'next/link'
import { JsonLd } from '@/components/json-ld'
import { pageMetadata } from '@/lib/metadata'
import { CONTACT_EMAIL, POLICY_UPDATED } from '@/lib/site'
import { webPageJsonLd } from '@/lib/structured-data'

const title = 'Privacy Policy'
const description =
  'How Matt2Build handles the name, email, market, and message you send through the contact form on this marketing site.'

export const metadata = pageMetadata({ title, description, path: '/privacy' })

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title, description, path: '/privacy' })} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40">
        <p className="section-chip mb-6">Matt2Build</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: {POLICY_UPDATED}</p>

        <div className="space-y-8 text-gray-300 leading-8">
          <section>
            <p>
              This policy covers matt2build.com, the marketing site for Matt2Build. Matt2Build is Matt Salit. For
              privacy questions, email{' '}
              <a className="text-matrix-400 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">What this site is</h2>
            <p>
              I use this site to describe custom websites and tools I build for real estate agents, and to take
              inquiries. It is a marketing site and a contact form. It is not a client portal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Information you send</h2>
            <p>
              If you use the contact form, I receive your name, email address, market or brokerage, and what you
              write in the message. If you email me, I receive whatever you send. I use that to reply and, if we
              work together, to do the work. I don&apos;t sell it, and sending a message does not add you to a
              mailing list.
            </p>
            <p className="mt-4">
              The form is delivered by email from contact@matt2build.com to {CONTACT_EMAIL} through Resend, the
              service I use to send that message. Resend processes the message so it can be delivered.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Hosting</h2>
            <p>
              The site is hosted on Vercel. When you load a page, Vercel processes ordinary technical data such as
              IP address, browser, and the page requested so the site can be served.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Analytics</h2>
            <p>
              I use Plausible Analytics to count page views on this site. Plausible does not use cookies and does
              not give me a way to identify you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">How long I keep inquiries</h2>
            <p>
              I keep inquiry emails long enough to reply and to do any work we agree on. Email me if you want an
              inquiry deleted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Your requests</h2>
            <p>
              Email {CONTACT_EMAIL} to ask what I have from you, to correct it, or to delete it. I will respond.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Children</h2>
            <p>This site is not directed at children, and I don&apos;t knowingly collect their information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Changes</h2>
            <p>If I change this policy, I will update the date at the top of this page.</p>
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
