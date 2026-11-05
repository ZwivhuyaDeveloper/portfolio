import { AboutSection } from "@/components/landing/about-section";
import { ContactSection } from "@/components/landing/contact-section";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero/hero";
import { ProcessSection } from "@/components/landing/process-section";
import { ProjectShowcase } from "@/components/landing/projects/project-showcase";
import { SkillsSection } from "@/components/landing/skills-section";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Hero />
      <main id="main">
        <ProjectShowcase />
        <AboutSection />
        <SkillsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}