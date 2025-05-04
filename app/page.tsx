"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Star, Award, Globe, Plane, Instagram } from "lucide-react"

import { Button } from "@/components/ui/button"
import TestimonialCarousel from "@/components/testimonial-carousel"
import MediaFeatures from "@/components/media-features"
import ServiceCard from "@/components/service-card"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy-900 text-white pt-20 md:pt-0">
        <div className="absolute inset-0 bg-grid opacity-10"></div>

        {/* Gradient Spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-30">
          <div className="absolute inset-0 translate-z-0 bg-gold-500 rounded-full blur-[120px] animate-spotlight"></div>
        </div>

        {/* World Map Background */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80"
            alt="World Map"
            fill
            className="object-cover opacity-10"
            unoptimized
          />
        </div>

        <div className="container-wide relative z-10 grid md:grid-cols-2 gap-12 items-center py-20 md:py-32">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-full bg-gold-500/20 px-4 py-1.5 text-sm font-medium text-gold-300"
            >
              Premium Travel Experience
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Fly <span className="text-gold-400">Business Class</span> at Economy Prices
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300"
            >
              Transform your travel points into unforgettable luxury experiences with our expert guidance and
              strategies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button size="lg" variant="gold" asChild className="btn-shine">
                <Link href="/contact">Book a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline-gold" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-navy-800 bg-navy-700 overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=40&width=40&text=${i}`}
                      alt={`Client ${i}`}
                      width={40}
                      height={40}
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-medium">500+ happy clients</span>
                <div className="flex items-center text-gold-400">
                  <Star className="h-3 w-3 fill-gold-400" />
                  <Star className="h-3 w-3 fill-gold-400" />
                  <Star className="h-3 w-3 fill-gold-400" />
                  <Star className="h-3 w-3 fill-gold-400" />
                  <Star className="h-3 w-3 fill-gold-400" />
                  <span className="ml-1 text-xs">5.0 (200+ reviews)</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl border-4 border-navy-800">
                <Image
                  src="/images/founder-maddy.jpeg"
                  alt="Maddy, Founder of Beyond Economy Travels"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg max-w-xs">
                <p className="font-bold">Meet Maddy</p>
                <p className="text-sm text-muted-foreground">
                  Points expert helping you fly business class without breaking the bank
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-24 h-24">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/whoweare-features-illustration-Gqt4SiKOvLfeDRO54gZ0gQNSJia44p.svg"
                alt="Decorative element"
                width={96}
                height={96}
                className="animate-float"
                unoptimized
              />
            </div>

            <div className="absolute -bottom-12 right-1/4 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-navy-500/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "$8.5M+", label: "Client savings" },
              { value: "3,500+", label: "Premium flights booked" },
              { value: "98%", label: "Client satisfaction" },
              { value: "42", label: "Countries served" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-navy-600 mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-navy-50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-full bg-navy-600/10 px-4 py-1.5 text-sm font-medium text-navy-600 mb-4"
            >
              Our Services
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Premium Flight Booking Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Maximize your travel points and experience luxury travel without the premium price tag.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Plane className="h-8 w-8 text-navy-600" />}
              title="Premium Flight Bookings"
              description="Let us handle your business and first-class bookings using your points and miles."
              link="/services#premium-flight-bookings"
            />
            <ServiceCard
              icon={<Award className="h-8 w-8 text-navy-600" />}
              title="First Class Experiences"
              description="Elevate your journey with first-class bookings that maximize comfort and luxury."
              link="/services#premium-flight-bookings"
            />
            <ServiceCard
              icon={<Globe className="h-8 w-8 text-navy-600" />}
              title="International Routes"
              description="Specialized expertise in Australia to Asia routes for the best deals and upgrades."
              link="/services#premium-flight-bookings"
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="navy">
              <Link href="/services" className="group">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Founder Section */}
      <section className="section-padding p-10">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-block rounded-full bg-navy-600/10 px-4 py-1.5 text-sm font-medium text-navy-600 mb-2">
                About Me
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Hi, I'm Maddy</h2>
              <p className="text-lg text-muted-foreground">
                I specialize in helping travelers unlock luxury travel experiences without paying full price. I've spent
                years mastering the art of points redemption and miles management to help you fly business and
                first-class using your loyalty points.
              </p>
              <p className="text-lg text-muted-foreground">
                At Beyond Economy Travels, my goal is simple: to help you make the most of your rewards programs and get
                you into the premium cabins of your dreams.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 p-4 bg-navy-50 rounded-xl">
                  <div className="bg-navy-600/10 p-2 rounded-full">
                    <Award className="h-5 w-5 text-navy-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Points Expert</h3>
                    <p className="text-muted-foreground">Years of experience maximizing travel rewards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-navy-50 rounded-xl">
                  <div className="bg-navy-600/10 p-2 rounded-full">
                    <Plane className="h-5 w-5 text-navy-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Aviation Enthusiast</h3>
                    <p className="text-muted-foreground">Passionate about premium travel experiences</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Button asChild variant="navy">
                  <Link href="/about" className="group">
                    Learn More About Me
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/business-class-carousel.jpg"
                  alt="Business Class Experience"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-navy-600 text-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-gold-400 text-gold-400" />
                  <span className="font-bold">Helped clients save over $8.5M</span>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-12 -right-12 w-24 h-24">
                <div className="bg-navy-100 rounded-full w-24 h-24 flex items-center justify-center animate-float">
                  <div className="bg-navy-200 rounded-full w-16 h-16 flex items-center justify-center">
                    <div className="bg-navy-300 rounded-full w-8 h-8"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-navy-50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-full bg-navy-600/10 px-4 py-1.5 text-sm font-medium text-navy-600 mb-4"
            >
              Testimonials
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Hear from travelers who have transformed their journey with our expertise.
            </motion.p>
          </div>

          <TestimonialCarousel />

          <div className="text-center mt-12">
            <Button variant="outline-navy" asChild>
              <Link href="/testimonials" className="group">
                Read More Testimonials
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured In Section */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              As Featured In
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Our expertise has been recognized by leading travel and financial publications.
            </motion.p>
          </div>
          <MediaFeatures />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-xl bg-navy-900 text-white p-8 md:p-12 lg:p-16">
            <div className="absolute inset-0 bg-grid opacity-10"></div>
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-navy-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-bold"
                >
                  Ready to Elevate Your Travel Experience?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-gray-300"
                >
                  Schedule a consultation with our points travel experts and discover how you can maximize your points
                  for premium travel experiences.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-gold-400" />
                    <span>Global expertise, personalized service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-gold-400" />
                    <span>5-star rated by our clients</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-gold-400" />
                    <span>Award-winning points strategies</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="pt-4"
                >
                  <Link href="https://instagram.com/BeyondEconomyTravels" target="_blank">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 bg-white/10 text-white border-white/20 hover:bg-white/20"
                    >
                      <Instagram className="h-5 w-5" />
                      Follow @BeyondEconomyTravels
                    </Button>
                  </Link>
                </motion.div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-foreground">
                <h3 className="text-xl font-bold mb-6">Book Your Free Consultation</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First Name
                      </label>
                      <input id="first-name" className="w-full px-3 py-2 border rounded-lg" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last Name
                      </label>
                      <input id="last-name" className="w-full px-3 py-2 border rounded-lg" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 border rounded-lg"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-3 py-2 border rounded-lg"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      className="w-full px-3 py-2 border rounded-lg h-24"
                      placeholder="Tell us about your travel goals..."
                    />
                  </div>
                  <Button variant="gold" className="w-full btn-shine">
                    Submit Request
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    By submitting this form, you agree to our{" "}
                    <Link href="#" className="underline hover:text-navy-600">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
