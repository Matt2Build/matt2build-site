import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service | Matt 2 Build',
  description: 'Terms of service for Matt 2 Build and Cleo-powered workflows.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-900 via-black to-neutral-900 text-slate-100 antialiased">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="card p-8 md:p-12">
          <div className="section-chip mb-5">Matt 2 Build</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: April 19, 2026</p>

          <div className="space-y-8 text-gray-300 leading-8">
            <section>
              <p>
                These terms govern access to Matt 2 Build sites, assistant workflows, and related automation
                services, including Cleo and OpenClaw-powered tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Acceptable use</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the services only for lawful purposes</li>
                <li>Do not use the services to gain unauthorized access to accounts or data</li>
                <li>Review generated outputs before relying on them for important decisions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Service availability</h2>
              <p>
                Features may change, be suspended, or be removed at any time. Access may depend on third-party
                services such as Google, Vercel, and other integrated providers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Limitation of liability</h2>
              <p>
                Services are provided on an as-is basis without warranties of any kind. To the fullest extent
                permitted by law, Matt 2 Build is not liable for indirect, incidental, or consequential damages
                arising from use of the site or connected assistant workflows.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Contact</h2>
              <p>
                Questions about these terms can be sent to{' '}
                <a className="text-matrix-400 hover:underline" href="mailto:matt2build@gmail.com">
                  matt2build@gmail.com
                </a>
                .
              </p>
            </section>
          </div>

          <div className="mt-10 border-t border-cyber-light/10 pt-6">
            <Link href="/" className="text-matrix-400 hover:underline">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
