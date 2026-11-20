import { demoMetadata } from '@/lib/demo-metadata'

export const metadata = demoMetadata(
  'Buyer guide',
  'A sample buyer checklist for a fictional Lakeview agent site: budget, tours, offers, inspections, and closing.',
  '/demo/buyers',
)

const steps = [
  'Write down the payment you can live with, then talk with a lender before you fall for a house.',
  'Tour with a short list: light, layout, street, and the repairs you can see.',
  'Ask for the documents that come with the house, and read them before you write.',
  'Make an offer with the terms you mean, including what happens if the inspection finds a problem.',
  'Walk the inspection. Decide what to repair, what to credit, and what to walk away from.',
  'Close when the title, the loan, and the walkthrough all match what you agreed to.',
]

export default function BuyersPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b4f28]">Buyers</p>
      <h1 className="mt-3 font-serif text-4xl text-[#1f3a32] sm:text-5xl">A buyer guide you can follow.</h1>
      <p className="mt-4 text-lg leading-8 text-[#3d3832]">
        This is the sample path a buyer site can spell out. It is general education, not advice for a specific house.
      </p>
      <ol className="mt-8 space-y-4">
        {steps.map((step, index) => (
          <li key={step} className="flex gap-4 rounded-2xl bg-white p-5">
            <span className="font-serif text-2xl text-[#6b4f28]">{index + 1}</span>
            <p className="leading-7">{step}</p>
          </li>
        ))}
      </ol>
    </article>
  )
}
