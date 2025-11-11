"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import "./journey-timeline.css"

interface Moment {
  title: string
  date: string
  image: string
  month: string
}

const moments: Moment[] = [
  {
    title: "DevHacks S1",
    date: "March 2025",
    month: "Mar",
    image: "/images/moments/devhackss1.jpg"
  },
  {
    title: "HackAZona",
    date: "March 2025",
    month: "Mar",
    image: "/images/moments/Hackazona.jpg"
  },
  {
    title: "Techipalooza Conference",
    date: "August 2025",
    month: "Aug",
    image: "/images/moments/techipaloozaconf.jpg"
  },
  {
    title: "DevHacks S2 (Winning Edition)",
    date: "August 2025",
    month: "Aug",
    image: "/images/moments/devhackss2.jpeg"
  },
  {
    title: "Hacks for Humanity",
    date: "October 2025",
    month: "Oct",
    image: "/images/moments/HHH.JPG"
  },
  {
    title: "Data Conference (ASU)",
    date: "November 2025",
    month: "Nov",
    image: "/images/moments/Dataconf.jpg"
  },
  {
    title: "Workshop Conducted",
    date: "November 2025",
    month: "Nov",
    image: "/images/moments/Workshop.jpg"
  },
  {
    title: "Mentorship (Claude Builder Hackathon)",
    date: "November 2025",
    month: "Nov",
    image: "/images/moments/mentorship.jpg"
  }
]

export default function JourneyTimeline() {
  return (
    <div className="journey-timeline-section">
      {/* Aurora background texture */}
      <div className="aurora-bg"></div>
      <div className="noise-texture"></div>

      <div className="journey-container">
        <motion.div
          className="journey-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="journey-title">Journey Through Moments</h2>
          <p className="journey-subtitle">
            A glimpse into the hackathons, conferences, and milestones that shaped my path in 2025
          </p>
        </motion.div>

        {/* Curved path timeline */}
        <div className="timeline-wrapper">
          <svg className="timeline-path" viewBox="0 0 100 20" preserveAspectRatio="none">
            <path
              d="M 0,10 Q 12.5,2 25,10 T 50,10 T 75,10 T 100,10"
              stroke="url(#orangeGradient)"
              strokeWidth="0.3"
              fill="none"
              className="path-line"
            />
            <defs>
              <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#ff6b35", stopOpacity: 0.3 }} />
                <stop offset="50%" style={{ stopColor: "#ff8c42", stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: "#ff6b35", stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>
          </svg>

          {/* Scrollable moments gallery */}
          <div className="moments-scroll-container">
            <div className="moments-gallery">
              {moments.map((moment, index) => (
                <motion.div
                  key={moment.title}
                  className="moment-card"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  {/* Timeline dot connector */}
                  <div className="timeline-dot">
                    <div className="dot-glow"></div>
                    <div className="dot-core"></div>
                  </div>

                  {/* Glass-morphism card */}
                  <div className="moment-glass-card">
                    <div className="card-image-wrapper">
                      <Image
                        src={moment.image}
                        alt={moment.title}
                        fill
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 350px"
                        quality={90}
                        priority={index < 3}
                        className="moment-image"
                      />
                      <div className="image-overlay"></div>
                    </div>

                    {/* Caption overlay */}
                    <div className="moment-caption-overlay">
                      <div className="moment-month-badge">{moment.month}</div>
                      <h3 className="moment-card-title">{moment.title}</h3>
                      <p className="moment-card-date">{moment.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
