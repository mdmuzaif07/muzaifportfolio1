// Shared glow color system — cycles through red, blue, yellow, green
// Each color provides border, bg, text, shadow, and dot classes for hover states

const COLORS = ['accent', 'blue', 'green', 'amber']

const GLOW = {
  accent: {
    name: 'accent',
    rgb: '239,68,68',
    border: 'border-accent',
    borderHover: 'hover:border-accent/40 group-hover:border-accent/40',
    bg: 'bg-accent',
    bgSoft: 'bg-accent/10',
    bgSoftHover: 'group-hover:bg-accent/15',
    text: 'text-accent',
    textHover: 'group-hover:text-accent',
    shadow: 'shadow-[0_0_30px_-8px_rgba(239,68,68,0.5)]',
    shadowHover: 'group-hover:shadow-[0_0_40px_-6px_rgba(239,68,68,0.45),0_0_80px_-20px_rgba(239,68,68,0.25)]',
    shadowLift: 'hover:shadow-[0_0_40px_-6px_rgba(239,68,68,0.45),0_0_80px_-20px_rgba(239,68,68,0.25),0_20px_60px_-12px_rgba(0,0,0,0.6)]',
    dot: 'bg-accent/60',
    dotSoft: 'bg-accent/50',
    glowRgba: 'rgba(239,68,68,0.35)',
    glowRgbaStrong: 'rgba(239,68,68,0.6)',
    ring: 'focus:ring-accent',
  },
  blue: {
    name: 'blue',
    rgb: '59,130,246',
    border: 'border-accent-blue',
    borderHover: 'hover:border-accent-blue/40 group-hover:border-accent-blue/40',
    bg: 'bg-accent-blue',
    bgSoft: 'bg-accent-blue/10',
    bgSoftHover: 'group-hover:bg-accent-blue/15',
    text: 'text-accent-blue',
    textHover: 'group-hover:text-accent-blue',
    shadow: 'shadow-[0_0_30px_-8px_rgba(59,130,246,0.5)]',
    shadowHover: 'group-hover:shadow-[0_0_40px_-6px_rgba(59,130,246,0.45),0_0_80px_-20px_rgba(59,130,246,0.25)]',
    shadowLift: 'hover:shadow-[0_0_40px_-6px_rgba(59,130,246,0.45),0_0_80px_-20px_rgba(59,130,246,0.25),0_20px_60px_-12px_rgba(0,0,0,0.6)]',
    dot: 'bg-accent-blue/60',
    dotSoft: 'bg-accent-blue/50',
    glowRgba: 'rgba(59,130,246,0.35)',
    glowRgbaStrong: 'rgba(59,130,246,0.6)',
    ring: 'focus:ring-accent-blue',
  },
  green: {
    name: 'green',
    rgb: '34,197,94',
    border: 'border-accent-green',
    borderHover: 'hover:border-accent-green/40 group-hover:border-accent-green/40',
    bg: 'bg-accent-green',
    bgSoft: 'bg-accent-green/10',
    bgSoftHover: 'group-hover:bg-accent-green/15',
    text: 'text-accent-green',
    textHover: 'group-hover:text-accent-green',
    shadow: 'shadow-[0_0_30px_-8px_rgba(34,197,94,0.5)]',
    shadowHover: 'group-hover:shadow-[0_0_40px_-6px_rgba(34,197,94,0.45),0_0_80px_-20px_rgba(34,197,94,0.25)]',
    shadowLift: 'hover:shadow-[0_0_40px_-6px_rgba(34,197,94,0.45),0_0_80px_-20px_rgba(34,197,94,0.25),0_20px_60px_-12px_rgba(0,0,0,0.6)]',
    dot: 'bg-accent-green/60',
    dotSoft: 'bg-accent-green/50',
    glowRgba: 'rgba(34,197,94,0.35)',
    glowRgbaStrong: 'rgba(34,197,94,0.6)',
    ring: 'focus:ring-accent-green',
  },
  amber: {
    name: 'amber',
    rgb: '245,158,11',
    border: 'border-accent-amber',
    borderHover: 'hover:border-accent-amber/40 group-hover:border-accent-amber/40',
    bg: 'bg-accent-amber',
    bgSoft: 'bg-accent-amber/10',
    bgSoftHover: 'group-hover:bg-accent-amber/15',
    text: 'text-accent-amber',
    textHover: 'group-hover:text-accent-amber',
    shadow: 'shadow-[0_0_30px_-8px_rgba(245,158,11,0.5)]',
    shadowHover: 'group-hover:shadow-[0_0_40px_-6px_rgba(245,158,11,0.45),0_0_80px_-20px_rgba(245,158,11,0.25)]',
    shadowLift: 'hover:shadow-[0_0_40px_-6px_rgba(245,158,11,0.45),0_0_80px_-20px_rgba(245,158,11,0.25),0_20px_60px_-12px_rgba(0,0,0,0.6)]',
    dot: 'bg-accent-amber/60',
    dotSoft: 'bg-accent-amber/50',
    glowRgba: 'rgba(245,158,11,0.35)',
    glowRgbaStrong: 'rgba(245,158,11,0.6)',
    ring: 'focus:ring-accent-amber',
  },
}

export function glowColor(index) {
  return GLOW[COLORS[index % COLORS.length]]
}

export function glowByName(name) {
  return GLOW[name] || GLOW.accent
}

export { GLOW, COLORS }
