import { Mail } from 'lucide-react';
import { profile } from '../data/portfolio';
import { useLanguage } from '../i18n/language';
import { GithubIcon, LinkedinIcon } from './icons';
import { Reveal } from './Reveal';

export function Contact() {
  const { t } = useLanguage();

  const links = [
    { href: profile.links.github, label: t('hero.github'), icon: GithubIcon },
    {
      href: profile.links.linkedin,
      label: t('hero.linkedin'),
      icon: LinkedinIcon,
    },
    { href: profile.links.email, label: t('hero.email'), icon: Mail },
  ];

  return (
    <section
      id="contato"
      className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24 lg:px-16"
    >
      <Reveal className="rounded-3xl border border-border bg-surface p-6 text-center sm:p-16">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent sm:text-sm sm:tracking-[0.2em]">
          {'//'} {t('contact.label')}
        </p>
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-4xl">
          {t('contact.title')}
        </h2>
        <p
          className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base"
          color="white"
        >
          {t('contact.description')}
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
  );
}
