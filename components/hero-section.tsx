"use client"

import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import Image from "next/image"
import GlassFlipper from "@/components/GlassFlipper"
import HeroStats from "@/components/blocks/HeroStats"

export function HeroSection() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] h-[340px] w-[340px] rounded-full bg-gradient-to-br from-rose-500/40 to-fuchsia-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-10%] left-[-10%] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-cyan-500/40 to-sky-500/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-10"
        >
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="space-y-5 text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.6em] text-white/70">AI · Data · Interfaces</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                Vishal Lakshmi Narayanan
              </h1>
              <GlassFlipper className="mx-auto md:mx-0" />
              <p className="text-base md:text-lg text-white/80 max-w-2xl leading-relaxed font-medium">
                I design intelligent, human-first experiences by combining AI, analytics, and storytelling. Every
                project I ship is rooted in clarity, experimentation, and a sense of wonder about what data can reveal.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {["AI Strategy", "Data Science", "Digital Experiences"].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-white/20 px-4 py-2 text-[10px] font-semibold tracking-[0.4em] text-white/70"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-3">
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
              </div>

              <div className="pt-5">
                <HeroStats />
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative w-[22rem] h-[22rem] md:w-[46rem] md:h-[48rem] lg:w-[54rem] lg:h-[56rem]">
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
                  className="object-cover object-center scale-[1.08] drop-shadow-[0_30px_70px_rgba(15,23,42,0.6)]"
                  sizes="(min-width: 768px) 520px, 360px"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
