"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Users, Award, Globe, Clock, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"
import AnimatedElement from "@/components/animated-element"

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHeader
        title="About Us"
        description="Learn about our mission to transform points into premium travel experiences"
      />

      {/* About Founder Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedElement animation="slideInLeft" className="relative">
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/WhatsApp Image 2025-05-27 at 20.21.06_3509896e.jpg"
                  alt="Maddy, Founder of Beyond Economy Travels"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                <Link
                  href="https://instagram.com/BeyondEconomyTravels"
                  target="_blank"
                  className="flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="font-medium">@BeyondEconomyTravels</span>
                </Link>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slideInRight" className="space-y-6">
              <h2 className="text-3xl font-bold">Meet Maddy</h2>
              <p className="text-lg text-muted-foreground">
                I'm Maddy, the founder of Beyond Economy Travels, and I specialize in helping travelers unlock luxury
                travel experiences without paying full price. I've spent years mastering the art of points redemption
                and miles management to help you fly business and first-class using your loyalty points.
              </p>
              <p className="text-lg text-muted-foreground">
                At Beyond Economy Travels, my goal is simple: to help you make the most of your rewards programs and get
                you into the premium cabins of your dreams. Whether it's for a business trip, family vacation, or
                special occasion, I'll work with you to craft the perfect travel experience, maximizing your points to
                ensure you travel in style without breaking the bank.
              </p>
              <p className="text-lg text-muted-foreground">
                As an aviation enthusiast and points expert, I've built a reputation for delivering quality travel
                solutions. I've helped numerous clients book luxury flights, and now I'm ready to help you do the same.
                I live in the beautiful city of Melbourne, Australia — so if you're an Aussie, you're in great hands! I'll work with you to craft the perfect travel experience, maximizing your points to
                ensure you travel in style without breaking the bank.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Contact Me</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="https://instagram.com/Beyond_Economy_Travels" target="_blank">
                    <Instagram className="mr-2 h-4 w-4" />
                    Follow on Instagram
                  </Link>
                </Button>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/images/dotted-blue-map.png"
            alt="World Map"
            fill
            className="object-cover opacity-10"
            unoptimized
          />
        </div>
        <div className="container-wide relative z-10">
          <AnimatedElement animation="fadeIn" className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Brand Story</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
              <p className="text-lg">
                At Beyond Economy Travels, we're dedicated to helping travelers like you experience the best of what air
                travel has to offer. I know firsthand how overwhelming it can be to navigate the complexities of
                frequent flyer programs and points redemption, and that's where I come in.
              </p>
              <p className="text-lg">
                With years of expertise in miles management and luxury travel bookings, I've helped many clients unlock
                business and first-class flights that they never thought possible. From honeymoons to corporate travel,
                I tailor every strategy to ensure that your trip is as comfortable and affordable as possible. My focus
                is on maximizing your rewards, so you can enjoy premium travel experiences without paying full price.
              </p>
              <p className="text-lg">
                At Beyond Economy Travels, I take pride in providing a personalized approach for every client. I'm here
                to offer you the best solutions for rewards redemption, travel planning, and booking premium flights.
                Let me help you elevate your next journey.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container-wide">
          <AnimatedElement animation="stagger" className="text-center mb-16">
            <AnimatedElement animation="fadeIn">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're more than just travel advisors - we're points optimization specialists with a passion for premium
                travel experiences.
              </p>
            </AnimatedElement>
          </AnimatedElement>
          <AnimatedElement animation="stagger" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedElement
              animation="fadeIn"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4 text-primary">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-muted-foreground">
                Our team consists of certified travel consultants and points specialists with decades of combined
                experience.
              </p>
            </AnimatedElement>
            <AnimatedElement
              animation="fadeIn"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4 text-primary">
                <Award className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Proven Results</h3>
              <p className="text-muted-foreground">
                We've helped clients save over $500K+ in travel costs while upgrading their travel experience.
              </p>
            </AnimatedElement>
            <AnimatedElement
              animation="fadeIn"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4 text-primary">
                <Globe className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Expertise</h3>
              <p className="text-muted-foreground">
                Our knowledge spans airline alliances, hotel programs, and credit card rewards worldwide.
              </p>
            </AnimatedElement>
            <AnimatedElement
              animation="fadeIn"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4 text-primary">
                <Clock className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Time Saving</h3>
              <p className="text-muted-foreground">
                We handle the complex research and booking process, saving you countless hours of frustration.
              </p>
            </AnimatedElement>
          </AnimatedElement>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedElement animation="slideInLeft" className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl font-bold">Our Team</h2>
              <p className="text-lg text-muted-foreground">
                Our diverse team brings together expertise from the travel industry, loyalty programs, and customer
                service to provide you with the best possible experience.Even one of them was an Ex-Cabin Crew for Qatar Airways
              </p>
              <ul className="space-y-4">
                
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <span>Points and miles optimization specialists</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <span>Customer experience experts</span>
                </li>
              </ul>
              <Button className="mt-4 group" asChild>
                <Link href="/contact">
                  Contact us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </AnimatedElement>
            <AnimatedElement animation="slideInRight" className="order-1 md:order-2">
              <div className="relative">
                <Image
                  src="/images/WhatsApp Image 2025-05-27 at 20.21.12_5f83fa9a.jpg"
                  alt="Business Class Amenities"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                  unoptimized
                />
                <div className="absolute -bottom-4 -right-4">
                  <div className="bg-navy-100 rounded-full w-[120px] h-[120px] flex items-center justify-center">
                    <div className="bg-navy-200 rounded-full w-[80px] h-[80px] flex items-center justify-center">
                      <div className="bg-navy-300 rounded-full w-[40px] h-[40px]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <AnimatedElement animation="scaleIn">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Travel Experience?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let our team of experts help you Maximise your points and elevate your travel experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/consultation">Book a Consultation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                asChild
              >
                <Link href="/services">Learn About Our Services</Link>
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-8 bg-muted/30">
        <div className="container-wide">
          <div className="text-center text-sm text-muted-foreground">
            <p>Beyond Economy Travels | ABN 21 496 617 907 | Melbourne, Australia</p>
          </div>
        </div>
      </section>
    </main>
  )
}
