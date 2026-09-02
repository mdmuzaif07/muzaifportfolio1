import { useState } from 'react'
import { Mail, Phone, Link2, MapPin, Send, CheckCircle2 } from 'lucide-react'
import GlassCard from './GlassCard'
import Button from './Button'
import { glowColor } from '../utils/glow'

const CONTACT_INFO = [
  { label: 'Email', value: 'muzaif9880@gmail.com', href: 'mailto:muzaif9880@gmail.com', icon: Mail },
  { label: 'Phone', value: '+91 7676480742', href: 'tel:+917676480742', icon: Phone },
  { label: 'LinkedIn', value: 'linkedin.com/in/mohammadmuzaif', href: 'https://linkedin.com/in/mohammadmuzaif', icon: Link2 },
  { label: 'Location', value: 'Karnataka, India', href: null, icon: MapPin },
]

const ERRORS = {
  name: 'Name is required',
  email: 'Please enter a valid email address',
  subject: 'Subject is required',
  message: 'Message must be at least 10 characters',
}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = ERRORS.name
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = ERRORS.email
  if (!form.subject.trim()) errors.subject = ERRORS.subject
  if (form.message.trim().length < 10) errors.message = ERRORS.message
  return errors
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const subject = encodeURIComponent(`Portfolio Contact: ${form.subject}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    window.location.href = `mailto:muzaif9880@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 6000)
  }

  const fieldClass = (field) =>
    `w-full rounded-xl border bg-white/[0.03] px-4 py-3.5 text-sm text-text placeholder:text-muted backdrop-blur-xl transition-all duration-300 focus:outline-none focus:ring-1 ${
      errors[field]
        ? 'border-accent/60 focus:border-accent focus:ring-accent'
        : 'border-white/10 focus:border-accent/50 focus:ring-accent/40 focus:bg-white/[0.05] focus:shadow-[0_0_25px_-8px_rgba(239,68,68,0.4)]'
    }`

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[160px]" />
        <div className="absolute left-[5%] top-[20%] h-[30vh] w-[30vh] rounded-full bg-accent-blue/8 blur-[140px] animate-glow-pulse-blue" />
        <div className="absolute right-[10%] bottom-[10%] h-[25vh] w-[25vh] rounded-full bg-accent-amber/8 blur-[130px] animate-glow-pulse-amber" />
        <div className="absolute left-[40%] top-[60%] h-[22vh] w-[22vh] rounded-full bg-accent-green/8 blur-[130px] animate-glow-pulse-green" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-[clamp(1.25rem,5vw,5rem)]">
        <div className="mb-14 max-w-3xl">
          <p className="reveal mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted">
            <span className="h-px w-10 bg-accent" />
            Get In Touch
          </p>
          <h2 className="reveal font-display text-[clamp(2.8rem,9vw,7rem)] font-bold leading-[0.95] tracking-tightest text-text">
            Let&rsquo;s Work
            <br />
            <span className="gradient-text">Together</span>
            <span className="text-accent">.</span>
          </h2>
          <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-secondary">
            Have a project, idea or opportunity in mind? Let&rsquo;s create
            something meaningful together.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Contact info */}
          <div className="lg:col-span-5">
            <div className="stagger space-y-4">
              {CONTACT_INFO.map((item, i) => {
                const glow = glowColor(i)
                const Inner = (
                  <GlassCard glowIndex={i} className="group flex items-center gap-4 p-5">
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 ${glow.bgSoft} ${glow.text} transition-all duration-500 group-hover:scale-110 ${glow.borderHover}`}>
                      <item.icon size={18} />
                    </span>
                    <div>
                      <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-sm text-text">{item.value}</p>
                    </div>
                  </GlassCard>
                )
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div key={item.label}>{Inner}</div>
                )
              })}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <GlassCard hover={false} className="p-6 md:p-10">
              {sent && (
                <div className="mb-6 flex items-center gap-3 rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-text">
                  <CheckCircle2 size={18} className="text-accent" />
                  Your email client is opening with your message ready to send.
                </div>
              )}
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-editorial text-muted">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Your name"
                      className={fieldClass('name')}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-accent">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-editorial text-muted">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="you@example.com"
                      className={fieldClass('email')}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-accent">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-xs font-medium uppercase tracking-editorial text-muted">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={form.subject}
                    onChange={update('subject')}
                    placeholder="Project inquiry"
                    className={fieldClass('subject')}
                    aria-invalid={!!errors.subject}
                  />
                  {errors.subject && <p className="mt-1.5 text-xs text-accent">{errors.subject}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-editorial text-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell me about your project..."
                    className={`${fieldClass('message')} resize-none`}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-accent">{errors.message}</p>}
                </div>

                <Button type="submit" variant="primary" magnetic className="w-full sm:w-auto">
                  Send Message
                  <Send size={16} className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                </Button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
