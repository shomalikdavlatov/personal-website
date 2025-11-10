"use client"

import { ContactForm } from "@/components/contact-form"
import { useLanguageContext } from "../providers/language-provider"

export default function Contact() {
  const { t } = useLanguageContext()

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">{t("contact.title")}</h1>
        <p className="text-muted-foreground mb-12">{t("contact.description")}</p>

        {/* Contact info */}
        <div className="mb-12 p-6 rounded-lg bg-card border border-border">
          <p className="text-sm text-muted-foreground mb-2">{t("contact.phone")}</p>
          <a href="tel:+998913977033" className="text-lg font-semibold text-primary hover:underline">
            +998913977033
          </a>
        </div>

        {/* Contact form */}
        <ContactForm />
      </div>
    </div>
  )
}
