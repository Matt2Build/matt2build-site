import Link from 'next/link'
import { JsonLd } from '@/components/json-ld'
import { ProjectArticle } from '@/components/project-article'
import { pageMetadata } from '@/lib/metadata'
import { BUILD_PRICE, featuredProjects, MONTHLY_PRICE, otherProjects } from '@/lib/site'
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/structured-data'

const title = 'Realtor Website Examples'
const description =
  'Realtor website examples from Matt Salit: WorkflowRealtor, MoverMath, WriteMyOffer, Moving2PNW, and GridView Pro. Custom work I designed and built.'

export const metadata = pageMetadata({ title, description, path: '/portfolio' })

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title, description, path: '/portfolio' })} />
      <JsonLd data={breadcrumbJsonLd('/portfolio', 'Work')} />
      <section className="pt-32 pb-8 lg:pt-40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-chip mb-6">Work</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Realtor websites and tools I built.</h1>
          <p className="text-lg text-gray-300 leading-8">
            Real estate work comes first. Everything here is custom work I designed and built. I work with agents
            anywhere in the United States.
          </p>
        </div>
      </section>

      <section className="py-12" aria-labelledby="featured-work">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="featured-work" className="sr-only">
            Real estate products
          </h2>
          <div className="space-y-20">
            {featuredProjects.map((project) => (
              <ProjectArticle key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12" aria-labelledby="other-work">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="other-work" className="text-2xl font-bold text-white mb-10">
            Also built
          </h2>
          <div className="space-y-20">
            {otherProjects.map((project) => (
              <ProjectArticle key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want something of your own?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Tell me the market and what you want the site to do. The standard site is {BUILD_PRICE} to build and{' '}
            {MONTHLY_PRICE} a month after that.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Start a project
          </Link>
        </div>
      </section>
    </>
  )
}
