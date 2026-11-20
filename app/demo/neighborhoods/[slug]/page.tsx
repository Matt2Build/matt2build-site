import Link from 'next/link'
import { notFound } from 'next/navigation'
import { DemoPhoto } from '@/components/demo/demo-photo'
import { demoMetadata } from '@/lib/demo-metadata'
import { neighborhoodBySlug, neighborhoods } from '@/lib/demo'

export function generateStaticParams() {
  return neighborhoods.map((area) => ({ slug: area.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const area = neighborhoodBySlug(params.slug)
  if (!area) return {}
  return demoMetadata(area.name, area.headline, `/demo/neighborhoods/${area.slug}`)
}

export default function NeighborhoodPage({ params }: { params: { slug: string } }) {
  const area = neighborhoodBySlug(params.slug)
  if (!area) notFound()

  return (
    <article>
      <div className="relative h-[52vh] min-h-[320px]">
        <DemoPhoto image={area.image} fill sizes="100vw" priority className="absolute inset-0" />
      </div>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b4f28]">Lakeview</p>
        <h1 className="mt-3 font-serif text-4xl text-[#1f3a32] sm:text-6xl">{area.name}</h1>
        <p className="mt-5 text-lg leading-8 text-[#3d3832]">{area.headline}</p>
        <dl className="mt-10 grid gap-4 sm:grid-cols-3">
          {area.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white p-5">
              <dt className="text-xs uppercase tracking-wide text-[#6d6458]">{stat.label}</dt>
              <dd className="mt-2 font-serif text-2xl text-[#1f3a32]">{stat.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-10 space-y-5 text-lg leading-8 text-[#3d3832]">
          {area.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-10">
          <Link className="font-semibold text-[#1f3a32] underline underline-offset-4" href="/demo/neighborhoods">
            All neighborhoods
          </Link>
        </p>
      </div>
    </article>
  )
}
