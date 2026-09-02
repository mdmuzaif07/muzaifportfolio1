import { useRef } from 'react'

const VARIANTS = {
  primary:
    'group/btn relative inline-flex items-center justify-center gap-2 rounded-full ' +
    'bg-accent px-7 py-3.5 text-sm font-medium uppercase tracking-editorial text-background ' +
    'shadow-[0_8px_30px_-6px_rgba(239,68,68,0.5)] transition-all duration-300 ' +
    'hover:shadow-[0_12px_40px_-4px_rgba(239,68,68,0.7)] hover:-translate-y-0.5 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ' +
    'active:translate-y-0 active:scale-[0.98]',
  secondary:
    'group/btn relative inline-flex items-center justify-center gap-2 rounded-full ' +
    'border border-white/15 bg-white/[0.03] backdrop-blur-xl px-7 py-3.5 text-sm font-medium uppercase tracking-editorial text-text ' +
    'transition-all duration-300 hover:border-accent/50 hover:bg-white/[0.06] hover:-translate-y-0.5 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background ' +
    'active:translate-y-0 active:scale-[0.98]',
  ghost:
    'group/btn relative inline-flex items-center gap-2 text-sm font-medium uppercase tracking-editorial text-text ' +
    'transition-colors duration-300 hover:text-accent ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded-md',
}

export default function Button({
  variant = 'primary',
  as: Tag = 'button',
  href,
  children,
  className = '',
  magnetic = false,
  ...rest
}) {
  const ref = useRef(null)

  const handleMagnetic = (e) => {
    if (!magnetic || !ref.current) return
    if (window.matchMedia('(pointer: coarse)').matches) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    ref.current.style.transform = `translate(${x * 0.18}px, ${y * 0.25}px)`
  }
  const resetMagnetic = () => {
    if (!ref.current) return
    ref.current.style.transform = 'translate(0, 0)'
  }

  const props = {
    ref,
    className: `${VARIANTS[variant]} ${className}`,
    onMouseMove: handleMagnetic,
    onMouseLeave: resetMagnetic,
    ...rest,
  }
  if (href) {
    return (
      <Tag href={href} {...props}>
        {children}
      </Tag>
    )
  }
  return <Tag {...props}>{children}</Tag>
}
