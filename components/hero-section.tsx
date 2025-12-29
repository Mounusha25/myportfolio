"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import Image from "next/image"
import GlassFlipper from "@/components/GlassFlipper"
import HeroStats from "@/components/blocks/HeroStats"
import { DataPatternBackground } from "@/components/hero-enhancements/DataPatternBackground"
import { IconStrip } from "@/components/hero-enhancements/IconStrip"
import { AccentButton } from "@/components/hero-enhancements/AccentButton"
import { FunFactsCard } from "@/components/hero-enhancements/FunFactsCard"

export function HeroSection() {
  // time pill removed per request

  return (
    <section className="py-8 md:py-12 relative">
      {/* ENHANCEMENT: Data pattern background - remove this line to revert */}
      <DataPatternBackground />
      <div className="container overflow-visible relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid sm:grid-cols-2 gap-8 items-center overflow-visible"
        >
          {/* Time pill removed */}

          {/* Left copy */}
          <div className="space-y-4 order-2 md:order-1 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-black whitespace-nowrap overflow-visible">Mounusha Ram Metti</h1>
            <div className="mt-1 flex justify-center">
              <GlassFlipper />
            </div>
            {/* ENHANCEMENT: Icon strip - remove these 2 lines to revert */}
            <IconStrip />
            <p className="text-base md:text-lg text-black/80 max-w-2xl mx-auto leading-relaxed font-medium">
              I build machine learning and analytics solutions that turn complex data into actionable insights. From emissions modeling and building energy optimization to predictive analytics across diverse domains, I leverage AI and data science to solve real-world challenges and drive impactful decisions.
            </p>

            {/* Social buttons positioned above stats */}
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              {/* ENHANCEMENT: Accent button - remove this line to revert */}
              <AccentButton />
              <a
                href="https://github.com/Mounusha25"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn github"
              >
                <Github className="icon w-5 h-5" />
                <span className="text font-medium">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/Mounusha-Ram-Metti"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn linkedin"
              >
                <Linkedin className="icon w-5 h-5" />
                <span className="text font-medium">LinkedIn</span>
              </a>
              {/* <a
                href="https://medium.com/@lvishal1607"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn medium"
              >
                <span className="icon text-lg font-bold">M</span>
                <span className="text font-medium">Medium</span>
              </a> */}
              <a
                href="https://leetcode.com/u/Mounusha_25/"
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
          <div className="order-1 md:order-2 flex justify-center">
            <motion.div 
              className="relative w-full max-w-[200px] h-[200px] sm:max-w-[250px] sm:h-[250px] md:max-w-[350px] md:h-[350px] lg:max-w-[400px] lg:h-[400px] xl:max-w-[450px] xl:h-[450px] group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated gradient border ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow blur-md" />
              
              {/* Soft theme lighting */}
              <div
                className="pointer-events-none absolute -inset-4 sm:-inset-5 md:-inset-6 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    `radial-gradient(ellipse 90% 70% at 60% 35%, rgba(175,109,255,.35), transparent 60%),` +
                    `radial-gradient(ellipse 90% 60% at 30% 65%, rgba(255,100,180,.25), transparent 62%),` +
                    `radial-gradient(ellipse 70% 60% at 80% 80%, rgba(120,190,255,.25), transparent 65%)`,
                  filter: "blur(20px)",
                }}
              />
              
              {/* Profile image container */}
              <motion.div 
                className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white/50 group-hover:border-white/80 transition-all duration-500"
                whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/images/hero/myprofilepic.jpeg"
                  alt="Mounusha Ram Metti portrait"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, (max-width: 1024px) 350px, (max-width: 1280px) 400px, 450px"
                />
                
                {/* Overlay with fun facts on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
                  <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm md:text-base font-semibold">🎯 Data Scientist</p>
                    <p className="text-xs md:text-sm opacity-90">Building AI Solutions</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating particles around image */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-60"
                    style={{
                      top: `${15 + i * 15}%`,
                      left: i % 2 === 0 ? '5%' : '90%',
                    }}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, i % 2 === 0 ? 10 : -10, 0],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 2 + i * 0.3,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
          {/* Socials moved above stats */}
        </motion.div>
      </div>
    </section>
  )
}
