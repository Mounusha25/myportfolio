"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ProjectCard as ProjectCardUI } from "@/components/project-card"
import type { Project } from "@/lib/content"

function PreviewCard({
  project,
  onClick,
  side,
}: {
  project: Project
  onClick: () => void
  side: "left" | "right"
}) {
  return (
    <div
      onClick={onClick}
      role="button"
      aria-label={side === "left" ? "Previous project" : "Next project"}
      className={`cursor-pointer select-none opacity-60 hover:opacity-85 transition
                  ${side === "left" ? "-rotate-2" : "rotate-2"} scale-90 hover:scale-95`}
    >
      <div className="rounded-2xl ring-1 ring-white/10 overflow-hidden bg-white/[0.03] w-[220px] sm:w-[260px] lg:w-[300px]">
        <div className="relative aspect-[16/10]">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover blur-[1.5px] grayscale-[.35] saturate-75 brightness-[.85] scale-[1.02]"
              sizes="(max-width: 1024px) 260px, 300px"
              priority={false}
            />
          ) : (
            <div className="h-full w-full bg-emerald-500/10" />
          )}
          {/* soft dark fade so the teaser doesn't compete with the main card */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black/70" />
          <div className="absolute bottom-2 left-3 right-3 text-xs font-medium text-white/80 truncate">
            {project.title}
          </div>
        </div>
      </div>
    </div>
  )
}

interface ProjectCarouselProps {
  projects: Project[]
  className?: string
}

export default function ProjectCarousel({ projects, className }: ProjectCarouselProps) {
  const count = projects.length
  const [index, setIndex] = React.useState(0)
  const [dir, setDir] = React.useState(0)

  if (count === 0) return null

  const go = React.useCallback(
    (delta: number) => {
      setDir(delta)
      setIndex((i) => (i + delta + count) % count)
    },
    [count]
  )

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
    <section
      className={className}
      aria-label="Projects carousel"
      aria-roledescription="carousel"
    >
      <div className="relative mx-auto max-w-6xl px-2 sm:px-4">
        {/* Stage: prev • active • next (previews hidden on small) */}
        <div className="grid grid-cols-1 md:grid-cols-[auto,minmax(0,760px),auto] items-center gap-8">
          {/* LEFT preview */}
          {count > 1 && (
            <div className="hidden md:block justify-self-end">
              <PreviewCard project={prev} onClick={() => go(-1)} side="left" />
            </div>
          )}

          {/* ACTIVE slide */}
          <div>
            <AnimatePresence custom={dir} initial={false} mode="popLayout">
              <motion.div
                key={`${index}-${active.title}`}
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
                <ProjectCardUI project={active} active />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT preview */}
          {count > 1 && (
            <div className="hidden md:block justify-self-start">
              <PreviewCard project={next} onClick={() => go(1)} side="right" />
            </div>
          )}
        </div>

        {/* Bottom controls: ← • dots • → */}
        {count > 1 && (
          <div
            className="mt-6 flex items-center justify-center gap-3"
            role="tablist"
            aria-label="Project slides"
          >
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
                const isActive = i === index
                return (
                  <button
                    key={i}
                    onClick={() => {
                      setDir(i > index ? 1 : -1)
                      setIndex(i)
                    }}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`project-slide-${i}`}
                    className={`h-2.5 rounded-full transition-all ${
                      isActive ? "w-6 bg-emerald-400" : "w-2.5 bg-white/20 hover:bg-white/40"
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
        )}
      </div>
    </section>
  )
}
