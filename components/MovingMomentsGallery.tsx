"use client"

import * as React from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "./moving-moments.css"

interface Moment {
  title: string
  date: string
  image: string
  description: string
}

const moments: Moment[] = [
  {
    title: "DevHacks S1",
    date: "March 2025",
    image: "/images/Moments/devhackss1.png",
    description: "First hackathon experience where the SlideSage AI proof-of-concept earned praise for adaptive learning walkthroughs.",
  },
  {
    title: "HackAZona",
    date: "March 2025",
    image: "/images/Moments/Hackazona.png",
    description: "Built PlanWiseAI, an agent that generated real-time itineraries and won the crowd over with its multi-agent choreography.",
  },
  {
    title: "Techipalooza Conference",
    date: "August 2025",
    image: "/images/Moments/techipaloozaconf.png",
    description: "Showcased research on accessible interfaces for AR-driven learning and collected dozens of delightful follow-up conversations.",
  },
  {
    title: "DevHacks S2 – Winning Edition",
    date: "August 2025",
    image: "/images/Moments/devhackss2.png",
    description: "First place project combined AI scripting and creative storytelling to keep judges engaged and entertained.",
  },
  {
    title: "Hacks for Humanity",
    date: "October 2025",
    image: "/images/Moments/HHH.png",
    description: "Collaborated on automation for social impact, connecting nonprofits to AI-assisted volunteer coordination.",
  },
  {
    title: "Data Conference (ASU)",
    date: "November 2025",
    image: "/images/Moments/Dataconf.png",
    description: "Led a session on AI observability with SQL-backed analytics, leaving attendees energized about data storytelling.",
  },
  {
    title: "Workshop Conducted",
    date: "November 2025",
    image: "/images/Moments/Workshop.png",
    description: "Led a hands-on automation workshop introducing students to n8n, Agents, and intuitive workflow design.",
  },
  {
    title: "Claude Builder Hackathon Mentorship",
    date: "November 2025",
    image: "/images/Moments/mentorship.png",
    description: "Mentored the next generation of builders tackling Claude-powered experiences with human-first design.",
  },
]

function PreviewCard({
  moment,
  onClick,
  side,
}: {
  moment: Moment
  onClick: () => void
  side: "left" | "right"
}) {
  return (
    <div
      onClick={onClick}
      role="button"
      aria-label={side === "left" ? "Previous moment" : "Next moment"}
      className={`moment-preview ${side === "left" ? "preview-left" : "preview-right"}`}
    >
      <div className="preview-image">
        <Image
          src={moment.image}
          alt={moment.title}
          fill
          className="preview-img"
          sizes="(max-width: 1280px) 180px, 220px"
          priority={false}
        />
      </div>
      <p className="preview-title">{moment.title}</p>
    </div>
  )
}

export default function MovingMomentsGallery() {
  const count = moments.length
  const [index, setIndex] = React.useState(0)
  const [direction, setDirection] = React.useState(0)

  const go = React.useCallback(
    (delta: number) => {
      setDirection(delta)
      setIndex((prev) => (prev + delta + count) % count)
    },
    [count]
  )

  React.useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") go(1)
      if (event.key === "ArrowLeft") go(-1)
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [go])

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0, scale: 0.99 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0, scale: 0.99 }),
  }

  const active = moments[index]
  const previous = moments[(index - 1 + count) % count]
  const next = moments[(index + 1) % count]

  return (
    <section className="moments-carousel" aria-roledescription="carousel" aria-label="Moments gallery">
      <div className="moments-stage">
        {count > 1 && (
          <div className="preview-column">
            <PreviewCard moment={previous} onClick={() => go(-1)} side="left" />
          </div>
        )}

        <div className="moment-board">
          <AnimatePresence initial={false} mode="popLayout" custom={direction}>
            <motion.article
              key={`${active.title}-${index}`}
              className="moment-card"
              custom={direction}
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
              aria-label={`${active.title} (${index + 1} of ${count})`}
            >
              <div className="moment-image-wrapper">
                <Image src={active.image} alt={active.title} fill className="moment-image" sizes="100vw" />
                <div className="moment-image-overlay" />
              </div>
              <div className="moment-info">
                <span className="moment-date">{active.date}</span>
                <h3>{active.title}</h3>
                <p>{active.description}</p>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        {count > 1 && (
          <div className="preview-column">
            <PreviewCard moment={next} onClick={() => go(1)} side="right" />
          </div>
        )}
      </div>

      {count > 1 && (
        <div className="moments-controls">
          <Button
            size="icon"
            variant="outline"
            className="moments-control-btn"
            onClick={() => go(-1)}
            aria-label="Previous moment"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="moments-dots" role="tablist" aria-label="Moment slides">
            {moments.map((_, i) => {
              const isActive = i === index
              return (
                <button
                  key={i}
                  role="tab"
                  aria-selected={isActive}
                  className={`dot ${isActive ? "dot-active" : ""}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1)
                    setIndex(i)
                  }}
                  aria-label={`Go to moment ${i + 1}`}
                />
              )
            })}
          </div>
          <Button
            size="icon"
            variant="outline"
            className="moments-control-btn"
            onClick={() => go(1)}
            aria-label="Next moment"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      )}
    </section>
  )
}
