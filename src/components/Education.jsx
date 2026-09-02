import { GraduationCap } from 'lucide-react'
import GlassCard from './GlassCard'
import { glowColor } from '../utils/glow'

const EDUCATION = [
  {
    degree: 'B.Com',
    school: 'Srinivas Degree College',
    coursework: ['Business Management', 'Marketing', 'Finance'],
  },
  {
    degree: 'PUC',
    school: "St. Raymond's PU College",
    coursework: ['Accountancy', 'Business Studies', 'Economics'],
  },
]

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-[clamp(1.25rem,5vw,5rem)]">
        <p className="reveal mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted">
          <span className="h-px w-10 bg-accent" />
          Background
        </p>
        <h2 className="reveal mb-14 font-display text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.95] tracking-tightest text-text">
          Education
        </h2>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2">
            <div className="line-draw absolute inset-0 h-full bg-gradient-to-b from-accent via-accent/40 to-transparent" />
          </div>

          <div className="space-y-12 md:space-y-16">
            {EDUCATION.map((edu, i) => {
              const glow = glowColor(i)
              return (
                <div
                  key={edu.degree}
                  className={`reveal relative pl-14 md:w-1/2 ${
                    i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <span
                    className={`absolute top-2 flex h-8 w-8 items-center justify-center rounded-full border ${glow.border}/40 bg-background ${glow.text} left-0 md:left-auto ${
                      i % 2 === 0
                        ? 'md:-right-4 md:translate-x-full'
                        : 'md:-left-4 md:-translate-x-full'
                    }`}
                  >
                    <GraduationCap size={14} />
                  </span>

                  <GlassCard glowIndex={i} className="p-6 md:p-8">
                    <h3 className="font-display text-2xl font-semibold tracking-tightest text-text">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 text-sm text-secondary">{edu.school}</p>
                    <div className={`mt-5 ${i % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                      <p className="mb-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted">
                        Relevant Coursework
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((c) => (
                          <span
                            key={c}
                            className={`rounded-full border ${glow.border}/20 ${glow.bgSoft} px-3 py-1 text-xs font-medium ${glow.text}`}
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
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
