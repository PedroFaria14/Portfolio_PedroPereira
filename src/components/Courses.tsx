import { courseCategories, courses, type Course } from '../data/portfolio'
import { useLanguage } from '../i18n/language'
import { pick } from '../i18n/i18n'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

function CourseCard({ course }: { course: Course }) {
  const { locale, t } = useLanguage()
  return (
    <article className="rounded-2xl border border-border bg-surface p-5">
      <p className="mb-2 font-mono text-xs text-accent">{t(`courses.${course.status === 'completed' ? 'completed' : 'inProgress'}`)}</p>
      <h4 className="font-display font-medium text-ink" lang="pt-BR">{pick(locale, course.name)}</h4>
      <p className="mt-2 text-sm text-muted">{[course.institution, course.hours && `${course.hours} ${t('courses.hours')}`].filter(Boolean).join(' · ')}</p>
      {course.completedAt && (
        <p className="mt-2 text-sm text-muted">{t('courses.completion')}: <time dateTime={course.completedAt}>{new Intl.DateTimeFormat(locale === 'pt' ? 'pt-BR' : 'en-GB', { timeZone: 'UTC' }).format(new Date(`${course.completedAt}T12:00:00Z`))}</time></p>
      )}
      {course.description && <p className="mt-3 text-sm leading-relaxed text-muted">{pick(locale, course.description)}</p>}
    </article>
  )
}

export function Courses() {
  const { locale, t } = useLanguage()
  return (
    <section id="cursos" className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
      <SectionHeader label={t('courses.label')} title={t('courses.title')} />
      <div className="mb-12 space-y-8">
        {(['completed', 'in-progress'] as const).map((status) => (
          <div key={status}>
            <h3 className="mb-4 font-display text-lg text-ink">{t(`courses.${status === 'completed' ? 'completed' : 'inProgress'}`)}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {courses.filter((course) => course.status === status).map((course) => <CourseCard key={course.name.pt} course={course} />)}
            </div>
          </div>
        ))}
      </div>
      <h3 className="mb-4 font-display text-lg text-ink">{t('courses.relevant')}</h3>
      <ul className="mb-6 flex flex-wrap gap-2">
        {courses.filter((course) => course.highlight && !course.status).map((course) => (
          <li key={course.name.pt} className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-muted">{pick(locale, course.name)}</li>
        ))}
      </ul>
      <Reveal>
        <details className="rounded-xl border border-border p-5">
          <summary className="cursor-pointer py-2 text-sm text-ink">{t('courses.viewMore')} ({courses.filter((course) => !course.status && !course.highlight).length})</summary>
          <div className="mt-6 space-y-6">
          {courseCategories.map((category) => {
            const items = courses.filter((c) => c.category === category.key && !c.status && !c.highlight)
            if (!items.length) return null
            return (
              <div key={category.key} className="text-center lg:text-left">
                <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-accent sm:tracking-[0.15em]">
                  {pick(locale, category.label)}
                </h4>
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
        </details>
      </Reveal>
    </section>
  )
}
