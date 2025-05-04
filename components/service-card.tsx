"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  link: string
}

export default function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover-card-gradient border border-border/50 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-navy-50 rounded-full -translate-x-16 -translate-y-16 group-hover:bg-gold-100 transition-colors"></div>
      <div className="relative">
        <div className="mb-6 p-3 bg-navy-50 rounded-xl inline-block group-hover:bg-gold-100 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        <Link href={link} className="inline-flex items-center text-navy-600 font-medium group/link">
          Learn more
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}
