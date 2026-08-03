import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Mail } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../data/portfolio'
import { useLanguage } from '../i18n/language'
import { pick } from '../i18n/i18n'
import { GithubIcon, LinkedinIcon } from './icons'
import { Typewriter } from './Typewriter'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      aria-label={label}
      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
    >
      {icon}
      <span>{label}</span>
    </a>
  )
}

export function Hero() {
  const reduce = useReducedMotion()
  const { locale, t } = useLanguage()
  const [lastName, setLastName] = useState(false)
  const nameParts = profile.name.split(' ')

  return (
    <section
      id="inicio"
      className="relative z-10 flex min-h-screen items-center px-6 pt-24 pb-16 sm:px-10 lg:px-16"
    >
      <motion.div
        className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]"
        variants={reduce ? undefined : container}
        initial={reduce ? undefined : 'hidden'}
        animate={reduce ? undefined : 'show'}
      >
        {/* Texto */}
        <motion.div variants={reduce ? undefined : item}>
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-accent">
            {t('hero.hello')}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            <Typewriter text={nameParts.slice(0, 2).join(' ')} onDone={() => setLastName(true)} />
            {nameParts[2] && (
              <motion.span
                className="block text-muted"
                initial={reduce ? undefined : { opacity: 0 }}
                animate={reduce || lastName ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
              >
                {nameParts.slice(2).join(' ')}
              </motion.span>
            )}
          </h1>
          <p className="mt-5 max-w-xl font-display text-xl font-medium text-ink sm:text-2xl">
            {pick(locale, profile.role)} •{' '}
            <span className="text-accent">{pick(locale, profile.focus)}</span>
          </p>
          <p className="mt-4 max-w-xl text-base text-muted sm:text-lg">
            {pick(locale, profile.tagline)}
          </p>

          <motion.div variants={reduce ? undefined : item} className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-base transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-accent"
            >
              <LinkedinIcon />
              {t('hero.linkedin')}
            </a>
            <SocialLink href={profile.links.github} label={t('hero.github')} icon={<GithubIcon />} />
            <SocialLink href={profile.links.email} label={t('hero.email')} icon={<Mail className="h-5 w-5" />} />
          </motion.div>
        </motion.div>

        {/* Foto */}
        <motion.div variants={reduce ? undefined : item} className="flex justify-center lg:justify-end">
          <div className="relative">
            <div
              className="absolute -inset-3 -z-10 rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(201,164,74,0.25), transparent 60%)',
                filter: 'blur(24px)',
              }}
            />
            <motion.div
              className="absolute -inset-[7px] rounded-[1.6rem]"
              aria-hidden="true"
              style={{
                background:
                  'conic-gradient(from 0deg, #C9A44A, transparent 18%, transparent 50%, rgba(201,164,74,0.35) 55%, #C9A44A 82%, transparent 95%, #C9A44A)',
                WebkitMask:
                  'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                padding: '2px',
              }}
              animate={reduce ? undefined : { rotate: 360 }}
              transition={
                reduce
                  ? undefined
                  : { repeat: Infinity, duration: 9, ease: 'linear' }
              }
            />
            <motion.div
              className="group overflow-hidden rounded-3xl border border-border"
              whileHover={reduce ? undefined : { scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <img
                src={profile.photo}
                alt={`Foto de ${profile.name}`}
                className="h-auto w-56 object-cover transition-transform duration-500 sm:w-64 lg:w-72 group-hover:scale-105"
                style={{ aspectRatio: '4 / 5' }}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}