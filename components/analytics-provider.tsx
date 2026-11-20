'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { initAnalytics, syncDemoProperty } from '@/lib/analytics'

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    initAnalytics()
  }, [])

  useEffect(() => {
    syncDemoProperty(pathname)
  }, [pathname])

  return children
}
