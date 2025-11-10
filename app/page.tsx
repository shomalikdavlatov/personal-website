"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { useLanguageContext } from "./providers/language-provider"

export default function Home() {
  const { t } = useLanguageContext()

  return (
      <div className="min-h-screen bg-background">
          {/* Hero section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
              <div className="text-center space-y-8">
                  {/* Avatar placeholder */}
                  <div className="flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="w-32 sm:w-48 h-32 sm:h-48 rounded-full bg-gradient-to-br from-primary to-accent p-[4px] flex items-center justify-center">
                          <img
                              src="/avatar.png"
                              alt="Avatar"
                              className="w-full h-full rounded-full object-cover"
                          />
                      </div>
                  </div>

                  {/* Main content */}
                  <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
                      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground">
                          Shomalik Davlatov
                      </h1>
                      <p className="text-xl sm:text-2xl text-primary font-semibold">
                          {t("home.title")}
                      </p>
                      <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                          {t("home.subtitle")}
                      </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-4 justify-center flex-wrap animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
                      <Link href="/projects">
                          <Button size="lg" className="gap-2 hover-scale">
                              {t("home.cta")}
                              <ArrowRight className="w-4 h-4" />
                          </Button>
                      </Link>
                      <Link href="/contact">
                          <Button
                              size="lg"
                              variant="outline"
                              className="hover-scale bg-transparent"
                          >
                              {t("home.cta_secondary")}
                          </Button>
                      </Link>
                  </div>

                  {/* Social links */}
                  <div className="flex gap-4 justify-center pt-8 flex-wrap animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
                      <a
                          href="https://github.com/shomalikdavlatov"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-lg bg-muted hover:bg-accent/20 transition-all hover-scale"
                          aria-label="GitHub"
                      >
                          <Github className="w-6 h-6" />
                      </a>
                      <a
                          href="https://linkedin.com/in/shomalikdavlatov"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-lg bg-muted hover:bg-accent/20 transition-all hover-scale"
                          aria-label="LinkedIn"
                      >
                          <Linkedin className="w-6 h-6" />
                      </a>
                      <a
                          href="https://t.me/shomalikdavlatov"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-lg bg-muted hover:bg-accent/20 transition-all hover-scale"
                          aria-label="Telegram"
                      >
                          <ExternalLink className="w-6 h-6" />
                      </a>
                      <a
                          href="mailto:shomalikdavlatov@gmail.com"
                          className="p-3 rounded-lg bg-muted hover:bg-accent/20 transition-all hover-scale"
                          aria-label="Email"
                      >
                          <Mail className="w-6 h-6" />
                      </a>
                  </div>

                  {/* Quick stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
                      <div className="p-4 sm:p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all hover-scale">
                          <p className="text-2xl sm:text-3xl font-bold text-primary">
                              8+
                          </p>
                          <p className="text-sm text-muted-foreground">
                              Projects
                          </p>
                      </div>
                      <div className="p-4 sm:p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all hover-scale">
                          <p className="text-2xl sm:text-3xl font-bold text-primary">
                              18
                          </p>
                          <p className="text-sm text-muted-foreground">
                              Years old
                          </p>
                      </div>
                      <div className="p-4 sm:p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all hover-scale">
                          <p className="text-2xl sm:text-3xl font-bold text-primary">
                              3
                          </p>
                          <p className="text-sm text-muted-foreground">
                              Languages
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
