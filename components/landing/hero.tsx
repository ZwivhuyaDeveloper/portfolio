"use client"

import React, { useState } from 'react'
import { Badge } from '../ui/badge'
import { ArrowDown, Code, Code2, Database, Github, Globe, Linkedin, Mail, Palette, Server, Zap } from 'lucide-react'
import { Button } from '../ui/button'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Animated greeting */}
            <div className="mb-6">
              <Badge variant="outline" className="border-blue-500/30 text-blue-400 bg-blue-500/10 mb-4">
                Available for new opportunities
              </Badge>
            </div>

            {/* Main heading with gradient */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Full Stack
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Crafting modern web experiences with <span className="text-blue-400 font-semibold">Next.js</span>,{" "}
              <span className="text-purple-400 font-semibold">TypeScript</span>, and{" "}
              <span className="text-green-400 font-semibold">cutting-edge technologies</span>
            </p>

            {/* Tech stack preview */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                { name: "Next.js", icon: Code, color: "text-gray-300" },
                { name: "TypeScript", icon: Code2, color: "text-blue-400" },
                { name: "Prisma", icon: Database, color: "text-green-400" },
                { name: "3D Design", icon: Palette, color: "text-purple-400" },
              ].map((tech, index) => (
                <div
                  key={tech.name}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 transition-all duration-300 hover:scale-105 hover:bg-gray-800/80 ${tech.color}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <tech.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </Button>
              <a 
                href="/assets/ZWIVHUYA2.pdf" 
                download="Zwivhuya_Mbulaheni_Resume.pdf"
                className="inline-block"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Social links */}
            <div className="flex justify-center gap-6 mb-12">
              {[
                { icon: Github, href: "https://github.com/ZwivhuyaDeveloper/", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/zwivhuya-mbulaheni-792baa305", label: "LinkedIn" },
                { icon: Mail, href: "https://mbulahenizwivhuya02@gmail.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Scroll indicator */}
            <div className="animate-bounce">
              <ArrowDown className="w-6 h-6 text-gray-500 mx-auto" />
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </section>
    </div>
  )
}
