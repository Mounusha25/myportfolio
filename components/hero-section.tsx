"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Clock } from "lucide-react"
import Image from "next/image"
import GlassFlipper from "@/components/GlassFlipper"
import HeroStats from "@/components/blocks/HeroStats";


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
    <section className="py-12 md:py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Date and Time Display */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex items-center gap-2 text-sm text-black bg-white/50 border border-purple-300 rounded-full px-4 py-2 backdrop-blur-md w-max mb-2"
          >
            <Clock className="w-4 h-4 text-black" />
            <span className="font-medium">{formatTime(currentTime)}</span>
          </motion.div>

          {/* Left copy */}
          <div className="space-y-4 order-2 md:order-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black">
              I’m Vishal Lakshmi Narayanan
            </h1>
            <div className="mt-1">
              <GlassFlipper className="mx-0" />
            </div>

            <p className="text-base md:text-lg text-black/80 max-w-2xl leading-relaxed font-medium">
              I’m a builder and researcher who transforms ideas into intelligent systems. My work spans AI-driven platforms, backend engineering, and data science — from designing Builder Intelligence, an end-to-end talent matching pipeline at DevLabs, to developing TailShield, a risk-aware ensemble model for forecasting catastrophic losses.
            </p>
            <p className="text-base md:text-lg text-black/80 max-w-2xl leading-relaxed font-medium">
              I thrive at the intersection of AI and human insight, creating solutions that learn, adapt, and scale — whether it’s embedding pipelines, conversational interfaces, or research models that make data truly useful.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
              <a href="#projects" className="hero-social-btn github px-5 py-2">View Projects</a>
              <a href="#contact" className="hero-social-btn linkedin px-5 py-2">Let’s Talk</a>
            </div>

            <div className="pt-4">
              <HeroStats />
            </div>
          </div>

          {/* Right visual - single image with theme lighting, no box */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-[26rem] md:h-[28rem]">
              {/* Soft site-themed lighting behind */}
              <div
                className="pointer-events-none absolute -inset-6 rounded-[2rem]"
                style={{
                  background: `
                    radial-gradient(ellipse 90% 70% at 60% 35%, rgba(175, 109, 255, 0.35), transparent 60%),
                    radial-gradient(ellipse 90% 60% at 30% 65%, rgba(255, 100, 180, 0.25), transparent 62%),
                    radial-gradient(ellipse 70% 60% at 80% 80%, rgba(120, 190, 255, 0.25), transparent 65%)
                  `,
                  filter: "blur(20px)",
                }}
              />
              <Image
                src="/images/hero/newhero.png"
                alt="Vishal Lakshmi Narayanan portrait"
                fill
                priority
                className="object-contain object-center scale-[1.08] drop-shadow-xl"
                sizes="(min-width: 768px) 420px, 256px"
              />
            </div>
          </div>

          {/* Socials */}
          <div className="md:col-span-2 flex flex-wrap justify-center gap-4 mt-6">
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
