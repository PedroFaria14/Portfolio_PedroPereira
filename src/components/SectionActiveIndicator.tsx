import { useEffect, useState } from 'react'
import { navLinks } from '../data/portfolio'
import { useLanguage } from '../i18n/language'

export function ActiveSectionIndicator() {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target)
            setActiveIndex(index >= 0 ? index : 0)
          }
        })
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label={t('menu.label')}
      className="fixed right-5 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex"
    >
      {navLinks.map((link, i) => (
        <a
          key={link.href}
          href={link.href}
          aria-label={t(`nav.${link.key}`)}
          title={t(`nav.${link.key}`)}
          className="flex items-center justify-center rounded-full p-1.5 transition-colors"
        >
          <span
            className={`block rounded-full transition-all duration-300 ${
              i === activeIndex
                ? 'h-2.5 w-2.5 bg-accent'
                : 'h-1.5 w-1.5 bg-border hover:bg-accent/60'
            }`}
          />
        </a>
      ))}
    </nav>
  )
}