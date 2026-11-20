import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <div className="grid-overlay" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-matrix-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-matrix-500/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <SiteHeader />
      <main id="content" className="relative z-10">
        {children}
      </main>
      <SiteFooter />
    </>
  )
}
