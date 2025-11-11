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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen w-full relative bg-[#f0fdfa] text-gray-800 mint-theme">

            {/* Vercel Grid */}
            {/* Mint Fresh Breeze Background */}
            <div
              className="absolute inset-0 z-0 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(45deg, rgba(240,253,250,1) 0%, rgba(204,251,241,0.7) 30%, rgba(153,246,228,0.5) 60%, rgba(94,234,212,0.4) 100%), radial-gradient(circle at 40% 30%, rgba(255,255,255,0.8) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(167,243,208,0.5) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(209,250,229,0.6) 0%, transparent 45%)',
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
