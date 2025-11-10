"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { BlogManager } from "@/components/blog-manager"
import { LogOut } from "lucide-react"
import { useLanguageContext } from "../providers/language-provider"

export default function Dashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { t } = useLanguageContext()

  useEffect(() => {
    const token = document.cookie.split("; ").find((row) => row.startsWith("auth_token="))
    if (!token) {
      router.push("/login")
    } else {
      setIsAuthenticated(true)
      setIsLoading(false)
    }
  }, [router])

  const handleLogout = () => {
    document.cookie = "auth_token=; path=/; max-age=0"
    router.push("/login")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground">{t("dashboard.loading")}</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold">{t("dashboard.title")}</h1>
          <Button variant="outline" onClick={handleLogout} className="gap-2 bg-transparent">
            <LogOut className="w-4 h-4" />
            {t("dashboard.logout")}
          </Button>
        </div>

        {/* Blog Manager */}
        <BlogManager />
      </div>
    </div>
  )
}
