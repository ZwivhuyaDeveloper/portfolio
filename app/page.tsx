/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client"

import { useState, useEffect, Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Code2,
  Palette,
  Database,
  Server,
  Globe,
  Zap,
  Shield,
  Layers,
  Cpu,
  ExternalLink,
  Eye,
  Calendar,
  MapPin,
  Award,
  Users,
  TrendingUp,
  Building,
  Play,
  Download,
  CuboidIcon as Cube,
  Send,
  Phone,
  MessageSquare,
  ArrowUp,
  Menu,
  X,
} from "lucide-react"
import dynamic from "next/dynamic"

// Dynamically import 3D component to avoid SSR issues
const Scene3DComponent = dynamic(() => import("@/components/3d-scene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl flex items-center justify-center">
      <div className="text-gray-400">Loading 3D Scene...</div>
    </div>
  ),
})

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with advanced features including real-time inventory, payment processing, and admin dashboard.",
      image: "/placeholder-0lf4q.png",
      category: "Full Stack",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
      features: ["Real-time inventory", "Payment processing", "Admin dashboard", "Order tracking"],
      github: "#",
      demo: "#",
      status: "Featured",
    },
    {
      id: 2,
      title: "3D Portfolio Showcase",
      description:
        "Interactive 3D portfolio website featuring immersive experiences and smooth animations built with Three.js and React Three Fiber.",
      image: "/3d-portfolio-floating.png",
      category: "3D Design",
      technologies: ["React", "Three.js", "React Three Fiber", "GSAP", "Blender"],
      features: ["Interactive 3D models", "Smooth animations", "Responsive design", "WebGL optimization"],
      github: "#",
      demo: "#",
      status: "Featured",
    },
    {
      id: 3,
      title: "SaaS Analytics Dashboard",
      description:
        "Comprehensive analytics platform with real-time data visualization, user management, and subscription handling.",
      image: "/dark-analytics-dashboard.png",
      category: "Full Stack",
      technologies: ["Next.js", "TypeScript", "Clerk", "Neon", "Chart.js"],
      features: ["Real-time analytics", "User authentication", "Subscription management", "Data visualization"],
      github: "#",
      demo: "#",
      status: "New",
    },
    {
      id: 4,
      title: "Content Management System",
      description:
        "Headless CMS built with Sanity, featuring rich content editing, media management, and API-first architecture.",
      image: "/cms-interface-dark.png",
      category: "Backend",
      technologies: ["Sanity CMS", "Next.js", "TypeScript", "Vercel", "GraphQL"],
      features: ["Rich content editing", "Media management", "API-first design", "Multi-language support"],
      github: "#",
      demo: "#",
      status: "Completed",
    },
    {
      id: 5,
      title: "AI-Powered Chat Application",
      description:
        "Real-time chat application with AI integration, featuring smart responses, file sharing, and group conversations.",
      image: "/placeholder-d9h7o.png",
      category: "Full Stack",
      technologies: ["Next.js", "Socket.io", "OpenAI", "Prisma", "Redis"],
      features: ["AI integration", "Real-time messaging", "File sharing", "Group chats"],
      github: "#",
      demo: "#",
      status: "In Progress",
    },
    {
      id: 6,
      title: "3D Product Configurator",
      description:
        "Interactive 3D product customization tool allowing users to modify materials, colors, and components in real-time.",
      image: "/3d-product-configurator.png",
      category: "3D Design",
      technologies: ["Three.js", "React", "WebGL", "Blender", "GSAP"],
      features: ["Real-time customization", "Material editor", "Export functionality", "Mobile responsive"],
      github: "#",
      demo: "#",
      status: "Completed",
    },
  ]

  const categories = ["All", "Full Stack", "3D Design", "Backend"]

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

  const designProjects = [

    {
      id: 1,
      title: "Product Design Showcase",
      description: "Interactive 3D product presentations with real-time material customization and lighting.",
      image: "/3d-product-showcase.png",
      category: "Product Design",
      tools: ["Three.js", "Blender", "Substance Painter"],
      year: "2023",
    },
    {
      id: 2,
      title: "Abstract Art Installation",
      description: "Generative 3D art pieces exploring geometric forms and dynamic lighting effects.",
      image: "/3d-abstract-art.png",
      category: "Digital Art",
      tools: ["Blender", "Geometry Nodes", "After Effects"],
      year: "2023",
    },
    {
      id: 3,
      title: "Character Design & Animation",
      description: "Stylized character models with rigging and animation for interactive web experiences.",
      image: "/3d-character-design.png",
      category: "Character Design",
      tools: ["Blender", "Mixamo", "Three.js"],
      year: "2024",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
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
                { name: "Next.js", icon: Code2, color: "text-gray-300" },
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
                href="/assets/Zwivhuya CV.pdf" 
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

      {/* About Section */}
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
                  <img
                    src="/profile.png"
                    alt="Developer Portrait"
                    className="w-[350px] h-[450px] object-fill "
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
                    I'm a passionate full-stack developer with over 2 years of experience crafting digital experiences
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
                href="/assets/Zwivhuya CV.pdf" 
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

      {/* Tech Stack Showcase Section */}
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

      {/* Projects Portfolio Gallery Section */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 hover:scale-[1.02] group overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
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
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
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

      {/* Experience Timeline Section */}
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
              { label: "Projects deployed", value: "3+", icon: Users },
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

      {/* 3D Design Showcase Section */}
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

          {/* Design Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {designProjects.map((project, index) => (
              <Card
                key={project.id}
                className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 hover:scale-[1.02] group overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg?height=300&width=500&query=3d design render"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="border-gray-400 text-gray-300 bg-gray-900/80 backdrop-blur-sm">
                      {project.year}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      View in 3D
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                  {/* Tools Used */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                      <Cube className="w-4 h-4 text-pink-400" />
                      Tools & Software
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <Badge
                          key={tool}
                          variant="secondary"
                          className="bg-gray-800/50 text-gray-300 text-xs border-gray-700"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills & Tools Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 hover:scale-[1.02] group">
              <CardContent className="p-6 text-center">
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 bg-opacity-20 w-fit mx-auto mb-4">
                  <Cube className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent" />
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
                <Cube className="w-5 h-5 mr-2" />
                Explore More 3D Work
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Added comprehensive contact section with form and social links */}
      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 bg-cyan-500/10 mb-4">
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 bg-opacity-20">
                      <Mail className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <p className="text-gray-400">mbulahenizwivhuya02@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 bg-opacity-20">
                      <Phone className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Phone</h4>
                      <p className="text-gray-400">+27 79 360 4713</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 bg-opacity-20">
                      <MessageSquare className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Response Time</h4>
                      <p className="text-gray-400">Usually within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: "https://github.com/ZwivhuyaDeveloper/", label: "GitHub", color: "hover:text-gray-300" },
                    { icon: Linkedin, href: "https://linkedin.com/in/zwivhuya-mbulaheni-792baa305", label: "LinkedIn", color: "hover:text-blue-400" },
                    { icon: Mail, href: "https://mbulahenizwivhuya02@gmail.com", label: "Email", color: "hover:text-green-400" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-gray-800`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <h4 className="font-semibold text-white">Currently Available</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    I'm currently accepting new projects and collaborations. Let's discuss how we can work together to
                    bring your vision to life.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Project Inquiry"
                      className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
