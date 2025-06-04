import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI | Artikov Rozimuhammad",
  description: "Pearson BTEC International Level 3 Foundation Diploma in Information Technology",
  generator: "v0.dev",
}

export const dynamic = "force-static"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-all duration-500">
            <Navbar />
            <main className="container mx-auto px-4 py-8 max-w-5xl">{children}</main>
            <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-6 border-t border-gray-200/50 dark:border-gray-700/50 transition-all duration-300">
              <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Artikov Rozimuhammad. Barcha huquqlar himoyalangan.
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
