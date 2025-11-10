"use client"

import { timeAgo } from "@/lib/utils"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useLanguageContext } from "../providers/language-provider"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  slug: string
}

export default function Blog() {
  const { t } = useLanguageContext()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/blog")
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        console.error("Failed to fetch blog posts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return (
      <div className="min-h-screen bg-background py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-bold mb-12">{t("blog.title")}</h1>

              {loading ? (
                  <div className="text-center text-muted-foreground">
                      Loading...
                  </div>
              ) : posts.length === 0 ? (
                  <div className="text-center text-muted-foreground text-lg">
                      {t("blog.noPosts")}
                  </div>
              ) : (
                  <div className="space-y-8">
                      {posts.map((post) => (
                          <Link
                              key={post.id}
                              href={`/blog/${post.slug}`}
                              className="block p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all"
                          >
                              <div className="flex justify-between items-start mb-2">
                                  <h2 className="text-2xl font-semibold">
                                      {post.title}
                                  </h2>
                                  <span className="text-sm text-muted-foreground">
                                      {timeAgo(post.date)}
                                  </span>
                              </div>
                              <p className="text-muted-foreground">
                                  {post.excerpt}
                              </p>
                          </Link>
                      ))}
                  </div>
              )}
          </div>
      </div>
  );
}
