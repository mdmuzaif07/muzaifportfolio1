import { Compass, Lightbulb, PenTool, LineChart, Rocket } from 'lucide-react'
import { glowColor } from '../utils/glow'

const STEPS = [
  { num: '01', title: 'Discover', icon: Compass, desc: 'Understand goals, audience and requirements.' },
  { num: '02', title: 'Strategize', icon: Lightbulb, desc: 'Develop the right digital strategy.' },
  { num: '03', title: 'Create', icon: PenTool, desc: 'Design content, campaigns and digital experiences.' },
  { num: '04', title: 'Optimize', icon: LineChart, desc: 'Analyze performance and improve.' },
  { num: '05', title: 'Deliver', icon: Rocket, desc: 'Launch polished digital solutions.' },
]

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-[clamp(1.25rem,5vw,5rem)]">
        <p className="reveal mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted">
          <span className="h-px w-10 bg-accent" />
          How It Works
        </p>
        <h2 className="reveal mb-16 font-display text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.95] tracking-tightest text-text">
          My Process
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            const glow = glowColor(i)
            return (
              <div
                key={step.num}
                className="reveal group relative flex flex-col items-center text-center"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Connecting line */}
                {i < STEPS.length - 1 && (
                  <div className="absolute left-1/2 top-9 hidden h-px w-full bg-gradient-to-r from-border to-transparent lg:block" />
                )}

                <span className={`relative z-10 flex h-18 w-18 items-center justify-center rounded-full border border-white/10 bg-surface/60 backdrop-blur-xl p-5 ${glow.text} transition-all duration-500 group-hover:scale-110 ${glow.borderHover} ${glow.bgSoftHover} group-hover:shadow-[0_0_30px_-6px_rgba(${glow.rgb},0.5)]`}>
                  <Icon size={22} />
                </span>

                <span className="mt-5 font-display text-xs font-medium tracking-editorial text-muted">
                  {step.num}
                </span>
                <h3 className="mt-1 font-display text-lg font-semibold tracking-tightest text-text">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-secondary">
                  {step.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
