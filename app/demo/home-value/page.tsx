import { DemoRequestForm } from '@/components/demo/demo-request-form'
import { demoMetadata } from '@/lib/demo-metadata'

export const metadata = demoMetadata(
  "What's my home worth?",
  'Sample home-value request for a fictional Lakeview agent. The form does not send or store what you type.',
  '/demo/home-value',
)

export default function HomeValuePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b4f28]">Home value</p>
      <h1 className="mt-3 font-serif text-4xl text-[#1f3a32] sm:text-5xl">What&apos;s my home worth?</h1>
      <p className="mt-4 text-lg leading-8 text-[#3d3832]">
        Tell the agent the address and how to reach you. On a live site this starts a conversation about price,
        condition, and timing. It is not an automated appraisal.
      </p>
      <div className="mt-8">
        <DemoRequestForm kind="value" />
      </div>
    </article>
  )
}
