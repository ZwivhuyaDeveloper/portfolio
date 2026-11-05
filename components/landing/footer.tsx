import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <div>
     <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                My Portfolio
              </div>
              <p className="text-gray-400 text-sm">© 2024 Zwivhuya Mbulaheni. All rights reserved.</p>
            </div>

            <div className="flex items-center gap-6">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                About
              </a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm">
                Projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </a>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/ZwivhuyaDeveloper/", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/zwivhuya-mbulaheni-792baa305", label: "LinkedIn" },
                { icon: Mail, href: "https://mbulahenizwivhuya02@gmail.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
