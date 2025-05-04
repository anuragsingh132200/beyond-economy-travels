"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function MediaFeatures() {
  const mediaLogos = [
    { name: "Forbes", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Business Insider", logo: "/placeholder.svg?height=40&width=120" },
    { name: "CNN Travel", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Travel + Leisure", logo: "/placeholder.svg?height=40&width=120" },
    { name: "The Points Guy", logo: "/placeholder.svg?height=40&width=120" },
  ]

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
      {mediaLogos.map((media, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <Image
            src={media.logo || "/placeholder.svg"}
            alt={media.name}
            width={120}
            height={40}
            className="h-10 w-auto opacity-90 grayscale brightness-0 invert"
          />
        </motion.div>
      ))}
    </div>
  )
}
