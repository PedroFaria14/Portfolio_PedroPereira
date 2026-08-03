import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Mail } from 'lucide-react'
import { profile } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './icons'

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
            Olá, meu nome é
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name.split(' ')[0]} Henrique
            <span className="block text-muted">de Faria Pereira</span>
          </h1>
          <p className="mt-5 max-w-xl font-display text-xl font-medium text-ink sm:text-2xl">
            {profile.role} • <span className="text-accent">{profile.focus}</span>
          </p>
          <p className="mt-4 max-w-xl text-base text-muted sm:text-lg">{profile.tagline}</p>

          <motion.div variants={reduce ? undefined : item} className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-base transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-accent"
            >
              <LinkedinIcon />
              LinkedIn
            </a>
            <SocialLink href={profile.links.github} label="GitHub" icon={<GithubIcon />} />
            <SocialLink href={profile.links.email} label="E-mail" icon={<Mail className="h-5 w-5" />} />
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
            <div className="overflow-hidden rounded-3xl border border-border">
              <img
                src={profile.photo}
                alt={`Foto de ${profile.name}`}
                className="h-auto w-56 object-cover sm:w-64 lg:w-72"
                style={{ aspectRatio: '4 / 5' }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}