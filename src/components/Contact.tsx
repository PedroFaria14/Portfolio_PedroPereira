import { Mail } from 'lucide-react'
import { profile } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './icons'
import { Reveal } from './Reveal'

const links = [
  { href: profile.links.github, label: 'GitHub', icon: GithubIcon },
  { href: profile.links.linkedin, label: 'LinkedIn', icon: LinkedinIcon },
  { href: profile.links.email, label: 'E-mail', icon: Mail },
]

export function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-16">
      <Reveal className="rounded-3xl border border-border bg-surface p-10 text-center sm:p-16">
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-accent">
          {'//'} contato
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Vamos conversar?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Estou disponível para estágio e oportunidades de desenvolvimento. Me chama por qualquer
          um dos canais abaixo.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}