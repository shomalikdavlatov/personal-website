import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/providers/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "./providers/language-provider";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Shomalik's Website",
    description:
        "Full stack engineer from Fergana, Uzbekistan. Building tech from Uzbekistan to the world.",
    keywords: [
        "Shomalik Davlatov",
        "Full Stack Developer",
        "React",
        "Next.js",
        "express.js",
        "NestJS",
        "JavaScript",
        "Portfolio",
        "Software Engineer",
    ],
    authors: [{ name: "Shomalik Davlatov", url: "https://shomalik.uz" }],
    creator: "Shomalik Davlatov",
    publisher: "Shomalik Davlatov",
    applicationName: "Shomalik Portfolio",
    robots: "index, follow", 
    icons: {
        icon: "/favicon.svg", 
        apple: "/apple-touch-icon.png"
    },
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`font-sans antialiased bg-background text-foreground`}
                cz-shortcut-listen="true"
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <LanguageProvider>
                        <div className="flex flex-col min-h-screen">
                            <Navbar />
                            <main className="flex-1">{children}</main>
                            <Footer />
                        </div>
                    </LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
