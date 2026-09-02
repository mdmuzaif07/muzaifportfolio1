import { MapPin, Focus, Briefcase } from 'lucide-react'
import GlassCard from './GlassCard'
import { glowColor } from '../utils/glow'

const INFO = [
  { label: 'Based In', value: 'Karnataka, India', icon: MapPin },
  {
    label: 'Focus',
    value: ['Digital Marketing', 'Web Development', 'Graphic Design', 'Business Analysis'],
    icon: Focus,
  },
  { label: 'Current Role', value: 'Trainee at Zephyr Technologies', icon: Briefcase },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-[clamp(1.25rem,5vw,5rem)]">
        <p className="reveal mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted">
          <span className="h-px w-10 bg-accent" />
          About Me
        </p>

        <h2 className="reveal font-display text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[0.95] tracking-tightest text-text">
          <span className="block">Digital Minds.</span>
          <span className="block">
            Creative <span className="gradient-text">Results</span>
            <span className="text-accent">.</span>
          </span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="reveal max-w-2xl text-lg leading-relaxed text-secondary md:text-xl">
              Motivated and creative Digital Marketer with hands-on experience in
              SEO, social media marketing, content creation, paid advertising, web
              development, and graphic designing. Passionate about building strong
              brands, crafting engaging content, and driving business growth through
              result-oriented digital strategies.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="stagger space-y-4">
              {INFO.map((item, i) => {
                const glow = glowColor(i)
                return (
                  <GlassCard key={item.label} glowIndex={i} className="group p-6">
                    <div className="flex items-start gap-4">
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 ${glow.bgSoft} ${glow.text} transition-all duration-500 group-hover:scale-110 ${glow.borderHover}`}>
                        <item.icon size={18} />
                      </span>
                      <div>
                        <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted">
                          {item.label}
                        </p>
                        {Array.isArray(item.value) ? (
                          <ul className="mt-2 space-y-1">
                            {item.value.map((v) => (
                              <li key={v} className="text-sm text-text">
                                {v}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="mt-1 text-sm text-text md:text-base">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
