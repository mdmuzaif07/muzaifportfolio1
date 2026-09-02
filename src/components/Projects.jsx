import { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projects } from '../data/projects'

const LAYOUTS = ['large', 'offset', 'large']

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-[clamp(1.25rem,5vw,5rem)]">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="reveal mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted">
              <span className="h-px w-10 bg-accent" />
              Portfolio
            </p>
            <h2 className="reveal font-display text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.95] tracking-tightest text-text">
              Selected Work
            </h2>
          </div>
          <p className="reveal max-w-sm text-sm leading-relaxed text-secondary">
            A selection of projects across branding, digital marketing and web
            development. Click any project to view the case study.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={
                LAYOUTS[i] === 'large' && i === 0
                  ? 'lg:col-span-2'
                  : ''
              }
            >
              <ProjectCard
                project={project}
                layout={LAYOUTS[i]}
                index={i}
                onOpen={() => setActive({ project, index: i })}
              />
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={active?.project} index={active?.index} onClose={() => setActive(null)} />
    </section>
  )
}
