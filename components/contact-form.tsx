'use client'

import { FormEvent, useState } from 'react'

type SubmitState = 'idle' | 'sending' | 'success' | 'error'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [market, setMarket] = useState('')
  const [message, setMessage] = useState('')
  const [faxNumber, setFaxNumber] = useState('')
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitState('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          market,
          message,
          fax_number: faxNumber,
        }),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setName('')
      setEmail('')
      setMarket('')
      setMessage('')
      setFaxNumber('')
      setSubmitState('success')
    } catch {
      setSubmitState('error')
    }
  }

  return (
    <form className="p-6 sm:p-8 bg-cyber-light/30 rounded-xl border border-cyber-light" onSubmit={onSubmit} noValidate={false}>
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            maxLength={100}
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full px-4 py-3 bg-cyber-dark border border-cyber-light rounded text-white placeholder-gray-500 focus:outline-none focus:border-matrix-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={254}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full px-4 py-3 bg-cyber-dark border border-cyber-light rounded text-white placeholder-gray-500 focus:outline-none focus:border-matrix-500"
            placeholder="you@brokerage.com"
          />
        </div>

        <div>
          <label htmlFor="market" className="block text-sm font-medium text-gray-200 mb-2">
            Market / brokerage
          </label>
          <input
            id="market"
            name="market"
            type="text"
            required
            maxLength={160}
            value={market}
            onChange={(event) => setMarket(event.target.value)}
            className="w-full px-4 py-3 bg-cyber-dark border border-cyber-light rounded text-white placeholder-gray-500 focus:outline-none focus:border-matrix-500"
            placeholder="City, state, and brokerage"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
            What you need
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            maxLength={4000}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="w-full px-4 py-3 bg-cyber-dark border border-cyber-light rounded text-white placeholder-gray-500 focus:outline-none focus:border-matrix-500 resize-y"
            placeholder="A website, a tool, or both, and what you want it to do."
          />
        </div>

        <div className="hp-field" aria-hidden="true">
          <label htmlFor="fax_number">Fax</label>
          <input
            id="fax_number"
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
              Message sent. I&apos;ll reply within one business day.
            </p>
          ) : null}
          {submitState === 'error' ? (
            <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              Something went wrong. Email{' '}
              <a className="underline" href="mailto:matt2build@gmail.com">
                matt2build@gmail.com
              </a>{' '}
              and I&apos;ll reply from there.
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={submitState === 'sending'}
          aria-busy={submitState === 'sending'}
          className="w-full btn-primary cursor-pointer disabled:opacity-60 disabled:cursor-wait"
        >
          {submitState === 'sending' ? 'Sending…' : 'Send message'}
        </button>
      </div>
    </form>
  )
}
