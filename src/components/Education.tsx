import { education } from '../data/portfolio'
import { useLanguage } from '../i18n/language'
import { pick } from '../i18n/i18n'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function Education() {
  const { locale, t } = useLanguage()
  return (
    <section id="educacao" className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-16">
      <SectionHeader label={t('education.label')} title={t('education.title')} />

      <Reveal>
        <div className="max-w-2xl space-y-4">
          {education.map((e) => (
            <div key={e.degree.pt} className="rounded-2xl border border-border bg-surface p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-base font-medium text-ink">
                  {pick(locale, e.degree)}
                </h3>
                <span className="font-mono text-xs uppercase tracking-wide text-accent">
                  {pick(locale, e.period)}
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