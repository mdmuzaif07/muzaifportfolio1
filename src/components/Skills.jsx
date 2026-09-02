import GlassCard from './GlassCard'
import { skills } from '../data/skills'
import { glowByName } from '../utils/glow'

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-[clamp(1.25rem,5vw,5rem)]">
        <p className="reveal mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted">
          <span className="h-px w-10 bg-accent" />
          Capabilities
        </p>
        <h2 className="reveal mb-14 font-display text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.95] tracking-tightest text-text">
          Skills &amp; Toolkit
        </h2>

        <div className="stagger grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => {
            const Icon = group.icon
            const glow = glowByName(group.glow)
            return (
              <GlassCard key={group.category} glowIndex={i} className="group h-full p-6">
                <span className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl border ${glow.border}/20 ${glow.bgSoft} ${glow.text} transition-all duration-500 group-hover:scale-110 ${glow.borderHover} ${glow.bgSoftHover} group-hover:shadow-[0_0_25px_-6px_rgba(${glow.rgb},0.5)]`}>
                  <Icon size={22} />
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tightest text-text">
                  {group.category}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-secondary transition-colors duration-300 group-hover:text-text"
                    >
                      <span className={`h-1 w-1 rounded-full ${glow.dotSoft}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
