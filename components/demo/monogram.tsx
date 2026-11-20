export function Monogram({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border border-current font-serif leading-none ${className}`}
      aria-hidden="true"
    >
      JA
    </span>
  )
}
