import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

export default function About() {
  return (
    <div>
      <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-80 h-100 mx-auto rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/profile.png"
                    alt="Developer Portrait"
                    className="w-[350px] h-[450px] object-fill "
                    width={350}
                    height={450}
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-30 animate-pulse delay-1000"></div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white">Full-Stack Developer & 3D Artist</h3>
                  <h4  className="text-xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">Zwivhuya Mbulaheni</h4>
                  <p className="text-gray-300 leading-relaxed">
                    I&apos;m a passionate full-stack developer with over 2 years of experience crafting digital experiences
                    that blend cutting-edge technology with creative design. My journey spans from building scalable web
                    applications to creating immersive 3D visualizations.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Specializing in modern web technologies like Next.js, TypeScript, and React, I create robust
                    applications backed by powerful databases and seamless user experiences. My unique blend of
                    technical expertise and artistic vision allows me to deliver solutions that are both functional and
                    visually stunning.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-blue-400">Core Values</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Clean, maintainable code
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        User-centered design
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Continuous learning
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-purple-400">Interests</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        3D Modeling & Animation
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        WebGL & Three.js
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        Open Source Projects
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <a 
                href="/assets/ZWIVHUYA2.pdf" 
                download="Zwivhuya_Mbulaheni_Resume.pdf"
                className="inline-block"
                  >
                    <Button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                      Download Resume
                    </Button>
                  </a>

                  <Button className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300">
                    View Projects
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
