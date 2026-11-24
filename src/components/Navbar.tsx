import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { navLinks, profile } from '../data/portfolio';
import { useLanguage } from '../i18n/language';

function LanguageToggle() {
  const { locale, toggleLocale, t } = useLanguage();
  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t('menu.switchTo')}
      className="min-h-11 min-w-11 rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {locale === 'pt' ? 'EN' : 'PT'}
    </button>
  );
}

export function Navbar({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { t } = useLanguage();

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menuRef.current?.querySelector<HTMLButtonElement>('button')?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
      if (event.key !== 'Tab') return;
      const items = menuRef.current?.querySelectorAll<HTMLElement>('a[href], button');
      if (!items?.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onResize = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onResize);
      previousFocus?.focus();
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 border-b backdrop-blur-md transition-colors duration-200 ${
        scrolled ? 'border-border bg-base/85' : 'border-transparent bg-base/40'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <a
          href="#inicio"
          className="font-display text-lg font-semibold text-ink transition-[text-shadow] duration-300 hover:[text-shadow:0_0_18px_rgba(201,164,74,0.5)]"
          onClick={() => setOpen(false)}
        >
          {profile.name.split(' ')[0]}
          <span className="text-accent"> Faria</span>
        </a>

        <div className="flex items-center gap-4">
          <ul className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm text-muted transition-colors duration-150 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent after:absolute after:bottom-[-4px] after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-accent after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
                >
                  {t(`nav.${link.key}`)}
                </a>
              </li>
            ))}
          </ul>
          <LanguageToggle />
          <button
            type="button"
            ref={triggerRef}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t('menu.close') : t('menu.open')}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="min-h-11 min-w-11 rounded-md p-2 text-ink transition-colors hover:text-accent lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {createPortal(<AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label={t('menu.label')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-base/95 lg:hidden"
          >
            <nav className="flex items-center justify-between px-6 py-[calc(1rem+env(safe-area-inset-top))] sm:px-10">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {'//'} {t('menu.label')}
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t('menu.close')}
                className="fixed right-6 top-[calc(1rem+env(safe-area-inset-top))] z-50 min-h-11 min-w-11 rounded-md p-2 text-ink transition-colors hover:text-accent"
              >
                <X className="h-6 w-6" />
              </button>
            </nav>

            <ul className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-6 sm:gap-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ delay: 0.06 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex min-h-11 items-center gap-3 font-display text-2xl font-medium text-ink transition-colors hover:text-accent"
                  >
                    <span className="font-mono text-xs text-subtle">{`0${i + 1}`}</span>
                    {t(`nav.${link.key}`)}
                    <ArrowRight className="h-5 w-5 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ delay: 0.06 * navLinks.length, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <LanguageToggle />
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>, document.body)}
    </header>
  );
}
