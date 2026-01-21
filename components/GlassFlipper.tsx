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
  items = ["Data Scientist", "Data Analyst", "ML Engineer", "Environmental Data Analyst"],
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
        // glassy pill
        "glass mx-auto w-fit rounded-xl ring-1 ring-purple-300/40 px-6 py-3",
        "shadow-[0_18px_80px_-20px_rgba(175,109,255,.4)] text-base sm:text-lg",
        className
      )}
      aria-live="polite"
    >
      <div className="flex items-center gap-2">
        <span className="hidden sm:inline text-black/70 font-medium">I'm a</span>

        {/* viewport keeps height fixed while text slides */}
        <div className="relative h-8 sm:h-10 overflow-hidden min-w-[20ch] sm:min-w-[26ch]">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={current}
              className="absolute inset-0 flex items-center justify-center font-medium"
              initial={reduce ? false : { y: "100%", opacity: 0 }}
              animate={reduce ? { opacity: 1 } : { y: 0, opacity: 1 }}
              exit={reduce ? { opacity: 0 } : { y: "-100%", opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent font-bold">
                {current}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
