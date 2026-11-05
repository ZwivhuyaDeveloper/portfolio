"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import Navigation from "@/components/landing/navigation"
import Hero from '../components/landing/hero';
import About from "@/components/landing/about"
import Showcase from "@/components/landing/showcase"
import Timeline from "@/components/landing/timeline"
import Showcase3D from "@/components/landing/Showcase3D"
import Contact from "@/components/landing/contact"
import Footer from "@/components/landing/footer"

// Dynamically import 3D component to avoid SSR issues

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">

      {/* Enhanced Navigation with mobile menu */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Tech Stack Showcase Section */}
      <Showcase />

      {/* Projects Portfolio Gallery Section */}
      <Portfolio />

      {/* Experience Timeline Section */}
      <Timeline />

      {/* 3D Design Showcase Section */}
      <Showcase3D />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />


      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  )
}
