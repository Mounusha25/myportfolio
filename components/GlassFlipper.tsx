"use client"

import * as React from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

type Props = {
  items?: string[]
  /** ms between flips */
  intervalMs?: number
  className?: string
}

export default function GlassFlipper({
  items = ["Data Scientist", "Data Engineer", "Data Analyst","ML Engineer"],
  intervalMs = 2000,
  className,
}: Props) {
  const [i, setI] = React.useState(0)
  const reduce = useReducedMotion()

  React.useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setI((v) => (v + 1) % items.length), intervalMs)
    return () => clearInterval(id)
  }, [items.length, intervalMs, reduce])

  const current = items[i]

  return (
    <div
      className={cn(
        // glassy pill that matches your Emerald theme
        "glass mx-auto w-fit rounded-xl ring-1 ring-white/10 px-4 py-2",
        "shadow-[0_18px_80px_-20px_rgba(16,185,129,.35)]",
        className
      )}
      aria-live="polite"
    >
      <div className="flex items-center gap-2">
        <span className="hidden sm:inline text-white/70 text-sm">I’m a</span>

        {/* viewport keeps height fixed while text slides */}
        <div className="relative h-7 sm:h-8 overflow-hidden min-w-[14ch] sm:min-w-[16ch]">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={current}
              className="absolute inset-0 flex items-center justify-center font-medium"
              initial={reduce ? false : { y: "100%", opacity: 0 }}
              animate={reduce ? { opacity: 1 } : { y: 0, opacity: 1 }}
              exit={reduce ? { opacity: 0 } : { y: "-100%", opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                {current}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
