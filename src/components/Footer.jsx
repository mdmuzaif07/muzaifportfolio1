import { ArrowUp } from 'lucide-react'
import { glowColor } from '../utils/glow'

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const SOCIAL = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/mohammadmuzaif' },
  { label: 'Instagram', href: '#' },
  { label: 'GitHub', href: '#' },
]

export default function Footer() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative overflow-hidden border-t border-white/8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[40vh] w-[60vh] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
        <div className="absolute left-[10%] bottom-0 h-[25vh] w-[25vh] rounded-full bg-accent-blue/8 blur-[120px] animate-glow-pulse-blue" />
        <div className="absolute right-[15%] top-[20%] h-[20vh] w-[20vh] rounded-full bg-accent-amber/8 blur-[120px] animate-glow-pulse-amber" />
        <div className="absolute left-[35%] bottom-[10%] h-[18vh] w-[18vh] rounded-full bg-accent-green/8 blur-[110px] animate-glow-pulse-green" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-[clamp(1.25rem,5vw,5rem)] py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="reveal font-display text-[clamp(4rem,14vw,12rem)] font-bold leading-[0.85] tracking-tightest text-text">
              MUZAIF<span className="text-accent">.</span>
            </h2>
            <p className="reveal mt-4 text-sm text-secondary">
              Digital Marketer • Web Developer • Graphic Designer
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted">
              Navigate
            </h3>
            <ul className="space-y-2.5">
              {NAV.map((item, i) => {
                const glow = glowColor(i)
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => go(item.id)}
                      className={`text-sm text-secondary transition-colors hover:${glow.text}`}
                    >
                      {item.label}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted">
              Connect
            </h3>
            <ul className="space-y-2.5">
              {SOCIAL.map((item, i) => {
                const glow = glowColor(i + 1)
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`text-sm text-secondary transition-colors hover:${glow.text}`}
                    >
                      {item.label}
                      {item.href === '#' && (
                        <span className="ml-1 text-xs text-muted">(update link)</span>
                      )}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/8 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-muted">
            © 2026 Mohammad Muzaif. All Rights Reserved.
          </p>
          <button
            onClick={toTop}
            className="group flex items-center gap-2 text-xs font-medium uppercase tracking-editorial text-secondary transition-colors hover:text-accent"
          >
            Back to Top
            <ArrowUp size={14} className="transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  )
}
