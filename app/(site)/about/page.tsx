import Link from 'next/link'
import { JsonLd } from '@/components/json-ld'
import { Screenshot } from '@/components/screenshot'
import { pageMetadata } from '@/lib/metadata'
import { LINKEDIN_URL, projects, X_URL } from '@/lib/site'
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/structured-data'

const title = 'Licensed Realtor Who Builds Sites'
const description =
  'Matt Salit has been a licensed realtor since 2014 and builds custom websites and tools for real estate agents anywhere in the U.S.'

export const metadata = pageMetadata({ title, description, path: '/about' })

export default function AboutPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title, description, path: '/about' })} />
      <JsonLd data={breadcrumbJsonLd('/about', 'About')} />
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-[280px_minmax(0,1fr)] items-start">
          <Screenshot
            src="/matt-salit.webp"
            alt="Matt Salit smiling outdoors in a navy suit, holding a hockey stick and wearing hockey gloves."
            width={400}
            height={400}
            priority
            className="rounded-2xl"
          />
          <div>
            <p className="section-chip mb-6">About</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              I&apos;m Matt Salit, a licensed realtor since 2014.
            </h1>
            <div className="space-y-5 text-lg text-gray-300 leading-8">
              <p>I build websites and tools for real estate agents anywhere in the United States.</p>
              <p>
                Here&apos;s some of what I&apos;ve built. WorkflowRealtor is a dashboard for an agent&apos;s pipeline,
                clients, escrows, deadlines, net commission, documents, and calendar. MoverMath compares U.S.
                states and counties for a move. WriteMyOffer is the buyer-offer site I built for my own real
                estate business.
              </p>
              <p>
                Moving2PNW is a public market site I run. GridView Pro is a Mac app for working in several panes
                at once.
              </p>
              <p>
                If you want a site that is yours, with the domain in your own account, and it stays yours if you{' '}
                <Link href="/brokerage-switch" className="text-matrix-400 hover:underline">
                  change brokerages
                </Link>
                , that is the work I do.
              </p>
            </div>
            <p className="mt-8 text-gray-300">
              <a className="text-matrix-400 hover:underline" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <span className="text-gray-600"> · </span>
              <a className="text-matrix-400 hover:underline" href={X_URL} target="_blank" rel="noopener noreferrer">
                X @soldwithsalit
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-8" aria-labelledby="proof-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="proof-heading" className="text-2xl font-bold text-white mb-4">
            See the work
          </h2>
          <ul className="space-y-3">
            {projects.map((project) => (
              <li key={project.id}>
                <Link className="text-matrix-400 hover:underline" href={`/portfolio#${project.id}`}>
                  {project.title}
                </Link>
                <span className="text-gray-500"> — {project.summary}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Tell me about your market.</h2>
          <Link href="/contact" className="btn-primary inline-block">
            Contact
          </Link>
        </div>
      </section>
    </>
  )
}
