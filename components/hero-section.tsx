"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Clock } from "lucide-react"

import HeroCarousel from "@/components/hero-carousel";

export function HeroSection() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    return (
      date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }) +
      " | " +
      date.toLocaleTimeString()
    )
  }

  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center space-y-8"
        >
          {/* Date and Time Display */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-sm text-muted-foreground bg-card border rounded-full px-4 py-2"
          >
            <Clock className="w-4 h-4" />
            <span>{formatTime(currentTime)}</span>
          </motion.div>

          <HeroCarousel
            images={[
              "/images/hero/hero-1.jpg",
              "/images/hero/hero-2.jpeg",
            ]}
            intervalMs={5000}
            aspect="[--hero-h:28rem] h-[var(--hero-h)] md:h-[36rem]"
          />


          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight hover-underline-animation">
              Vishal Lakshmi Narayanan
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">Data Science Graduate Student @ ASU | Hackazona v0.1 Winner</p>
            <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed hover-underline-animation">
              I'm a graduate student in Data Science, Analytics & Engineering at Arizona State University, with a strong
              foundation in machine learning, NLP, applied statistics, and data-driven problem solving. My experience
              spans building AI-powered applications (AI travel planner, job-matching portal, workflow automation
              agents), conducting healthcare research on intelligent edge computing & AR/VR, and developing data
              pipelines & dashboards as a Data Analyst Intern. I focus on translating complex datasets into actionable
              insights and practical AI systems that drive impact in real-world domains.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/VishalLakshmiNarayanan"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn github"
            >
              <Github className="icon w-5 h-5" />
              <span className="text font-medium">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/vishal-lakshmi-narayanan-687619324"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn linkedin"
            >
              <Linkedin className="icon w-5 h-5" />
              <span className="text font-medium">LinkedIn</span>
            </a>
            <a
              href="https://medium.com/@lvishal1607"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn medium"
            >
              <span className="icon text-lg font-bold">M</span>
              <span className="text font-medium">Medium</span>
            </a>
            <a
              href="https://leetcode.com/u/lvleetcode/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn leetcode"
            >
              <span className="icon text-sm font-bold">LC</span>
              <span className="text font-medium">LeetCode</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
