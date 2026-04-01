export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black text-slate-100 antialiased">
      <header className="max-w-7xl mx-auto px-8 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center font-extrabold text-slate-900 shadow-lg">M2</div>
          <div className="text-xl font-semibold tracking-tight">Matt2Build</div>
        </div>
        <nav className="space-x-8 text-sm opacity-90">
          <a href="#work" className="hover:underline">Work</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="px-4 py-2 bg-gradient-to-r from-sky-400 to-indigo-500 text-slate-900 font-semibold rounded-md shadow">Contact</a>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">Crafting elegant products, resilient infrastructure, and intelligent automation.</h1>
          <p className="mt-6 text-lg opacity-80 max-w-xl">I help startups and teams ship premium web and agent-driven products — from ideation and design to production-ready observability and ops. Fast iteration, strong design, and long-term reliability.</p>
          <div className="mt-8 flex gap-4">
            <a className="px-7 py-3 bg-gradient-to-r from-amber-400 to-rose-500 text-slate-900 font-semibold rounded-md shadow-lg" href="mailto:matt2build@gmail.com">Let's work together</a>
            <a className="px-7 py-3 border border-slate-700 rounded-md text-slate-200" href="#work">View work</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm opacity-80">
            <div>
              <div className="font-semibold">Selected:</div>
              <div className="mt-1">GridView · Observability platform · Agent skills</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            <img alt="Project montage" src="/project-montage.jpg" className="w-full h-96 object-cover" />
          </div>
          <div className="absolute -right-6 -bottom-6 w-40 h-40 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 opacity-80 blur-lg" />
        </div>
      </section>

      <section id="services" className="max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-semibold mb-6">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-800/60 backdrop-blur rounded-xl border border-slate-700">
            <h3 className="font-semibold text-amber-300">Product & Design</h3>
            <p className="mt-3 text-sm opacity-80">UX-led product design, prototypes, and React/Next.js frontends that convert.</p>
          </div>
          <div className="p-6 bg-slate-800/60 backdrop-blur rounded-xl border border-slate-700">
            <h3 className="font-semibold text-sky-300">AI Agents & Automation</h3>
            <p className="mt-3 text-sm opacity-80">Custom agent skills, prompt design, LLM orchestration, and automation pipelines.</p>
          </div>
          <div className="p-6 bg-slate-800/60 backdrop-blur rounded-xl border border-slate-700">
            <h3 className="font-semibold text-teal-300">Infrastructure & Ops</h3>
            <p className="mt-3 text-sm opacity-80">Deployment automation, observability, CI, and post-launch reliability engineering.</p>
          </div>
        </div>
      </section>

      <section id="work" className="max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-semibold mb-6">Featured work</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-xl overflow-hidden shadow-lg border border-slate-700">
            <img alt="GridView case study" src="/gridview-screenshot.jpg" className="w-full h-64 object-cover" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">GridView — multi-window workspace</h3>
            <p className="mt-3 text-sm opacity-80">Built for power users with a focus on extensibility and performance. Responsibilities: product, frontend, deployment pipelines, analytics.</p>
            <div className="mt-4 text-sm opacity-80">
              <div>Repo: <a className="text-sky-300" href="https://github.com/Matt2Build/gridviewpro.com">github.com/Matt2Build/gridviewpro.com</a></div>
              <div className="mt-2">Live demo: <a className="text-sky-300" href="https://gridviewpro.com">gridviewpro.com</a></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-semibold mb-6">About</h2>
        <p className="text-sm opacity-80 max-w-3xl">I'm Matt — product engineer and operator. I partner with founders and teams to ship polished products that scale. My work prioritizes clarity, speed, and production reliability.</p>
      </section>

      <footer id="contact" className="max-w-7xl mx-auto px-8 py-12 border-t border-slate-700 mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm opacity-80">© Matt2Build</div>
          <div className="space-x-6 text-sm">
            <a className="opacity-80 hover:underline" href="https://github.com/Matt2Build">GitHub</a>
            <a className="opacity-80 hover:underline" href="mailto:matt2build@gmail.com">Email</a>
            <a className="opacity-80 hover:underline" href="https://gridviewpro.com">Demo</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
