import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Chip({ children, index = 0, emphasis = false }: { children: ReactNode; index?: number; emphasis?: boolean }) {
  const reduce = useReducedMotion()

  return (
    <motion.span
      className={`rounded-md border px-3 py-1.5 text-sm transition-colors ${emphasis ? 'border-accent/60 bg-accent/10 font-semibold text-ink' : 'border-border bg-surface-hover text-ink/90'}`}
      initial={reduce ? false : { opacity: 0, scale: 0.6 }}
      whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
      whileHover={reduce ? undefined : { scale: 1.05, borderColor: '#C9A44A', color: '#C9A44A' }}
    >
      {children}
    </motion.span>
  )
}
