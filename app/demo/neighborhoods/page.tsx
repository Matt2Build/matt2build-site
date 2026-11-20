import Link from 'next/link'
import { demoMetadata } from '@/lib/demo-metadata'
import { neighborhoods } from '@/lib/demo'

export const metadata = demoMetadata(
  'Lakeview neighborhood guides',
  'Three fictional Lakeview neighborhoods with example stats, written for a sample agent website.',
  '/demo/neighborhoods',
)

export default function NeighborhoodsPage() {
  return (
    <article className="mx-auto max-w-6xl px-4 py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b4f28]">Neighborhoods</p>
      <h1 className="mt-3 max-w-3xl font-serif text-4xl text-[#1f3a32] sm:text-5xl">Guides to three sample neighborhoods.</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-[#3d3832]">
        These places are fictional. Every figure is labeled example data. A page like this is how an agent site stays
        useful when it does not carry a listing feed.
      </p>
      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {neighborhoods.map((area) => (
          <li key={area.slug} className="rounded-3xl border border-[#1f3a32]/15 bg-white p-6">
            <h2 className="font-serif text-2xl text-[#1f3a32]">
              <Link href={`/demo/neighborhoods/${area.slug}`} className="hover:underline">
                {area.name}
              </Link>
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#5c564e]">{area.headline}</p>
            <dl className="mt-5 space-y-2 text-sm">
              {area.stats.map((stat) => (
                <div key={stat.label} className="flex justify-between gap-3 border-t border-[#1f3a32]/10 pt-2">
                  <dt className="text-[#6d6458]">{stat.label}</dt>
                  <dd className="font-semibold">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </article>
  )
}
