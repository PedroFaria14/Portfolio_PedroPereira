import { ArrowUpRight } from 'lucide-react'
import { allProjects, featuredProjects, type Project } from '../data/portfolio'
import { useLanguage } from '../i18n/language'
import { pick } from '../i18n/i18n'
import { GithubIcon } from './icons'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

function ProjectCard({ project }: { project: Project }) {
  const { title, description, stack, impact, link } = project
  const { locale, t } = useLanguage()
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-medium text-ink">{pick(locale, title)}</h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label={`${t('projects.open')} ${pick(locale, title)}`}
            className="text-muted transition-colors hover:text-accent"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
        )}
      </div>

      <p className="flex-1 text-sm leading-relaxed text-muted">{pick(locale, description)}</p>

      {impact && <p className="mt-3 text-sm font-medium text-accent">{pick(locale, impact)}</p>}

      <div className="mt-4 flex flex-wrap gap-2 pt-1">
        {stack.map((s) => (
          <span
            key={s}
            className="rounded bg-surface-hover px-2 py-1 font-mono text-xs text-muted transition-colors group-hover:text-ink"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Projects() {
  const { t } = useLanguage()
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-16">
      <SectionHeader label={t('projects.label')} title={t('projects.title')} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.title.pt} delay={(i % 3) * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <a
          href="#todos-projetos"
          className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          {t('projects.viewAll')}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </Reveal>

      {/* Todos os projetos */}
      <div id="todos-projetos" className="mt-20 scroll-mt-24">
        <SectionHeader label={t('projects.allLabel')} title={t('projects.allTitle')} />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allProjects.map((project, i) => (
            <Reveal key={project.title.pt} delay={(i % 3) * 0.04}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
