"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Premium Flight Bookings", href: "/services#premium-flight-bookings" },
      { name: "Points Management", href: "/services#points-management" },
      { name: "Custom Travel Strategies", href: "/services#custom-travel-strategies" },
    ],
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Testimonials",
    href: "/testimonials",
  },
  {
    name: "Resources",
    href: "/resources",
  },
]

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  // Handle client-side only code
  useEffect(() => {
    setMounted(true)
    
    // Handle scroll events only after mounting
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial scroll position
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle body scroll lock when drawer is open
  useEffect(() => {
    if (!mounted) return
    
    document.body.style.overflow = isDrawerOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isDrawerOpen, mounted])

  // Return a simpler initial state during SSR
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        <div className="container mx-auto px-4 flex h-20 items-center justify-between">
          <Link href="/" className="relative z-50">
            <div className="relative h-10 w-40">
              <Image
                src="/images/beyond-economy-logo.png"
                alt="Beyond Economy Travels"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>
      </header>
    )
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex h-20 items-center justify-between">
        <Link href="/" className="relative z-50">
          <div className="relative h-10 w-40">
            <Image
              src="/images/beyond-economy-logo.png"
              alt="Beyond Economy Travels"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Menu Toggle Button - Always visible on all screen sizes */}
        <button
          className="relative z-50 p-2 hover:bg-gray-100 rounded-md transition-colors flex items-center gap-2"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
        >
          {!isDrawerOpen && <span className="text-sm font-medium mr-1">Menu</span>}
          {isDrawerOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Side Drawer Navigation */}
        <AnimatePresence>
          {isDrawerOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
                onClick={() => setIsDrawerOpen(false)}
              />
              
              {/* Drawer Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-xl flex flex-col"
              >
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="relative h-8 w-32">
                    <Image
                      src="/images/beyond-economy-logo.png"
                      alt="Beyond Economy Travels"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                {/* Navigation Items */}
                <div className="flex-1 overflow-y-auto">
                  <nav className="py-4">
                    {navItems.map((item) => (
                      <div key={item.name} className="px-4">
                        {item.submenu ? (
                          <div>
                            <button
                              onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                              className="flex items-center justify-between w-full py-4 text-base font-medium border-b border-gray-100 hover:bg-gray-50 transition-colors"
                            >
                              {item.name}
                              <ChevronRight
                                className={`h-5 w-5 transition-transform duration-300 ${
                                  activeSubmenu === item.name ? "rotate-90" : ""
                                }`}
                              />
                            </button>

                            <AnimatePresence>
                              {activeSubmenu === item.name && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden bg-gray-50 rounded-md ml-2 my-1"
                                >
                                  {item.submenu.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="block px-6 py-3 text-sm hover:bg-gray-100 transition-colors text-gray-600"
                                      onClick={() => {
                                        setIsDrawerOpen(false)
                                        setActiveSubmenu(null)
                                      }}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className="block w-full py-4 text-base font-medium border-b border-gray-100 hover:bg-gray-50 transition-colors"
                            onClick={() => setIsDrawerOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
                
                {/* Drawer Footer with CTA */}
                <div className="p-4 border-t">
                  <Button asChild variant="gold" className="w-full">
                    <Link 
                      href="/contact" 
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}