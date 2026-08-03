import { courseCategories, courses } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function Courses() {
  return (
    <section id="cursos" className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-16">
      <SectionHeader label="aprendizado" title="Cursos & Certificações" />

      <Reveal>
        <div className="space-y-10">
          {courseCategories.map((category) => {
            const items = courses.filter((c) => c.category === category)
            return (
              <div key={category}>
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-accent">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((c) => (
                    <span
                      key={c.name}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
                    >
                      {c.name}
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
