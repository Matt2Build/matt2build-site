import Link from 'next/link'
import { notFound } from 'next/navigation'
import { demoMetadata } from '@/lib/demo-metadata'
import { neighborhoodBySlug, neighborhoods } from '@/lib/demo'

export function generateStaticParams() {
  return neighborhoods.map((area) => ({ slug: area.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const area = neighborhoodBySlug(params.slug)
  if (!area) return {}
  return demoMetadata(
    `${area.name} neighborhood guide`,
    `${area.headline} Example data for a fictional Lakeview neighborhood.`,
    `/demo/neighborhoods/${area.slug}`,
  )
}

export default function NeighborhoodPage({ params }: { params: { slug: string } }) {
  const area = neighborhoodBySlug(params.slug)
  if (!area) notFound()

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b4f28]">Example data</p>
      <h1 className="mt-3 font-serif text-4xl text-[#1f3a32] sm:text-5xl">{area.name}</h1>
      <p className="mt-4 text-lg leading-8 text-[#3d3832]">{area.headline}</p>
      <dl className="mt-8 grid gap-4 sm:grid-cols-3">
        {area.stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl bg-white p-4">
            <dt className="text-xs uppercase tracking-wide text-[#6d6458]">{stat.label}</dt>
            <dd className="mt-2 font-serif text-2xl text-[#1f3a32]">{stat.value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-8 space-y-4 leading-8 text-[#3d3832]">
        {area.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-8 text-sm text-[#5c564e]">
        <Link className="underline" href="/demo/neighborhoods">
          All sample neighborhoods
        </Link>
      </p>
    </article>
  )
}
