import ServiceCard from './ServiceCard'
import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-[clamp(1.25rem,5vw,5rem)]">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="reveal mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted">
              <span className="h-px w-10 bg-accent" />
              What I Do
            </p>
            <h2 className="reveal font-display text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.95] tracking-tightest text-text">
              Services
            </h2>
          </div>
          <p className="reveal max-w-sm text-sm leading-relaxed text-secondary">
            A multi-disciplinary toolkit spanning marketing, design, development
            and analysis — built to grow brands end to end.
          </p>
        </div>

        <div className="stagger grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
