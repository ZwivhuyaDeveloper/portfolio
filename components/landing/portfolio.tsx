import React, { useState } from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { ExternalLink, Eye, Github } from 'lucide-react'
import Image from 'next/image'

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState("All")
  const projects = [
    {
      id: 1,
      title: "Cyclespace Exchange",
      description:
        "Full-stack crypto currency token swap app with advanced features including web landing page, real-time data, authentication, news site, and custom token database.",
      image: "/DASHBOARD.png",
      category: "Full Stack",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Clerk", "Neon", "API Routes", "sanity CMS", "Coingecko API"],
      features: ["Real-time data", "Payment processing", "Admin dashboard", "Coingecko API"],
      demo: "https://balanced-deadly-kitten.ngrok-free.app/Dashboard",
      github: "https://github.com/ZwivhuyaDeveloper/cs-exchange-v2.2.git",
      status: "Featured",
    },
    {
      id: 2,
      title: "Cyclespace Exchange Website",
      description:
        "A web landing page for the Cyclespace Exchange app.",
      image: "/WEBSITE.png",
      category: "Full Stack",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Clerk", "Neon", "API Routes", "sanity CMS", "Coingecko API"],
      features: ["Real-time data", "Payment processing", "Admin dashboard", "Coingecko API"],
      github: "https://github.com/ZwivhuyaDeveloper/cs-exchange-v2.2.git",
      demo: "https://balanced-deadly-kitten.ngrok-free.app/",
      status: "Featured",
    },
  ]

  const categories = ["All", "Full Stack App", "Website"]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Featured":
        return "bg-gradient-to-r from-yellow-500 to-orange-500"
      case "New":
        return "bg-gradient-to-r from-green-500 to-emerald-500"
      case "In Progress":
        return "bg-gradient-to-r from-blue-500 to-cyan-500"
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600"
    }
  }

  return (
    <div>
           <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-green-500/30 text-green-400 bg-green-500/10 mb-4">
              Featured Work
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Projects Portfolio
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of innovative solutions and creative implementations across various technologies
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 hover:scale-[1.02] group overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getStatusColor(project.status)} text-white border-0`}>{project.status}</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                      {project.category}
                    </Badge>
                  </div>

                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-gray-800/50 text-gray-300 text-xs border-gray-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="bg-gray-800/50 text-gray-400 text-xs border-gray-700">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      onClick={() => window.open('https://balanced-deadly-kitten.ngrok-free.app/', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                      onClick={() => window.open('https://github.com/ZwivhuyaDeveloper/cs-exchange-v2.2.git', '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Projects Button */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
            >
              View All Projects on GitHub
              <Github className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
