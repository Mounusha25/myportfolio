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

const deviconMap: Record<string, string> = {
  Databricks: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/databricks/databricks-original.svg",
  Google: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
}

const brandConfigs: Record<
  string,
  {
    ribbon: string
    accent: string
    logo: string
  }
> = {
  Databricks: {
    ribbon: "#FF3621",
    accent: "#B75600",
    logo: "/logos/databricks.svg",
  },
  Simplilearn: {
    ribbon: "#00AEEF",
    accent: "#008FC7",
    logo: "/logos/simplilearn.svg",
  },
  Google: {
    ribbon: "#4285F4",
    accent: "#0D47A1",
    logo: "/logos/google.svg",
  },
}

const defaultBrand = {
  ribbon: "#D87A27",
  accent: "#C56C1D",
  logo: "/logos/default.svg",
}

const stars = ["\u2605", "\u2605", "\u2605"]

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
    <div className="flex flex-wrap justify-center gap-6">
      {certifications.map((certification, index) => {
        const brand = brandConfigs[certification.organization] ?? defaultBrand
        const iconSrc = deviconMap[certification.organization] ?? brand.logo
        const style: CSSProperties = {
          ["--ribbon-color" as keyof CSSProperties]: brand.ribbon,
          ["--ribbon-dark" as keyof CSSProperties]: brand.accent,
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
            <div className={styles.badge} style={style}>
              <svg viewBox="0 0 216 232" className={styles.badge__shield} preserveAspectRatio="none">
                <path
                  fill={brand.ribbon}
                  d="M207,0C171.827,0.001,43.875,0.004,9.003,0c-5.619-0.001-9,3.514-9,9c0,28.23-0.006,151.375,0,169c0.005,13.875,94.499,54,107.999,54S216,191.57,216,178V9C216,3.298,212.732,0,207,0z"
                />
              </svg>

              <div className={styles.badge__inner}>
                <span className={styles.badge__category}>{categoryLabels[certification.category]}</span>

                <div className={styles.badge__logo-frame}>
                  <img src={iconSrc} alt={`${certification.organization} logo`} className={styles.badge__logo} />
                </div>

                <p className={styles.badge__title}>{title}</p>
                <p className={styles.badge__subtitle}>{certification.organization}</p>

                <div className={styles.badge__meta}>
                  <span className={styles.badge__stars}>{stars.join(" ")}</span>
                  <span className={styles.badge__date}>{formatDate(certification.date)}</span>
                </div>
              </div>
            </div>
          </a>
        )
      })}
    </div>
  )
}
