"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ProjectCard as ProjectCardUI } from "@/components/project-card"
import type { Project } from "@/lib/content"

interface ProjectCarouselProps {
  projects: Project[]
  className?: string
}

export default function ProjectCarousel({ projects, className }: ProjectCarouselProps) {
  const [index, setIndex] = React.useState(0)
  const [dir, setDir] = React.useState(0)
  const count = projects.length

  const go = React.useCallback((delta: number) => {
    setDir(delta)
    setIndex(i => (i + delta + count) % count)
  }, [count])

  // keyboard support
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1)
      if (e.key === "ArrowLeft") go(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [go])

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0, scale: 0.98 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0, scale: 0.98 }),
  }

  const active = projects[index]
  const prev = projects[(index - 1 + count) % count]
  const next = projects[(index + 1) % count]

  return (
    <section className={className} aria-label="Projects carousel" aria-roledescription="carousel">
      <div className="relative mx-auto max-w-6xl px-2 sm:px-4">
        {/* Stage */}
        <div className="relative h-[560px] md:h-[600px]">
          {/* LEFT preview (clickable) */}
          <motion.div
            key={`prev-${prev.title}`}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 0.7 }}
            transition={{ duration: 0.35 }}
            style={{ width: "32%" }}
            onClick={() => go(-1)}
            role="button"
            aria-label="Previous project"
          >
            <div className="pointer-events-auto cursor-pointer select-none [filter:blur(2px)] opacity-60 scale-90">
              <ProjectCardUI project={prev} />
            </div>
          </motion.div>

          {/* RIGHT preview (clickable) */}
          <motion.div
            key={`next-${next.title}`}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 0.7 }}
            transition={{ duration: 0.35 }}
            style={{ width: "32%" }}
            onClick={() => go(1)}
            role="button"
            aria-label="Next project"
          >
            <div className="pointer-events-auto cursor-pointer select-none [filter:blur(2px)] opacity-60 scale-90">
              <ProjectCardUI project={next} />
            </div>
          </motion.div>

          {/* ACTIVE slide (center) */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <AnimatePresence custom={dir} initial={false} mode="popLayout">
              <motion.div
                key={active.title}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) go(1)
                  if (info.offset.x > 80) go(-1)
                }}
                className="w-[92%] sm:w-[78%] md:w-[60%]"
                aria-roledescription="slide"
                aria-label={`${active.title} (${index + 1} of ${count})`}
              >
                <ProjectCardUI project={active} active />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom controls: ← • dots • → */}
        <div className="mt-6 flex items-center justify-center gap-3" role="tablist" aria-label="Project slides">
          <Button
            size="icon"
            variant="outline"
            className="glass border-white/15 hover:border-white/30 hover:bg-white/10 backdrop-blur-md"
            onClick={() => go(-1)}
            aria-label="Previous project"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-2">
            {projects.map((_, i) => {
              const activeDot = i === index
              return (
                <button
                  key={i}
                  onClick={() => { setDir(i > index ? 1 : -1); setIndex(i) }}
                  role="tab"
                  aria-selected={activeDot}
                  aria-controls={`project-slide-${i}`}
                  className={`h-2.5 rounded-full transition-all ${
                    activeDot ? "w-6 bg-emerald-400" : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to project ${i + 1}`}
                />
              )
            })}
          </div>

          <Button
            size="icon"
            variant="outline"
            className="glass border-white/15 hover:border-white/30 hover:bg-white/10 backdrop-blur-md"
            onClick={() => go(1)}
            aria-label="Next project"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
