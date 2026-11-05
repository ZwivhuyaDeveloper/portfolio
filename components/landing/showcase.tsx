import React from 'react'
import { Badge } from '../ui/badge'
import { Card, CardContent } from '../ui/card'
import { Cpu, Globe, Layers, Palette, Server, Shield, Zap } from 'lucide-react'

export default function Showcase() {

  const techStack = [
    {
      category: "Frontend",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "Next.js", level: 95, description: "React framework for production" },
        { name: "TypeScript", level: 90, description: "Type-safe JavaScript" },
        { name: "React", level: 95, description: "UI component library" },
        { name: "Tailwind CSS", level: 90, description: "Utility-first CSS framework" },
        { name: "Shadcn/ui", level: 85, description: "Modern component library" },
      ],
    },
    {
      category: "Backend",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      technologies: [
        { name: "Node.js", level: 90, description: "JavaScript runtime" },
        { name: "Prisma", level: 85, description: "Next-generation ORM" },
        { name: "PostgreSQL", level: 80, description: "Advanced relational database" },
        { name: "Neon", level: 85, description: "Serverless Postgres platform" },
        { name: "API Routes", level: 90, description: "Server-side endpoints" },
      ],
    },
    {
      category: "Tools & Services",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      technologies: [
        { name: "Clerk", level: 85, description: "Authentication & user management" },
        { name: "Sanity CMS", level: 80, description: "Headless content management" },
        { name: "Vercel", level: 90, description: "Deployment & hosting platform" },
        { name: "Git", level: 90, description: "Version control system" },
        { name: "Docker", level: 75, description: "Containerization platform" },
      ],
    },
    {
      category: "3D & Design",
      icon: Palette,
      color: "from-orange-500 to-red-500",
      technologies: [
        { name: "Three.js", level: 80, description: "3D graphics library" },
        { name: "React Three Fiber", level: 75, description: "React renderer for Three.js" },
        { name: "Blender", level: 85, description: "3D modeling & animation" },
        { name: "Figma", level: 80, description: "UI/UX design tool" },
        { name: "Adobe Creative Suite", level: 75, description: "Design & multimedia tools" },
      ],
    },
  ]

  return (
    <div>
             <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-purple-500/30 text-purple-400 bg-purple-500/10 mb-4">
              Technical Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Tech Stack & Skills
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Leveraging modern technologies to build scalable, performant, and user-centric applications
            </p>
          </div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {techStack.map((category, categoryIndex) => (
              <Card
                key={category.category}
                className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 hover:scale-[1.02] group"
              >
                <CardContent className="p-8">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-20`}>
                      <category.icon
                        className={`w-6 h-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {category.category}
                    </h3>
                  </div>

                  {/* Technologies List */}
                  <div className="space-y-4">
                    {category.technologies.map((tech, techIndex) => (
                      <div
                        key={tech.name}
                        className="group/tech"
                        style={{ animationDelay: `${categoryIndex * 200 + techIndex * 100}ms` }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <span className="font-semibold text-gray-200 group-hover/tech:text-white transition-colors">
                              {tech.name}
                            </span>
                            <p className="text-sm text-gray-500 group-hover/tech:text-gray-400 transition-colors">
                              {tech.description}
                            </p>
                          </div>
                          <span className="text-sm font-medium text-gray-400">{tech.level}%</span>
                        </div>

                        {/* Skill Progress Bar */}
                        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: `${tech.level}%`,
                              animationDelay: `${categoryIndex * 200 + techIndex * 100 + 500}ms`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Responsive Design", icon: Layers },
              { name: "Performance Optimization", icon: Zap },
              { name: "Security Best Practices", icon: Shield },
              { name: "System Architecture", icon: Cpu },
            ].map((skill, index) => (
              <div
                key={skill.name}
                className="p-6 rounded-xl bg-gray-900/30 border border-gray-800/50 text-center hover:bg-gray-900/50 transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <skill.icon className="w-8 h-8 text-gray-400 group-hover:text-blue-400 mx-auto mb-3 transition-colors" />
                <h4 className="font-semibold text-gray-300 group-hover:text-white transition-colors text-sm">
                  {skill.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
    }
