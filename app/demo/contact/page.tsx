import { DemoRequestForm } from '@/components/demo/demo-request-form'
import { demoMetadata } from '@/lib/demo-metadata'

export const metadata = demoMetadata(
  'Contact Jordan Avery',
  'Sample contact form for a fictional agent. Submitting it does not send email or store a message.',
  '/demo/contact',
)

export default function DemoContactPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b4f28]">Contact</p>
      <h1 className="mt-3 font-serif text-4xl text-[#1f3a32] sm:text-5xl">Contact Jordan Avery</h1>
      <p className="mt-4 text-lg leading-8 text-[#3d3832]">
        On a live site, this form delivers a message to the agent. Here it only shows what success looks like.
      </p>
      <div className="mt-8">
        <DemoRequestForm kind="contact" />
      </div>
    </article>
  )
}
