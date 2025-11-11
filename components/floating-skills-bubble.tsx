"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Bubble {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  skill: string
  color: string
  category: string
}

interface SkillData {
  name: string
  category: string
  connections: string[]
}

const skillsData: SkillData[] = [
  // Data Science & Machine Learning
  { name: "Python", category: "dsml", connections: ["Scikit-learn", "TensorFlow", "PyTorch", "NLP", "Time Series Analysis"] },
  { name: "R", category: "dsml", connections: ["Causal Inference", "A/B Testing", "Time Series Analysis", "Statistical Modeling"] },
  { name: "Scikit-learn", category: "dsml", connections: ["Python", "Recommendation Systems"] },
  { name: "TensorFlow", category: "dsml", connections: ["Python", "NLP", "MLflow"] },
  { name: "PyTorch", category: "dsml", connections: ["Python", "NLP", "MLflow"] },
  { name: "NLP", category: "dsml", connections: ["Python", "LLM Integration", "Recommendation Systems"] },
  { name: "Recommendation Systems", category: "dsml", connections: ["Scikit-learn", "NLP", "LLM Integration"] },
  { name: "LLM Integration", category: "dsml", connections: ["Python", "NLP"] },
  { name: "Time Series Analysis", category: "dsml", connections: ["Python", "R"] },
  { name: "Causal Inference", category: "dsml", connections: ["R", "A/B Testing"] },
  { name: "A/B Testing", category: "dsml", connections: ["Causal Inference", "Statistical Modeling"] },

  // Data Engineering & Infrastructure
  { name: "SQL", category: "de", connections: ["MySQL", "PostgreSQL", "SQL Server", "SQLite", "Supabase", "Databricks"] },
  { name: "PySpark", category: "de", connections: ["Databricks", "SQL"] },
  { name: "Databricks", category: "de", connections: ["PySpark", "MLflow"] },
  { name: "Apache Airflow", category: "de", connections: ["REST APIs", "Docker", "MLflow"] },
  { name: "MLflow", category: "de", connections: ["Databricks", "PyTorch", "TensorFlow"] },
  { name: "Docker", category: "de", connections: ["REST APIs", "CI/CD pipelines"] },
  { name: "REST APIs", category: "de", connections: ["SQL", "Docker", "API Integration"] },
  { name: "MySQL", category: "de", connections: ["SQL"] },
  { name: "PostgreSQL", category: "de", connections: ["SQL"] },
  { name: "SQL Server", category: "de", connections: ["SQL"] },
  { name: "SQLite", category: "de", connections: ["SQL"] },
  { name: "Supabase", category: "de", connections: ["SQL", "REST APIs"] },
  { name: "MongoDB", category: "de", connections: ["REST APIs"] },

  // Data Analytics & Visualization
  { name: "Tableau", category: "viz", connections: ["SQL", "Excel"] },
  { name: "Power BI", category: "viz", connections: ["SQL", "Excel"] },
  { name: "Streamlit", category: "viz", connections: ["Python"] },
  { name: "Matplotlib", category: "viz", connections: ["Python"] },
  { name: "Seaborn", category: "viz", connections: ["Python"] },
  { name: "Excel", category: "viz", connections: ["Power BI", "Tableau"] },
  { name: "Statistical Modeling", category: "viz", connections: ["R", "A/B Testing"] },
  { name: "Linear Optimization (CPLEX)", category: "viz", connections: ["Python"] },
  { name: "D3.js", category: "viz", connections: ["REST APIs"] },

  // Additional Proficiencies
  { name: "Git", category: "misc", connections: ["CI/CD pipelines", "Docker"] },
  { name: "API Integration", category: "misc", connections: ["REST APIs", "n8n Workflows"] },
  { name: "n8n Workflows", category: "misc", connections: ["API Integration", "REST APIs"] },
  { name: "Julia", category: "misc", connections: ["Linear Optimization (CPLEX)"] },
  { name: "CI/CD pipelines", category: "misc", connections: ["Git", "Docker"] },
  { name: "Astro", category: "misc", connections: ["D3.js", "REST APIs"] },
]

// Neon palette per new categories
const categoryColors = {
  dsml: "#05f792", // Data Science & ML
  de: "#2a754f", // Data Engineering & Infra
  viz: "#52b486", // Analytics & Visualization
  misc: "#95f0c2", // Additional Proficiencies
}


