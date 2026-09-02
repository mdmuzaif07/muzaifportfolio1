import { ArrowUpRight } from 'lucide-react'
import GlassCard from './GlassCard'
import { useTilt } from '../hooks/useReveal'
import { glowByName } from '../utils/glow'

export default function ServiceCard({ service }) {
  const tiltRef = useTilt()
  const Icon = service.icon
  const glow = glowByName(service.glow)

  return (
    <GlassCard ref={tiltRef} tilt className={`group h-full p-7 md:p-8 ${glow.shadowHover}`}>
      <div className="tilt-inner flex h-full flex-col">
        <div className="mb-6 flex items-start justify-between">
          <span className="font-display text-sm font-medium tracking-editorial text-muted">
            {service.id}
          </span>
          <span className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] ${glow.text} transition-all duration-500 group-hover:scale-110 ${glow.borderHover} ${glow.bgSoftHover}`}>
            <Icon size={22} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>

        <h3 className="font-display text-xl font-semibold tracking-tightest text-text md:text-2xl">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-secondary">
          {service.description}
        </p>

        <div className={`mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-editorial text-muted transition-colors duration-300 ${glow.textHover}`}>
          <span>Learn more</span>
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </GlassCard>
  )
}
