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
    category: 'Web application',
    title: '[Project name]',
    description: '[Project description. Replace with a real project.]',
    href: '#work',
    image: '/images/projects/project-01.webp',
    alt: '[Project 01 screenshot]',
    art: 'tower',
  },
  {
    id: 'project-02',
    index: '02',
    category: 'Finance app',
    title: '[Project name]',
    description: '[Project description. Replace with a real project.]',
    href: '#work',
    image: '/images/projects/project-02.webp',
    alt: '[Project 02 screenshot]',
    art: 'hall',
  },
    {
    id: 'project-03',
    index: '03',
    category: 'News app',
    title: '[Project name]',
    description: '[Project description. Replace with a real project.]',
    href: '#work',
    image: '/images/projects/project-03.webp',
    alt: '[Project 03 screenshot]',
    art: 'hall',
  },
]