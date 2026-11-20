import Link from 'next/link'
import { DemoPhoto } from '@/components/demo/demo-photo'
import { demoMetadata } from '@/lib/demo-metadata'
import { exampleListings } from '@/lib/demo'

export const metadata = demoMetadata(
  'Browse homes',
  'Browse example homes in Lakeview, then contact Jordan to start a search.',
  '/demo/search',
)

export default function SearchPage() {
  return (
    <article className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b4f28]">Search</p>
      <h1 className="mt-3 font-serif text-4xl text-[#1f3a32] sm:text-6xl">Browse homes</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-[#3d3832]">
        Ready to tour?{' '}
        <Link href="/demo/contact" className="font-semibold text-[#1f3a32] underline underline-offset-4">
          Contact Jordan
        </Link>{' '}
        to start a search.
      </p>
      <ul className="mt-12 grid gap-8 md:grid-cols-3">
        {exampleListings.map((home) => (
          <li key={home.address} className="overflow-hidden rounded-3xl bg-white">
            <div className="relative aspect-[3/2]">
              <DemoPhoto image={home.image} fill sizes="(min-width: 768px) 30vw, 100vw" />
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6b4f28]">Example listing</p>
              <h2 className="mt-2 font-serif text-2xl text-[#1f3a32]">{home.address}</h2>
              <p className="mt-1 text-sm text-[#5c564e]">{home.area}</p>
              <p className="mt-4 font-serif text-3xl text-[#1f3a32]">{home.price}</p>
              <p className="mt-1 text-sm text-[#5c564e]">{home.detail}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <Link href="/demo/neighborhoods" className="rounded-full bg-[#1f3a32] px-6 py-3 text-center font-semibold text-[#f4efe6] transition-colors hover:bg-[#173028]">
          Read the neighborhood guides
        </Link>
        <Link href="/demo/contact" className="rounded-full border border-[#1f3a32] px-6 py-3 text-center font-semibold text-[#1f3a32] transition-colors hover:bg-[#1f3a32]/5">
          Ask a question
        </Link>
      </div>
    </article>
  )
}
