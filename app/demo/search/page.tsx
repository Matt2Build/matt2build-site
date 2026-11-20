import Link from 'next/link'
import { demoMetadata } from '@/lib/demo-metadata'

export const metadata = demoMetadata(
  'Start a home search',
  'How a live agent site can point buyers to a brokerage or MLS search, or to an IDX feed the agent already has.',
  '/demo/search',
)

export default function SearchPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b4f28]">Search</p>
      <h1 className="mt-3 font-serif text-4xl text-[#1f3a32] sm:text-5xl">Start my home search</h1>
      <div className="mt-6 space-y-4 text-lg leading-8 text-[#3d3832]">
        <p>This sample site does not show homes for sale. There is no listing feed here.</p>
        <p>
          On a site built for a working agent, this page is where a buyer goes next. It can link to the search the
          agent&apos;s brokerage already offers, or to the MLS search that agent is allowed to use. If the agent
          already has an IDX feed of their own, the page can embed that feed.
        </p>
        <p>
          Matt2Build builds the marketing site around that handoff. Matt2Build does not provide IDX or MLS listing
          feeds.
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/demo/neighborhoods" className="rounded-full bg-[#1f3a32] px-6 py-3 text-center font-semibold text-[#f4efe6]">
          Read the neighborhood guides
        </Link>
        <Link href="/demo/contact" className="rounded-full border border-[#1f3a32] px-6 py-3 text-center font-semibold text-[#1f3a32]">
          Ask Jordan a question
        </Link>
      </div>
    </article>
  )
}
