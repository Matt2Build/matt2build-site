export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center font-bold text-slate-900">M2</div>
          <div className="text-lg font-semibold tracking-tight">Matt2Build</div>
        </div>
        <nav className="space-x-6 text-sm opacity-90">
          <a href="#case-studies" className="hover:underline">Case studies</a>
          <a href="#capabilities" className="hover:underline">Capabilities</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Product engineering, AI agents, and infrastructure</h1>
        <p className="mt-4 text-lg opacity-80 max-w-2xl mx-auto">We design and ship reliable products and automation — from prototype to observability. Fast iterations, pragmatic design, and production-ready engineering.</p>
        <div className="mt-8 flex justify-center gap-4">
          <a className="px-6 py-3 bg-gradient-to-r from-sky-400 to-indigo-500 text-slate-900 font-semibold rounded-md shadow-md" href="mailto:matt2build@gmail.com">Work with us</a>
          <a className="px-6 py-3 border border-slate-700 rounded-md text-slate-200" href="#case-studies">See case studies</a>
        </div>
      </section>

      <section id="capabilities" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-slate-100">Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-800/60 backdrop-blur rounded-lg border border-slate-700">
            <h3 className="font-medium text-sky-300">Product engineering</h3>
            <p className="mt-2 text-sm opacity-80">Next.js, native apps, design-to-deploy pipelines, analytics.</p>
          </div>
          <div className="p-6 bg-slate-800/60 backdrop-blur rounded-lg border border-slate-700">
            <h3 className="font-medium text-indigo-300">AI & agents</h3>
            <p className="mt-2 text-sm opacity-80">Agent skills, prompt engineering, Claude/GPT integrations, automation.</p>
          </div>
          <div className="p-6 bg-slate-800/60 backdrop-blur rounded-lg border border-slate-700">
            <h3 className="font-medium text-teal-300">Infrastructure & ops</h3>
            <p className="mt-2 text-sm opacity-80">Vercel, monitoring, CI, deployment automation, observability.</p>
          </div>
        </div>
      </section>

      <section id="case-studies" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-slate-100">Featured case study — GridView</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm opacity-80">GridView — multi-window workspace for power users. Built with a focus on UX, deployment cadence, and extensibility.</p>
            <ul className="mt-4 text-sm opacity-80 list-disc ml-5">
              <li>Roles: product, frontend, deployment, analytics</li>
              <li>Repo: <a className="text-sky-300" href="https://github.com/Matt2Build/gridviewpro.com">gridviewpro.com</a></li>
              <li>Live demo: <a className="text-sky-300" href="https://gridviewpro.com">gridviewpro.com</a></li>
            </ul>
          </div>
          <div className="h-60 bg-gradient-to-br from-slate-800/40 to-slate-700/30 rounded-lg flex items-center justify-center text-slate-500">Screenshot placeholder</div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-slate-100">Approach</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-slate-800/50 rounded">
            <h4 className="font-medium">Design-first</h4>
            <p className="mt-2 text-sm opacity-80">Clear UI/UX that scales with product goals.</p>
          </div>
          <div className="p-4 bg-slate-800/50 rounded">
            <h4 className="font-medium">Iterate fast</h4>
            <p className="mt-2 text-sm opacity-80">Short feedback loops and production rollouts.</p>
          </div>
          <div className="p-4 bg-slate-800/50 rounded">
            <h4 className="font-medium">Reliable ops</h4>
            <p className="mt-2 text-sm opacity-80">Observability, CI, and deployment safety checks.</p>
          </div>
        </div>
      </section>

      <footer id="contact" className="max-w-6xl mx-auto px-6 py-8 border-t border-slate-700 mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm opacity-80">© Matt2Build</div>
          <div className="space-x-4 text-sm">
            <a className="opacity-80 hover:underline" href="https://github.com/Matt2Build">GitHub</a>
            <a className="opacity-80 hover:underline" href="https://matt2build-site.vercel.app">Vercel</a>
            <a className="opacity-80 hover:underline" href="mailto:matt2build@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
