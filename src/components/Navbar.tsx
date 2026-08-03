import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navLinks, profile } from '../data/portfolio';
import { useLanguage } from '../i18n/language';

function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();
  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={locale === 'pt' ? 'Switch language to English' : 'Trocar idioma para português'}
      className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {locale === 'pt' ? 'EN' : 'PT'}
    </button>
  );
}

export function Navbar({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 border-b transition-colors duration-200 backdrop-blur-md ${
        scrolled ? 'border-border bg-base/70' : 'border-transparent bg-base/40'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <a
          href="#inicio"
          className="font-display text-lg font-semibold text-ink"
          onClick={() => setOpen(false)}
        >
          {profile.name.split(' ')[0]}
          <span className="text-accent"> Faria</span>
        </a>

        <div className="flex items-center gap-4">
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors duration-150 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
                >
                  {t(`nav.${link.key}`)}
                </a>
              </li>
            ))}
          </ul>
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t('menu.close') : t('menu.open')}
            aria-expanded={open}
            className="rounded-md p-2 text-ink transition-colors hover:text-accent md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col bg-base/95 md:hidden"
          >
            <nav className="flex items-center justify-between px-6 py-[calc(1rem+env(safe-area-inset-top))] sm:px-10">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {'//'} {t('menu.label')}
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t('menu.close')}
                className="fixed right-6 top-[calc(1rem+env(safe-area-inset-top))] z-50 rounded-md p-2 text-ink transition-colors hover:text-accent"
              >
                <X className="h-6 w-6" />
              </button>
            </nav>

            <ul className="flex flex-1 flex-col items-center justify-center gap-8 px-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ delay: 0.06 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-3 font-display text-2xl font-medium text-ink transition-colors hover:text-accent"
                  >
                    <span className="font-mono text-xs text-subtle">{`0${i + 1}`}</span>
                    {t(`nav.${link.key}`)}
                    <ArrowRight className="h-5 w-5 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ delay: 0.06 * navLinks.length, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <LanguageToggle />
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
