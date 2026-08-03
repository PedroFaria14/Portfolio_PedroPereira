import { skills } from '../data/portfolio'
import { Reveal } from './Reveal'

const groups = [
  { key: 'languages' as const, label: 'Linguagens' },
  { key: 'frameworks' as const, label: 'Frameworks & Libs' },
  { key: 'web3' as const, label: 'Web3 & Blockchain' },
  { key: 'infra' as const, label: 'Ferramentas & Infra' },
  { key: 'foundations' as const, label: 'Fundamentos de Engenharia' },
]

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-16">
      <Reveal>
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-accent">
          {'//'} stack
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Stack & Habilidades
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, gi) => (
          <Reveal key={group.key} delay={gi * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-accent">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills[group.key].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-surface-hover px-3 py-1.5 text-sm text-ink"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}