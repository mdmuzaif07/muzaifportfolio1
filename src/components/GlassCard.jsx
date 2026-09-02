import { forwardRef } from 'react'
import { glowColor } from '../utils/glow'

/**
 * Reusable glassmorphism card.
 * Props:
 *  - as: element/tag to render (default 'div')
 *  - hover: enable hover glow + lift (default true)
 *  - tilt: enable 3D tilt (default false)
 *  - glowIndex: index for cycling glow colors (red/blue/green/amber) (default 0)
 *  - className: extra classes
 */
const GlassCard = forwardRef(function GlassCard(
  { as: Tag = 'div', hover = true, tilt = false, glowIndex = 0, className = '', children, ...rest },
  ref,
) {
  const glow = glowColor(glowIndex)
  const base =
    'relative rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-xl ' +
    'shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] ' +
    (hover
      ? `transition-all duration-500 ease-out ${glow.borderHover} hover:bg-white/[0.05] ${glow.shadowLift} hover:-translate-y-1 `
      : 'transition-colors duration-500 ')
  return (
    <Tag
      ref={ref}
      className={`${base} ${tilt ? 'tilt-card' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
})

export default GlassCard
