import { useState } from 'react'
import { CheckCircle2, ChevronDown, ChevronUp, Clock3, ExternalLink } from 'lucide-react'
import { courseCategories, courses, type Course } from '../data/portfolio'
import { useLanguage } from '../i18n/language'
import { pick } from '../i18n/i18n'
import { SectionHeader } from './SectionHeader'

function CourseCard({ course }: { course: Course }) {
  const { locale, t } = useLanguage()
  const category = courseCategories.find((item) => item.key === course.category)
  const completed = course.status === 'completed'
  const StatusIcon = completed ? CheckCircle2 : Clock3
  return (
    <article className="flex h-full min-w-0 flex-col rounded-2xl border border-border bg-surface p-5 text-left transition-colors hover:border-accent/60 sm:p-6">
      <p className="mb-3 font-mono text-xs leading-relaxed text-accent">{category ? pick(locale, category.label) : course.category}</p>
      <h3 className="font-display text-base font-medium leading-relaxed text-ink" lang={course.nameLang}>{pick(locale, course.name)}</h3>
      <dl className="mt-4 space-y-2 text-sm">
        {course.institution && <div><dt className="text-xs text-muted">{t('courses.institution')}</dt><dd className="mt-0.5 text-ink">{course.institution}</dd></div>}
        {course.platform && <div><dt className="text-xs text-muted">{t('courses.platform')}</dt><dd className="mt-0.5 text-ink">{course.platform}</dd></div>}
        {course.hours !== undefined && <div><dt className="text-xs text-muted">{t('courses.workload')}</dt><dd className="mt-0.5 text-ink">{course.hours} {t('courses.hours')}</dd></div>}
      </dl>
      {course.description && <p className="mt-3 text-sm leading-relaxed text-muted">{pick(locale, course.description)}</p>}
      <div className="mt-auto pt-5">
        <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1.5 text-xs text-accent">
          <StatusIcon aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />{t(completed ? 'courses.completed' : 'courses.inProgress')}
        </p>
        {course.certificateUrl && <a href={course.certificateUrl} target="_blank" rel="noreferrer" aria-label={`${t('courses.certificate')} — ${pick(locale, course.name)}`} className="mt-3 flex min-h-11 items-center gap-2 text-sm text-ink hover:text-accent"><ExternalLink aria-hidden="true" className="h-4 w-4" />{t('courses.certificate')}</a>}
      </div>
    </article>
  )
}

export function Courses() {
  const { t } = useLanguage()
  const [expanded, setExpanded] = useState(false)
  const selectedCourses = courses.filter((course) => course.highlight)
  const remainingCourses = courses.filter((course) => !course.highlight)
  const visibleCourses = expanded ? [...selectedCourses, ...remainingCourses] : selectedCourses
  return (
    <section id="cursos" className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
      <SectionHeader label={t('courses.label')} title={t('courses.title')} />
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p role="status" className="text-sm text-muted">{visibleCourses.length} {t('courses.of')} {courses.length} {t('courses.shown')}</p>
        <button type="button" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded} aria-controls="course-results"
          className="inline-flex min-h-11 items-center gap-2 rounded-md border border-accent/50 bg-surface px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent">
          {t(expanded ? 'courses.viewLess' : 'courses.viewAll')}
          {expanded ? <ChevronUp aria-hidden="true" className="h-4 w-4" /> : <ChevronDown aria-hidden="true" className="h-4 w-4" />}
        </button>
      </div>
      <div id="course-results" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleCourses.map((course) => <CourseCard key={course.name.pt} course={course} />)}
      </div>
    </section>
  )
}
