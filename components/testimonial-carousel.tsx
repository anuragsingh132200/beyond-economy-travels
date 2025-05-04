"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Sunny",
    role: "Melbourne",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "I've always flown economy, but Maddy helped me book a business class ticket with Singapore Airlines, saving me over $3500! It was my dream to fly business, and now it's a reality. Highly recommend!",
    rating: 5,
    destination: "Melbourne to Guangzhou",
    savings: "$3,500+",
  },
  {
    id: 2,
    name: "Ravi",
    role: "IT Professional",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "I wanted to fly business class but couldn't afford it as the cash price was over $4k one way. Maddy saved me $2600 and I flew on Thai Airways Business Class and made my dream trip possible. I'll never fly economy again!",
    rating: 5,
    destination: "Delhi to Melbourne",
    savings: "$2,600",
  },
  {
    id: 3,
    name: "Family of 3",
    role: "Melbourne",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Maddy booked us 3 JAL business class tickets to Japan, saving us $10,000. Initially we thought that it wasn't possible but when we saw the ticket, we were shocked. Amazing service, and a trip we'll never forget!",
    rating: 5,
    destination: "Melbourne to Japan",
    savings: "$10,000",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, current])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-xl bg-white shadow-lg border border-border/50">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 md:p-12"
          >
            <div className="flex flex-col items-center text-center">
              <Quote className="h-12 w-12 text-gold-300 mb-6" />
              <div className="mb-6">
                <Image
                  src={testimonials[current].image || "/placeholder.svg"}
                  alt={testimonials[current].name}
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-navy-50"
                />
              </div>
              <div className="flex mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <blockquote className="mb-6 text-lg italic">"{testimonials[current].content}"</blockquote>
              <div>
                <div className="font-bold text-lg">{testimonials[current].name}</div>
                <div className="text-sm text-muted-foreground">{testimonials[current].role}</div>
              </div>
              <div className="mt-6 pt-6 border-t border-border/30 w-full">
                <div className="flex justify-between text-sm">
                  <div>
                    <span className="text-muted-foreground">Route: </span>
                    <span className="font-medium">{testimonials[current].destination}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Savings: </span>
                    <span className="font-medium text-navy-600">{testimonials[current].savings}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={() => {
          prev()
          setAutoplay(false)
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-md hover:bg-navy-50 transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={() => {
          next()
          setAutoplay(false)
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-md hover:bg-navy-50 transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrent(i)
              setAutoplay(false)
            }}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${i === current ? "bg-navy-600" : "bg-gray-300"}`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
