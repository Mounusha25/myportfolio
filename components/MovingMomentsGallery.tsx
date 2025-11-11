"use client"

import { useEffect, useRef, useState } from "react"
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
    image: "/images/moments/devhackss1.jpg",
    description: "First hackathon experience"
  },
  {
    title: "HackAZona",
    date: "March",
    image: "/images/moments/Hackazona.jpg",
    description: "Innovative solutions at HackAZona"
  },
  {
    title: "Techipalooza Conference",
    date: "August",
    image: "/images/moments/techipaloozaconf.jpg",
    description: "Tech conference and networking"
  },
  {
    title: "DevHacks S2 — Winning Edition",
    date: "August",
    image: "/images/moments/devhackss2.jpeg",
    description: "1st Place victory at DevHacks S2"
  },
  {
    title: "Hacks for Humanity",
    date: "October",
    image: "/images/moments/HHH.JPG",
    description: "Building tech for social impact"
  },
  {
    title: "Data Conference (ASU)",
    date: "November",
    image: "/images/moments/Dataconf.jpg",
    description: "Data science and AI at ASU"
  },
  {
    title: "Workshop Conducted",
    date: "November",
    image: "/images/moments/Workshop.jpg",
    description: "Leading educational workshop"
  },
  {
    title: "Claude Builder Hackathon Mentorship",
    date: "November",
    image: "/images/moments/mentorship.jpg",
    description: "Mentoring the next generation"
  }
]

export default function MovingMomentsGallery() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const n = moments.length

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.setProperty('--n', n.toString())
      sectionRef.current.style.setProperty('--k', currentIndex.toString())
    }
  }, [currentIndex, n])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + n) % n)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % n)
  }

  return (
    <section ref={sectionRef} className="moments-stack-section" style={{ '--n': n, '--k': currentIndex } as React.CSSProperties}>
      <div className="moments-counter"></div>

      {moments.map((moment, i) => {
        const randomRotation = (i * 7 - 15) % 20
        return (
          <article
            key={i}
            className="moment-article"
            style={{ '--i': i, '--a': `${randomRotation}deg` } as React.CSSProperties}
          >
            <div className="moment-image-wrapper">
              <Image
                src={moment.image}
                alt={moment.title}
                fill
                sizes="(max-width: 768px) 90vw, 400px"
                quality={90}
                priority={i < 3}
                className="moment-stack-image"
              />
            </div>

            <h2 className="moment-stack-title">{moment.title}</h2>
            <p className="moment-stack-desc">
              <em>{moment.date}</em>
              <br />
              {moment.description}
            </p>
          </article>
        )
      })}

      <div className="moments-nav-buttons">
        <button
          type="button"
          data-inc="-1"
          onClick={handlePrev}
          aria-label="Previous moment"
          className="nav-btn"
        ></button>
        <button
          type="button"
          data-inc="1"
          onClick={handleNext}
          aria-label="Next moment"
          className="nav-btn"
        ></button>
      </div>
    </section>
  )
}
