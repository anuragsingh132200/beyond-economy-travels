import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Preloader from "@/components/preloader"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Beyond Economy Travels - Premium Flight Experiences",
  description: "Fly Business Class at Economy Prices with Beyond Economy Travels, your trusted points travel experts.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <div className="flex min-h-screen flex-col">
          <Preloader />
          <Header />
          <div className="flex-1 pt-20">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
