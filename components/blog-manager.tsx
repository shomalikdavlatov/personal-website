"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Trash2, Edit2, Plus } from "lucide-react";
import { useLanguageContext } from "@/app/providers/language-provider";

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    date: string;
}

export function BlogManager() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [isCreating, setIsCreating] = useState(false);
    const { t } = useLanguageContext();
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
    });

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("/api/blog");
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const handleCreatePost = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/dashboard/blog", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const newPost = await response.json();
                setPosts([newPost, ...posts]);
                setFormData({ title: "", slug: "", excerpt: "", content: "" });
                setIsCreating(false);
            } else {
                alert(t("blogManager.error"));
            }
        } catch (error) {
            console.error("Failed to create post:", error);
            alert(t("blogManager.error"));
        }
    };

    const handleDeletePost = async (id: string) => {
        if (!confirm(t("blogManager.deleteConfirm"))) return;

        try {
            const response = await fetch(`/api/dashboard/blog/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                setPosts(posts.filter((post) => post.id !== id));
            } else {
                alert(t("blogManager.deleteError"));
            }
        } catch (error) {
            console.error("Failed to delete post:", error);
            alert(t("blogManager.deleteError"));
        }
    };

    return (
        <div className="space-y-8">
            {/* Create Post Section */}
            {!isCreating ? (
                <Button onClick={() => setIsCreating(true)} className="gap-2">
                    <Plus className="w-4 h-4" />
                    {t("blogManager.newPost")}
                </Button>
            ) : (
                <form
                    onSubmit={handleCreatePost}
                    className="p-6 rounded-lg bg-card border border-border space-y-4"
                >
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            {t("blogManager.title")}
                        </label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    title: e.target.value,
                                })
                            }
                            className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none"
                            placeholder="Post title"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            {t("blogManager.slug")}
                        </label>
                        <input
                            type="text"
                            value={formData.slug}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    slug: e.target.value,
                                })
                            }
                            className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none"
                            placeholder="post-url-slug"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            {t("blogManager.excerpt")}
                        </label>
                        <textarea
                            value={formData.excerpt}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    excerpt: e.target.value,
                                })
                            }
                            className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none resize-none"
                            placeholder="Brief summary"
                            rows={2}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            {t("blogManager.content")}
                        </label>
                        <textarea
                            value={formData.content}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    content: e.target.value,
                                })
                            }
                            className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none resize-none font-mono text-sm"
                            placeholder="<h2>Title</h2><p>Content here...</p>"
                            rows={8}
                            required
                        />
                    </div>

                    <div className="flex gap-2">
                        <Button type="submit">{t("blogManager.create")}</Button>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setIsCreating(false)}
                        >
                            {t("blogManager.cancel")}
                        </Button>
                    </div>
                </form>
            )}

            {/* Posts List */}
            <div>
                <h2 className="text-2xl font-semibold mb-6">
                    {t("blogManager.blogPosts")}
                </h2>

                {loading ? (
                    <div className="text-muted-foreground">
                        {t("blogManager.loading")}
                    </div>
                ) : posts.length === 0 ? (
                    <div className="text-muted-foreground">
                        {t("blogManager.noPosts")}
                    </div>
                ) : (
                    <div className="space-y-4">
                        {posts.map((post) => (
                            <div
                                key={post.id}
                                className="p-4 rounded-lg bg-card border border-border flex items-start justify-between"
                            >
                                <div className="flex-1">
                                    <h3 className="font-semibold">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {post.slug}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="sm" disabled>
                                        <Edit2 className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() =>
                                            handleDeletePost(post.id)
                                        }
                                        className="text-red-600 hover:text-red-700"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
