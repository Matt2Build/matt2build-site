export function LogoMark({ className = 'w-6 h-6 text-matrix-500' }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <polyline points="4 17 10 11 4 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" x2="20" y1="19" y2="19" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function Wordmark({ className = 'text-xl' }: { className?: string }) {
  return (
    <span className={`${className} font-bold font-mono text-white`}>
      matt<span className="text-matrix-500">2</span>build
    </span>
  )
}

export function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-matrix-500 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 13 4 4L19 7" />
    </svg>
  )
}
