import { Monogram } from '@/components/demo/monogram'
import { demoMetadata } from '@/lib/demo-metadata'

export const metadata = demoMetadata(
  'About Jordan Avery',
  'Jordan Avery helps buyers and sellers in Lakeview with the neighborhood, the numbers, and the plan.',
  '/demo/about',
)

export default function AboutDemoPage() {
  return (
    <article className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-16 sm:py-20 lg:grid-cols-[220px_minmax(0,1fr)]">
      <Monogram className="h-40 w-40 text-4xl text-[#1f3a32]" />
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b4f28]">About</p>
        <h1 className="mt-3 font-serif text-4xl text-[#1f3a32] sm:text-6xl">I&apos;m Jordan Avery.</h1>
        <div className="mt-6 max-w-2xl space-y-5 text-lg leading-8 text-[#3d3832]">
          <p>
            I work with buyers and sellers in Lakeview. The first conversation is about the neighborhood, the
            numbers, and what has to happen between now and closing.
          </p>
          <p>
            If you are buying, I&apos;ll help you narrow the streets before you spend a Saturday in the car. If you
            are selling, I&apos;ll walk the house with you and talk through price, prep, and what an offer actually
            says.
          </p>
          <p>Send a note when you want to start. I&apos;ll reply with the next useful step.</p>
        </div>
      </div>
    </article>
  )
}
