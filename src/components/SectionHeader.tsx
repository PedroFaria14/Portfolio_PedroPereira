import { Reveal } from './Reveal'

export function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <Reveal className="mb-12 text-center lg:text-left">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent sm:text-sm sm:tracking-[0.2em]">
        {'//'} {label}
      </p>
      <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  )
}
