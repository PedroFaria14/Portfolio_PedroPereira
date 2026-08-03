import type { ReactNode } from 'react'
import { useEffect, useMemo, useState } from 'react'
import { translations } from './translations'
import { LanguageContext, type Locale } from './language'

const STORAGE_KEY = 'portfolio-locale'

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'pt'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'pt' || stored === 'en') return stored
  return window.navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

function lookup(dict: Record<string, unknown>, key: string): string {
  let current: unknown = dict
  for (const part of key.split('.')) {
    if (current && typeof current === 'object' && part in current) {
      current = (current as Record<string, unknown>)[part]
    } else {
      return key
    }
  }
  return typeof current === 'string' ? current : key
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale: (l: Locale) => setLocaleState(l),
      toggleLocale: () => setLocaleState((prev) => (prev === 'pt' ? 'en' : 'pt')),
      t: (key: string) =>
        lookup(translations[locale] as unknown as Record<string, unknown>, key),
    }),
    [locale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}