"use client"

import type { ReactNode } from "react"
import { motion, type Variants } from "framer-motion"

interface AnimatedElementProps {
  children: ReactNode
  animation?: "fadeIn" | "slideInLeft" | "slideInRight" | "scaleIn" | "stagger"
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  margin?: string
}

export default function AnimatedElement({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  margin = "-100px",
}: AnimatedElementProps) {
  const animations: Record<string, Variants> = {
    fadeIn: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration, delay } },
    },
    slideInLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration, delay } },
    },
    slideInRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0, transition: { duration, delay } },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration, delay } },
    },
    stagger: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: delay,
        },
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={animations[animation]}
      className={className}
    >
      {children}
    </motion.div>
  )
}
