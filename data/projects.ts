export type Project = {
  id: string
  index: string
  category: string
  title: string
  description: string
  href: string
  image: string
  alt: string
  art: 'tower' | 'hall'
}

export const projects: Project[] = [
  {
    id: 'project-01',
    index: '01',
    category: 'Website',
    title: 'Cyclespace Exchange',
    description: 'Cyclespace Exchange website allows users to explore and learn about the decentralized platform for trading digital assets, review news, and market updates.',
    href: '#work',
    image: '/assets/projects/cyse-website.png',
    alt: 'cyse-website.png',
    art: 'tower',
  },
  {
    id: 'project-02',
    index: '02',
    category: 'Web Application',
    title: 'Cyclespace Exchange (App)',
    description: 'Cyclespace Exchange is a decentralized platform that allows users to trade digital assets securely and efficiently.',
    href: '#work',
    image: '/assets/projects/cyse-app-dark.png',
    alt: 'cyse-app-dark.png',
    art: 'hall',
  },
    {
    id: 'project-03',
    index: '03',
    category: 'Website',
    title: 'Lumiere',
    description: 'Lumiere is a cosmetic brand that offers a range of beauty products, including skincare, makeup, and haircare. The website provides information about the brand, its products, and its mission.',
    href: '#work',
    image: '/assets/projects/Lumiere.png',
    alt: 'Lumiere.png',
    art: 'hall',
  },
]