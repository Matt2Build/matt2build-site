export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="text-xl font-semibold">Matt2Build</div>
        <nav className="space-x-6 text-sm opacity-80">
          <a href="#case-studies" className="hover:underline">Case studies</a>
          <a href="#capabilities" className="hover:underline">Capabilities</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Product engineering, AI agents, and infrastructure</h1>
        <p className="mt-6 text-lg opacity-80">Designing deployable products, automation, and tooling that scale. We build web apps, native apps, agent skills, and the infra to run them.</p>
        <div className="mt-8 flex justify-center gap-4">
          <a className="px-5 py-3 bg-sky-500 text-black font-semibold rounded" href="mailto:matt2build@gmail.com">Work with us</a>
          <a className="px-5 py-3 border border-neutral-700 rounded" href="#case-studies">See case studies</a>
        </div>
      </section>

      <section id="capabilities" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-neutral-800 rounded">
            <h3 className="font-medium">Product engineering</h3>
            <p className="mt-2 text-sm opacity-80">Next.js, native apps, design-to-deploy pipelines, analytics.</p>
          </div>
          <div className="p-6 bg-neutral-800 rounded">
            <h3 className="font-medium">AI & agents</h3>
            <p className="mt-2 text-sm opacity-80">Agent skills, prompt engineering, Claude/GPT integrations, automation.</p>
          </div>
          <div className="p-6 bg-neutral-800 rounded">
            <h3 className="font-medium">Infrastructure & ops</h3>
            <p className="mt-2 text-sm opacity-80">Vercel, monitoring, CI, deployment automation, observability.</p>
          </div>
        </div>
      </section>

      <section id="case-studies" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Featured case study — GridView</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm opacity-80">GridView — multi-window workspace for power users. Built with a focus on UX, deployment cadence, and extensibility.</p>
            <ul className="mt-4 text-sm opacity-80 list-disc ml-5">
              <li>Roles: product, frontend, deployment, analytics</li>
              <li>Repo: <a className="text-sky-400" href="https://github.com/Matt2Build/gridviewpro.com">gridviewpro.com</a></li>
              <li>Live demo: <a className="text-sky-400" href="https://gridviewpro.com">gridviewpro.com</a></li>
            </ul>
          </div>
          <div className="h-48 bg-neutral-800 rounded flex items-center justify-center text-neutral-500">Screenshot placeholder</div>
        </div>
      </section>

      <footer id="contact" className="max-w-6xl mx-auto px-6 py-8 border-t border-neutral-800">
        <div className="flex items-center justify-between">
          <div className="text-sm opacity-80">© Matt2Build</div>
          <div className="space-x-4 text-sm">
            <a className="opacity-80 hover:underline" href="https://github.com/Matt2Build">GitHub</a>
            <a className="opacity-80 hover:underline" href="https://matt2build-site.vercel.app">Vercel</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
