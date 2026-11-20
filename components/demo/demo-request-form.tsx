'use client'

import { FormEvent, useState } from 'react'

const fieldClass =
  'mt-2 w-full rounded-xl border border-[#1f3a32]/20 bg-white px-4 py-3 text-[#1f1a14] placeholder:text-[#8a8175]'

export function DemoRequestForm({ kind }: { kind: 'value' | 'contact' }) {
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <p className="rounded-2xl border border-[#1f3a32]/20 bg-white px-5 py-4 leading-7" role="status">
        This is a demo. Nothing was sent or saved.
        {kind === 'value'
          ? ' On a live site, this home-value request would go to the agent.'
          : ' On a live site, this message would go to the agent.'}
      </p>
    )
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <p className="text-sm text-[#5c564e]">Demo only. This form does not send email or store what you type.</p>
      {kind === 'value' ? (
        <div>
          <label htmlFor="address" className="text-sm font-semibold">
            Property address
          </label>
          <input id="address" name="address" required autoComplete="street-address" className={fieldClass} />
        </div>
      ) : null}
      <div>
        <label htmlFor="demo-name" className="text-sm font-semibold">
          Name
        </label>
        <input id="demo-name" name="name" required autoComplete="name" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="demo-email" className="text-sm font-semibold">
          Email
        </label>
        <input id="demo-email" name="email" type="email" required autoComplete="email" className={fieldClass} />
      </div>
      {kind === 'value' ? (
        <div>
          <label htmlFor="phone" className="text-sm font-semibold">
            Phone <span className="font-normal text-[#6d6458]">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </div>
      ) : (
        <div>
          <label htmlFor="demo-message" className="text-sm font-semibold">
            Message
          </label>
          <textarea id="demo-message" name="message" required rows={5} className={fieldClass} />
        </div>
      )}
      <button type="submit" className="rounded-full bg-[#1f3a32] px-6 py-3 font-semibold text-[#f4efe6]">
        {kind === 'value' ? 'Request a value conversation' : 'Send message'}
      </button>
    </form>
  )
}
