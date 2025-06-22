import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter, Linkedin, ArrowUpRight, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-20 pb-10">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <div className="relative h-32 w-40">
              <Image
                src="/images/image.png"
                alt="Beyond Economy Travels"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 max-w-xs">
              Transforming your points into unforgettable luxury experiences without the premium price tag.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/beyond_economy_travels/"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-white hover:bg-gold-500 hover:text-navy-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@maddymelbournewala?si=7QrLmK9hW56-CvDC&fbclid=PAZXh0bgNhZW0CMTEAAaeU8Lyq96o0lWO64jMmJYJ0OUpfhOWZRjopfI4AmIHrdcqWI2FuGA0nGGTUtQ_aem_B_CAKrNO68c97lFNhMQU0A"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-white hover:bg-gold-500 hover:text-navy-900 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-white hover:bg-gold-500 hover:text-navy-900 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold-300">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/services#premium-flight-bookings"
                  className="text-gray-300 hover:text-gold-300 transition-colors flex items-center"
                >
                  Premium Flight Bookings
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-gold-300 transition-colors flex items-center">
                  Pricing
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-gold-300 transition-colors flex items-center">
                  Book a Consultation
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold-300">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-gold-300 transition-colors flex items-center">
                  About Us
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-gray-300 hover:text-gold-300 transition-colors flex items-center"
                >
                  Testimonials
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-gold-300 transition-colors flex items-center">
                  Contact Us
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold-300">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-gold-300 transition-colors flex items-center">
                  FAQ
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-gold-300 transition-colors flex items-center">
                  Terms of Service
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-gold-300 transition-colors flex items-center">
                  Privacy Policy
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 space-y-1">
            <p>&copy; {new Date().getFullYear()} Beyond Economy Travels. All rights reserved.</p>
            <p>Beyond Economy Travels | ABN 21 496 617 907 | Melbourne, Australia</p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-gold-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-gold-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-sm text-gray-400 hover:text-gold-300 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
