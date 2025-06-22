'use client';

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"

export default function ContactPage() {
  return (
    <main className="flex-1">
      <PageHeader title="Contact Us" description="Get in touch with our points travel experts" />

      <section className="py-12 md:py-16 lg:py-20 flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="w-full">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions about our services or ready to start your points travel journey? Our team of experts is
                here to help.
              </p>

              <div className="grid gap-8 max-w-3xl">
                {/* Email Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-1">Email Us</h3>
                      <p className="text-muted-foreground mb-3">For general inquiries and support</p>
                      <Link 
                        href="mailto:info@beyondeconomy.com?subject=Inquiry from Beyond Economy Travels" 
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        info@beyondeconomy.com
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-1">Call Us</h3>
                      <Link 
                        href="tel:+61481821245" 
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        +61481821245
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-3">Business Hours</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <span className="inline-block w-36 font-medium">All Days</span>
                          <span>9:00 AM - 9:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-muted-foreground">
                <p>Beyond Economy Travels | ABN 21 496 617 907 | Melbourne, Australia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about our services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">How do I get started with Beyond Economy Travels?</h3>
              <p className="text-muted-foreground">
                The best way to get started is to book a free consultation with one of our points travel experts. We'll
                assess your current points situation and travel goals to create a personalized strategy.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">What if I don't have many points yet?</h3>
              <p className="text-muted-foreground">
                No problem! We can help you develop a strategy to accumulate points quickly based on your spending
                habits and travel goals. Many clients are surprised by how quickly they can earn enough points for
                premium travel.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">How much can I expect to save on business class flights?</h3>
              <p className="text-muted-foreground">
                Our clients typically save 60-80% off the cash price of business class flights when using points
                strategically. For example, a $5,000 business class ticket might cost just $500-800 in taxes and fees
                when booked with points.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Do you book the flights for me?</h3>
              <p className="text-muted-foreground">
                Yes, our Points Flights Concierge service handles the entire booking process for you. We'll search for
                award availability, find the best redemption options, and secure your premium cabin seats.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="inline-flex items-center text-primary font-medium hover:underline">
              View all FAQs <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/WhatsApp Image 2025-05-27 at 20.21.04_92e65559.jpg"
                alt="Schedule a call"
                width={600}
                height={600}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Schedule a Call</h2>
              <p className="text-lg text-muted-foreground">
                Prefer to speak with someone directly? Schedule a call with one of our points travel experts at a time
                that works for you.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold mb-4">Available Appointment Types</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Free 15-minute consultation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>30-minute points strategy session</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>60-minute comprehensive travel planning</span>
                  </li>
                </ul>
              </div>
              <Button className="mt-4">
                Schedule Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
