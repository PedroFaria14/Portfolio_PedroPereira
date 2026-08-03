import type { Locale } from './language'

export type BiString = { pt: string; en: string }

export function pick(locale: Locale, value: BiString): string {
  return value[locale] || value.pt
}
