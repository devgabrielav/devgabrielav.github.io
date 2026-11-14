export interface SkillGroup { title: string; badge?: string; big?: boolean; items: string[] }

export const skillGroups: SkillGroup[] = [
  {
    title: 'Trabalho atual', badge: 'e-commerce', big: true,
    items: ['React', 'TypeScript', 'JavaScript (ES6)', 'Node.js', 'GraphQL', 'HTML', 'CSS avançado', 'VTEX IO', 'FastStore', 'VTEX Legacy', 'jQuery', 'Git & GitHub'],
  },
  {
    title: 'Estudos & projetos', badge: 'aprendizado',
    items: ['SQL', 'MySQL', 'Python', 'Django', 'C# / .NET', 'React Native', 'Redux', 'Context API', 'Docker', 'Jest', 'Vitest', 'Mocha', 'Chai', 'Sinon'],
  },
  {
    title: 'Conceitos & práticas',
    items: ['POO', 'SOLID', 'JWT', 'ORM', 'Testes automatizados', 'Performance', 'Código limpo'],
  },
]
