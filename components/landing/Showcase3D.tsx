"use client"

import React, { Suspense } from 'react'
import { Badge } from '../ui/badge'
import { Card, CardContent } from '../ui/card'
import { CuboidIcon, Palette, Square, Zap } from 'lucide-react'
import { Button } from '../ui/button'
import dynamic from 'next/dynamic'

const Scene3DComponent = dynamic(() => import("@/components/3d-scene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl flex items-center justify-center">
      <div className="text-gray-400">Loading 3D Scene...</div>
    </div>
  ),
})

export default function Showcase3D() {
  return (
    <div>
      <section id="3d-showcase" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-pink-500/30 text-pink-400 bg-pink-500/10 mb-4">
              Creative Portfolio
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              3D Design Showcase
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Exploring the intersection of technology and creativity through immersive 3D experiences
            </p>
          </div>

          {/* Interactive 3D Scene */}
          <div className="mb-16">
            <Suspense
              fallback={
                <div className="w-full h-96 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl flex items-center justify-center">
                  <div className="text-gray-400">Loading 3D Scene...</div>
                </div>
              }
            >
              <Scene3DComponent />
            </Suspense>
          </div>

          {/* Skills & Tools Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 hover:scale-[1.02] group">
              <CardContent className="p-6 text-center">
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 bg-opacity-20 w-fit mx-auto mb-4">
                  <CuboidIcon className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  3D Modeling
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Creating detailed 3D models and environments using industry-standard tools and techniques.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Blender", "Maya", "3ds Max"].map((tool) => (
                    <Badge key={tool} variant="secondary" className="bg-gray-800/50 text-gray-300 text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 hover:scale-[1.02] group">
              <CardContent className="p-6 text-center">
                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 bg-opacity-20 w-fit mx-auto mb-4">
                  <Zap className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  WebGL & Three.js
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Bringing 3D experiences to the web with interactive animations and real-time rendering.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Three.js", "React Three Fiber", "WebGL"].map((tool) => (
                    <Badge key={tool} variant="secondary" className="bg-gray-800/50 text-gray-300 text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 hover:scale-[1.02] group">
              <CardContent className="p-6 text-center">
                <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 bg-opacity-20 w-fit mx-auto mb-4">
                  <Palette className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  Visual Design
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Crafting compelling visual narratives through lighting, materials, and composition.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Photoshop", "After Effects", "Substance Painter"].map((tool) => (
                    <Badge key={tool} variant="secondary" className="bg-gray-800/50 text-gray-300 text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <a href="https://www.youtube.com/@CyclespaceStudio" >
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-pink-500/25"
              >
                <CuboidIcon className="w-5 h-5 mr-2" />
                Explore More 3D Work
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
