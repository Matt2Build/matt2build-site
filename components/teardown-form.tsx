'use client'

import { FormEvent, useState } from 'react'
import { TurnstileWidget, useFormShield } from '@/components/form-shield'
import { captureEvent } from '@/lib/analytics'

type SubmitState = 'idle' | 'sending' | 'success' | 'error'

export function TeardownForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [market, setMarket] = useState('')
  const [goals, setGoals] = useState('')
  const [faxNumber, setFaxNumber] = useState('')
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const shield = useFormShield()
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitState('sending')
    setErrorMessage('')

    try {
      const response = await fetch('/api/teardown', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          website,
          market,
          goals,
          fax_number: faxNumber,
          form_token: shield.formToken,
          turnstile_token: shield.turnstileToken,
        }),
      })

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null
        setErrorMessage(payload?.error || 'Something went wrong.')
        setSubmitState('error')
        return
      }

      setName('')
      setEmail('')
      setWebsite('')
      setMarket('')
      setGoals('')
      setFaxNumber('')
      setSubmitState('success')
      captureEvent('teardown_requested', { location: 'teardown_form' })
    } catch {
      setErrorMessage('Something went wrong.')
      setSubmitState('error')
    }
  }

  return (
    <form className="p-6 sm:p-8 bg-cyber-light/30 rounded-xl border border-cyber-light" onSubmit={onSubmit}>
      <div className="space-y-5">
        <div>
          <label htmlFor="teardown-name" className="block text-sm font-medium text-gray-200 mb-2">
            Name
          </label>
          <input
            id="teardown-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            maxLength={100}
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full px-4 py-3 bg-cyber-dark border border-cyber-light rounded text-white placeholder-gray-500 focus:outline-none focus:border-matrix-500"
          />
        </div>
        <div>
          <label htmlFor="teardown-email" className="block text-sm font-medium text-gray-200 mb-2">
            Email
          </label>
          <input
            id="teardown-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={254}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full px-4 py-3 bg-cyber-dark border border-cyber-light rounded text-white placeholder-gray-500 focus:outline-none focus:border-matrix-500"
          />
        </div>
        <div>
          <label htmlFor="teardown-website" className="block text-sm font-medium text-gray-200 mb-2">
            Current website URL
          </label>
          <input
            id="teardown-website"
            name="website"
            type="url"
            required
            inputMode="url"
            maxLength={300}
            placeholder="https://example.com"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            className="w-full px-4 py-3 bg-cyber-dark border border-cyber-light rounded text-white placeholder-gray-500 focus:outline-none focus:border-matrix-500"
          />
        </div>
        <div>
          <label htmlFor="teardown-market" className="block text-sm font-medium text-gray-200 mb-2">
            Market <span className="text-gray-500">(optional)</span>
          </label>
          <input
            id="teardown-market"
            name="market"
            type="text"
            maxLength={160}
            value={market}
            onChange={(event) => setMarket(event.target.value)}
            className="w-full px-4 py-3 bg-cyber-dark border border-cyber-light rounded text-white placeholder-gray-500 focus:outline-none focus:border-matrix-500"
          />
        </div>
        <div>
          <label htmlFor="teardown-goals" className="block text-sm font-medium text-gray-200 mb-2">
            What you want from the site <span className="text-gray-500">(optional)</span>
          </label>
          <textarea
            id="teardown-goals"
            name="goals"
            rows={5}
            maxLength={4000}
            value={goals}
            onChange={(event) => setGoals(event.target.value)}
            className="w-full px-4 py-3 bg-cyber-dark border border-cyber-light rounded text-white placeholder-gray-500 focus:outline-none focus:border-matrix-500 resize-y"
          />
        </div>
        <div className="hp-field" aria-hidden="true">
          <label htmlFor="teardown-fax">Fax</label>
          <input
            id="teardown-fax"
            name="fax_number"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={faxNumber}
            onChange={(event) => setFaxNumber(event.target.value)}
          />
        </div>
        <div aria-live="polite">
          {submitState === 'success' ? (
            <p className="rounded-lg border border-matrix-500/30 bg-matrix-500/10 px-4 py-3 text-sm text-matrix-300">
              Request sent. I&apos;ll reply by email with the teardown.
            </p>
          ) : null}
          {submitState === 'error' ? (
            <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {errorMessage} You can also email{' '}
              <a className="underline" href="mailto:matt2build@gmail.com">
                matt2build@gmail.com
              </a>
              .
            </p>
          ) : null}
        </div>
        <TurnstileWidget onToken={shield.setTurnstileToken} />
        <button
          type="submit"
          disabled={submitState === 'sending' || !shield.ready || (shield.turnstileRequired && !shield.turnstileToken)}
          aria-busy={submitState === 'sending'}
          className="w-full btn-primary cursor-pointer disabled:opacity-60 disabled:cursor-wait"
        >
          {submitState === 'sending' ? 'Sending…' : 'Request a teardown'}
        </button>
      </div>
    </form>
  )
}
