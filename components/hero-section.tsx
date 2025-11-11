"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import Image from "next/image"
import GlassFlipper from "@/components/GlassFlipper"
import HeroStats from "@/components/blocks/HeroStats"

export function HeroSection() {
  // time pill removed per request

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid sm:grid-cols-2 gap-8 items-center"
        >
          {/* Time pill removed */}

          {/* Left copy */}
          <div className="space-y-4 order-2 md:order-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black">Vishal Lakshmi Narayanan</h1>
            <div className="mt-1">
              <GlassFlipper className="mx-0" />
            </div>
            <p className="text-base md:text-lg text-black/80 max-w-2xl leading-relaxed font-medium">
              I’m Vishal Lakshmi Narayanan, a data science enthusiast who loves turning complex problems into simple, intelligent solutions. I explore how AI, analytics, and real-world data can work together to drive innovation and make technology more human.
            </p>

            {/* Social buttons positioned above stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
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
            <div className="pt-4">
              <HeroStats />
            </div>
          </div>

          {/* Right visual with lighting + floating socials */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-[20rem] h-[20rem] md:w-[44rem] md:h-[46rem] lg:w-[48rem] lg:h-[50rem]">
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
              {/* Floating socials removed per request (restored bottom buttons) */}
            </div>
          </div>
          {/* Socials moved above stats */}
        </motion.div>
      </div>
    </section>
  )
}
