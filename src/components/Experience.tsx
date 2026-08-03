import { experience } from '../data/portfolio'
import { useLanguage } from '../i18n/language'
import { pick } from '../i18n/i18n'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

function ExperienceItem({ exp }: { exp: (typeof experience)[number] }) {
  const { locale } = useLanguage()
  return (
    <Reveal className="relative pb-10 last:pb-0">
      <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-base" />
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-lg font-medium text-ink">{pick(locale, exp.role)}</h3>
        <span className="font-mono text-xs uppercase tracking-wide text-accent">{exp.period}</span>
      </div>
      <p className="mt-1 text-sm font-medium text-muted">{pick(locale, exp.org)}</p>
      <p className="mt-2 text-sm leading-relaxed text-subtle">{pick(locale, exp.description)}</p>
      {exp.responsibilities && (
        <ul className="mt-3 space-y-1.5">
          {exp.responsibilities.map((r) => (
            <li key={r.pt} className="flex items-start gap-2 text-sm text-muted">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {pick(locale, r)}
            </li>
          ))}
        </ul>
      )}
    </Reveal>
  )
}

export function Experience() {
  const { t } = useLanguage()
  return (
    <section id="experiencia" className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-16">
      <SectionHeader label={t('experience.label')} title={t('experience.title')} />
      <div className="relative border-l border-border pl-8">
        {experience.map((exp) => (
          <ExperienceItem key={exp.role.pt} exp={exp} />
        ))}
      </div>
    </section>
  )
}
