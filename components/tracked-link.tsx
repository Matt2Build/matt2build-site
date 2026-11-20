'use client'

import Link from 'next/link'
import type { ComponentProps } from 'react'
import { captureEvent } from '@/lib/analytics'

type TrackedLinkProps = ComponentProps<typeof Link> & {
  event: string
  properties?: Record<string, string>
}

export function TrackedLink({ event, properties, onClick, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(clickEvent) => {
        captureEvent(event, properties)
        onClick?.(clickEvent)
      }}
    />
  )
}
