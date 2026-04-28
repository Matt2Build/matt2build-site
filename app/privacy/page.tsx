import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Matt 2 Build',
  description: 'Privacy policy for Matt 2 Build and Cleo-powered workflows.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-900 via-black to-neutral-900 text-slate-100 antialiased">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="card p-8 md:p-12">
          <div className="section-chip mb-5">Matt 2 Build</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: April 19, 2026</p>

          <div className="space-y-8 text-gray-300 leading-8">
            <section>
              <p>
                Matt 2 Build and connected assistant workflows, including Cleo and OpenClaw-based
                automations, may access Google services you explicitly authorize in order to help manage email,
                calendar events, documents, spreadsheets, contacts, and related productivity tasks.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">What data may be accessed</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gmail message content and metadata you authorize for review or drafting</li>
                <li>Google Calendar event details and scheduling data</li>
                <li>Google Docs, Sheets, and Drive files used in your workflows</li>
                <li>Google Contacts details used for lookup and communication tasks</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">How data is used</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To generate summaries, briefings, drafts, and workflow assistance you request</li>
                <li>To create, update, or organize documents, spreadsheets, and calendar entries</li>
                <li>To support assistant automations running on authorized devices and sessions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Storage and sharing</h2>
              <p>
                Authorized data may be processed through local devices, trusted cloud services, and assistant
                runtimes used to complete the requested task. Data is not sold. Data is not shared with third
                parties except where necessary to operate the requested service or where required by law.
              </p>
              <p className="mt-4">
                App&apos;s use of information received from Google APIs will adhere to the Google API Services User
                Data Policy, including the Limited Use requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Your choices</h2>
              <p>
                You may revoke Google access at any time through your Google account permissions. You may also
                request deletion of locally stored workflow data or tokens by contacting the address below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Contact</h2>
              <p>
                For privacy questions or deletion requests, contact{' '}
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
