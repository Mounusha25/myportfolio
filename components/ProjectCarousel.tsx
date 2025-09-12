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

  return (
    <section className={className} aria-label="Projects carousel" aria-roledescription="carousel">
      {/* Single slide area (no stacked/fanned neighbors) */}
      <div className="relative mx-auto max-w-6xl px-2 sm:px-4">
        <div className="relative h-[560px] md:h-[600px] flex items-center justify-center">
          <AnimatePresence custom={dir} initial={false} mode="popLayout">
            <motion.div
              key={active.title}
              className="w-[92%] sm:w-[78%] md:w-[70%] lg:w-[64%]"
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
              aria-roledescription="slide"
              aria-label={`${active.title} (${index + 1} of ${count})`}
            >
              {/* Your glass card (same look as Education if your Card uses `glass`) */}
              <ProjectCardUI project={active} active />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom controls: left arrow • dots • right arrow */}
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
              const active = i === index
              return (
                <button
                  key={i}
                  onClick={() => { setDir(i > index ? 1 : -1); setIndex(i) }}
                  role="tab"
                  aria-selected={active}
                  aria-controls={`project-slide-${i}`}
                  className={`h-2.5 rounded-full transition-all ${
                    active ? "w-6 bg-emerald-400" : "w-2.5 bg-white/20 hover:bg-white/40"
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
