import { glowColor } from '../utils/glow'

const STATS = [
  { label: 'Digital', sub: 'Marketing', glowIndex: 0 },
  { label: 'Web', sub: 'Development', glowIndex: 1 },
  { label: 'Graphic', sub: 'Design', glowIndex: 2 },
  { label: 'Business', sub: 'Analysis', glowIndex: 3 },
]

export default function Stats() {
  return (
    <section className="relative border-y border-white/8 bg-surface/30">
      <div className="mx-auto max-w-[1440px] px-[clamp(1.25rem,5vw,5rem)] py-16 md:py-20">
        <div className="stagger grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] md:grid-cols-4">
          {STATS.map((s) => {
            const glow = glowColor(s.glowIndex)
            return (
              <div
                key={s.label}
                className="group relative flex flex-col items-center justify-center bg-background/40 px-4 py-10 text-center transition-all duration-500 hover:bg-white/[0.04] md:py-14"
                style={{ '--glow': glow.glowRgba }}
              >
                <span className="font-display text-2xl font-semibold tracking-tightest text-text transition-all duration-500 group-hover:scale-105 md:text-3xl">
                  {s.label}
                </span>
                <span className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  {s.sub}
                </span>
                <span
                  className="mt-4 h-px w-8 transition-all duration-500 group-hover:w-16"
                  style={{ background: glow.glowRgbaStrong }}
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ boxShadow: `0 0 40px -8px ${glow.glowRgba}` }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
