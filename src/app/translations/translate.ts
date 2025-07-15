"server only"

const dictionaries: Record<string, () => Promise<{} | Record<string, string>>> = {
  es: () => import("./es.json").then((module) => module.default),
  en: () => import("./en.json").then((module) => module.default),
}

export async function getTranslations(locale: string) {
  const dictionary = await dictionaries[locale]?.()

  const t = (key: string, paramKey = ""): string => {
    if (typeof dictionary === "object" && dictionary !== null && key in dictionary) {
      if (typeof (dictionary as Record<string, string>)[key] === "object") {
        return ((dictionary as Record<string, string>)[key])[paramKey as unknown as number];
      }
      return (dictionary as Record<string, string>)[key] || paramKey;
    }
    return paramKey;
  }

  return { t }
}