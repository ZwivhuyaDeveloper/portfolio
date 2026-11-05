export const site = {
  name: 'ZWIVHUYA MBULAHENI',
  shortName: 'ZM',
  role: 'Full-Stack Developer',
  description:
    'I design and build high-performance digital experiences, products and applications.',
  email: 'mbulahenizwivhuya02@gmail.com',
  availability: 'Available for work',
  taglineLines: ['Web developer /', 'Digital creator'],
  heroHeading: ['Full-stack', 'Developer'],
  heroCopy:
    'I design and build high-performance digital experiences, products and applications.',
  stack: 'Next.js / TypeScript  •  React  •  Tailwind CSS',
  stats: [
    { value: '01', label: 'Core stack' },
    { value: '20+', label: 'Tools used' },
    { value: '∞', label: 'Ideas building' },
  ],
  links: [
    { label: 'Email', href: 'mailto:mbulahenizwivhuya02@gmail.com' },
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'X', href: '#' },
  ],
  portraits: {
    main: '/images/profile/hero-main.webp',
    alt: [
      '/images/profile/hero-alt-01.webp',
      '/images/profile/hero-alt-02.webp',
      '/images/profile/hero-alt-03.webp',
    ],
  },
  about: {
    heading: ['I build', 'digital', 'systems.'],
    body: '[Short bio. What you build, how you work, and which problems you enjoy solving.]',
    image: '/images/about/about.webp',
    alt: '[YOUR NAME]',
  },
  contact: {
    heading: ['Let’s', 'build', 'something.'],
    body: 'Have a project in mind, or just want to connect? Reach out.',
    cta: 'Start a project',
  },
  nav: [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
} as const

export type Site = typeof site