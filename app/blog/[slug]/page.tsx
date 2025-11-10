"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { formatDate } from "@/lib/utils"
import { useLanguageContext } from "@/app/providers/language-provider"

interface BlogPost {
  id: string
  title: string
  content: string
  date: string
  slug: string
}

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string
  const { t } = useLanguageContext()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/blog/${slug}`)
        if (response.ok) {
          const data = await response.json()
          setPost(data)
        }
      } catch (error) {
        console.error("Failed to fetch blog post:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-background py-20">
        <div className="max-w-3xl mx-auto px-4 text-center text-muted-foreground">Loading...</div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background py-20">
        <div className="max-w-3xl mx-auto px-4">
          <Link href="/blog" className="flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="text-center text-muted-foreground">Post not found</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <time className="text-muted-foreground">{formatDate(post.date)}</time>
          </header>

          <div className="prose prose-invert max-w-none text-foreground">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
      </div>
    </div>
  )
}
