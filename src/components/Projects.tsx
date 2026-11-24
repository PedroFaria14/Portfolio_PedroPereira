import { useState } from 'react'
import { ArrowUpRight, Globe, Video } from 'lucide-react'
import { allProjects, featuredProjects, type Project, type ProjectCategory } from '../data/portfolio'
import { useLanguage } from '../i18n/language'
import { pick } from '../i18n/i18n'
import { GithubIcon } from './icons'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

function ProjectCard({ project }: { project: Project }) {
  const { title, description, stack, impact, link, github, video, context, quality } = project
  const { locale, t } = useLanguage()
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-5 text-center transition-colors duration-200 hover:border-accent sm:p-6 lg:text-left">
      <p className="mb-2 font-mono text-xs text-accent">{t(`projects.categories.${project.category}`)}</p>
      <h3 className="font-display text-lg font-medium text-ink">{pick(locale, title)}</h3>
      {context && <p className="mt-2 text-xs leading-relaxed text-muted">{pick(locale, context)}</p>}
      <div className="mt-3" />
      <p className="flex-1 text-sm leading-relaxed text-muted">{pick(locale, description)}</p>
      {impact && <p className="mt-3 text-sm font-medium text-accent">{pick(locale, impact)}</p>}
      <div className="mt-4 flex flex-wrap justify-center gap-2 pt-1 lg:justify-start">
        {stack.map((s) => (
          <span
            key={s}
            className="rounded bg-surface-hover px-2 py-1 font-mono text-xs text-muted transition-colors group-hover:text-ink"
          >
            {s}
          </span>
        ))}
      </div>
      {quality && (
        <ul aria-label={t('projects.quality')} className="mt-4 flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs text-muted lg:justify-start">
          {quality.map((item) => <li key={item}>✓ {t(`projects.${item}`)}</li>)}
        </ul>
      )}
      <div className="mt-5 flex flex-wrap justify-center gap-2 border-t border-border pt-4 lg:justify-start">
        {github && <ProjectLink href={github} label={t('projects.repository')} title={pick(locale, title)}><GithubIcon className="h-4 w-4" /></ProjectLink>}
        {link && <ProjectLink href={link} label={t('projects.demo')} title={pick(locale, title)}><Globe className="h-4 w-4" /></ProjectLink>}
        {video && <ProjectLink href={video} label={t('projects.video')} title={pick(locale, title)}><Video className="h-4 w-4" /></ProjectLink>}
      </div>
    </article>
  )
}

function ProjectLink({ href, label, title, children }: { href: string; label: string; title: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={`${label} — ${title}`}
      className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-3 text-xs text-ink transition-colors hover:border-accent hover:text-accent">
      {children}{label}
    </a>
  )
}

type Filter = 'featured' | 'all' | ProjectCategory
const filters: Filter[] = ['featured', 'all', 'frontend', 'fullstack', 'backend', 'java', 'ai', 'web3']
const catalog = [...featuredProjects, ...allProjects].filter((project) => !project.unavailable)
const unavailableProjects = allProjects.filter((project) => project.unavailable)

export function Projects() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<Filter>('featured')
  const visibleProjects = filter === 'featured' ? featuredProjects : catalog.filter(
    (project) => filter === 'all' || project.category === filter || project.categories?.includes(filter),
  )
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-6 py-16 text-center sm:px-10 sm:py-24 lg:px-16 lg:text-left">
      <SectionHeader label={t('projects.label')} title={t('projects.title')} />
      <p className="mb-6 max-w-3xl text-sm leading-relaxed text-muted">{t('projects.intro')}</p>
      <div role="group" aria-label={t('projects.filter')} className="mb-5 flex flex-wrap justify-center gap-2 lg:justify-start">
        {filters.map((value) => (
          <button type="button" key={value} aria-pressed={filter === value} aria-controls="project-results"
            onClick={() => setFilter(value)}
            className={`min-h-11 rounded-full border px-4 py-2 text-sm transition-colors ${filter === value ? 'border-accent bg-accent text-base' : 'border-border bg-surface text-muted hover:border-accent hover:text-ink'}`}>
            {t(`projects.categories.${value}`)}
          </button>
        ))}
      </div>
      <p role="status" className="mb-6 text-xs text-muted">{visibleProjects.length} {t('projects.results')}</p>
      <div id="project-results" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, i) => (
          <Reveal key={`${filter}-${project.title.pt}`} delay={(i % 3) * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {filter === 'featured' && (
        <button type="button" onClick={() => setFilter('all')} aria-controls="project-results"
          className="mt-10 inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent">
          {t('projects.viewAll')}
          <ArrowUpRight className="h-4 w-4" />
        </button>
      )}
      {filter === 'all' && unavailableProjects.length > 0 && (
        <details className="mt-10 rounded-xl border border-border p-5 text-left text-sm text-muted">
          <summary className="cursor-pointer py-2 text-ink">{t('projects.archive')}</summary>
          <p className="mt-3 leading-relaxed">{t('projects.unavailable')}</p>
          <ul className="mt-3 list-inside list-disc space-y-1">
            {unavailableProjects.map((project) => <li key={project.title.pt}>{project.title.pt}</li>)}
          </ul>
        </details>
      )}
    </section>
  )
}
