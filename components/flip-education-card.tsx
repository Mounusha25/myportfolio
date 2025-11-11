"use client"

import { motion } from "framer-motion"
import type { Education } from "@/lib/content"
import "./flip-card-styles.css"
import { useState } from "react"

interface FlipEducationCardProps {
  education: Education
  index: number
}

export function FlipEducationCard({ education, index }: FlipEducationCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    })
  }

  const duration = education.current
    ? `${formatDate(education.startDate)} – Present`
    : `${formatDate(education.startDate)} – ${formatDate(education.endDate!)}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flip-card"
    >
      <div className={`flip-content ${isFlipped ? 'flipped' : ''}`}>
        {/* Front of Card */}
        <div
          className="flip-front"
          style={{
            backgroundImage: `url(${education.image || '/images/education/default.jpg'})`
          }}
        >
          <div className="flip-inner">
            <h2>{education.school}</h2>
            <div className="rating">
              {education.current ? (
                <span className="badge-current">Currently Pursuing</span>
              ) : (
                <span className="badge-completed">Completed</span>
              )}
            </div>
            <label
              className="flip-button"
              onClick={() => setIsFlipped(true)}
            >
              View Details
            </label>
          </div>
        </div>

        {/* Back of Card */}
        <div className="flip-back">
          <div className="flip-inner">
            <div className="flip-location">{education.location}</div>
            <div className="flip-duration">{duration}</div>

            {/* Stats Info */}
            {education.stats && education.stats.length >= 4 && (
              <div className="flip-stats-row">
                {education.stats.slice(0, 4).map((stat, idx) => (
                  <div key={idx} className="flip-info">
                    <span>{stat.value}</span>
                    <div className="flip-icon">
                      <span>{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Degree Description */}
            <div className="flip-description">
              <h3 className="degree-title">{education.degree}</h3>

              {education.coursework && education.coursework.length > 0 && (
                <div className="coursework-section">
                  <h4>Key Coursework:</h4>
                  <ul>
                    {education.coursework.map((course, idx) => (
                      <li key={idx}>{course}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <label
              className="flip-button return"
              onClick={() => setIsFlipped(false)}
            >
              Back
            </label>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
