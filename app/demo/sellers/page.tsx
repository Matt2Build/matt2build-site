import Link from 'next/link'
import { demoMetadata } from '@/lib/demo-metadata'

export const metadata = demoMetadata(
  'Seller guide',
  'A sample seller checklist for a fictional Lakeview agent site, from prep through closing.',
  '/demo/sellers',
)

const steps = [
  'Walk the house the way a stranger would, and fix what is cheap and obvious.',
  'Price from recent comparable sales your agent pulls, not from a hope.',
  'Decide what stays and what goes, and write it down before the first showing.',
  'Show the house when people can actually come, and keep the path through it clear.',
  'Read every offer for price, timing, financing, and what happens after inspection.',
  'Use a net-proceeds estimate before you accept, then close on the terms you signed.',
]

export default function SellersPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b4f28]">Sellers</p>
      <h1 className="mt-3 font-serif text-4xl text-[#1f3a32] sm:text-5xl">A seller guide, from prep to closing.</h1>
      <p className="mt-4 text-lg leading-8 text-[#3d3832]">
        A seller page gives people the sequence before they ask what their house might bring.
      </p>
      <ol className="mt-8 space-y-4">
        {steps.map((step, index) => (
          <li key={step} className="flex gap-4 rounded-2xl bg-white p-5">
            <span className="font-serif text-2xl text-[#6b4f28]">{index + 1}</span>
            <p className="leading-7">{step}</p>
          </li>
        ))}
      </ol>
      <p className="mt-8">
        <Link className="font-semibold text-[#1f3a32] underline" href="/demo/calculators">
          Try the net-proceeds calculator
        </Link>
      </p>
    </article>
  )
}
