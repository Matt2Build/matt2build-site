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
  })
  started = true
}

export function syncDemoProperty(pathname: string): void {
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY || typeof window === 'undefined') return
  initAnalytics()
  if (pathname.startsWith('/demo')) {
    posthog.register({ site: 'demo' })
  } else {
    posthog.unregister('site')
  }
}

export function captureEvent(event: string, properties?: Record<string, string>): void {
  if (typeof window === 'undefined' || !process.env.NEXT_PUBLIC_POSTHOG_KEY) return
  initAnalytics()
  const onDemo = window.location.pathname.startsWith('/demo')
  posthog.capture(event, {
    ...properties,
    ...(onDemo ? { site: 'demo' } : {}),
  })
}
