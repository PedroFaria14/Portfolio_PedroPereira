import { profile, softSkills } from '../data/portfolio'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-16">
      <Reveal>
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-accent">
          {'//'} sobre
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Sobre mim
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal delay={0.05}>
          <p className="font-display text-lg font-medium leading-relaxed text-ink">
            {profile.role} com foco em{' '}
            <span className="text-accent">{profile.focus}</span>.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-4 text-muted">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-8">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-subtle">soft skills</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {softSkills.map((s) => (
            <span
              key={s}
              className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-muted"
            >
              {s}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}