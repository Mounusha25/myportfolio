import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Vishal Lakshmi Narayanan - Data Science Graduate Student",
    template: "%s | Vishal Lakshmi Narayanan",
  },
  description:
    "Data Science graduate student at Arizona State University focused on AI/ML, NLP, optimization, and applied research.",
  keywords: ["Data Science", "Machine Learning", "AI", "NLP", "Research", "ASU"],
  authors: [{ name: "Vishal Lakshmi Narayanan" }],
  creator: "Vishal Lakshmi Narayanan",
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="min-h-screen w-full relative bg-black">
            {/* Emerald Depths radial glow (keep this) */}
            <div
              className="absolute inset-0 z-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16,185,129,0.25), transparent 70%), #000000",
              }}
            />

            {/* ✅ Waves (bottom). Optional: duplicate with `emerald-waves-top` for top waves */}
           
            {/* Optional top waves:
            <div className="emerald-waves-top">
              <div className="emerald-wave"></div>
              <div className="emerald-wave"></div>
              <div className="emerald-wave"></div>
            </div> */}

            {/* App content above everything */}
            <div className="relative z-10">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
