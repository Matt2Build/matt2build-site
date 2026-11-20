import { DemoPortrait } from '@/components/demo/demo-portrait'
import { demoMetadata } from '@/lib/demo-metadata'

export const metadata = demoMetadata(
  'About Jordan Avery',
  'Jordan Avery is a fictional realtor used as a sample on a Matt2Build demo site. Lakeview is not a claimed market.',
  '/demo/about',
)

export default function AboutDemoPage() {
  return (
    <article className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-14 lg:grid-cols-[280px_minmax(0,1fr)]">
      <DemoPortrait className="w-full max-w-xs rounded-[2rem]" />
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b4f28]">About</p>
        <h1 className="mt-3 font-serif text-4xl text-[#1f3a32] sm:text-5xl">I&apos;m Jordan Avery.</h1>
        <div className="mt-5 space-y-4 text-lg leading-8 text-[#3d3832]">
          <p>
            I&apos;m the sample agent on this demo. I work with buyers and sellers in Lakeview, a fictional market
            made for this site. The portrait is an illustration, not a photograph of a real person.
          </p>
          <p>
            A real about page is where an agent says how they work: the questions they ask first, the markets they
            cover, and how someone should get in touch. This page shows that shape without a sales record.
          </p>
          <p>Nothing here is a real listing, a real client, or a count of homes sold.</p>
        </div>
      </div>
    </article>
  )
}
