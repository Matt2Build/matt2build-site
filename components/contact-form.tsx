'use client'

import { FormEvent, useState } from 'react'

type SubmitState = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
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
          message,
          projectType: 'Custom Website Build',
          timeline: 'Not specified',
        }),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setName('')
      setEmail('')
      setMessage('')
      setSubmitState('success')
    } catch {
      setSubmitState('error')
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="section-chip mx-auto mb-4">Contact</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let&apos;s talk</h2>
          <p className="text-gray-400 text-lg">
            Tell me about your business and what you need. I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <form className="p-8 bg-cyber-light/30 rounded-xl border border-cyber-light" onSubmit={onSubmit}>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full px-4 py-3 bg-cyber-dark border border-cyber-light rounded text-white placeholder-gray-500 focus:outline-none focus:border-matrix-500 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full px-4 py-3 bg-cyber-dark border border-cyber-light rounded text-white placeholder-gray-500 focus:outline-none focus:border-matrix-500 transition-colors"
                placeholder="you@yourbusiness.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Tell me about your business</label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full px-4 py-3 bg-cyber-dark border border-cyber-light rounded text-white placeholder-gray-500 focus:outline-none focus:border-matrix-500 transition-colors resize-none"
                placeholder="What does your business do? What do you need your website to do for you?"
              />
            </div>

            {submitState === 'success' && (
              <div className="rounded-lg border border-matrix-500/30 bg-matrix-500/10 px-4 py-3 text-sm text-matrix-400">
                Message sent. I&apos;ll get back to you within 24 hours.
              </div>
            )}

            {submitState === 'error' && (
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                Something went wrong. Try again or email matt2build@gmail.com directly.
              </div>
            )}

            <button
              type="submit"
              disabled={submitState === 'sending'}
              className="w-full px-6 py-4 btn-primary bg-matrix-500 text-cyber-dark font-bold rounded hover:bg-matrix-400 transition-colors disabled:opacity-60"
            >
              {submitState === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Or email me directly at{' '}
          <a href="mailto:matt2build@gmail.com" className="text-matrix-400 hover:underline">
            matt2build@gmail.com
          </a>
        </p>
      </div>
    </section>
  )
}
