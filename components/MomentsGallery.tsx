"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type { Award } from "@/lib/content"
import "./moments-gallery.css"

interface MomentsGalleryProps {
  moments: Award[]
}

export default function MomentsGallery({ moments }: MomentsGalleryProps) {
  return (
    <div className="moments-gallery-container">
      <div className="moments-path">
        {moments.map((moment, index) => {
          const isVideo = moment.image?.endsWith('.mp4')

          return (
            <motion.div
              key={moment.title}
              className={`moment-card-wrapper ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -10 : 10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="stack">
                <div className="card">
                  <div className="image">
                    {isVideo ? (
                      <video
                        src={moment.image}
                        className="moment-media"
                        muted
                        loop
                        playsInline
                        preload="none"
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause()
                          e.currentTarget.currentTime = 0
                        }}
                      />
                    ) : (
                      <Image
                        src={moment.image || '/images/placeholder.jpg'}
                        alt={moment.title}
                        className="moment-media"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 400px"
                        quality={85}
                        priority={index < 2}
                      />
                    )}
                  </div>
                  <div className="moment-caption">
                    <h3 className="moment-title">{moment.title}</h3>
                    <p className="moment-org">{moment.organization}</p>
                    <p className="moment-date">{new Date(moment.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
