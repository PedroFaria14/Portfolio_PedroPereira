import { skills } from '../data/portfolio'
import { useLanguage } from '../i18n/language'
import { pick, type BiString } from '../i18n/i18n'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'
import { Chip } from './Chip'

const groups: { key: keyof typeof skills; labelKey: string }[] = [
  { key: 'languages', labelKey: 'stack.groups.languages' },
  { key: 'frameworks', labelKey: 'stack.groups.frameworks' },
  { key: 'web3', labelKey: 'stack.groups.web3' },
  { key: 'infra', labelKey: 'stack.groups.infra' },
  { key: 'foundations', labelKey: 'stack.groups.foundations' },
]

export function Stack() {
  const { locale, t } = useLanguage()
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-16">
      <SectionHeader label={t('stack.label')} title={t('stack.title')} />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, gi) => (
          <Reveal key={group.key} delay={gi * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-accent">
                {t(group.labelKey)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills[group.key].map((skill, si) => {
                  const label = typeof skill === 'string' ? skill : pick(locale, skill as BiString)
                  return (
                    <Chip key={label} index={si}>
                      {label}
                    </Chip>
                  )
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
