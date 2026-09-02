import { glowColor } from '../utils/glow'

const WORDS = [
  'Digital Marketing',
  'Creative Design',
  'Web Development',
  'Brand Growth',
  'Digital Experiences',
]

const SYMBOLS = ['✦', '✦', '✦', '✦', '✦']

export default function Marquee() {
  const row = [...WORDS, ...WORDS]
  return (
    <section className="relative overflow-hidden border-y border-white/8 py-10 md:py-14">
      <div className="marquee-track">
        {row.map((word, i) => {
          const glow = glowColor(i % 4)
          return (
            <span
              key={`${word}-${i}`}
              className="mx-8 flex items-center gap-8 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-none tracking-tightest text-text md:mx-12"
            >
              {word}
              <span className={glow.text}>{SYMBOLS[i % SYMBOLS.length]}</span>
            </span>
          )
        })}
      </div>
    </section>
  )
}
