import { Screenshot } from '@/components/screenshot'
import type { Project } from '@/lib/site'

export function ProjectArticle({ project, priority = false }: { project: Project; priority?: boolean }) {
  const wideShots = project.shots.filter((shot) => !shot.mobile)
  const mobileShots = project.shots.filter((shot) => shot.mobile)

  return (
    <article id={project.id} className="scroll-mt-24">
      <p className="section-chip mb-4">{project.kicker}</p>
      <h2 className="text-3xl font-bold text-white mb-3">{project.title}</h2>
      <p className="text-lg text-gray-200 leading-8 mb-3">{project.summary}</p>
      <p className="text-gray-400 leading-7 mb-4">{project.detail}</p>
      {project.href ? (
        <p className="mb-6">
          <a className="text-matrix-400 hover:underline" href={project.href} target="_blank" rel="noopener noreferrer">
            {project.linkLabel}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      ) : (
        <p className="text-sm font-mono text-matrix-400 mb-6">Screenshots only.</p>
      )}

      <div className={mobileShots.length > 0 ? 'grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px] items-start' : 'grid gap-4'}>
        <div className="grid gap-4">
          {wideShots.map((shot, index) => (
            <Screenshot
              key={shot.src}
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              priority={priority && index === 0}
            />
          ))}
        </div>
        {mobileShots.length > 0 ? (
          <div className="grid gap-4 max-w-[220px]">
            {mobileShots.map((shot) => (
              <Screenshot
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
              />
            ))}
          </div>
        ) : null}
      </div>
    </article>
  )
}
