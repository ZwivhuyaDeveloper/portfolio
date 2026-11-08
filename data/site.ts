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
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zwivhuya-mbulaheni' },
    { label: 'GitHub', href: 'https://github.com/ZwivhuyaDeveloper' },
    { label: 'X', href: '#' },
  ],
  portraits: {
    main: '/assets/my_portrait.png',
    alt: [
      '/assets/images/portrait-alt-01.png',
      '/assets/images/portrait-alt-02.png',
      '/assets/images/portrait-alt-03.png',
    ],
  },
  about: {
    heading: ['I build', 'digital', 'systems.'],
    body: 'I am a self-taught full-stack developer with a passion for creating high-performance digital experiences, products, and applications. With expertise in Next.js, TypeScript, React, and Tailwind CSS, I specialize in building scalable and efficient web solutions that meet the needs of modern users.',
    image: '/assets/my_portrait.png',
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