import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
  return (
    <div>
              {/* Enhanced Navigation with mobile menu */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
               My Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">
                About
              </a>
              <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">
                Projects
              </a>
              <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-colors">
                Experience
              </a>
              <a href="#3d-showcase" className="text-gray-300 hover:text-blue-400 transition-colors">
                3D Design
              </a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4 pt-4">
                <a
                  href="#about"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#experience"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Experience
                </a>
                <a
                  href="#3d-showcase"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  3D Design
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      
    </div>
  )
}
