"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

type Props = {
  images: string[]
  intervalMs?: number
  aspect?: string           // use "h-full" when you put it in a sized wrapper
  variant?: "circle" | "rounded"
  glow?: boolean
}

export default function HeroCarousel({
  images,
  intervalMs = 5000,
  aspect = "h-full",
  variant = "circle",
  glow = true,
}: Props) {
  const [index, setIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const safeImages = useMemo(() => images.filter(Boolean), [images])

  useEffect(() => {
    if (!isPlaying || safeImages.length <= 1) return
    timerRef.current && clearTimeout(timerRef.current)
    timerRef.current = setTimeout(
      () => setIndex((i) => (i + 1) % safeImages.length),
      intervalMs
    )
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [index, isPlaying, safeImages.length, intervalMs])

  const radius = variant === "circle" ? "rounded-full" : "rounded-2xl"

  return (
    <section className={`relative w-full overflow-hidden bg-neutral-950 ${radius} ${aspect}`}>
      {/* Image crossfade */}
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={safeImages[index]}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <Image
            src={safeImages[index]}
            alt={`Hero image ${index + 1}`}
            fill
            priority
            /* Keep face fully visible across different aspect ratios */
            className="object-contain object-center scale-[1.06]"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Thick border */}
      <div className={`pointer-events-none absolute inset-0 ${radius}`} />



      {/* Glow on change */}
      {glow && (
        <AnimatePresence mode="wait">
          <motion.div
            key={`glow-${index}`}
            className={`pointer-events-none absolute inset-0 ${radius}`}
            initial={{ opacity: 0, boxShadow: "0 0 0 0 rgba(99,102,241,0)" }}         // indigo-500-ish
            animate={{ opacity: 1, boxShadow: "0 0 32px 10px rgba(99,102,241,0.55)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          />
        </AnimatePresence>
      )}
    </section>
  )
}
