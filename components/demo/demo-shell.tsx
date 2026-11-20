import Link from 'next/link'
import { demoNav } from '@/lib/demo'

export function DemoShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="demo-site relative z-10 min-h-screen bg-[#f4efe6] text-[#1f1a14]">
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <div className="sticky top-0 z-40">
        <div className="bg-[#1f3a32] text-[#f4efe6]">
          <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-sm">
            <p>
              Demo site by{' '}
              <a className="underline underline-offset-2" href="https://matt2build.com">
                Matt2Build
              </a>
              . Sample agent and example data.
            </p>
            <Link className="font-semibold underline underline-offset-2" href="/contact">
              Get a site like this
            </Link>
          </div>
        </div>
        <header className="border-b border-[#1f3a32]/15 bg-[#f4efe6]/95 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
            <Link href="/demo" className="leading-tight">
              <span className="block font-serif text-xl text-[#1f3a32]">Jordan Avery</span>
              <span className="block text-xs tracking-[0.16em] uppercase text-[#6d6458]">Realtor · Lakeview</span>
            </Link>
            <nav className="hidden lg:flex items-center gap-5 text-sm" aria-label="Demo">
              {demoNav.map((item) => (
                <Link key={item.href} href={item.href} className="text-[#3d3832] hover:text-[#1f3a32]">
                  {item.label}
                </Link>
              ))}
            </nav>
            <details className="lg:hidden relative">
              <summary className="cursor-pointer list-none rounded-full border border-[#1f3a32] px-4 py-2 text-sm font-semibold text-[#1f3a32]">
                Menu
              </summary>
              <nav
                className="absolute right-0 mt-2 w-52 rounded-2xl border border-[#1f3a32]/15 bg-white p-3 shadow-lg"
                aria-label="Demo"
              >
                {demoNav.map((item) => (
                  <Link key={item.href} href={item.href} className="block rounded-lg px-3 py-2 text-sm hover:bg-[#f4efe6]">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </details>
          </div>
        </header>
      </div>
      <main id="content">{children}</main>
      <footer className="border-t border-[#1f3a32]/15">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-[#5c564e]">
          <p>Jordan Avery is a fictional agent. Lakeview is a sample market. Example data only.</p>
          <p>
            <a className="underline" href="https://matt2build.com">
              matt2build.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
