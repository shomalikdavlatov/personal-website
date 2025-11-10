"use client"

import { ExternalLink, Github } from "lucide-react"
import { useLanguageContext } from "../providers/language-provider"

export default function Projects() {
  const { t } = useLanguageContext()

  const projects = {
    it: [
      {
        title: "YouTube Backend",
        description: "Backend system for YouTube-like platform",
        github: "https://github.com/shomalikdavlatov/YouTube-Backend",
        tags: ["Backend", "API"],
      },
      {
        title: "Movies Website Backend",
        description: "Backend for movies website platform",
        github: "https://github.com/shomalikdavlatov/Exam-Movies",
        tags: ["Backend", "Database"],
      },
      {
        title: "ERP System",
        description: "Enterprise Resource Planning system",
        github: "https://github.com/shomalikdavlatov/ERP",
        tags: ["Full Stack", "Enterprise"],
      },
      {
        title: "Trackify",
        description: "Project tracking and management tool",
        github: "https://github.com/shomalikdavlatov/Trackify",
        tags: ["Full Stack", "Tools"],
      },
    ],
    life: [
      {
        title: "Fergana Events",
        description: "Community events coordination platform",
        link: "https://t.me/fergana_events",
        tags: ["Community", "Events"],
      },
      {
        title: "Speak Easy Uz",
        description: "Language learning community",
        link: "https://t.me/speak_easy_uz",
        tags: ["Community", "Learning"],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12">{t("projects.title")}</h1>

        {/* IT Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-primary">{t("projects.it")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.it.map((project) => (
              <a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded text-xs bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Life Projects */}
        <div>
          <h2 className="text-2xl font-semibold mb-8 text-primary">{t("projects.life")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.life.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <ExternalLink className="w-5 h-5 text-primary" />
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded text-xs bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
