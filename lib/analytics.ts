'use client'

import posthog from 'posthog-js'

let started = false

function uiHost(): string {
  const configured = process.env.NEXT_PUBLIC_POSTHOG_HOST
  if (!configured) return 'https://us.posthog.com'
  return configured.replace('://us.i.posthog.com', '://us.posthog.com').replace(/\/$/, '')
}

export function initAnalytics(): void {
  if (started || typeof window === 'undefined') return
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
  if (!key) return

  posthog.init(key, {
    api_host: '/ingest',
    ui_host: uiHost(),
    persistence: 'memory',
    autocapture: true,
    capture_pageview: 'history_change',
    capture_pageleave: false,
    disable_session_recording: true,
    disable_surveys: true,
    before_send: (event) => {
      event.properties.site = window.location.pathname.startsWith('/demo') ? 'demo' : 'main'
      return event
    },
  })
  started = true
}

export function captureEvent(event: string, properties?: Record<string, string>): void {
  if (typeof window === 'undefined' || !process.env.NEXT_PUBLIC_POSTHOG_KEY) return
  initAnalytics()
  posthog.capture(event, properties)
}
