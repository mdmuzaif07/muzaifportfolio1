import { ArrowUpRight, ArrowDown, Download } from 'lucide-react'
import Button from './Button'
import muzaifImage from '../assets/muzaif.jpeg'

const HERO_IMAGE = muzaifImage

const FLOATING = [
  {
    label: 'Digital Marketing',
    pos: 'left-0 top-[18%] md:left-[-6%]',
    delay: '0s',
  },
  {
    label: 'Web Development',
    pos: 'right-0 top-[34%] md:right-[-8%]',
    delay: '1.5s',
  },
  {
    label: 'Graphic Design',
    pos: 'left-0 bottom-[14%] md:left-[-4%]',
    delay: '3s',
  },
  {
    label: 'Business Analysis',
    pos: 'right-0 bottom-[8%] md:right-[-6%]',
    delay: '4.5s',
  },
]

export default function Hero() {
  const scrollToWork = () =>
    document.getElementById('work')?.scrollIntoView({
      behavior: 'smooth',
    })

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
    })

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 md:pt-32"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60" />

        <div className="absolute left-1/2 top-[-10%] h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px] animate-glow-pulse" />

        <div className="absolute right-[-10%] top-[30%] h-[40vh] w-[40vh] rounded-full bg-accent-2/10 blur-[120px] animate-float-slower" />

        <div className="absolute left-[-8%] bottom-[10%] h-[35vh] w-[35vh] rounded-full bg-accent/10 blur-[120px] animate-float-slow" />

        <div className="absolute left-[20%] top-[50%] h-[30vh] w-[30vh] rounded-full bg-accent-blue/8 blur-[130px] animate-glow-pulse-blue" />

        <div className="absolute right-[25%] bottom-[5%] h-[25vh] w-[25vh] rounded-full bg-accent-amber/8 blur-[120px] animate-glow-pulse-amber" />

        <div className="absolute left-[35%] bottom-[20%] h-[28vh] w-[28vh] rounded-full bg-accent-green/8 blur-[130px] animate-glow-pulse-green" />

        <div className="absolute left-1/2 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-[clamp(1.25rem,5vw,5rem)] pb-20 lg:grid-cols-12 lg:gap-8">

        {/* LEFT — typography */}
        <div className="lg:col-span-7">

          <p className="reveal mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted">
            <span className="h-px w-10 bg-accent" />
            Digital Marketer • Creative Professional
          </p>

          <h1 className="reveal font-display text-[clamp(3.2rem,11vw,9.5rem)] font-bold leading-[0.92] tracking-tightest text-text">
            <span className="block">Building Digital</span>

            <span className="block">
              <span className="gradient-text">Experiences</span>
              <span className="text-accent">.</span>
            </span>
          </h1>

          <p className="reveal mt-8 max-w-xl text-base leading-relaxed text-secondary md:text-lg">
            Hi, I&rsquo;m Mohammad Muzaif — a creative Digital Marketer focused
            on building brands, creating engaging digital experiences, and
            driving measurable growth.
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-4">

            <Button
              variant="primary"
              onClick={scrollToWork}
              magnetic
            >
              View My Work

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              />
            </Button>

            <Button
              variant="secondary"
              onClick={scrollToContact}
              magnetic
            >
              Let&rsquo;s Connect
            </Button>

            <Button
              variant="ghost"
              as="a"
              href="#contact"
            >
              Download CV
              <Download size={16} />
            </Button>

          </div>
        </div>

        {/* RIGHT — image + floating cards */}
        <div className="relative lg:col-span-5">

          <div className="reveal-scale relative mx-auto max-w-md lg:max-w-none">

            {/* Image container */}
            <div className="gradient-border relative overflow-hidden rounded-[1.75rem]">

              <div className="overflow-hidden rounded-[1.75rem]">

                <img
                  src={HERO_IMAGE}
                  alt="Portrait of Mohammad Muzaif, Digital Marketer"
                  loading="eager"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-105"
                />

              </div>

              {/* Bottom gradient */}
              <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-gradient-to-t from-background/70 via-transparent to-transparent" />

              {/* Red glow */}
              <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] shadow-[inset_0_0_60px_-20px_rgba(239,68,68,0.4)]" />

            </div>

            {/* Floating glass cards */}

            {FLOATING.map((card) => (
              <div
                key={card.label}
                className={`absolute ${card.pos} hidden animate-float-slow rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 backdrop-blur-xl sm:block`}
                style={{ animationDelay: card.delay }}
              >
                <span className="whitespace-nowrap text-[0.7rem] font-medium uppercase tracking-editorial text-text">
                  {card.label}
                </span>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <button
        onClick={scrollToWork}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-text md:flex"
        aria-label="Scroll to work"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <ArrowDown
          size={16}
          className="animate-bounce"
        />
      </button>

    </section>
  )
}