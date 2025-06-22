"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plane, Globe, Sparkles } from "lucide-react"

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const timer = setTimeout(() => {
      setLoading(false)
      document.body.style.overflow = 'auto'
    }, 3000)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = 'auto'
    }
  }, [])

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden'
    }
  }, [loading])

  if (!isMounted) return null

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { 
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-navy-900 to-navy-800"
        >
          <div className="relative">
            {/* Animated Globe Background */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.2, 1],
                opacity: [0, 0.8, 1],
                rotate: [0, 360]
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                rotate: {
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear"
                }
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Globe className="h-40 w-40 text-primary/10" strokeWidth={1} />
            </motion.div>
            
            {/* Animated Plane */}
            <motion.div
              initial={{ x: -100, y: 50, rotate: -45, opacity: 0 }}
              animate={{
                x: 100,
                y: -50,
                rotate: 45,
                opacity: 1,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute"
            >
              <Plane className="h-12 w-12 text-primary" />
            </motion.div>

            {/* Sparkles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  scale: 0,
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="absolute"
              >
                <Sparkles className="h-5 w-5 text-yellow-400" />
              </motion.div>
            ))}

            {/* Loading Text */}
            <motion.div 
              className="mt-48 text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold text-white mb-2">Beyond Economy Travels</h2>
              <div className="w-48 h-1 bg-gray-700 rounded-full overflow-hidden mx-auto">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-primary to-primary/70"
                />
              </div>
              <p className="mt-4 text-gray-400 text-sm">Preparing your journey...</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
