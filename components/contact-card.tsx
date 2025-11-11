"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"

type ContactDetail = {
  label: string
  value: string
  Icon: LucideIcon
}

type SocialLink = {
  href: string
  label: string
  icon: ReactNode
}

const contactDetails: ContactDetail[] = [
  { label: "Location", value: "Tempe, AZ", Icon: MapPin },
  { label: "Email", value: "lvishal1607@gmail.com", Icon: Mail },
  { label: "Phone", value: "+1 (480) 304-1340", Icon: Phone },
]

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/VishalLakshmiNarayanan",
    label: "GitHub",
    icon: <Github className="social-icon" />,
  },
  {
    href: "https://linkedin.com/in/vishal-lakshmi-narayanan-687619324",
    label: "LinkedIn",
    icon: <Linkedin className="social-icon" />,
  },
  {
    href: "https://medium.com/@lvishal1607",
    label: "Medium",
    icon: <span className="social-text">M</span>,
  },
  {
    href: "https://leetcode.com/u/lvleetcode/",
    label: "LeetCode",
    icon: <span className="social-text">LC</span>,
  },
]

export function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="contact-card-shell"
    >
      <div className="contact-card-panel">
        <p className="eyebrow">Let&apos;s collaborate</p>
        <h2>Drop a hello, I&apos;m always open to new challenges.</h2>
        <p className="description">
          Whether you&apos;re looking to solve a tricky automation problem, build a high-performing
          product, or just want to chat about what&apos;s next, I&apos;d love to connect.
        </p>

        <div className="details-grid">
          {contactDetails.map(({ label, value, Icon }) => (
            <div key={label} className="detail">
              <Icon className="detail-icon" />
              <div>
                <p className="detail-label">{label}</p>
                <p className="detail-value">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="action-row">
          <a className="button" href="mailto:lvishal1607@gmail.com" aria-label="Email Vishal">
            Email Me
          </a>
          <a className="button secondary" href="tel:+14803041340" aria-label="Call Vishal">
            Call
          </a>
        </div>

        <div className="social-links">
          {socialLinks.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${label}`}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      <div className="accents">
        <div className="acc-card" />
        <div className="acc-card" />
        <div className="acc-card" />
        <div className="light" />
        <div className="light sm" />
        <div className="top-light" />
      </div>
    </motion.div>
  )
}
