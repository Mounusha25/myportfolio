"use client"

import { useEffect, useRef } from "react"

interface Drip {
  x: number
  y: number
  speed: number
  height: number
  color: string
  opacity: number
}

export function ColorDripBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dripsRef = useRef<Drip[]>([])
  const animationRef = useRef<number>()

  // Site's gradient color palette - neon blue theme
  const colors = [
    "#2196f3", // Primary neon blue
    "#1976d2", // Darker blue
    "#42a5f5", // Light blue
    "#00bcd4", // Cyan
    "#26c6da", // Light cyan
    "#4fc3f7", // Sky blue
    "#29b6f6", // Light blue
    "#03a9f4", // Blue
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize fewer drips for cleaner look
    const initializeDrips = () => {
      const drips: Drip[] = []
      const numberOfDrips = Math.floor(window.innerWidth / 150) // One drip every 150px (fewer drips)

      for (let i = 0; i < numberOfDrips; i++) {
        drips.push({
          x: Math.random() * canvas.width,
          y: Math.random() * -canvas.height, // Start above viewport
          speed: Math.random() * 1.5 + 0.5, // Slower speed between 0.5-2
          height: Math.random() * 150 + 80, // Shorter height between 80-230px
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.2 + 0.05, // Lower opacity between 0.05-0.25
        })
      }
      dripsRef.current = drips
    }

    initializeDrips()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dripsRef.current.forEach((drip) => {
        // Update position
        drip.y += drip.speed

        // Reset drip when it goes off screen
        if (drip.y > canvas.height + drip.height) {
          drip.y = -drip.height
          drip.x = Math.random() * canvas.width
          drip.color = colors[Math.floor(Math.random() * colors.length)]
          drip.opacity = Math.random() * 0.2 + 0.05
        }

        // Create gradient for drip effect using site's colors
        const gradient = ctx.createLinearGradient(drip.x, drip.y, drip.x, drip.y + drip.height)
        gradient.addColorStop(0, `${drip.color}00`) // Transparent at top
        gradient.addColorStop(
          0.1,
          `${drip.color}${Math.floor(drip.opacity * 255)
            .toString(16)
            .padStart(2, "0")}`,
        )
        gradient.addColorStop(
          0.9,
          `${drip.color}${Math.floor(drip.opacity * 255)
            .toString(16)
            .padStart(2, "0")}`,
        )
        gradient.addColorStop(1, `${drip.color}00`) // Transparent at bottom

        // Draw drip
        ctx.fillStyle = gradient
        ctx.fillRect(drip.x - 1, drip.y, 2, drip.height) // Thinner drips

        // Add a subtle glow effect
        ctx.shadowColor = drip.color
        ctx.shadowBlur = 3
        ctx.fillRect(drip.x - 0.5, drip.y, 1, drip.height)
        ctx.shadowBlur = 0
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Handle scroll to update canvas height
    const handleScroll = () => {
      const newHeight = document.documentElement.scrollHeight
      if (canvas.height !== newHeight) {
        canvas.height = newHeight
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("scroll", handleScroll)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        zIndex: -1,
        background: "#111111", // Dark base background
      }}
    />
  )
}
