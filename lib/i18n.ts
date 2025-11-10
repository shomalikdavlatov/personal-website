import translations from "./translations.json"

export type Language = "en" | "uz" | "ru"

export const getTranslation = (lang: Language, key: string): string => {
  const keys = key.split(".")
  let value: any = translations[lang]

  for (const k of keys) {
    value = value?.[k]
  }

  return value || key
}

export const languages = [
  { code: "en", name: "English" },
  { code: "uz", name: "Oʻzbekcha" },
  { code: "ru", name: "Русский" },
] as const
