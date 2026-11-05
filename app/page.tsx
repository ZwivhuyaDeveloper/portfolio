import { Hero } from "@/components/landing/hero/hero";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Hero />
      <main id="main">

      </main>
      {/* Footer component can be added here if needed */}
    </>
  )
}