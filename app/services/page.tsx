"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, CheckCircle, Plane, Award, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"
import ServiceCard from "@/components/service-card"

export default function ServicesPage() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const serviceRef1 = useRef(null)
  const serviceRef2 = useRef(null)
  const serviceRef3 = useRef(null)

  const isInView1 = useInView(serviceRef1, { once: true, margin: "-100px" })
  const isInView2 = useInView(serviceRef2, { once: true, margin: "-100px" })
  const isInView3 = useInView(serviceRef3, { once: true, margin: "-100px" })

  const serviceRef = useRef(null)
  const isInView = useInView(serviceRef, { once: true, margin: "-100px" })

  return (
    <main className="flex-1">
      <PageHeader
        title="Our Services"
        description="Premium solutions to Maximise your points and elevate your journey"
      />

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeIn}>
              <ServiceCard
                icon={<Plane className="h-10 w-10 text-primary" />}
                title="Premium Flight Bookings"
                description="Let us handle your business and first-class bookings using your points and miles."
                link="#premium-flight-bookings"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ServiceCard
                icon={<CreditCard className="h-10 w-10 text-primary" />}
                title="Points Management"
                description="Expert consulting to help you optimize your loyalty points and rewards."
                link="#points-management"
              />
            </motion.div>
            {/* <motion.div variants={fadeIn}>
              <ServiceCard
                icon={<Award className="h-10 w-10 text-primary" />}
                title="Custom Travel Strategies"
                description="Tailored travel plans that Maximise your points for premium experiences."
                link="#custom-travel-strategies"
              />
            </motion.div> */}
          </motion.div>
        </div>
      </section>

      <section id="premium-flight-bookings" className="py-12 md:py-16 lg:py-20 bg-muted/50" ref={serviceRef1}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/business-class-suite.jpg"
                alt="Business Class Experience"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Premium Flight Bookings</h2>
              <p className="text-lg text-muted-foreground">
                Need help booking business or first-class flights? I'll make sure you get the best deal by leveraging
                your frequent flyer miles and loyalty points. I handle everything from points redemptions to securing
                those coveted premium cabin seats, so you can travel in comfort and style.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What You'll Get:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                    <span>Customized booking options based on your travel needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                    <span>Maximised point redemptions for business and first-class flights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                    <span>A seamless booking process with no stress or hassle</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border border-primary/20">
                <h3 className="text-lg font-semibold mb-2">Business Class Pricing (One Way):</h3>
                <ul className="space-y-2 mb-4">
                  <li>1 Passenger: $300</li>
                  <li>2 Passengers: $500</li>
                  <li>3 Passengers: $700</li>
                  <li>4 Passengers: $900</li>
                </ul>
                <p className="text-sm text-muted-foreground mb-4">
                  First Class pricing available upon request.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="font-medium">$100 Non-Refundable Search Fee:</p>
                  <p>
                    A $100 non-refundable fee for my time spent researching flights. If you decide to proceed with the
                    booking, this fee will be credited toward your final booking cost.
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <Link href="/pricing">
                  <Button>
                    View Full Pricing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="points-management" className="py-12 md:py-16 lg:py-20" ref={serviceRef2}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 order-2 md:order-1"
            >
              <h2 className="text-3xl font-bold">Consulting on Points Management</h2>
              <p className="text-lg text-muted-foreground">
                I offer expert consulting to help you optimize your loyalty points. Our team includes former cabin crew members from Qatar Airways who bring invaluable insights into premium travel experiences.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What You'll Get:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                    <span>A personalized strategy to manage your points and miles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                    <span>Tips for maximizing rewards for future travel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                    <span>Guidance on the best ways to redeem points for business and first-class travel</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border border-primary/20">
                <h3 className="text-lg font-semibold mb-2">Pricing:</h3>
                <p>$100 for a 30-minute consulting session (prepayment required).</p>
              </div>
              <div className="pt-4">
                <Button>
                  Book a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <Image
                src="/images/economy-flex.jpg"
                alt="Economy Class Experience"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* <section id="custom-travel-strategies" className="py-12 md:py-16 lg:py-20 bg-muted/50" ref={serviceRef3}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/business-class-dining.jpg"
                alt="Business Class Dining Experience"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Custom Travel Strategies</h2>
              <p className="text-lg text-muted-foreground">
                No two trips are the same. Whether you're planning a honeymoon, a business trip, or a family vacation,
                I'll craft a custom travel strategy that Maximises your points and gets you the best value for your
                money.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What You'll Get:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                    <span>A tailored travel plan to meet your specific needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                    <span>Expert advice on securing upgrades and maximizing your rewards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                    <span>A roadmap for future point redemptions and travel planning</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border border-primary/20">
                <h3 className="text-lg font-semibold mb-2">Pricing:</h3>
                <p>$350 per person for a Custom Travel Strategy tailored to your needs.</p>
              </div>
              <div className="pt-4">
                <Button>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Special Offers</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Take advantage of our limited-time promotions and specialized services.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-primary/20 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-full inline-block mb-4">
                  Limited Time
                </div>
                <h3 className="text-xl font-bold mb-3">Refer a Friend Offer</h3>
                <p className="text-muted-foreground mb-4">
                  Share your travel experience with friends and earn rewards! Both you and your friend get special discounts on your next bookings.
                </p>
                <Link href="/contact" className="text-primary font-medium hover:underline inline-flex items-center">
                  Claim offer <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-primary/20 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-full inline-block mb-4">
                  Premium Service
                </div>
                <h3 className="text-xl font-bold mb-3">Rush Service Premium</h3>
                <p className="text-muted-foreground mb-4">
                  Need a last-minute flight? I offer rush services for bookings within 14 days of departure.
                </p>
                <Link href="/contact" className="text-primary font-medium hover:underline inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-primary/20 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-full inline-block mb-4">
                  Specialized Routes
                </div>
                <h3 className="text-xl font-bold mb-3">Route-Specific Deals</h3>
                <p className="text-muted-foreground mb-4">
                  I specialize in Australia to India/Asia routes to bring you the best deals and upgrades.
                </p>
                <Link href="/contact" className="text-primary font-medium hover:underline inline-flex items-center">
                  View routes <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Travel Experience?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's unlock your next business or first-class adventure, and make the most of your frequent flyer points.
            </p>
            <Button size="lg" variant="secondary">
              Book Your Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
