"use client"

import React from 'react'
import { Badge } from '../ui/badge'
import { Card, CardContent } from '../ui/card'
import { Calendar } from '../ui/calendar'
import { Award, Building, Code2, MapPin, Users, Zap } from 'lucide-react'

export default function Timeline() {
    const experiences = [
        {
        id: 1,
        title: "Junior Full Stack Developer",
        company: "Selftaught",
        location: "Johannesburg, South Africa",
        period: "2024 - Present",
        type: "Full-time, Remote",
        description:
            "Learning development of enterprise-scale applications using Next.js, TypeScript, and cloud technologies. Architected microservices handling 1M+ daily users.",
        achievements: [
            "Reduced application load time by 60% through optimization",
            "Led team of 5 developers on critical product launches",
            "Implemented CI/CD pipelines reducing deployment time by 80%",
            "Mentored junior developers and conducted code reviews",
        ],
        technologies: ["Next.js", "TypeScript", "Clerk", "PostgreSQL", "Neon", "API Routes"],
        icon: Building,
        color: "from-blue-500 to-cyan-500",
        },
        {
        id: 2,
        title: "3D Artist and web design (Figma)",
        company: "Self-employed",
        location: "Johannesburg, South Africa",
        period: "2023 - Present",
        type: "Full-time, Remote",
        description:
            "Started my learning journey creating models and learning modern production practices. Gained experience in both Motion Graphics and 3D Animation.",
        achievements: [
            "Completed 10+ 3D models and animations",
            "Learned modern rendering and animation frameworks and tools",
            "Participated content creation",
        ],
        technologies: ["Blender", "Cycles", "Photoshop", "Figma", "Three.js"],
        icon: Code2,
        color: "from-orange-500 to-red-500",
        },
    ]
    const education = [
        {
        degree: "Selftaught",
        school: "FreeCodeCamp.org",
        period: "2024 - Present",
        description: "Focused on software engineering, algorithms, and web development",
        achievements: ["Next.js ", "React", "TypeScript",],
        },
        {
        degree: "Full Stack Web Development Bootcamp",
        school: "CodeAcademy Pro",
        period: "2024 - Present",
        description: "Intensive program covering modern web development technologies",
        achievements: ["Hackathon participant",],
        },
    ]

  return (
    <div>
        <section id="experience" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-orange-500/30 text-orange-400 bg-orange-500/10 mb-4">
              Professional Journey
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Experience & Education
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A timeline of my professional growth and continuous learning in web development
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-12 text-center">Professional Experience</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500"></div>

              {/* Experience Items */}
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.id}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col md:gap-8`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                      <div
                        className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-gray-950`}
                      ></div>
                    </div>

                    {/* Content Card */}
                    <Card
                      className={`w-full md:w-5/12 ml-20 md:ml-0 bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 hover:scale-[1.02] group ${
                        index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                      }`}
                    >
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} bg-opacity-20 flex-shrink-0`}>
                            <exp.icon
                              className={`w-6 h-6 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                              {exp.title}
                            </h4>
                            <p className="text-lg text-blue-400 font-semibold">{exp.company}</p>
                            <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-400">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {exp.period}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {exp.location}
                              </div>
                              <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                                {exp.type}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 mb-4 leading-relaxed">{exp.description}</p>

                        {/* Key Achievements */}
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                            <Award className="w-4 h-4 text-yellow-400" />
                            Key Achievements
                          </h5>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h5 className="text-sm font-semibold text-gray-300 mb-3">Technologies Used</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="bg-gray-800/50 text-gray-300 text-xs border-gray-700"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-12 text-center">Education & Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 hover:scale-[1.02] group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 bg-opacity-20 flex-shrink-0">
                        <Award className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="text-purple-400 font-semibold">{edu.school}</p>
                        <div className="flex items-center gap-1 mt-2 text-sm text-gray-400">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{edu.description}</p>

                    <div>
                      <h5 className="text-sm font-semibold text-gray-300 mb-2">Achievements</h5>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Years Experience", value: "2+", icon: Calendar },
              { label: "Projects Completed", value: "3+", icon: Code2 },
              { label: "Projects in Development", value: "3+", icon: Users },
              { label: "Technologies Mastered", value: "7+", icon: Zap },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-gray-900/30 border border-gray-800/50 hover:bg-gray-900/50 transition-all duration-300 hover:scale-105 group"
              >
                <stat.icon className="w-8 h-8 text-gray-400 group-hover:text-blue-400 mx-auto mb-3 transition-colors" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
