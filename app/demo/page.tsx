import Link from 'next/link'
import { DemoPhoto } from '@/components/demo/demo-photo'
import { demoMetadata } from '@/lib/demo-metadata'
import { heroImage, marketSnapshot, neighborhoods } from '@/lib/demo'

const description =
  'Neighborhood know-how, honest numbers, and a clear plan from first showing to closing in Lakeview.'

export const metadata = demoMetadata('Find your place in Lakeview', description, '/demo')

const paths = [
  { href: '/demo/home-value', title: "What's my home worth?", line: 'Get a no-pressure estimate.' },
  { href: '/demo/neighborhoods', title: 'Neighborhood guides', line: 'Walk the streets before you tour.' },
  { href: '/demo/buyers', title: 'Buyer guide', line: 'A clear plan from first showing to closing.' },
  { href: '/demo/sellers', title: 'Seller guide', line: 'Prep, price, and a clean handoff.' },
  { href: '/demo/calculators', title: 'Calculators', line: 'A payment, and what a seller might net.' },
  { href: '/demo/search', title: 'Browse homes', line: 'Start with three homes around Lakeview.' },
]

export default function DemoHomePage() {
  return (
    <>
      <section className="relative min-h-[78vh] overflow-hidden">
        <DemoPhoto image={heroImage} fill priority sizes="100vw" className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612] via-[#1a1612]/45 to-[#1a1612]/15" />
        <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-6xl items-end px-4 pb-16 pt-28 sm:pb-20">
          <div className="max-w-2xl rounded-3xl bg-[#1a1612]/75 p-8 text-[#f7f3ea] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e6d3b0]">Lakeview</p>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] sm:text-7xl">Find your place in Lakeview.</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#f4efe6]/90">
              Neighborhood know-how, honest numbers, and a clear plan from first showing to closing.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/demo/home-value" className="rounded-full bg-[#f4efe6] px-6 py-3 text-center font-semibold text-[#1f3a32] transition-colors hover:bg-white">
                What&apos;s my home worth?
              </Link>
              <Link href="/demo/search" className="rounded-full border border-[#f4efe6] px-6 py-3 text-center font-semibold text-[#f4efe6] transition-colors hover:bg-white/10">
                Start my home search
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20" aria-labelledby="ways-in">
        <h2 id="ways-in" className="font-serif text-4xl text-[#1f3a32]">
          How I can help
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {paths.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-3xl border border-[#1f3a32]/10 bg-white p-7 transition-shadow hover:shadow-lg"
            >
              <h3 className="font-serif text-2xl text-[#1f3a32]">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#5c564e]">{item.line}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#1f3a32] text-[#f4efe6]" aria-labelledby="snapshot">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 id="snapshot" className="font-serif text-4xl">
              Recent market snapshot
            </h2>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d5e4da]">Example data</p>
          </div>
          <dl className="mt-10 grid gap-8 sm:grid-cols-3">
            {marketSnapshot.map((item) => (
              <div key={item.label}>
                <dt className="text-sm text-[#d5e4da]">{item.label}</dt>
                <dd className="mt-2 font-serif text-4xl">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20" aria-labelledby="areas">
        <h2 id="areas" className="font-serif text-4xl text-[#1f3a32]">
          Neighborhoods
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[#3d3832]">
          Three parts of Lakeview, in plain language, so you know the streets before you book a tour.
        </p>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {neighborhoods.map((area) => (
            <li key={area.slug}>
              <Link href={`/demo/neighborhoods/${area.slug}`} className="group block overflow-hidden rounded-3xl bg-white">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <DemoPhoto
                    image={area.image}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-[#1f3a32]">{area.name}</h3>
                  <p className="mt-2 leading-7 text-[#5c564e]">{area.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-[#1f3a32] text-[#f4efe6]">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl">Tell me what you&apos;re looking for.</h2>
          <p className="mt-4 text-lg leading-8 text-[#d5e4da]">
            A neighborhood, a number, or a plan for the house you already have.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/demo/contact" className="rounded-full bg-[#f4efe6] px-6 py-3 font-semibold text-[#1f3a32] transition-colors hover:bg-white">
              Start a conversation
            </Link>
            <Link href="/demo/home-value" className="rounded-full border border-[#f4efe6] px-6 py-3 font-semibold transition-colors hover:bg-white/10">
              What&apos;s my home worth?
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
