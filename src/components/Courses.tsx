import { courseCategories, courses } from '../data/portfolio'
import { useLanguage } from '../i18n/language'
import { pick } from '../i18n/i18n'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function Courses() {
  const { locale, t } = useLanguage()
  return (
    <section id="cursos" className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
      <SectionHeader label={t('courses.label')} title={t('courses.title')} />

      <Reveal>
        <div className="space-y-10">
          {courseCategories.map((category) => {
            const items = courses.filter((c) => c.category === category.key)
            return (
              <div key={category.key} className="text-center lg:text-left">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-accent sm:tracking-[0.15em]">
                  {pick(locale, category.label)}
                </h3>
                <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                  {items.map((c) => (
                    <span
                      key={c.name.pt}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
                    >
                      {pick(locale, c.name)}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
