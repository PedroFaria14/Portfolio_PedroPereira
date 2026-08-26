import { profile, softSkills } from '../data/portfolio'
import { useLanguage } from '../i18n/language'
import { pick } from '../i18n/i18n'
import { Chip } from './Chip'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function About() {
  const { locale, t } = useLanguage()
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
      <SectionHeader label={t('about.label')} title={t('about.title')} />

      <div className="mt-8 grid gap-8 text-center lg:grid-cols-[1.1fr_0.9fr] lg:text-left">
        <Reveal delay={0.05}>
          <p className="font-display text-base font-medium leading-relaxed text-ink sm:text-lg">
            {pick(locale, profile.role)} com foco em{' '}
            <span className="text-accent">{pick(locale, profile.focus)}</span>.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-4 text-muted">
            {profile.about.map((p, i) => (
              <p key={i}>{pick(locale, p)}</p>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-8 text-center lg:text-left">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-subtle sm:text-sm sm:tracking-[0.2em]">
          {t('about.softSkills')}
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-2 lg:justify-start">
          {softSkills.map((s, i) => (
            <Chip key={s.pt} index={i}>
              {pick(locale, s)}
            </Chip>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
