"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import HeaderMarquee from "./HeaderMarquee"

const navigation = [
  { name: "Home", href: "#top" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (href: string) => {
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full relative overflow-hidden header-marquee-pause border-b border-purple-200/50 bg-white/70 backdrop-blur-lg">
      {/* Marquee background behind content */}
      <HeaderMarquee />
      <div className="relative z-10 container flex h-14 items-center justify-between">
        {/* Left side - Name/Logo */}
        <Link href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="font-bold text-lg hover:opacity-80 transition-opacity">
          <span className="hidden md:inline">Mounusha Ram Metti</span>
          <span className="md:hidden">MR</span>
        </Link>

        {/* Right side - Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="nav-link text-black font-medium"
              onClick={(e) => {
                if (item.href === "#top") {
                  e.preventDefault()
                  handleNavClick(item.href)
                }
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base text-black hover:bg-purple-100/50 focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle Menu</span>
        </Button>

        {/* Mobile logo */}
        <div className="flex-1 md:hidden">
          <Link href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <Image
              src="/images/web-logo.png"
              alt="Mounusha Ram Metti"
              width={100}
              height={32}
              className="h-6 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="relative overflow-hidden border-t border-purple-200/50 bg-white/80 md:hidden">
          {/* Marquee background for mobile menu */}
          <HeaderMarquee />
          <nav className="relative z-10 flex flex-col space-y-1 p-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-black font-medium"
                onClick={(e) => {
                  if (item.href === "#top") {
                    e.preventDefault()
                    handleNavClick(item.href)
                  } else {
                    setMobileMenuOpen(false)
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
