import { Briefcase } from 'lucide-react'
import GlassCard from './GlassCard'
import { experiences } from '../data/experience'
import { glowColor } from '../utils/glow'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-[clamp(1.25rem,5vw,5rem)]">
        <p className="reveal mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted">
          <span className="h-px w-10 bg-accent" />
          Career Path
        </p>
        <h2 className="reveal mb-16 font-display text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.95] tracking-tightest text-text">
          Experience
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2">
            <div className="line-draw absolute inset-0 h-full w-full bg-gradient-to-b from-accent via-accent/40 to-transparent" />
          </div>

          <div className="space-y-12 md:space-y-20">
            {experiences.map((exp, i) => {
              const glow = glowColor(i)
              return (
                <div
                  key={exp.id}
                  className={`reveal relative pl-14 md:w-1/2 md:pl-0 ${
                    i % 2 === 0
                      ? 'md:pr-12 md:text-right'
                      : 'md:ml-auto md:pl-12'
                  }`}
                >
                  {/* Node */}
                  <span
                    className={`absolute top-2 flex h-8 w-8 items-center justify-center rounded-full border ${glow.border}/40 bg-background ${glow.text} shadow-[0_0_20px_-4px_rgba(${glow.rgb},0.5)] left-0 md:left-auto ${
                      i % 2 === 0
                        ? 'md:-right-4 md:translate-x-full'
                        : 'md:-left-4 md:-translate-x-full'
                    }`}
                  >
                    <Briefcase size={14} />
                  </span>

                  <GlassCard glowIndex={i} className="p-6 md:p-8">
                    <span className={`text-xs font-medium uppercase tracking-[0.2em] ${glow.text}`}>
                      Experience {exp.id}
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-tightest text-text">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-sm text-secondary">
                      {exp.company}
                      {exp.location && ` — ${exp.location}`}
                    </p>
                    <p className="mt-3 text-xs font-medium uppercase tracking-editorial text-muted">
                      {exp.focus}
                    </p>
                    <ul
                      className={`mt-5 space-y-2 ${i % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}
                    >
                      {exp.responsibilities.map((r) => (
                        <li
                          key={r}
                          className="flex items-center gap-2 text-sm text-text"
                        >
                          <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${glow.dot}`} />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
