"use client"

import Link from "next/link"
import { useLanguageContext } from "@/app/providers/language-provider"

export function Footer() {
  const { t } = useLanguageContext()
  const currentYear = new Date().getFullYear()

  return (
      <footer className="border-t border-border bg-background/50 backdrop-blur py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                  {/* Brand */}
                  <div>
                      <h3 className="text-lg font-semibold text-primary mb-4">
                          Shomalik Davlatov
                      </h3>
                      <p className="text-sm text-muted-foreground">
                          Full Stack Developer from Fergana, Uzbekistan.
                      </p>
                  </div>

                  {/* Navigation */}
                  <div>
                      <h4 className="font-semibold mb-4">Navigation</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>
                              <Link
                                  href="/"
                                  className="hover:text-primary transition-colors"
                              >
                                  {t("nav.home")}
                              </Link>
                          </li>
                          <li>
                              <Link
                                  href="/about"
                                  className="hover:text-primary transition-colors"
                              >
                                  {t("nav.about")}
                              </Link>
                          </li>
                          <li>
                              <Link
                                  href="/skills"
                                  className="hover:text-primary transition-colors"
                              >
                                  {t("nav.skills")}
                              </Link>
                          </li>
                          <li>
                              <Link
                                  href="/projects"
                                  className="hover:text-primary transition-colors"
                              >
                                  {t("nav.projects")}
                              </Link>
                          </li>
                          <li>
                              <Link
                                  href="/blog"
                                  className="hover:text-primary transition-colors"
                              >
                                  {t("nav.blog")}
                              </Link>
                          </li>
                      </ul>
                  </div>

                  {/* Social */}
                  <div>
                      <h4 className="font-semibold mb-4">Social</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>
                              <a
                                  href="https://github.com/shomalikdavlatov"
                                  className="hover:text-primary transition-colors"
                              >
                                  GitHub
                              </a>
                          </li>
                          <li>
                              <a
                                  href="https://linkedin.com/in/shomalikdavlatov"
                                  className="hover:text-primary transition-colors"
                              >
                                  LinkedIn
                              </a>
                          </li>
                          <li>
                              <a
                                  href="https://t.me/shomalikdavlatov"
                                  className="hover:text-primary transition-colors"
                              >
                                  Telegram
                              </a>
                          </li>
                      </ul>
                  </div>

                  {/* Contact */}
                  <div>
                      <h4 className="font-semibold mb-4">Contact</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>
                              <Link
                                  href="/contact"
                                  className="hover:text-primary transition-colors"
                              >
                                Email
                              </Link>
                          </li>
                          <li>
                              <a
                                  href="tel:+998913977033"
                                  className="hover:text-primary transition-colors"
                              >
                                  +998913977033
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border pt-8">
                  <p className="text-center text-sm text-muted-foreground">
                      © {currentYear} Shomalik Davlatov
                  </p>
              </div>
          </div>
      </footer>
  );
}
