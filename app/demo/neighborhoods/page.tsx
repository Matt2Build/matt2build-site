import Link from 'next/link'
import { DemoPhoto } from '@/components/demo/demo-photo'
import { demoMetadata } from '@/lib/demo-metadata'
import { neighborhoods } from '@/lib/demo'

export const metadata = demoMetadata(
  'Lakeview neighborhoods',
  'North Shore, Hillcrest, and Market Square: three ways to live in Lakeview.',
  '/demo/neighborhoods',
)

export default function NeighborhoodsPage() {
  return (
    <article className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b4f28]">Neighborhoods</p>
      <h1 className="mt-3 max-w-3xl font-serif text-4xl text-[#1f3a32] sm:text-6xl">Know the streets before you tour.</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-[#3d3832]">
        North Shore, Hillcrest, and Market Square. Each one feels different once you are on the block.
      </p>
      <ul className="mt-12 grid gap-8 md:grid-cols-3">
        {neighborhoods.map((area) => (
          <li key={area.slug} className="overflow-hidden rounded-3xl bg-white">
            <Link href={`/demo/neighborhoods/${area.slug}`} className="group block">
              <div className="relative aspect-[3/2] overflow-hidden">
                <DemoPhoto
                  image={area.image}
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <h2 className="font-serif text-2xl text-[#1f3a32]">{area.name}</h2>
                <p className="mt-2 leading-7 text-[#5c564e]">{area.headline}</p>
              </div>
            </Link>
            <dl className="space-y-2 px-6 pb-6 text-sm">
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
