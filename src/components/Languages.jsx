import { glowColor } from '../utils/glow'

const LANGUAGES = ['English', 'Hindi', 'Kannada', 'Urdu', 'Malayalam']

export default function Languages() {
  return (
    <section id="languages" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-[clamp(1.25rem,5vw,5rem)]">
        <p className="reveal mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted">
          <span className="h-px w-10 bg-accent" />
          Communication
        </p>
        <h2 className="reveal mb-14 font-display text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.95] tracking-tightest text-text">
          Languages
        </h2>

        <div className="stagger flex flex-wrap gap-x-10 gap-y-6 md:gap-x-16">
          {LANGUAGES.map((lang, i) => {
            const glow = glowColor(i)
            return (
              <div key={lang} className="group flex items-baseline gap-3">
                <span className="font-display text-xs font-medium text-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={`font-display text-3xl font-medium tracking-tightest text-text transition-colors duration-300 group-hover:${glow.text} md:text-4xl lg:text-5xl`}>
                  {lang}
                </span>
                <span className={`h-1.5 w-1.5 rounded-full ${glow.dotSoft} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
