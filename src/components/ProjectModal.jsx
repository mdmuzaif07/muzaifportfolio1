import { useEffect } from 'react'
import { X } from 'lucide-react'
import { glowColor } from '../utils/glow'

export default function ProjectModal({ project, index = 0, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  const glow = glowColor(index)

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-xl"
        onClick={onClose}
      />

      <div className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-surface/80 backdrop-blur-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
        <button
          onClick={onClose}
          className={`absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-text backdrop-blur-xl transition-all duration-300 ${glow.borderHover} group-hover:${glow.bg} hover:text-background`}
          aria-label="Close project"
        >
          <X size={18} />
        </button>

        <div className="relative h-64 overflow-hidden rounded-t-3xl md:h-80">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
        </div>

        <div className="p-6 md:p-10">
          <p className={`mb-3 text-xs font-medium uppercase tracking-[0.2em] ${glow.text}`}>
            {project.category}
          </p>
          <h3 className="font-display text-3xl font-bold tracking-tightest text-text md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-secondary md:text-lg">
            {project.description}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-3 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted">
                Services
              </h4>
              <ul className="space-y-2">
                {project.services.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-text">
                    <span className={`h-1.5 w-1.5 rounded-full ${glow.bg}`} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted">
                Technology
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className={`rounded-full border ${glow.border}/20 ${glow.bgSoft} px-3 py-1.5 text-xs font-medium ${glow.text}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
