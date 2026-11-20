import Link from 'next/link'
import { DemoPortrait } from '@/components/demo/demo-portrait'
import { demoMetadata } from '@/lib/demo-metadata'
import { neighborhoods } from '@/lib/demo'

const description =
  'Sample agent website for Jordan Avery, a fictional realtor in Lakeview. Neighborhood guides, buyer and seller steps, and calculators. Example data.'

export const metadata = demoMetadata('Sample agent site', description, '/demo')

const paths = [
  { href: '/demo/home-value', title: "What's my home worth?", line: 'A request form that, on a live site, reaches the agent.' },
  { href: '/demo/neighborhoods', title: 'Neighborhood guides', line: 'Three fictional places, with stats marked as example data.' },
  { href: '/demo/buyers', title: 'Buyer guide', line: 'The steps from budget to closing, as a checklist.' },
  { href: '/demo/sellers', title: 'Seller guide', line: 'How a listing moves from prep to the closing table.' },
  { href: '/demo/calculators', title: 'Calculators', line: 'A mortgage payment and a seller net-proceeds estimate.' },
  { href: '/demo/search', title: 'Start a home search', line: 'Where a live site can point people who want listings.' },
]

export default function DemoHomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b4f28]">Lakeview · sample market</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-[#1f3a32] sm:text-6xl">
            A clear next step for buyers and sellers in Lakeview.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#3d3832]">
            I help people decide what to do next: what a neighborhood is like, what a payment might be, and how to
            reach me. Jordan Avery is a fictional agent, and the figures on this site are examples.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/demo/home-value" className="rounded-full bg-[#1f3a32] px-6 py-3 text-center font-semibold text-[#f4efe6]">
              What&apos;s my home worth?
            </Link>
            <Link href="/demo/search" className="rounded-full border border-[#1f3a32] px-6 py-3 text-center font-semibold text-[#1f3a32]">
              Start my home search
            </Link>
          </div>
        </div>
        <DemoPortrait className="mx-auto w-full max-w-md rounded-[2rem]" />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16" aria-labelledby="demo-paths">
        <h2 id="demo-paths" className="font-serif text-3xl text-[#1f3a32]">
          What this kind of site is for
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paths.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-3xl border border-[#1f3a32]/15 bg-white p-6 hover:border-[#1f3a32]/40">
              <h3 className="font-serif text-2xl text-[#1f3a32]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#5c564e]">{item.line}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20" aria-labelledby="sample-areas">
        <h2 id="sample-areas" className="font-serif text-3xl text-[#1f3a32]">
          Sample neighborhoods
        </h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {neighborhoods.map((area) => (
            <li key={area.slug}>
              <Link href={`/demo/neighborhoods/${area.slug}`} className="block h-full rounded-3xl bg-[#1f3a32] p-6 text-[#f4efe6]">
                <h3 className="font-serif text-2xl">{area.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#d5e4da]">{area.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
