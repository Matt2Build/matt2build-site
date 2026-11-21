'use client'

import { useId } from 'react'
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})

export function LogoMark({ className = 'h-9 w-9 shrink-0' }: { className?: string }) {
  const maskId = `keyhole-${useId().replace(/:/g, '')}`
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
          <rect width="64" height="64" fill="#fff" />
          <circle cx="32" cy="40.5" r="4" fill="#000" />
          <path d="M30.3 42.5h3.4L35.8 50h-7.6z" fill="#000" />
        </mask>
      </defs>
      <rect width="64" height="64" rx="14" fill="#00ff00" />
      <path fill="#ffffff" d="M38 10h8v14h-8z" />
      <path fill="#ffffff" d="M12 34 32 13 52 34z" />
      <path fill="#ffffff" mask={`url(#${maskId})`} d="M17 31h30v22H17z" />
    </svg>
  )
}

export function Wordmark({ className = 'text-lg sm:text-xl' }: { className?: string }) {
  return (
    <span className={`${outfit.className} ${className} font-bold leading-none tracking-tight whitespace-nowrap`}>
      <span className="text-white">Broker</span>
      <span className="text-matrix-500">Workshop</span>
    </span>
  )
}
