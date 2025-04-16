import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

export const supportedLocales = ["es", "en"]
export const defaultLocale = "es"

export function getLocale(headers: { "accept-language": string }): string {
  const languages = new Negotiator({ headers }).languages()

  return match(languages, supportedLocales, defaultLocale)
}

export function hasPathnameLocale(pathname: string): boolean {
  return supportedLocales.some(
    (locale) =>
      pathname.includes(`/${locale}/`) || pathname.endsWith(`/${locale}`),
  )
}
