"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type Props = {
  id?: string
  children: React.ReactNode
  /** add crest at the top edge */
  top?: boolean
  /** add waves at the bottom edge (default true) */
  bottom?: boolean
  className?: string           // applied to <section>
  contentClassName?: string    // applied to inner wrapper
}

export default function WavySection({
  id,
  children,
  top = false,
  bottom = true,
  className,
  contentClassName,
}: Props) {
  return (
    <section id={id} className={cn("section-with-waves py-16", className)}>
      {top && (
        <div className="emerald-waves-top">
          <div className="emerald-wave" />
          <div className="emerald-wave" />
          <div className="emerald-wave" />
        </div>
      )}

      {bottom && (
        <div className="emerald-waves">
          <div className="emerald-wave" />
          <div className="emerald-wave" />
          <div className="emerald-wave" />
        </div>
      )}

      <div className={cn("relative z-10", contentClassName)}>{children}</div>
    </section>
  )
}
