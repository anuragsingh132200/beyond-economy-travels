"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Premium Flight Bookings", href: "/services#premium-flight-bookings" },
      { name: "Points Management", href: "/services#points-management" }
    ]
  },
  {
    name: "Pricing",
    href: "/pricing"
  },
  {
    name: "About",
    href: "/about"
  },
  {
    name: "Testimonials",
    href: "/testimonials"
  },
  {
    name: "FAQ",
    href: "/faq"
  }
]

const NavItem = ({ item, isMobile = false, onItemClick }: { item: any, isMobile?: boolean, onItemClick?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  if (item.submenu) {
    return (
      <div className="relative" ref={ref}>
        <button
          onClick={() => {
            setIsOpen(!isOpen)
            if (isMobile) onItemClick?.()
          }}
          className={`flex items-center justify-between w-full px-4 py-2 text-sm ${
            isMobile ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-700 hover:text-primary'
          }`}
        >
          <span>{item.name}</span>
          <ChevronDown
            className={`ml-2 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className={`${
                isMobile ? 'pl-4' : 'absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50'
              }`}
            >
              <div className="py-1">
                {item.submenu.map((subItem: any) => (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setIsOpen(false)
                      if (isMobile) onItemClick?.()
                    }}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <Link
      href={item.href}
      className={`block px-4 py-2 text-sm ${
        isMobile ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-700 hover:text-primary'
      }`}
      onClick={() => {
        if (isMobile) onItemClick?.()
      }}
    >
      {item.name}
    </Link>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/90 backdrop-blur-sm"
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
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </nav>
        <Button
          variant="outline"
          className="hidden md:block"
          asChild
        >
          <Link href="/contact">Contact Us</Link>
        </Button>
        <div className="md:hidden relative" ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors flex items-center gap-1"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <>
                <span className="text-sm font-medium">Menu</span>
                <Menu className="h-5 w-5" />
              </>
            )}
          </button>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 py-1"
              >
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-gray-100 last:border-b-0">
                    <NavItem 
                      item={item} 
                      isMobile 
                      onItemClick={() => setIsMenuOpen(false)} 
                    />
                  </div>
                ))}
                <div className="px-4 py-3 border-t border-gray-100">
                  <Button asChild className="w-full" size="sm">
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}