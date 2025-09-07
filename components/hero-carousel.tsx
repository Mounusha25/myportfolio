"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"

export default function HeroCarousel({ images, intervalMs = 5000, aspect = "h-[38rem] md:h-[42rem]" }) {
  const [index, setIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const safeImages = useMemo(() => images.filter(Boolean), [images])

  useEffect(() => {
    if (!isPlaying || safeImages.length <= 1) return
    timerRef.current && clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setIndex((i) => (i + 1) % safeImages.length), intervalMs)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [index, isPlaying, safeImages.length, intervalMs])

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + safeImages.length) % safeImages.length)
  const goTo = (i: number) => setIndex(((i % safeImages.length) + safeImages.length) % safeImages.length)

  return (
    <section className={`relative w-full overflow-hidden rounded-2xl bg-neutral-950 ${aspect}`}>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={safeImages[index]}
          className="absolute inset-0"
          initial={{ opacity: 0.0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={safeImages[index]}
            alt={`Hero image ${index + 1}`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </motion.div>
      </AnimatePresence>
      {/* Controls + dots go here (from earlier code) */}
    </section>
  )
}
