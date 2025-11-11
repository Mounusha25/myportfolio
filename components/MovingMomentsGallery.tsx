"use client"

import type React from "react"
import { useMemo, useState } from "react"
import Image from "next/image"
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
    date: "March",
    image: "/images/Moments/devhackss1.png",
    description: "First hackathon experience",
  },
  {
    title: "HackAZona",
    date: "March",
    image: "/images/Moments/Hackazona.png",
    description: "Innovative solutions at HackAZona",
  },
  {
    title: "Techipalooza Conference",
    date: "August",
    image: "/images/Moments/techipaloozaconf.png",
    description: "Tech conference and networking",
  },
  {
    title: "DevHacks S2 – Winning Edition",
    date: "August",
    image: "/images/Moments/devhackss2.png",
    description: "1st Place victory at DevHacks S2",
  },
  {
    title: "Hacks for Humanity",
    date: "October",
    image: "/images/Moments/HHH.png",
    description: "Building tech for social impact",
  },
  {
    title: "Data Conference (ASU)",
    date: "November",
    image: "/images/Moments/Dataconf.png",
    description: "Data science and AI at ASU",
  },
  {
    title: "Workshop Conducted",
    date: "November",
    image: "/images/Moments/Workshop.png",
    description: "Leading educational workshop",
  },
  {
    title: "Claude Builder Hackathon Mentorship",
    date: "November",
    image: "/images/Moments/mentorship.png",
    description: "Mentoring the next generation",
  },
]

type CardState = {
  offset: string
  scale: number
  opacity: number
  order: number
  pointer: "auto" | "none"
}

const getCardState = (index: number, currentIndex: number, length: number): CardState => {
  const relative = (index - currentIndex + length) % length
  if (relative === 0) {
    return { offset: "0px", scale: 1, opacity: 1, order: 3, pointer: "auto" }
  }
  if (relative === 1) {
    return { offset: "-32px", scale: 0.95, opacity: 0.92, order: 2, pointer: "auto" }
  }
  if (relative === 2) {
    return { offset: "-64px", scale: 0.92, opacity: 0.78, order: 1, pointer: "auto" }
  }
  return { offset: "-96px", scale: 0.9, opacity: 0, order: 0, pointer: "none" }
}

export default function MovingMomentsGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const n = moments.length

  const handleClick = (inc: number) => setCurrentIndex((prev) => (prev + inc + n) % n)

  const cardStates = useMemo(
    () => moments.map((_, idx) => getCardState(idx, currentIndex, n)),
    [currentIndex, n]
  )

  const logMoment = (title: string, event: "load" | "error") =>
    console.log(`[v0] Moment ${event}:`, title)

  return (
    <section className="moments-section">
      {moments.map((moment, i) => (
        <article
          key={moment.title}
          className="moment-card"
          style={
            {
              "--offset": cardStates[i].offset,
              "--scale": cardStates[i].scale,
              "--opacity": cardStates[i].opacity,
              "--order": cardStates[i].order,
              "--pointer": cardStates[i].pointer,
            } as React.CSSProperties
          }
        >
          <header>
            <h2>{moment.title}</h2>
            <em>{moment.date}</em>
          </header>
          <div className="stack">
            <div className="card">
              <Image
                src={moment.image || "/placeholder.svg"}
                alt={moment.description}
                fill
                sizes="(max-width: 768px) 80vw, 400px"
                className="image"
                onError={() => logMoment(moment.title, "error")}
                onLoad={() => logMoment(moment.title, "load")}
                unoptimized
              />
            </div>
          </div>
        </article>
      ))}

      <div className="nav-controls">
        <button onClick={() => handleClick(-1)} aria-label="previous" type="button">
          ‹
        </button>
        <button onClick={() => handleClick(1)} aria-label="next" type="button">
          ›
        </button>
      </div>
    </section>
  )
}
