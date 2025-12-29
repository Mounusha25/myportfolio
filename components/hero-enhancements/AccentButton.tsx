"use client"

import { ArrowRight } from "lucide-react"

/**
 * Optional: Accent color CTA button
 * Replace or add alongside existing social buttons
 * Usage: <AccentButton />
 */
export function AccentButton() {
  return (
    <a
      href="#projects"
      className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white
        bg-gradient-to-r from-teal-500 to-cyan-600
        hover:from-teal-600 hover:to-cyan-700
        shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50
        transition-all duration-300 hover:scale-105"
    >
      <span>View Projects</span>
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </a>
  )
}
