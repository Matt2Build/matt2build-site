'use client'

import { FormEvent, useState } from 'react'
import { TurnstileWidget, useFormShield } from '@/components/form-shield'

const fieldClass =
  'mt-2 w-full rounded-xl border border-[#1f3a32]/20 bg-white px-4 py-3 text-[#1f1a14] placeholder:text-[#8a8175]'

export function DemoRequestForm({ kind }: { kind: 'value' | 'contact' }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const shield = useFormShield()

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const fields = new FormData(event.currentTarget)
    setStatus('sending')
    const market = kind === 'value' ? 'Demo home value' : 'Demo contact'
    const message = kind === 'value'
      ? [`Property address: ${fields.get('address')}`, fields.get('phone') && `Phone: ${fields.get('phone')}`].filter(Boolean).join('\n')
      : fields.get('message')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fields.get('name'), email: fields.get('email'), market, message,
          fax_number: fields.get('fax_number'), form_token: shield.formToken, turnstile_token: shield.turnstileToken,
        }),
      })
      if (!response.ok) throw new Error('Submission failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <p className="rounded-2xl border border-[#1f3a32]/20 bg-white px-5 py-4 leading-7" role="status">
        BrokerWorkshop received your demo inquiry.
      </p>
    )
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      {kind === 'value' ? (
        <div>
          <label htmlFor="address" className="text-sm font-semibold">
            Property address
          </label>
          <input id="address" name="address" maxLength={300} required autoComplete="street-address" className={fieldClass} />
        </div>
      ) : null}
      <div>
        <label htmlFor="demo-name" className="text-sm font-semibold">
          Name
        </label>
        <input id="demo-name" name="name" maxLength={100} required autoComplete="name" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="demo-email" className="text-sm font-semibold">
          Email
        </label>
        <input id="demo-email" name="email" type="email" maxLength={254} required autoComplete="email" className={fieldClass} />
      </div>
      {kind === 'value' ? (
        <div>
          <label htmlFor="phone" className="text-sm font-semibold">
            Phone <span className="font-normal text-[#6d6458]">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" maxLength={40} autoComplete="tel" className={fieldClass} />
        </div>
      ) : (
        <div>
          <label htmlFor="demo-message" className="text-sm font-semibold">
            Message
          </label>
          <textarea id="demo-message" name="message" maxLength={4000} required rows={5} className={fieldClass} />
        </div>
      )}
      <p className="text-sm">This demo sends your inquiry to BrokerWorkshop.</p>
      <div className="hp-field" aria-hidden="true"><label>Fax<input name="fax_number" tabIndex={-1} autoComplete="off" /></label></div>
      <TurnstileWidget onToken={shield.setTurnstileToken} />
      {status === 'error' && <p role="alert">Your inquiry could not be sent. Try again or email matt2build@gmail.com.</p>}
      <button type="submit" disabled={status === 'sending' || !shield.ready || (shield.turnstileRequired && !shield.turnstileToken)} className="rounded-full bg-[#1f3a32] px-6 py-3 font-semibold text-[#f4efe6]">
        {kind === 'value' ? 'Request a value conversation' : 'Send message'}
      </button>
    </form>
  )
}
