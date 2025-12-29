"use client"

import { BarChart3, Bot, Brain, Droplets, Leaf } from "lucide-react"

/**
 * Optional: Icon strip showing key expertise areas
 * Add this below the GlassFlipper in hero-section.tsx
 * Usage: <IconStrip /> or <IconStripScrolling />
 */
export function IconStrip() {
  const areas = [
    {
      icon: BarChart3,
      label: "Data Science",
      color: "text-purple-600"
    },
    {
      icon: Bot,
      label: "Machine Learning",
      color: "text-pink-600"
    },
    {
      icon: Brain,
      label: "AI Systems",
      color: "text-blue-600"
    },
    {
      icon: Leaf,
      label: "Sustainable Systems",
      color: "text-green-600"
    },
    {
      icon: Droplets,
      label: "Water Infrastructure",
      color: "text-teal-600"
    }
  ]

  return (
    <div className="flex items-center justify-center gap-4 md:gap-6 mt-4">
      {areas.map((area) => (
        <div key={area.label} className="flex flex-col items-center gap-1.5">
          <div className={`${area.color} opacity-80`}>
            <area.icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
          </div>
          <span className="text-[10px] md:text-xs font-medium text-black/70">
            {area.label}
          </span>
        </div>
      ))}
    </div>
  )
}

// Scrolling version - auto-scrolls horizontally
export function IconStripScrolling() {
  const areas = [
    {
      icon: BarChart3,
      label: "Data Science",
      color: "text-purple-600"
    },
    {
      icon: Bot,
      label: "Machine Learning",
      color: "text-pink-600"
    },
    {
      icon: Brain,
      label: "AI Systems",
      color: "text-blue-600"
    },
    {
      icon: Leaf,
      label: "Sustainable Systems",
      color: "text-green-600"
    },
    {
      icon: Droplets,
      label: "Water Infrastructure",
      color: "text-teal-600"
    }
  ]

  return (
    <div className="relative mt-4 overflow-hidden">
      <div className="flex gap-6 animate-scroll-horizontal">
        {/* First set */}
        {areas.map((area, idx) => (
          <div key={`${area.label}-${idx}`} className="flex flex-col items-center gap-1.5 min-w-[80px]">
            <div className={`${area.color} opacity-80`}>
              <area.icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </div>
            <span className="text-[10px] md:text-xs font-medium text-black/70 whitespace-nowrap">
              {area.label}
            </span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {areas.map((area, idx) => (
          <div key={`${area.label}-dup-${idx}`} className="flex flex-col items-center gap-1.5 min-w-[80px]">
            <div className={`${area.color} opacity-80`}>
              <area.icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </div>
            <span className="text-[10px] md:text-xs font-medium text-black/70 whitespace-nowrap">
              {area.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
