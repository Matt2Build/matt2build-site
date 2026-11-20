import { MortgageCalculator, NetProceedsCalculator } from '@/components/demo/calculators'
import { demoMetadata } from '@/lib/demo-metadata'

export const metadata = demoMetadata(
  'Payment and net-proceeds calculators',
  'Sample mortgage payment and seller net-proceeds calculators. The math runs in the browser and is not a loan offer.',
  '/demo/calculators',
)

export default function CalculatorsPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-8 px-4 py-14">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b4f28]">Calculators</p>
        <h1 className="mt-3 font-serif text-4xl text-[#1f3a32] sm:text-5xl">Run the numbers yourself.</h1>
        <p className="mt-4 text-lg leading-8 text-[#3d3832]">
          Both calculators run in your browser. Nothing is sent. Change the inputs and the result updates.
        </p>
      </div>
      <MortgageCalculator />
      <NetProceedsCalculator />
    </article>
  )
}
