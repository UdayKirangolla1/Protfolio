import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Golla Uday Kiran - Full Stack Developer",
  description:
    "Portfolio of Golla Uday Kiran, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.",
  keywords: ["portfolio", "developer", "react", "nextjs", "typescript", "web development"],
  authors: [{ name: "Golla Uday Kiran" }],
  openGraph: {
    title: "Golla Uday Kiran - Full Stack Developer",
    description: "Portfolio of Golla Uday Kiran, a passionate full-stack developer",
    url: "https://johndoe-portfolio.vercel.app",
    siteName: "Golla Uday Kiran Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Golla Uday Kiran - Full Stack Developer",
    description: "Portfolio of Golla Uday Kiran, a passionate full-stack developer",
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
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
