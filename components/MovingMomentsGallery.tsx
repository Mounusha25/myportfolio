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
    description:
      "Built a Streamlit-based resume parsing and course recommendation app that helped students discover personalized upskilling paths. My first major hackathon experience with the DevLabs community.",
  },
  {
    title: "HackAZona",
    date: "March 2025",
    image: "/images/Moments/Hackazona.png",
    description:
      "Developed PlanWiseAI, an intelligent travel planner that generated real-time itineraries using multi-agent reasoning and live data orchestration, earning strong audience reception.",
  },
  {
    title: "Techipalooza Conference",
    date: "August 2025",
    image: "/images/Moments/techipaloozaconf.png",
    description:
      "Participated in Techipalooza 2025, a networking conference where startups and innovators showcased their products and ideas, fostering connections across ASU’s tech ecosystem.",
  },
  {
    title: "DevHacks S2 [WON 1st Place]",
    date: "August 2025",
    image: "/images/Moments/devhackss2.png",
    description:
      "Won 1st Place at DevHacks Season 2 with SlideSage, an AI-powered learning assistant that converts complex topics into adaptive explainer videos and interactive walkthroughs.",
  },
  {
    title: "Hacks for Humanity",
    date: "October 2025",
    image: "/images/Moments/HHH.png",
    description:
      "Created CultureBites, a community-driven app connecting local foodies, hosts, and small restaurants through shared experiences and cultural storytelling for social impact.",
  },
  {
    title: "9th Annual ASU Data Conference",
    date: "November 2025",
    image: "/images/Moments/Dataconf.png",
    description:
      "Attended the 9th Annual ASU Data Conference, where professionals from AWS and Alteryx showcased real-world applications of AI and data analytics for responsible innovation.",
  },
  {
    title: "Portfolio Building Workshop",
    date: "November 2025",
    image: "/images/Moments/Workshop.png",
    description:
      "Conducted my first hands-on workshop on portfolio building, guiding students through structuring impactful projects, showcasing skills, and presenting their work effectively.",
  },
  {
    title: "Mentoring Team at Claude Builder Hackathon",
    date: "November 2025",
    image: "/images/Moments/mentorship.png",
    description:
      "Mentored teams at the Claude Builder Hackathon, helping them design and refine conversational builders powered by LLMs with a focus on human-first multi-agent design. And conducted a workshop for Polymarket Track",
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
