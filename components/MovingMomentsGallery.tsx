"use client"

import type React from "react"
import { useState } from "react"
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

export default function MovingMomentsGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const n = moments.length

  const handleClick = (inc: number) => {
    setCurrentIndex((prev) => (prev + inc + n) % n)
  }

  const handleImageError = (title: string, src: string) => {
    console.log("[v0] Image failed to load:", { title, src })
  }

  const handleImageLoad = (title: string) => {
    console.log("[v0] Image loaded successfully:", title)
  }

  return (
    <section
      className="moments-section"
      style={
        {
          "--n": n,
          "--k": currentIndex,
        } as React.CSSProperties
      }
    >
      {moments.map((moment, i) => {
        const randomRotation = (i * 13 - 20) % 30

        return (
          <article
            key={i}
            className="moment-card"
            style={
              {
                "--i": i,
                "--a": `${randomRotation}deg`,
              } as React.CSSProperties
            }
          >
            <h2>{moment.title}</h2>
            <em>{moment.date}</em>
            <Image
              src={moment.image || "/placeholder.svg"}
              alt={moment.description}
              width={400}
              height={400}
              className="moment-img"
              onError={() => handleImageError(moment.title, moment.image)}
              onLoad={() => handleImageLoad(moment.title)}
              unoptimized
            />
          </article>
        )
      })}

      <div className="nav-controls">
        <button data-inc="-1" onClick={() => handleClick(-1)} aria-label="previous">
          <span className="sr-only">Previous</span>
        </button>
        <button data-inc="1" onClick={() => handleClick(1)} aria-label="next">
          <span className="sr-only">Next</span>
        </button>
      </div>
    </section>
  )
}
