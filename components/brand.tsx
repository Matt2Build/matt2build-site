'use client'

import { Outfit } from 'next/font/google'

const outfit = Outfit({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})

export function LogoMark({ className = 'h-9 w-9 shrink-0' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#00ff00" />
      <path fill="#ffffff" d="M38 10h8v14h-8z" />
      <path fill="#ffffff" d="M12 34 32 13 52 34z" />
      <path fill="#ffffff" fillRule="evenodd" d="M17 31h30v22H17zm6 5h18v17H23z" />
      <circle cx="32" cy="41" r="4.8" fill="#ffffff" />
      <path fill="#ffffff" d="M28.6 44h6.8l-1.3 8h-4.2z" />
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
