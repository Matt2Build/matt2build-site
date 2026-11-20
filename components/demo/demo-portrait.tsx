export function DemoPortrait({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 760"
      role="img"
      aria-label="Illustrated portrait of Jordan Avery, a fictional sample agent. Not a photograph of a real person."
    >
      <rect width="640" height="760" fill="#e7efe8" />
      <path d="M0 520 C120 470 200 560 320 530 C460 494 520 580 640 540 L640 760 L0 760 Z" fill="#c9ddd0" />
      <path d="M40 620 C160 560 250 650 400 600 C500 568 560 640 640 610 L640 760 L0 760 Z" fill="#1f3a32" />
      <circle cx="250" cy="250" r="92" fill="#f3d2b5" />
      <path d="M168 250 C168 150 210 112 250 112 C330 112 352 176 348 236 C344 292 300 348 250 348 C196 348 168 312 168 250 Z" fill="#2a2420" />
      <path d="M188 214 C210 168 292 160 328 206 C300 186 230 188 188 214 Z" fill="#1a1614" />
      <rect x="300" y="360" width="250" height="280" rx="120" fill="#f7f3ea" />
      <path d="M330 430 H520" stroke="#1f3a32" strokeWidth="8" />
      <path d="M360 470 H490" stroke="#c4a574" strokeWidth="6" />
      <circle cx="470" cy="180" r="46" fill="none" stroke="#c4a574" strokeWidth="8" />
      <path d="M470 146 V214 M452 180 H488" stroke="#c4a574" strokeWidth="6" />
    </svg>
  )
}
