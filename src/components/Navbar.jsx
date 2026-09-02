import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useActiveSection } from '../hooks/useReveal'
import { glowColor } from '../utils/glow'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(LINKS.map((l) => l.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/8 bg-background/70 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-[clamp(1.25rem,5vw,5rem)] py-5">
          <button
            onClick={() => go('home')}
            className="font-display text-xl font-bold tracking-tightest text-text"
            aria-label="Muzaif home"
          >
            MUZAIF<span className="text-accent">.</span>
          </button>

          <ul className="hidden items-center gap-9 md:flex">
            {LINKS.map((link, i) => {
              const glow = glowColor(i)
              return (
                <li key={link.id}>
                  <button
                    onClick={() => go(link.id)}
                    className={`relative text-xs font-medium uppercase tracking-editorial transition-colors duration-300 ${
                      active === link.id ? 'text-text' : `text-muted hover:${glow.text}`
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-px ${glow.bg} transition-all duration-300 ${
                        active === link.id ? 'w-full' : 'w-0'
                      }`}
                    />
                  </button>
                </li>
              )
            })}
          </ul>

          <div className="hidden md:block">
            <button
              onClick={() => go('contact')}
              className="rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-xs font-medium uppercase tracking-editorial text-text transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
            >
              Let&rsquo;s Talk
            </button>
          </div>

          <button
            className="text-text md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8">
          <ul className="space-y-2">
            {LINKS.map((link, i) => {
              const glow = glowColor(i)
              return (
                <li
                  key={link.id}
                  style={{
                    transition: 'opacity 0.5s ease, transform 0.5s ease',
                    transitionDelay: open ? `${0.08 * i + 0.1}s` : '0s',
                    opacity: open ? 1 : 0,
                    transform: open ? 'translateY(0)' : 'translateY(20px)',
                  }}
                >
                  <button
                    onClick={() => go(link.id)}
                    className={`font-display text-4xl font-semibold tracking-tightest text-text transition-colors hover:${glow.text}`}
                  >
                    {link.label}
                  </button>
                </li>
              )
            })}
          </ul>
          <button
            onClick={() => go('contact')}
            style={{
              transition: 'opacity 0.5s ease',
              transitionDelay: open ? '0.5s' : '0s',
              opacity: open ? 1 : 0,
            }}
            className="mt-10 w-fit rounded-full bg-accent px-7 py-3.5 text-sm font-medium uppercase tracking-editorial text-background"
          >
            Let&rsquo;s Talk
          </button>
        </div>
      </div>
    </>
  )
}
