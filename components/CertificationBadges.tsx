"use client"

import type { CSSProperties } from "react"
import type { Certification } from "@/lib/content"
import styles from "./CertificationBadges.module.css"

const categoryLabels: Record<Certification["category"], string> = {
  ai: "AI & Agents",
  cloud: "Cloud",
  programming: "Programming",
  data: "Data",
  other: "General",
}

const circleColors = ["#f9b234", "#3ecd5e", "#e44002", "#952aff", "#cd3e94", "#4c49ea", "#ff6f91"]

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  })

interface CertificationBadgesProps {
  certifications: Certification[]
}

export function CertificationBadges({ certifications }: CertificationBadgesProps) {
  return (
    <div className={styles.badgeGrid}>
      {certifications.map((certification, index) => {
        const accentColor = circleColors[index % circleColors.length]
        const style: CSSProperties = {
          ["--circle-color" as keyof CSSProperties]: accentColor,
        }
        const title = certification.title.toUpperCase()

        return (
          <a
            key={`${certification.title}-${certification.date}`}
            href={certification.credentialUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${certification.title} certificate`}
            className="group"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className={styles.badgeCard} style={style}>
              <div className={styles.badgeCircle} />
              <span className={styles.badgeCategory}>{categoryLabels[certification.category]}</span>
              <div className={styles.badgeTitle}>{title}</div>
              <div className={styles.badgeDateBox}>
                Issued:
                <span className={styles.badgeDate}>{formatDate(certification.date)}</span>
              </div>
              <div className={styles.badgeMeta}>
                <span className={styles.badgeOrg}>{certification.organization}</span>
              </div>
            </div>
          </a>
        )
      })}
    </div>
  )
}
