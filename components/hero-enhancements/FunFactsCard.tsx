"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles } from "lucide-react"

/**
 * Interactive Fun Facts Card with rotating facts and tech stack visualization
 * Flips 180 degrees on hover to reveal fun facts
 * Usage: <FunFactsCard />
 */

const funFacts = [
  { icon: "🌊", text: "Passionate about water infrastructure" },
  { icon: "🤖", text: "Building ML models for sustainability" },
  { icon: "☕", text: "Powered by coffee & Python" },
  { icon: "🌍", text: "Dream: Climate tech innovation" },
  { icon: "🎯", text: "Love solving real-world problems" },
]

const techStack = [
  { name: "Python", level: 95, color: "bg-purple-500" },
  { name: "Spark", level: 85, color: "bg-pink-500" },
  { name: "SQL", level: 90, color: "bg-blue-500" },
  { name: "Cloud", level: 80, color: "bg-teal-500" },
  { name: "ML/AI", level: 88, color: "bg-green-500" },
]

export function FunFactsCard() {
  const [currentFactIndex, setCurrentFactIndex] = useState(0)

  // Auto-rotate facts every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % funFacts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const currentFact = funFacts[currentFactIndex]

  return (
    <div className="w-full h-full">
      <div className="glass h-full rounded-2xl p-4 sm:p-6 border border-purple-200/50 shadow-lg backdrop-blur-xl bg-white/90 flex flex-col">
        {/* Fun Facts Section */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <h3 className="text-sm font-bold text-black">About Me</h3>
          </div>
          
          <div className="h-20 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFactIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3"
              >
                <span className="text-3xl sm:text-4xl">{currentFact.icon}</span>
                <p className="text-xs sm:text-sm font-medium text-black/80">
                  {currentFact.text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-1 mt-3">
            {funFacts.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === currentFactIndex
                    ? "w-6 bg-purple-600"
                    : "w-1 bg-purple-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="border-t border-purple-200/30 pt-3 mt-3">
          <h3 className="text-xs font-bold text-black/70 mb-2">Top Skills</h3>
          <div className="space-y-2">
            {techStack.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[10px] sm:text-xs font-medium text-black/70">
                    {tech.name}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-semibold text-black/60">
                    {tech.level}%
                  </span>
                </div>
                <div className="h-1.5 bg-black/10 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${tech.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.level}%` }}
                    transition={{ delay: idx * 0.1 + 0.2, duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}