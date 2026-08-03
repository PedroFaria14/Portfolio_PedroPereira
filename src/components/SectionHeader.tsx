import { Reveal } from './Reveal'

export function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <Reveal className="mb-12">
      <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-accent">
        {'//'} {label}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  )
}