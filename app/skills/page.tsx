"use client"

import { useLanguageContext } from "../providers/language-provider"

export default function Skills() {
  const { t } = useLanguageContext()

  const skillsData = {
    programming: [
      { category: t("skills.databases"), items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"] },
      { category: t("skills.backend"), items: ["Express.js", "NestJS", "Django"] },
      { category: t("skills.devops"), items: ["Docker", "AWS"] },
      { category: t("skills.frontend"), items: ["React", "Next.js", "React Native"] },
      { category: t("skills.styling"), items: ["Tailwind CSS"] },
    ],
    languages: [
      { lang: "Uzbek", level: "Native" },
      { lang: "English", level: "C1" },
      { lang: "Russian", level: "B1" },
    ],
    soft: [
      "Problem-solving",
      "Team collaboration",
      "Leadership & student-community building",
      "Public speaking",
      "Fast-learning & self-driven",
      "Time management",
      "Communication & empathy",
    ],
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12">{t("skills.title")}</h1>

        {/* Programming Skills */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-primary">{t("skills.programming")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData.programming.map((group) => (
              <div key={group.category} className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-lg mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-primary">{t("skills.languages")}</h2>
          <div className="space-y-4">
            {skillsData.languages.map((lang) => (
              <div
                key={lang.lang}
                className="p-4 rounded-lg bg-card border border-border flex justify-between items-center"
              >
                <span className="font-medium">{lang.lang}</span>
                <span className="text-primary font-semibold">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h2 className="text-2xl font-semibold mb-8 text-primary">{t("skills.soft")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillsData.soft.map((skill) => (
              <div key={skill} className="p-4 rounded-lg bg-card border border-border flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
