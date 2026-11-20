'use client'

import { useEffect, useState } from 'react'

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

type TurnstileApi = {
  render: (
    element: HTMLElement,
    options: { sitekey: string; callback: (token: string) => void; 'error-callback': () => void },
  ) => string
  remove: (widgetId: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

export function useFormShield() {
  const [formToken, setFormToken] = useState('')
  const [ready, setReady] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState('')

  useEffect(() => {
    let cancelled = false
    fetch('/api/form-token')
      .then((response) => response.json())
      .then((data: { token?: string }) => {
        if (!cancelled) setFormToken(typeof data.token === 'string' ? data.token : '')
      })
      .catch(() => {
        if (!cancelled) setFormToken('')
      })
      .finally(() => {
        if (!cancelled) setReady(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return {
    formToken,
    ready,
    turnstileToken,
    setTurnstileToken,
    turnstileRequired: Boolean(SITE_KEY),
  }
}

export function TurnstileWidget({ onToken }: { onToken: (token: string) => void }) {
  const [element, setElement] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!SITE_KEY || !element) return

    let widgetId = ''
    let script: HTMLScriptElement | null = null
    let cancelled = false

    const render = () => {
      if (cancelled || !window.turnstile || !element) return
      widgetId = window.turnstile.render(element, {
        sitekey: SITE_KEY,
        callback: (token) => onToken(token),
        'error-callback': () => onToken(''),
      })
    }

    if (window.turnstile) {
      render()
    } else {
      script = document.createElement('script')
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
      script.async = true
      script.onload = render
      document.head.appendChild(script)
    }

    return () => {
      cancelled = true
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId)
      script?.remove()
    }
  }, [element, onToken])

  if (!SITE_KEY) return null
  return <div ref={setElement} className="min-h-16" />
}
