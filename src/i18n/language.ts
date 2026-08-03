import { createContext, useContext } from 'react'

export type Locale = 'pt' | 'en'

export type TranslationKey = string

export interface LanguageContextValue {
  locale: Locale
  setLocale: (l: Locale) => void
  toggleLocale: () => void
  t: (key: TranslationKey) => string
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
