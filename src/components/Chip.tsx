import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Chip({ children, index = 0 }: { children: ReactNode; index?: number }) {
  const reduce = useReducedMotion()

  return (
    <motion.span
      className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-muted transition-colors"
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
      whileHover={reduce ? undefined : { scale: 1.05, borderColor: '#C9A44A', color: '#C9A44A' }}
    >
      {children}
    </motion.span>
  )
}