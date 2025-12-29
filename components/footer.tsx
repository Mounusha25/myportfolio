import { Github, Linkedin } from "lucide-react"
import FooterMarquee from "./FooterMarquee"

export function Footer() {
  return (
    <footer className="relative overflow-hidden footer-marquee-pause border-t border-purple-200/50 py-6 md:py-0 bg-white/50 backdrop-blur-sm">
      {/* Marquee background behind content */}
      <FooterMarquee />
      <div className="relative z-10 container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-black/70 font-medium md:text-left">
            Mounusha Ram Metti. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <a
            href="https://github.com/Mounusha25"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon github w-10 h-10 flex items-center justify-center border-purple-200"
          >
            <Github className="icon w-4 h-4 text-black" />
          </a>
          <a
            href="https://linkedin.com/in/Mounusha-Ram-Metti"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin w-10 h-10 flex items-center justify-center border-purple-200"
          >
            <Linkedin className="icon w-4 h-4 text-black" />
          </a>
          <a
            href="https://leetcode.com/u/Mounusha_25/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon leetcode w-10 h-10 flex items-center justify-center border-purple-200"
          >
            <span className="icon text-xs font-bold text-black">LC</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
