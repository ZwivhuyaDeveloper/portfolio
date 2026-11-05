export const skills: string[] = [
  'Next.js',
  'React',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'Node.js',
  'PostgreSQL',
  'Git',
  'Figma',
  'Blender 3D',
  'Unreal Engine',
]

export type ProcessStep = {
  n: string
  title: string
  body: string
}

export const processSteps: ProcessStep[] = [
  { n: '01', title: 'Plan', body: 'Understand the problem and define goals.' },
  { n: '02', title: 'Design', body: 'Create intuitive, scalable solutions.' },
  { n: '03', title: 'Develop', body: 'Build with clean, efficient code.' },
  { n: '04', title: 'Deploy', body: 'Ship and keep improving.' },
]