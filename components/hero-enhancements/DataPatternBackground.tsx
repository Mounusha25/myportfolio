"use client"

/**
 * Optional: Subtle data-themed background pattern
 * Add this to hero-section.tsx inside the main section tag
 * Usage: <DataPatternBackground />
 */
export function DataPatternBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Network pattern - dots connected by lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="data-network"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Dots */}
            <circle cx="50" cy="50" r="2" fill="#8b5cf6" />
            <circle cx="150" cy="80" r="2" fill="#8b5cf6" />
            <circle cx="100" cy="150" r="2" fill="#8b5cf6" />
            <circle cx="20" cy="120" r="2" fill="#8b5cf6" />
            <circle cx="180" cy="40" r="2" fill="#8b5cf6" />
            
            {/* Connecting lines */}
            <line x1="50" y1="50" x2="150" y2="80" stroke="#8b5cf6" strokeWidth="1" />
            <line x1="150" y1="80" x2="100" y2="150" stroke="#8b5cf6" strokeWidth="1" />
            <line x1="50" y1="50" x2="20" y2="120" stroke="#8b5cf6" strokeWidth="1" />
            <line x1="150" y1="80" x2="180" y2="40" stroke="#8b5cf6" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#data-network)" />
      </svg>
    </div>
  )
}
