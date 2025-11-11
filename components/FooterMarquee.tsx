"use client"

import React from "react"

const iconIds: string[] = [
  "logos:python",
  "logos:r-lang",
  "simple-icons:scikitlearn",
  "logos:tensorflow",
  "logos:pytorch-icon",
  "simple-icons:apachespark",
  "simple-icons:databricks",
  "simple-icons:apacheairflow",
  "logos:docker-icon",
  "logos:mysql-icon",
  "logos:postgresql",
  "simple-icons:sqlite",
  "simple-icons:supabase",
  "simple-icons:mongodb",
  "simple-icons:powerbi",
  "simple-icons:tableau",
  "simple-icons:streamlit",
  "simple-icons:d3dotjs",
  "simple-icons:githubactions",
  "simple-icons:n8n",
  "logos:git-icon",
  "tabler:api",
  "mdi:chart-timeline-variant",
  "lucide:brain-circuit",
]

function Row({ reverse, duration }: { reverse?: boolean; duration?: number }) {
  const items = [...iconIds, ...iconIds] // duplicate for seamless loop
  return (
    <div
      className={`marquee-row ${reverse ? "reverse" : ""}`}
      style={{ animationDuration: `${duration ?? 30}s` }}
      aria-hidden
    >
      {items.map((id, i) => (
        <img
          key={`${id}-${i}`}
          src={`https://api.iconify.design/${encodeURIComponent(id)}.svg${id.startsWith("logos:") ? "" : "?color=%23000000"}`}
          alt=""
          className="marquee-icon"
          loading="lazy"
        />
      ))}
    </div>
  )
}

export default function FooterMarquee() {
  return (
    <div className="marquee" aria-hidden>
      <Row duration={36} />
      <Row reverse duration={48} />
      <Row duration={60} />
    </div>
  )
}
