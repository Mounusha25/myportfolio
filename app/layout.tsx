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
    default: "Mounusha Ram Metti - Data Science Graduate Student",
    template: "%s | Mounusha Ram Metti",
  },
  description:
    "Data Science graduate student at Arizona State University focused on AI/ML, NLP, optimization, and applied research.",
  keywords: ["Data Science", "Machine Learning", "AI", "NLP", "Research", "ASU"],
  authors: [{ name: "Mounusha Ram Metti" }],
  creator: "Mounusha Ram Metti",
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/images/logo.png' },
      { url: '/images/logo-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/logo-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Devicon icon font for skill/tool logos */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        {/* Prevent MetaMask auto-injection errors */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                Object.defineProperty(window, 'ethereum', {
                  get: function() { return undefined; },
                  set: function() {},
                  configurable: false
                });

                window.addEventListener('error', function(e) {
                  if (e.message && (e.message.includes('MetaMask') || e.message.includes('ethereum') || e.message.includes('Failed to connect'))) {
                    e.stopImmediatePropagation();
                    return false;
                  }
                });

                window.addEventListener('unhandledrejection', function(e) {
                  if (e.reason && typeof e.reason === 'string' && (e.reason.includes('MetaMask') || e.reason.includes('ethereum'))) {
                    e.preventDefault();
                    return false;
                  }
                });

                const originalError = console.error;
                console.error = function(...args) {
                  const msg = args.join(' ');
                  if (!msg.includes('MetaMask') && !msg.includes('ethereum')) {
                    originalError.apply(console, args);
                  }
                };
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen w-full relative">
            {/* Aurora Dream Corner Whispers */}
            <div
              className="absolute inset-0 z-0"
              style={{
                background: `
                  radial-gradient(ellipse 85% 65% at 8% 8%, rgba(175, 109, 255, 0.42), transparent 60%),
                  radial-gradient(ellipse 75% 60% at 75% 35%, rgba(255, 235, 170, 0.55), transparent 62%),
                  radial-gradient(ellipse 70% 60% at 15% 80%, rgba(255, 100, 180, 0.40), transparent 62%),
                  radial-gradient(ellipse 70% 60% at 92% 92%, rgba(120, 190, 255, 0.45), transparent 62%),
                  linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
                `,
              }}
            />

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
