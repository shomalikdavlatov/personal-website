"use client"
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguageContext } from "@/app/providers/language-provider";
import { useState } from "react";

const navItems = [
    { href: "/", label: "nav.home" },
    { href: "/about", label: "nav.about" },
    { href: "/skills", label: "nav.skills" },
    { href: "/projects", label: "nav.projects" },
    { href: "/blog", label: "nav.blog" },
    { href: "/contact", label: "nav.contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const { language, setLanguage, t } = useLanguageContext();

    return (
        <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="text-xl font-bold text-primary">
                        <img
                            src="/favicon.svg" 
                            alt="Logo"
                            className="h-6 w-auto"
                        />
                    </Link>

                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent/10 transition-colors"
                            >
                                {t(item.label)}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <select
                            value={language}
                            onChange={(e) =>
                                setLanguage(
                                    e.target.value as "en" | "uz" | "ru"
                                )
                            }
                            className="px-2 py-1 text-sm rounded-md bg-muted text-foreground border border-border cursor-pointer"
                        >
                            <option value="en">EN</option>
                            <option value="uz">UZ</option>
                            <option value="ru">RU</option>
                        </select>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                        >
                            {theme === "dark" ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                <X className="w-5 h-5" />
                            ) : (
                                <Menu className="w-5 h-5" />
                            )}
                        </Button>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden pb-4 space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent/10 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {t(item.label)}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
