"use client"

import { useLanguageContext } from "../providers/language-provider"

export default function About() {
  const { t } = useLanguageContext()

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12">{t("about.title")}</h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Bio</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("about.bio")}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary">{t("about.focusTitle")}</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• {t("about.focus1")}</li>
              <li>• {t("about.focus2")}</li>
              <li>• {t("about.focus3")}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary">{t("about.hobbiesTitle")}</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• {t("about.hobby1")}</li>
              <li>• {t("about.hobby2")}</li>
              <li>• {t("about.hobby3")}</li>
              <li>• {t("about.hobby4")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
