"use client"

import { motion } from "framer-motion"
import { ArrowRight, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"
import Link from "next/link"

export default function PricingPage() {
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

  return (
    <main className="flex-1">
      <PageHeader
        title="Points Travel Booking Pricing"
        description="Transparent pricing for our premium travel booking services"
      />

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-12">
            <motion.div variants={fadeIn} className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                Welcome to your ticket to Business and First Class travel using points! Below is our pricing structure
                for booking reward tickets. All prices are in AUD and apply to bookings made using your points or points
                we purchase on your behalf.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-primary/10 border border-primary/20 p-6 rounded-lg max-w-2xl mx-auto"
            >
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Search Fee (Non-Refundable Deposit)</h3>
                  <p>
                    $100 per booking: Required to start the search for your reward tickets. This fee is credited toward
                    your booking fee if you proceed with the booking.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-6 text-center pb-4 border-b">Business Class Booking Fees</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">Number of Passengers</th>
                        <th className="text-center py-3">One-Way</th>
                        <th className="text-center py-3">Return</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3">1 Passenger</td>
                        <td className="text-center py-3">$450</td>
                        <td className="text-center py-3">$600</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">2 Passengers</td>
                        <td className="text-center py-3">$750</td>
                        <td className="text-center py-3">$1000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">3 Passengers</td>
                        <td className="text-center py-3">$700</td>
                        <td className="text-center py-3">$1400</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">4 Passengers</td>
                        <td className="text-center py-3">$900</td>
                        <td className="text-center py-3">$1800</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-6 text-center pb-4 border-b">First Class Booking Fees</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">Number of Passengers</th>
                        <th className="text-center py-3">One-Way</th>
                        <th className="text-center py-3">Return</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3">1 Passenger</td>
                        <td className="text-center py-3">$450</td>
                        <td className="text-center py-3">$900</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">2 Passengers</td>
                        <td className="text-center py-3">$750</td>
                        <td className="text-center py-3">$1500</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">3 Passengers</td>
                        <td className="text-center py-3">$1000</td>
                        <td className="text-center py-3">$2000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeIn}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 max-w-3xl mx-auto"
            >
              <h3 className="text-xl font-bold mb-4">Additional Fees</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                  <span>
                    <strong>Rush Booking Fee:</strong> +$100 per booking for travel within 14 days.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                  <span>
                    <strong>Complex Route Fee:</strong> +$50 per passenger for multi-city or multi-carrier itineraries.
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center">
              <p className="text-lg mb-6">
                Please Contact us via the form or on Instagram @beyondeconomytravels.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
