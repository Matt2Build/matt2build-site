import Link from 'next/link'
import { LogoMark, Wordmark } from '@/components/icons'
import { CONTACT_EMAIL, productLinks, SITE_NAME } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-cyber-light/30 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <LogoMark className="w-5 h-5 text-matrix-500" />
            <Wordmark className="text-lg" />
          </div>
          <p className="text-gray-400 text-sm leading-6">Custom websites and tools for real estate agents.</p>
        </div>

        <div>
          <p className="text-xs font-mono uppercase tracking-wider text-matrix-400 mb-3">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="text-gray-200 hover:text-matrix-400" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <Link className="text-gray-200 hover:text-matrix-400" href="/teardown">
                Site teardown
              </Link>
            </li>
            <li>
              <Link className="text-gray-200 hover:text-matrix-400" href="/brokerage-switch">
                Switching brokerages
              </Link>
            </li>
            <li>
              <Link className="text-gray-200 hover:text-matrix-400" href="/privacy">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="text-gray-200 hover:text-matrix-400" href="/terms">
                Terms
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-mono uppercase tracking-wider text-matrix-400 mb-3">Products</p>
          <ul className="space-y-2 text-sm">
            {productLinks.map((project) => (
              <li key={project.id}>
                <a
                  className="text-gray-200 hover:text-matrix-400"
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-sm text-gray-500">
        © 2026 {SITE_NAME}. Built by Matt Salit, a licensed realtor.
      </p>
    </footer>
  )
}
