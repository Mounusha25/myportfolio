"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Clock, Github, Linkedin } from "lucide-react"
import Image from "next/image"
import GlassFlipper from "@/components/GlassFlipper"
import HeroStats from "@/components/blocks/HeroStats"

export function HeroSection() {
  const [currentTime, setCurrentTime] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const formatTime = (d: Date) =>
    d.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) +
    " | " +
    d.toLocaleTimeString()

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Date pill */}
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
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black">I’m Vishal Lakshmi Narayanan</h1>
            <div className="mt-1">
              <GlassFlipper className="mx-0" />
            </div>
            <p className="text-base md:text-lg text-black/80 max-w-2xl leading-relaxed font-medium">
              I’m a builder and researcher who transforms ideas into intelligent systems. My work spans AI-driven platforms, backend engineering, and data science — from designing Builder Intelligence, an end-to-end talent matching pipeline at DevLabs, to developing TailShield, a risk-aware ensemble model for forecasting catastrophic losses.
            </p>
            <p className="text-base md:text-lg text-black/80 max-w-2xl leading-relaxed font-medium">
              I thrive at the intersection of AI and human insight, creating solutions that learn, adapt, and scale — whether it’s embedding pipelines, conversational interfaces, or research models that make data truly useful.
            </p>
            <div className="pt-4">
              <HeroStats />
            </div>
          </div>

          {/* Right visual with lighting + floating socials */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-80 h-80 md:w-[30rem] md:h-[32rem]">
              {/* Soft theme lighting */}
              <div
                className="pointer-events-none absolute -inset-6 rounded-[2rem]"
                style={{
                  background:
                    `radial-gradient(ellipse 90% 70% at 60% 35%, rgba(175,109,255,.35), transparent 60%),` +
                    `radial-gradient(ellipse 90% 60% at 30% 65%, rgba(255,100,180,.25), transparent 62%),` +
                    `radial-gradient(ellipse 70% 60% at 80% 80%, rgba(120,190,255,.25), transparent 65%)`,
                  filter: "blur(20px)",
                }}
              />
              <Image
                src="/images/hero/newhero.png"
                alt="Vishal Lakshmi Narayanan portrait"
                fill
                priority
                className="object-contain object-center scale-[1.08] drop-shadow-xl"
                sizes="(min-width: 768px) 480px, 320px"
              />
              {/* Floating socials */}
              <a href="https://github.com/VishalLakshmiNarayanan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="absolute -left-5 top-10 w-11 h-11 rounded-full bg-white/90 border shadow flex items-center justify-center hover:scale-105 transition">
                <Github className="w-5 h-5 text-black" />
              </a>
              <a href="https://linkedin.com/in/vishal-lakshmi-narayanan-687619324" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="absolute -right-4 top-20 w-11 h-11 rounded-full bg-white/90 border shadow flex items-center justify-center hover:scale-105 transition">
                <Linkedin className="w-5 h-5 text-black" />
              </a>
              <a href="https://medium.com/@lvishal1607" target="_blank" rel="noopener noreferrer" aria-label="Medium" className="absolute -left-3 bottom-16 w-11 h-11 rounded-full bg-white/90 border shadow flex items-center justify-center hover:scale-105 transition">
                <span className="text-sm font-bold text-black">M</span>
              </a>
              <a href="https://leetcode.com/u/lvleetcode/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="absolute -right-5 bottom-6 w-11 h-11 rounded-full bg-white/90 border shadow flex items-center justify-center hover:scale-105 transition">
                <span className="text-xs font-bold text-black">LC</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

