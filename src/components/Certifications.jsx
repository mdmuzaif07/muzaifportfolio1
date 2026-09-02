import { Award } from 'lucide-react'
import GlassCard from './GlassCard'
import { glowColor } from '../utils/glow'

const CERTS = [
  {
    title: 'Google Digital Marketing Certification',
    status: 'Completed',
    inProgress: false,
  },
  {
    title: 'HubSpot Content Marketing',
    status: 'Completed',
    inProgress: false,
  },
  {
    title: 'Google Analytics Certification',
    status: 'In Progress',
    inProgress: true,
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-[clamp(1.25rem,5vw,5rem)]">
        <p className="reveal mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted">
          <span className="h-px w-10 bg-accent" />
          Achievements
        </p>
        <h2 className="reveal mb-14 font-display text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.95] tracking-tightest text-text">
          Certifications
        </h2>

        <div className="stagger grid grid-cols-1 gap-5 md:grid-cols-3">
          {CERTS.map((cert, i) => {
            const glow = glowColor(i)
            return (
              <GlassCard key={cert.title} glowIndex={i} className="group relative overflow-hidden p-7">
                <div className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full ${glow.bgSoft} blur-2xl transition-opacity duration-500 group-hover:opacity-80`} />
                <span className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] ${glow.text} transition-all duration-500 group-hover:scale-110 ${glow.borderHover}`}>
                  <Award size={26} />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold leading-snug tracking-tightest text-text">
                  {cert.title}
                </h3>
                <span
                  className={`mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-editorial ${
                    cert.inProgress
                      ? `${glow.border} ${glow.bgSoft} ${glow.text}`
                      : 'border border-white/10 bg-white/[0.04] text-muted'
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      cert.inProgress ? `animate-pulse ${glow.bg}` : 'bg-muted'
                    }`}
                  />
                  {cert.status}
                </span>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