export function FloatingSkillsBubble() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const bubblesRef = useRef<Bubble[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Function to check if two bubbles overlap
    const checkOverlap = (bubble1: Bubble, bubble2: Bubble) => {
      const dx = bubble1.x - bubble2.x
      const dy = bubble1.y - bubble2.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      return distance < bubble1.radius + bubble2.radius + 20 // Increased buffer from 10 to 20
    }

    // Function to find a non-overlapping position with grid-based approach
    const findNonOverlappingPosition = (bubbles: Bubble[], newBubble: Bubble, maxAttempts = 100) => {
      // Try grid-based positioning first for better distribution
      const gridCols = Math.floor(canvas.width / 80) // 80px grid cells
      const gridRows = Math.floor(canvas.height / 80)
      const gridPositions = []

      for (let row = 0; row < gridRows; row++) {
        for (let col = 0; col < gridCols; col++) {
          gridPositions.push({
            x: (col + 0.5) * (canvas.width / gridCols),
            y: (row + 0.5) * (canvas.height / gridRows),
          })
        }
      }

      // Shuffle grid positions for randomness
      for (let i = gridPositions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[gridPositions[i], gridPositions[j]] = [gridPositions[j], gridPositions[i]]
      }

      // Try grid positions first
      for (const pos of gridPositions) {
        if (
          pos.x >= newBubble.radius &&
          pos.x <= canvas.width - newBubble.radius &&
          pos.y >= newBubble.radius &&
          pos.y <= canvas.height - newBubble.radius
        ) {
          newBubble.x = pos.x
          newBubble.y = pos.y

          let overlapping = false
          for (const existingBubble of bubbles) {
            if (checkOverlap(newBubble, existingBubble)) {
              overlapping = true
              break
            }
          }

          if (!overlapping) {
            return true
          }
        }
      }

      // Fallback to random positioning with more attempts
      for (let attempt = 0; attempt < maxAttempts; attempt++) {
        newBubble.x = Math.random() * (canvas.width - newBubble.radius * 2) + newBubble.radius
        newBubble.y = Math.random() * (canvas.height - newBubble.radius * 2) + newBubble.radius

        let overlapping = false
        for (const existingBubble of bubbles) {
          if (checkOverlap(newBubble, existingBubble)) {
            overlapping = true
            break
          }
        }

        if (!overlapping) {
          return true
        }
      }
      return false
    }

    // Initialize bubbles with better spacing
    const bubbles: Bubble[] = []
    skillsData.forEach((skillData, i) => {
      const newBubble: Bubble = {
        id: i,
        x: 0,
        y: 0,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 6 + 22, // Slightly smaller bubbles (22-28 instead of 25-33)
        skill: skillData.name,
        color: categoryColors[skillData.category as keyof typeof categoryColors] || "#2196f3",
        category: skillData.category,
      }

      if (findNonOverlappingPosition(bubbles, newBubble)) {
        bubbles.push(newBubble)
      } else {
        // More aggressive fallback - much smaller radius and edge placement
        newBubble.radius = Math.random() * 4 + 18
        newBubble.x = Math.random() * (canvas.width - newBubble.radius * 2) + newBubble.radius
        newBubble.y = Math.random() * (canvas.height - newBubble.radius * 2) + newBubble.radius
        bubbles.push(newBubble)
      }
    })
    bubblesRef.current = bubbles

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      bubbles.forEach((bubble) => {
        // Update position
        bubble.x += bubble.vx
        bubble.y += bubble.vy

        // Bounce off walls with some padding
        const wallPadding = 5
        if (bubble.x <= bubble.radius + wallPadding || bubble.x >= canvas.width - bubble.radius - wallPadding) {
          bubble.vx *= -0.8 // Add some energy loss on wall bounce
        }
        if (bubble.y <= bubble.radius + wallPadding || bubble.y >= canvas.height - bubble.radius - wallPadding) {
          bubble.vy *= -0.8
        }

        // Keep within bounds with padding
        bubble.x = Math.max(bubble.radius + wallPadding, Math.min(canvas.width - bubble.radius - wallPadding, bubble.x))
        bubble.y = Math.max(
          bubble.radius + wallPadding,
          Math.min(canvas.height - bubble.radius - wallPadding, bubble.y),
        )

        // Enhanced collision detection and separation
        bubbles.forEach((otherBubble) => {
          if (bubble.id !== otherBubble.id) {
            const dx = bubble.x - otherBubble.x
            const dy = bubble.y - otherBubble.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            const minDistance = bubble.radius + otherBubble.radius + 15 // Increased minimum distance

            if (distance < minDistance && distance > 0) {
              // Stronger separation force
              const angle = Math.atan2(dy, dx)
              const targetX = otherBubble.x + Math.cos(angle) * minDistance
              const targetY = otherBubble.y + Math.sin(angle) * minDistance

              // More aggressive separation
              const force = (minDistance - distance) / minDistance
              const ax = (targetX - bubble.x) * 0.1 * force // Increased force
              const ay = (targetY - bubble.y) * 0.1 * force

              bubble.vx += ax
              bubble.vy += ay

              // Add some randomness to prevent stuck situations
              if (Math.abs(bubble.vx) < 0.1 && Math.abs(bubble.vy) < 0.1) {
                bubble.vx += (Math.random() - 0.5) * 0.2
                bubble.vy += (Math.random() - 0.5) * 0.2
              }

              bubble.vx *= 0.98 // Less damping for more movement
              bubble.vy *= 0.98
            }
          }
        })

        // Add slight random movement to prevent stagnation
        if (Math.random() < 0.01) {
          // 1% chance per frame
          bubble.vx += (Math.random() - 0.5) * 0.1
          bubble.vy += (Math.random() - 0.5) * 0.1
        }

        // Limit maximum velocity to prevent chaos
        const maxVelocity = 1.5
        const currentSpeed = Math.sqrt(bubble.vx * bubble.vx + bubble.vy * bubble.vy)
        if (currentSpeed > maxVelocity) {
          bubble.vx = (bubble.vx / currentSpeed) * maxVelocity
          bubble.vy = (bubble.vy / currentSpeed) * maxVelocity
        }

        // Draw bubble with neon styling
        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2)

        // Create neon gradient fill
        const gradient = ctx.createRadialGradient(
          bubble.x - bubble.radius * 0.3,
          bubble.y - bubble.radius * 0.3,
          0,
          bubble.x,
          bubble.y,
          bubble.radius,
        )
        gradient.addColorStop(0, bubble.color + "90")
        gradient.addColorStop(0.7, bubble.color + "60")
        gradient.addColorStop(1, bubble.color + "30")
        ctx.fillStyle = gradient
        ctx.fill()

        // Add neon border
        ctx.strokeStyle = bubble.color
        ctx.lineWidth = 3
        ctx.stroke()

        // Add neon glow
        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, bubble.radius - 3, 0, Math.PI * 2)
        ctx.strokeStyle = bubble.color + "80"
        ctx.lineWidth = 2
        ctx.stroke()

        // Draw text with high contrast
        ctx.fillStyle = "#ffffff"
        ctx.font = "bold 11px Inter" // Slightly smaller font for smaller bubbles
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"

        // Add text shadow for readability
        ctx.shadowColor = "rgba(0, 0, 0, 0.8)"
        ctx.shadowBlur = 4
        ctx.shadowOffsetX = 2
        ctx.shadowOffsetY = 2

        const text = bubble.skill
        const maxWidth = bubble.radius * 1.6

        // Smart text wrapping
        const words = text.split(" ")
        if (words.length > 1) {
          const line1 = words[0]
          const line2 = words.slice(1).join(" ")
          const line1Width = ctx.measureText(line1).width
          const line2Width = ctx.measureText(line2).width

          if (line1Width <= maxWidth && line2Width <= maxWidth) {
            ctx.fillText(line1, bubble.x, bubble.y - 6)
            ctx.fillText(line2, bubble.x, bubble.y + 6)
          } else {
            ctx.font = "bold 9px Inter"
            ctx.fillText(text, bubble.x, bubble.y)
          }
        } else {
          const textWidth = ctx.measureText(text).width
          if (textWidth <= maxWidth) {
            ctx.fillText(text, bubble.x, bubble.y)
          } else {
            ctx.font = "bold 9px Inter"
            ctx.fillText(text, bubble.x, bubble.y)
          }
        }

        // Reset shadow
        ctx.shadowColor = "transparent"
        ctx.shadowBlur = 0
        ctx.shadowOffsetX = 0
        ctx.shadowOffsetY = 0
      })

      // Draw neon connections
      bubbles.forEach((bubble1) => {
        const skill1Data = skillsData.find((s) => s.name === bubble1.skill)
        if (!skill1Data) return

        bubbles.forEach((bubble2) => {
          if (bubble1.id >= bubble2.id) return

          const skill2Data = skillsData.find((s) => s.name === bubble2.skill)
          if (!skill2Data) return

          const shouldConnect =
            skill1Data.connections.includes(skill2Data.name) || skill2Data.connections.includes(skill1Data.name)

          if (shouldConnect) {
            const dx = bubble1.x - bubble2.x
            const dy = bubble1.y - bubble2.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            const maxDistance = 180 // Slightly reduced connection distance
            if (distance < maxDistance) {
              // Create neon gradient for connection lines
              const connectionGradient = ctx.createLinearGradient(bubble1.x, bubble1.y, bubble2.x, bubble2.y)
              connectionGradient.addColorStop(0, bubble1.color + "C0")
              connectionGradient.addColorStop(1, bubble2.color + "C0")

              ctx.beginPath()
              ctx.moveTo(bubble1.x, bubble1.y)
              ctx.lineTo(bubble2.x, bubble2.y)

              const opacity = Math.max(0.3, 0.8 * (1 - distance / maxDistance))

              if (bubble1.category === bubble2.category) {
                ctx.strokeStyle = connectionGradient
                ctx.lineWidth = 2
              } else {
                ctx.strokeStyle = connectionGradient
                ctx.lineWidth = 1
              }

              ctx.stroke()
            }
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-[500px] rounded-lg bg-gradient-to-br from-background to-muted/30 border overflow-hidden" // Increased height from 384px to 500px
    >
      <canvas ref={canvasRef} className="w-full h-full" style={{ background: "transparent" }} />
    </motion.div>
  )
}
