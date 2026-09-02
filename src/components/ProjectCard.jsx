import { ArrowUpRight } from 'lucide-react'
import { useTilt } from '../hooks/useReveal'
import { glowColor } from '../utils/glow'

export default function ProjectCard({ project, layout, index = 0, onOpen }) {
  const tiltRef = useTilt()
  const isLarge = layout === 'large'
  const isOffset = layout === 'offset'
  const glow = glowColor(index)

  const aspect = isLarge
    ? 'aspect-[16/10] md:aspect-[16/9]'
    : isOffset
      ? 'aspect-[4/5] md:aspect-[5/6]'
      : 'aspect-[16/10]'

  return (
    <article
      ref={tiltRef}
      className={`tilt-card reveal-scale group relative cursor-pointer ${isOffset ? 'lg:mt-24' : ''}`}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen()}
      data-cursor="hover"
    >
      <div className={`tilt-inner relative overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 ${glow.borderHover} ${glow.shadowHover}`}>
        <div className={`relative overflow-hidden ${aspect}`}>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent transition-opacity duration-500 group-hover:from-background/70" />
          <div className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(600px_circle_at_var(--mx,50%)_var(--my,50%),rgba(${glow.rgb},0.18),transparent_40%)]`} />
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className={`mb-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] ${glow.text} transition-colors duration-500`}>
                {project.category}
              </p>
              <h3 className={`font-display text-2xl font-semibold tracking-tightest text-text transition-all duration-500 md:text-3xl group-hover:[text-shadow:0_0_20px_rgba(${glow.rgb},0.4)]`}>
                {project.title}
              </h3>
            </div>
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl text-text transition-all duration-500 ${glow.borderHover} group-hover:${glow.bg} group-hover:text-background group-hover:shadow-[0_0_20px_-4px_rgba(${glow.rgb},0.6)]`}>
              <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.65rem] font-medium uppercase tracking-editorial text-muted transition-all duration-300 ${glow.borderHover} group-hover:bg-white/[0.06] group-hover:text-text`}
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-secondary opacity-0 transition-all duration-500 group-hover:opacity-100">
            View project →
          </p>
        </div>
      </div>
    </article>
  )
}
