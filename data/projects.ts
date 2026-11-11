export type Project = {
  id: string
  slug: string
  index: string
  number: string
  category: string
  type: string
  title: [string, string]
  summary: string
  description: string
  href: string
  cover: string
  image: string
  assets: string[]
  alt: string
  art: 'tower' | 'hall' | 'chart'
  tech: string[]
  year: string
  keywords: string[]
  challenge: string
  solution: string
  gallery: { src: string; art: 'tower' | 'hall' | 'chart'; caption: string }[]
  features: string[]
}

export const projects: Project[] = [
  {
    id: 'project-01',
    slug: 'cyclespace-exchange',
    index: '01',
    number: '01',
    category: 'Website',
    type: 'Landing Page / News',
    title: ['Cyclespace', 'Exchange'],
    summary: 'A modern website for Cyclespace Exchange, review news, and market updates.',
    description: 'Cyclespace Exchange is a website that allows users to review updates, featuring real-time news and a sleek user interface.',
    href: '/projects/cyclespace-exchange',
    cover: '/assets/projects/cyse-hero-animated2.gif',
    image: '/assets/projects/cyse-website.png',
    assets: ['/assets/projects/cyse-about.png', '/assets/projects/cyse-display.png'],
    alt: 'Cyclespace Exchange Website',
    art: 'tower',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    year: '2025 - Preset',
    keywords: ['Landing Page', 'News Platform', 'SEO'],
    challenge: 'Creating a website that is both beautifull and easy to use. The goal was to design a responsive website that converts users , advanced market news aggrigation and updates .',
    solution: 'A modern, high-performance website built with Next.js, TypeScript, GSAP and Sanity CMS featuring curated news, easy User-Experience and navigation flow.',
    gallery: [
      { src: '/assets/projects/cyse-features.png', art: 'chart', caption: 'Website Overview' },
      { src: '/assets/projects/cyse-section.png', art: 'tower', caption: 'Market Analytics' },
    ],
    features: ['Real-time market news', 'Sleek modern UI', 'Performance optimized'],
  },
  {
    id: 'project-02',
    slug: 'cyclespace-app',
    index: '02',
    number: '02',
    category: 'Web Application',
    type: 'Web App / Fintech',
    title: ['Cyclespace', 'App'],
    summary: 'A decentralized mobile application for trading digital assets securely and efficiently.',
    description: 'The Cyclespace mobile app brings the power of decentralized finance to your pocket, offering seamless trading, portfolio tracking, and live market updates.',
    href: '/projects/cyclespace-app',
    cover: '/assets/projects/cyse-app-dark.png',
    image: '/assets/projects/cyse-app-dark.png',
    assets: ['/assets/projects/cyse-app-dark.png', '/assets/projects/cyse-app-light.png'],
    alt: 'Cyclespace App Dark Mode',
    art: 'hall',
    tech: ['Next.js', 'Pyth Network', 'Solidity'],
    year: '2025 - Present',
    keywords: ['Trade', 'Track', 'Secure'],
    challenge: 'Translating a complex desktop trading experience into a fluid, intuitive mobile interface without losing core functionality.',
    solution: 'A React Native app with a highly optimized rendering pipeline, leveraging native gestures and secure local storage for private keys.',
    gallery: [
      { src: '/assets/projects/cyse-app-dark.png', art: 'hall', caption: 'Dark Mode Interface' },
      { src: '/assets/projects/cyse-app-light.png', art: 'tower', caption: 'Light Mode Interface' },
    ],
    features: ['Biometric login', 'Instant swaps', 'Portfolio tracking', 'Push notifications'],
  },
  {
    id: 'project-03',
    slug: 'lumiere',
    index: '03',
    number: '03',
    category: 'Website',
    type: 'E-Commerce / Beauty',
    title: ['Lumiere', 'Cosmetics'],
    summary: 'A high-end cosmetic brand website offering skincare, makeup, and haircare products.',
    description: 'Lumiere is a cosmetic brand that offers a range of beauty products, including skincare, makeup, and haircare. The website provides information about the brand, its products, and its mission.',
    href: '/projects/lumiere',
    cover: '/assets/projects/Lumiere.png',
    image: '/assets/projects/Lumiere.png',
    assets: ['/assets/projects/Lumiere.png', '/assets/projects/Lumiere-02.png'],
    alt: 'Lumiere Cosmetics Website',
    art: 'hall',
    tech: ['Next.js', 'GSAP', 'Tailwind CSS', 'Three.js'],
    year: '2026 - Present',
    keywords: ['Discover', 'Shop', 'Glow'],
    challenge: 'Building an e-commerce experience that feels as luxurious and clean as the physical products.',
    solution: 'A visually striking, image-heavy storefront with smooth page transitions and a frictionless checkout flow.',
    gallery: [
      { src: '/assets/projects/Lumiere.png', art: 'hall', caption: 'Landing Page' },
      { src: '/assets/projects/Lumiere-02.png', art: 'tower', caption: 'Product Grid' },
    ],
    features: ['Headless commerce', 'Fluid animations', 'Custom checkout', 'Mobile first'],
  },
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)