import { education } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function Education() {
  return (
    <section id="educacao" className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-16">
      <SectionHeader label="formação" title="Escolaridade" />

      <Reveal>
        <div className="max-w-2xl space-y-4">
          {education.map((e) => (
            <div key={e.degree} className="rounded-2xl border border-border bg-surface p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-base font-medium text-ink">{e.degree}</h3>
                <span className="font-mono text-xs uppercase tracking-wide text-accent">
                  {e.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{e.school}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
