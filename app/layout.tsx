import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shashank Reddy Kallem - Full Stack Developer & ML Engineer",
  description:
    "Portfolio of Shashank Reddy Kallem, Full Stack Developer and Machine Learning Engineer with expertise in React, Node.js, Python, and AWS.",
  keywords: ["Full Stack Developer", "Machine Learning Engineer", "React", "Node.js", "Python", "AWS", "Portfolio"],
  authors: [{ name: "Shashank Reddy Kallem" }],
  openGraph: {
    title: "Shashank Reddy Kallem - Full Stack Developer & ML Engineer",
    description: "Building Intelligent Web Applications with Full Stack and AI",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
