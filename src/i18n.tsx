import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { projects as ptProjects, shots, type Project } from './data/projects'
import { skillGroups as ptSkills, type SkillGroup } from './data/skills'
import { languages as ptLanguages, rotating as ptRotating } from './data/profile'

export type Lang = 'pt' | 'en' | 'es' | 'ja'

export const LANG_OPTIONS: { code: Lang; label: string; short: string; htmlLang: string }[] = [
  { code: 'pt', label: 'Português (Brasil)', short: 'PT', htmlLang: 'pt-BR' },
  { code: 'en', label: 'English', short: 'EN', htmlLang: 'en' },
  { code: 'es', label: 'Español', short: 'ES', htmlLang: 'es' },
  { code: 'ja', label: '日本語', short: 'JA', htmlLang: 'ja' },
]

export function FlagIcon({ code }: { code: Lang }) {
  switch (code) {
    case 'pt':
      return (
        <svg viewBox="0 0 28 20" aria-hidden="true" className="flag-svg">
          <rect width="28" height="20" rx="3" fill="#009b3a" />
          <polygon points="14,2.2 25.2,10 14,17.8 2.8,10" fill="#fedf00" />
          <circle cx="14" cy="10" r="4.2" fill="#002776" />
          <path d="M10.1 8.8c2.6-.7 5.4-.4 7.8.9" stroke="#fff" strokeWidth="1" fill="none" strokeLinecap="round" />
        </svg>
      )
    case 'en':
      return (
        <svg viewBox="0 0 28 20" aria-hidden="true" className="flag-svg">
          <rect width="28" height="20" rx="3" fill="#fff" />
          <path d="M0 0h28v1.54H0zm0 3.08h28v1.54H0zm0 3.08h28v1.54H0zm0 3.08h28v1.54H0zm0 3.08h28v1.54H0zm0 3.08h28v1.54H0zm0 3.08h28V20H0z" fill="#b22234" />
          <rect width="12" height="10.77" rx="1.5" fill="#3c3b6e" />
          <g fill="#fff">
            <circle cx="2.4" cy="2.2" r="0.7" /><circle cx="6" cy="2.2" r="0.7" /><circle cx="9.6" cy="2.2" r="0.7" />
            <circle cx="4.2" cy="4" r="0.7" /><circle cx="7.8" cy="4" r="0.7" />
            <circle cx="2.4" cy="5.8" r="0.7" /><circle cx="6" cy="5.8" r="0.7" /><circle cx="9.6" cy="5.8" r="0.7" />
            <circle cx="4.2" cy="7.6" r="0.7" /><circle cx="7.8" cy="7.6" r="0.7" />
            <circle cx="2.4" cy="9.2" r="0.7" /><circle cx="6" cy="9.2" r="0.7" /><circle cx="9.6" cy="9.2" r="0.7" />
          </g>
        </svg>
      )
    case 'es':
      return (
        <svg viewBox="0 0 28 20" aria-hidden="true" className="flag-svg">
          <rect width="28" height="20" rx="3" fill="#aa151b" />
          <rect y="5" width="28" height="10" fill="#f1bf00" />
          <rect x="6" y="7.2" width="3.2" height="4.8" rx="1" fill="#aa151b" />
          <circle cx="7.6" cy="9.6" r="0.9" fill="#f1bf00" />
        </svg>
      )
    case 'ja':
      return (
        <svg viewBox="0 0 28 20" aria-hidden="true" className="flag-svg">
          <rect width="28" height="20" rx="3" fill="#fff" />
          <circle cx="14" cy="10" r="5.6" fill="#bc002d" />
        </svg>
      )
  }
}

const gh = 'https://github.com/devgabrielav'

export interface Translations {
  docTitle: string
  skipToContent: string
  nav: {
    homeAria: string
    mainAria: string
    links: { id: string; label: string }[]
    themeAria: string
    themeTitle: string
    burgerAria: string
    langAria: string
  }
  hero: {
    eyebrow: string
    rolePrefix: string
    roleHighlight: string
    roleSuffix: string
    leadPrefix: string
    rotating: string[]
    viewProjects: string
    contactMe: string
    socialAria: string
    emailAria: string
    photoAlt: string
  }
  about: {
    title: string
    p1: string
    p2Before: string
    p2After: string
    p3: string
    p4: string
    summaryTitle: string
    facts: { dt: string; dd: string }[]
    languagesTitle: string
    languages: { name: string; level: string; pct: number }[]
  }
  stack: {
    title: string
    groups: SkillGroup[]
  }
  projects: {
    title: string
    subtitle: string
    viewImagesAria: (title: string) => string
    viewImagesHint: (count: number) => string
    viewDemo: string
    code: string
    moreTitle: string
    moreText: string
    modalAria: (title: string) => string
    closeAria: string
    prevAria: string
    nextAria: string
    thumbsAria: string
    viewImageAria: (n: number) => string
    items: Project[]
  }
  contact: {
    title: string
    big: string
    muted: string
    emailLabel: string
    whatsappText: string
  }
  footer: {
    madeWith: string
    backToTop: string
  }
}

export const translations: Record<Lang, Translations> = {
  pt: {
    docTitle: 'Gabriela Vicentini — Desenvolvedora Full Stack',
    skipToContent: 'Pular para o conteúdo',
    nav: {
      homeAria: 'Início',
      mainAria: 'Principal',
      links: [
        { id: 'sobre', label: 'Sobre' },
        { id: 'stack', label: 'Stack' },
        { id: 'projetos', label: 'Projetos' },
        { id: 'contato', label: 'Contato' },
      ],
      themeAria: 'Alternar paleta de cores',
      themeTitle: 'Alternar paleta',
      burgerAria: 'Abrir menu',
      langAria: 'Selecionar idioma',
    },
    hero: {
      eyebrow: 'Olá, eu sou',
      rolePrefix: 'Desenvolvedora ',
      roleHighlight: 'Full Stack Júnior',
      roleSuffix: ' & estudante de Engenharia de Software',
      leadPrefix: 'Eu construo ',
      rotating: ptRotating,
      viewProjects: 'Ver projetos',
      contactMe: 'Fale comigo',
      socialAria: 'Redes',
      emailAria: 'E-mail',
      photoAlt: 'Foto de Gabriela Vicentini sorrindo',
    },
    about: {
      title: 'Sobre mim',
      p1: 'Sou Gabriela, Desenvolvedora Full Stack Júnior e estudante de Engenharia de Software, apaixonada por tecnologia e por desenvolver soluções que fazem a diferença. Nasci em Minas Gerais e comecei a estudar desenvolvimento web no início de 2023, em um curso intensivo. Desde então, venho construindo minha trajetória na área e buscando evoluir constantemente.',
      p2Before: 'Tenho experiência profissional com Front-End, principalmente no ecossistema ',
      p2After: ', trabalhando com React, TypeScript e JavaScript na criação, manutenção e evolução de aplicações e lojas virtuais. Também tive contato com desenvolvimento mobile e Back-End, utilizando tecnologias como React Native, Node.js e Django.',
      p3: 'Minha base vem de um curso intensivo de Desenvolvimento Web, que me proporcionou conhecimentos em diferentes áreas da programação. Atualmente, continuo aprofundando meus conhecimentos na graduação em Engenharia de Software.',
      p4: 'Sou uma pessoa curiosa, gosto de desafios e acredito que aprender é parte essencial da evolução profissional. Não me limito a uma tecnologia ou área específica. Estou aberta a novas experiências, a explorar diferentes possibilidades e a aprender tudo o que puder para me tornar uma profissional cada vez melhor.',
      summaryTitle: 'Em resumo',
      facts: [
        { dt: 'Atuação', dd: 'E-commerce web (VTEX)' },
        { dt: 'Formação', dd: 'Engenharia de Software (Em andamento)' },
        { dt: 'Desde', dd: '2023 em desenvolvimento web' },
        { dt: 'Local', dd: 'Minas Gerais, Brasil' },
      ],
      languagesTitle: 'Idiomas',
      languages: ptLanguages,
    },
    stack: {
      title: 'Stack & conhecimentos',
      groups: ptSkills,
    },
    projects: {
      title: 'Projetos',
      subtitle: 'Alguns dos projetos que construí para praticar, explorar tecnologias e resolver problemas reais. Clique em um projeto para ver as imagens.',
      viewImagesAria: (title) => `Ver imagens do projeto ${title}`,
      viewImagesHint: (count) => `Ver imagens · ${count}`,
      viewDemo: 'Ver demo',
      code: 'Código',
      moreTitle: 'E tem mais…',
      moreText: 'Veja todos os meus repositórios, estudos e contribuições no GitHub.',
      modalAria: (title) => `Imagens do projeto ${title}`,
      closeAria: 'Fechar',
      prevAria: 'Imagem anterior',
      nextAria: 'Próxima imagem',
      thumbsAria: 'Miniaturas',
      viewImageAria: (n) => `Ver imagem ${n}`,
      items: ptProjects,
    },
    contact: {
      title: 'Contato',
      big: 'Vamos conversar? Estou aberta a novas oportunidades, projetos e trocas de conhecimento.',
      muted: 'Respondo por e-mail, LinkedIn ou direto no WhatsApp — escolha o que for mais fácil para você.',
      emailLabel: 'E-mail',
      whatsappText: 'Olá, Gabriela! Vi seu portfólio e gostaria de conversar.',
    },
    footer: {
      madeWith: 'Feito com carinho e café',
      backToTop: 'Voltar ao topo ↑',
    },
  },

  en: {
    docTitle: 'Gabriela Vicentini — Full Stack Developer',
    skipToContent: 'Skip to content',
    nav: {
      homeAria: 'Home',
      mainAria: 'Main',
      links: [
        { id: 'sobre', label: 'About' },
        { id: 'stack', label: 'Stack' },
        { id: 'projetos', label: 'Projects' },
        { id: 'contato', label: 'Contact' },
      ],
      themeAria: 'Toggle color palette',
      themeTitle: 'Toggle palette',
      burgerAria: 'Open menu',
      langAria: 'Select language',
    },
    hero: {
      eyebrow: 'Hi, I am',
      rolePrefix: '',
      roleHighlight: 'Junior Full Stack',
      roleSuffix: ' Developer & Software Engineering student',
      leadPrefix: 'I build ',
      rotating: [
        'solutions that make sense',
        'functional applications',
        'ideas turned into code',
        'constantly evolving software',
        'solutions through technology',
      ],
      viewProjects: 'View projects',
      contactMe: 'Get in touch',
      socialAria: 'Social links',
      emailAria: 'Email',
      photoAlt: 'Photo of Gabriela Vicentini smiling',
    },
    about: {
      title: 'About me',
      p1: 'I’m Gabriela, a Junior Full Stack Developer and Software Engineering student, passionate about technology and building solutions that make a difference. I was born in Minas Gerais, Brazil, and started studying web development in early 2023 in an intensive program. Since then, I have been building my career in the field and constantly striving to grow.',
      p2Before: 'I have professional Front-End experience, mainly in the ',
      p2After: ' ecosystem, working with React, TypeScript, and JavaScript to build, maintain, and evolve web applications and online stores. I have also worked with mobile and Back-End development using technologies such as React Native, Node.js, and Django.',
      p3: 'My foundation comes from an intensive Web Development course that gave me knowledge across different areas of programming. Currently, I continue to deepen my skills through my bachelor’s degree in Software Engineering.',
      p4: 'I am a curious person who enjoys challenges and believes learning is an essential part of professional growth. I don’t limit myself to a single technology or area—I’m open to new experiences, exploring different possibilities, and learning everything I can to become an ever-better professional.',
      summaryTitle: 'At a glance',
      facts: [
        { dt: 'Focus', dd: 'Web e-commerce (VTEX)' },
        { dt: 'Degree', dd: 'Software Engineering (In progress)' },
        { dt: 'Since', dd: '2023 in web development' },
        { dt: 'Location', dd: 'Minas Gerais, Brazil' },
      ],
      languagesTitle: 'Languages',
      languages: [
        { name: 'Portuguese', level: 'Native', pct: 100 },
        { name: 'English', level: 'Fluent · C2', pct: 96 },
        { name: 'Japanese', level: 'Beginner', pct: 18 },
      ],
    },
    stack: {
      title: 'Stack & skills',
      groups: [
        {
          title: 'Current work', badge: 'e-commerce', big: true,
          items: ['React', 'TypeScript', 'JavaScript (ES6)', 'Node.js', 'GraphQL', 'HTML', 'Advanced CSS', 'VTEX IO', 'FastStore', 'VTEX Legacy', 'jQuery', 'Git & GitHub'],
        },
        {
          title: 'Studies & projects', badge: 'learning',
          items: ['SQL', 'MySQL', 'Python', 'Django', 'C# / .NET', 'React Native', 'Redux', 'Context API', 'Docker', 'Jest', 'Vitest', 'Mocha', 'Chai', 'Sinon'],
        },
        {
          title: 'Concepts & practices',
          items: ['OOP', 'SOLID', 'JWT', 'ORM', 'Automated testing', 'Performance', 'Clean code'],
        },
      ],
    },
    projects: {
      title: 'Projects',
      subtitle: 'Some of the projects I built to practice, explore technologies, and solve real problems. Click on a project to view its screenshots.',
      viewImagesAria: (title) => `View screenshots of ${title}`,
      viewImagesHint: (count) => `View images · ${count}`,
      viewDemo: 'Live demo',
      code: 'Code',
      moreTitle: 'And there’s more…',
      moreText: 'Check out all my repositories, studies, and contributions on GitHub.',
      modalAria: (title) => `Screenshots of ${title}`,
      closeAria: 'Close',
      prevAria: 'Previous image',
      nextAria: 'Next image',
      thumbsAria: 'Thumbnails',
      viewImageAria: (n) => `View image ${n}`,
      items: [
        {
          title: 'PopPulse', badge: 'AI · Full Stack', featured: true,
          description: 'Real-time dashboard bringing together releases, charts, and news across music, games, and movies in one place. Includes Aria, an AI assistant (Gemini) that answers questions, compares releases, and uses live data, with fallback search when no API key is set.',
          stack: ['React 19', 'TypeScript', 'Node.js', 'Express', 'Gemini API', 'RSS'],
          repo: `${gh}/pop-pulse`, demo: 'https://pop-pulse.onrender.com/',
          images: shots('pop-pulse', ['Release and news feed next to the Aria assistant chat', 'Portuguese interface with news, cards, and conversation with Aria', 'Conversation with Aria explaining the Steam Deck', 'Mobile version with gaming card and pop culture hub']),
        },
        {
          title: 'Chatbot Evaluator', badge: 'AI · .NET', featured: true,
          description: 'Tool for testing chatbot quality: a simulated customer chats with the bot while a second LLM acts as a judge, scoring the conversation against rules and a knowledge base. Helps catch prompt regressions, hallucinations, and policy violations.',
          stack: ['C# / .NET 8', 'React', 'TypeScript', 'SQLite', 'Docker', 'LLMs'],
          repo: `${gh}/chatbot-evaluator`, demo: 'https://chatbot-evaluator.onrender.com/',
          images: shots('chatbot-evaluator', ['Editable knowledge base and simulation scenarios', 'Simulated conversation with the judge’s verdict', 'Live chat with the bot', 'Importing conversations for evaluation', 'Results dashboard with scores and history']),
        },
        {
          title: 'Flux', badge: 'Finance',
          description: 'Multi-currency expense tracker: exchange rates are locked at the time of entry, keeping totals consistent over time. Includes authentication, protected routes, per-user data, light/dark theme, and a responsive layout.',
          stack: ['React 18', 'TypeScript', 'Redux Toolkit', 'Supabase', 'Vitest'],
          repo: `${gh}/flux`, demo: 'https://flux-xdmo.onrender.com/',
          images: shots('flux', ['Expense dashboard with total in BRL and new expense form', 'Multi-currency expenses with total converted to USD', 'Mobile expense card list', 'Mobile new expense form']),
        },
        {
          title: 'Recipes App', badge: 'Front-End',
          description: 'App for discovering food and drink recipes: search by name, ingredient, or first letter, bookmark favorites, and follow step-by-step instructions with progress saved in the browser. Switches between English and Portuguese and works with cached data if the API is down.',
          stack: ['React', 'TypeScript', 'Chakra UI', 'Context API', 'Vitest'],
          repo: `${gh}/recipes-app`, demo: 'https://devgabrielav.github.io/recipes-app/',
          images: shots('recipes-app', ['Home page with recipe suggestions', 'Food list with category filters', 'Ingredient checklist during preparation on mobile', 'In-progress recipes on mobile', 'Ingredients and instructions on mobile', 'Step-by-step instructions and recipe video on mobile']),
        },
        {
          title: 'PlayTunes', badge: 'Front-End',
          description: 'Music discovery platform and personal library: search artists and albums, listen to track previews, favorite songs in real time, and switch between saved profiles, each with its own favorites and editable info.',
          stack: ['React 18', 'TypeScript', 'React Router', 'iTunes API', 'Local Storage'],
          repo: `${gh}/playtunes`, demo: 'https://devgabrielav.github.io/playtunes/',
          images: shots('playtunes', ['PlayTunes login screen', 'Home with suggested artists and tracks', 'Album search results for The Weeknd', 'Album view with tracklist and previews on mobile', 'Favorite songs list on mobile']),
        },
      ],
    },
    contact: {
      title: 'Contact',
      big: 'Let’s talk? I’m open to new opportunities, projects, and knowledge sharing.',
      muted: 'I reply via email, LinkedIn, or directly on WhatsApp — choose whichever works best for you.',
      emailLabel: 'Email',
      whatsappText: 'Hi Gabriela! I saw your portfolio and would love to chat.',
    },
    footer: {
      madeWith: 'Made with care and coffee',
      backToTop: 'Back to top ↑',
    },
  },

  es: {
    docTitle: 'Gabriela Vicentini — Desarrolladora Full Stack',
    skipToContent: 'Saltar al contenido',
    nav: {
      homeAria: 'Inicio',
      mainAria: 'Principal',
      links: [
        { id: 'sobre', label: 'Sobre mí' },
        { id: 'stack', label: 'Stack' },
        { id: 'projetos', label: 'Proyectos' },
        { id: 'contato', label: 'Contacto' },
      ],
      themeAria: 'Cambiar paleta de colores',
      themeTitle: 'Cambiar paleta',
      burgerAria: 'Abrir menú',
      langAria: 'Seleccionar idioma',
    },
    hero: {
      eyebrow: 'Hola, soy',
      rolePrefix: 'Desarrolladora ',
      roleHighlight: 'Full Stack Júnior',
      roleSuffix: ' y estudiante de Ingeniería de Software',
      leadPrefix: 'Construyo ',
      rotating: [
        'soluciones que tienen sentido',
        'aplicaciones funcionales',
        'ideas transformadas en código',
        'software en constante evolución',
        'soluciones a través de la tecnología',
      ],
      viewProjects: 'Ver proyectos',
      contactMe: 'Hablemos',
      socialAria: 'Redes sociales',
      emailAria: 'Correo electrónico',
      photoAlt: 'Foto de Gabriela Vicentini sonriendo',
    },
    about: {
      title: 'Sobre mí',
      p1: 'Soy Gabriela, Desarrolladora Full Stack Júnior y estudiante de Ingeniería de Software, apasionada por la tecnología y por desarrollar soluciones que marcan la diferencia. Nací en Minas Gerais, Brasil, y comencé a estudiar desarrollo web a principios de 2023 en un curso intensivo. Desde entonces, vengo construyendo mi trayectoria en el área y buscando evolucionar constantemente.',
      p2Before: 'Tengo experiencia profesional en Front-End, principalmente en el ecosistema ',
      p2After: ', trabajando con React, TypeScript y JavaScript en la creación, mantenimiento y evolución de aplicaciones y tiendas virtuales. También tuve contacto con el desarrollo móvil y Back-End, utilizando tecnologías como React Native, Node.js y Django.',
      p3: 'Mi base proviene de un curso intensivo de Desarrollo Web, que me brindó conocimientos en diferentes áreas de la programación. Actualmente, continúo profundizando mis conocimientos en la carrera de Ingeniería de Software.',
      p4: 'Soy una persona curiosa, me gustan los desafíos y creo que aprender es parte esencial de la evolución profesional. No me limito a una tecnología o área específica. Estoy abierta a nuevas experiencias, a explorar diferentes posibilidades y a aprender todo lo que pueda para convertirme en una profesional cada vez mejor.',
      summaryTitle: 'En resumen',
      facts: [
        { dt: 'Área', dd: 'E-commerce web (VTEX)' },
        { dt: 'Formación', dd: 'Ingeniería de Software (En curso)' },
        { dt: 'Desde', dd: '2023 en desarrollo web' },
        { dt: 'Ubicación', dd: 'Minas Gerais, Brasil' },
      ],
      languagesTitle: 'Idiomas',
      languages: [
        { name: 'Portugués', level: 'Nativo', pct: 100 },
        { name: 'Inglés', level: 'Fluido · C2', pct: 96 },
        { name: 'Japonés', level: 'Principiante', pct: 18 },
      ],
    },
    stack: {
      title: 'Stack y conocimientos',
      groups: [
        {
          title: 'Trabajo actual', badge: 'e-commerce', big: true,
          items: ['React', 'TypeScript', 'JavaScript (ES6)', 'Node.js', 'GraphQL', 'HTML', 'CSS avanzado', 'VTEX IO', 'FastStore', 'VTEX Legacy', 'jQuery', 'Git & GitHub'],
        },
        {
          title: 'Estudios y proyectos', badge: 'aprendizaje',
          items: ['SQL', 'MySQL', 'Python', 'Django', 'C# / .NET', 'React Native', 'Redux', 'Context API', 'Docker', 'Jest', 'Vitest', 'Mocha', 'Chai', 'Sinon'],
        },
        {
          title: 'Conceptos y prácticas',
          items: ['POO', 'SOLID', 'JWT', 'ORM', 'Pruebas automatizadas', 'Rendimiento', 'Código limpio'],
        },
      ],
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Algunos de los proyectos que construí para practicar, explorar tecnologías y resolver problemas reales. Haz clic en un proyecto para ver las imágenes.',
      viewImagesAria: (title) => `Ver imágenes del proyecto ${title}`,
      viewImagesHint: (count) => `Ver imágenes · ${count}`,
      viewDemo: 'Ver demo',
      code: 'Código',
      moreTitle: 'Y hay más…',
      moreText: 'Mira todos mis repositorios, estudios y contribuciones en GitHub.',
      modalAria: (title) => `Imágenes del proyecto ${title}`,
      closeAria: 'Cerrar',
      prevAria: 'Imagen anterior',
      nextAria: 'Siguiente imagen',
      thumbsAria: 'Miniaturas',
      viewImageAria: (n) => `Ver imagen ${n}`,
      items: [
        {
          title: 'PopPulse', badge: 'IA · Full Stack', featured: true,
          description: 'Panel en tiempo real que reúne lanzamientos, listas de éxitos y noticias de música, videojuegos y cine en un solo lugar. Incluye a Aria, una asistente de IA (Gemini) que responde preguntas, compara lanzamientos y usa datos en vivo, con búsqueda alternativa cuando no hay clave de API.',
          stack: ['React 19', 'TypeScript', 'Node.js', 'Express', 'Gemini API', 'RSS'],
          repo: `${gh}/pop-pulse`, demo: 'https://pop-pulse.onrender.com/',
          images: shots('pop-pulse', ['Feed de lanzamientos y noticias junto al chat con la asistente Aria', 'Interfaz en portugués con noticias, tarjetas y conversación con Aria', 'Conversación con Aria explicando la Steam Deck', 'Versión móvil con tarjeta de juegos y central de cultura pop']),
        },
        {
          title: 'Chatbot Evaluator', badge: 'IA · .NET', featured: true,
          description: 'Herramienta para evaluar la calidad de chatbots: un cliente simulado conversa con el bot y un segundo LLM actúa como juez, puntuando la conversación según reglas y una base de conocimientos. Ayuda a detectar regresiones de prompt, alucinaciones e incumplimientos de políticas.',
          stack: ['C# / .NET 8', 'React', 'TypeScript', 'SQLite', 'Docker', 'LLMs'],
          repo: `${gh}/chatbot-evaluator`, demo: 'https://chatbot-evaluator.onrender.com/',
          images: shots('chatbot-evaluator', ['Base de conocimientos editable y escenarios de simulación', 'Conversación simulada con el veredicto del juez', 'Chat en vivo con el bot', 'Importación de conversaciones para evaluación', 'Panel de resultados con calificaciones e historial']),
        },
        {
          title: 'Flux', badge: 'Finanzas',
          description: 'Control de gastos multimoneda: el tipo de cambio se fija en el momento del registro, manteniendo los valores consistentes a lo largo del tiempo. Incluye autenticación, rutas protegidas, datos por usuario, tema claro/oscuro y diseño adaptable.',
          stack: ['React 18', 'TypeScript', 'Redux Toolkit', 'Supabase', 'Vitest'],
          repo: `${gh}/flux`, demo: 'https://flux-xdmo.onrender.com/',
          images: shots('flux', ['Panel de gastos con total en reales y formulario de nuevo gasto', 'Gastos en varias monedas con total convertido a dólares', 'Lista de gastos en tarjetas en el móvil', 'Formulario de nuevo gasto en el móvil']),
        },
        {
          title: 'Recipes App', badge: 'Front-End',
          description: 'App para descubrir recetas de comidas y bebidas: búsqueda por nombre, ingrediente o letra, favoritos y seguimiento paso a paso con progreso guardado en el navegador. Alterna entre inglés y portugués y funciona con datos en caché si la API falla.',
          stack: ['React', 'TypeScript', 'Chakra UI', 'Context API', 'Vitest'],
          repo: `${gh}/recipes-app`, demo: 'https://devgabrielav.github.io/recipes-app/',
          images: shots('recipes-app', ['Página de inicio con sugerencias de recetas', 'Lista de comidas con filtros por categoría', 'Lista de ingredientes durante la preparación en el móvil', 'Recetas en curso en el móvil', 'Ingredientes y preparación en el móvil', 'Paso a paso y video de la receta en el móvil']),
        },
        {
          title: 'PlayTunes', badge: 'Front-End',
          description: 'Plataforma de descubrimiento musical y biblioteca personal: busca artistas y álbumes, escucha avances de pistas, marca canciones favoritas en tiempo real y alterna entre perfiles guardados, cada uno con sus propios favoritos y datos editables.',
          stack: ['React 18', 'TypeScript', 'React Router', 'iTunes API', 'Local Storage'],
          repo: `${gh}/playtunes`, demo: 'https://devgabrielav.github.io/playtunes/',
          images: shots('playtunes', ['Pantalla de inicio de sesión de PlayTunes', 'Inicio con artistas y canciones sugeridas', 'Resultados de búsqueda de álbumes de The Weeknd', 'Álbum con lista de pistas y avances en el móvil', 'Lista de canciones favoritas en el móvil']),
        },
      ],
    },
    contact: {
      title: 'Contacto',
      big: '¿Hablamos? Estoy abierta a nuevas oportunidades, proyectos e intercambio de conocimientos.',
      muted: 'Respondo por correo electrónico, LinkedIn o directamente por WhatsApp — elige lo que te resulte más cómodo.',
      emailLabel: 'Correo',
      whatsappText: '¡Hola, Gabriela! Vi tu portafolio y me gustaría conversar.',
    },
    footer: {
      madeWith: 'Hecho con cariño y café',
      backToTop: 'Volver arriba ↑',
    },
  },

  ja: {
    docTitle: 'Gabriela Vicentini — フルスタックエンジニア',
    skipToContent: 'コンテンツへスキップ',
    nav: {
      homeAria: 'ホーム',
      mainAria: 'メインナビゲーション',
      links: [
        { id: 'sobre', label: '私について' },
        { id: 'stack', label: '技術スタック' },
        { id: 'projetos', label: 'プロジェクト' },
        { id: 'contato', label: 'お問い合わせ' },
      ],
      themeAria: 'カラーパレットを切り替え',
      themeTitle: 'パレットを切り替え',
      burgerAria: 'メニューを開く',
      langAria: '言語を選択',
    },
    hero: {
      eyebrow: 'はじめまして、',
      rolePrefix: '',
      roleHighlight: 'ジュニアフルスタックエンジニア',
      roleSuffix: '・ソフトウェア工学専攻の学生',
      leadPrefix: '私がつくるもの：',
      rotating: [
        '意味のあるソリューション',
        '実用的なアプリケーション',
        'アイデアを形にしたコード',
        '進化し続けるソフトウェア',
        'テクノロジーによる課題解決',
      ],
      viewProjects: 'プロジェクトを見る',
      contactMe: 'お問い合わせ',
      socialAria: 'SNSリンク',
      emailAria: 'メール',
      photoAlt: '笑顔のGabriela Vicentiniの写真',
    },
    about: {
      title: '私について',
      p1: '私はGabriela（ガブリエラ）です。ジュニアフルスタックエンジニアであり、ソフトウェア工学を専攻する学生です。テクノロジーと、人々の役に立つソリューションの開発に情熱を注いでいます。ブラジルのミナスジェライス州で生まれ、2023年初頭に集中コースでWeb開発の学習を始めました。それ以来、この分野でキャリアを築きながら日々成長を続けています。',
      p2Before: 'フロントエンドの実務経験があり、主に',
      p2After: 'エコシステムにおいて、React、TypeScript、JavaScriptを用いたWebアプリケーションやECサイトの構築・保守・改善に携わってきました。また、React Native、Node.js、Djangoなどを活用したモバイル開発やバックエンド開発の経験もあります。',
      p3: '私の基礎は、プログラミングの幅広い分野を学んだWeb開発の集中コースにあります。現在はソフトウェア工学の学士課程でさらに専門知識を深めています。',
      p4: '好奇心旺盛で新しい挑戦が好きであり、学び続けることこそがプロフェッショナルとしての成長に不可欠だと考えています。特定の技術や分野にとらわれず、より優れたエンジニアになるために、新しい経験や可能性を積極的に探求しています。',
      summaryTitle: '概要',
      facts: [
        { dt: '専門領域', dd: 'Web Eコマース (VTEX)' },
        { dt: '学歴', dd: 'ソフトウェア工学（在学中）' },
        { dt: '経歴', dd: '2023年よりWeb開発に従事' },
        { dt: '拠点', dd: 'ブラジル・ミナスジェライス州' },
      ],
      languagesTitle: '言語',
      languages: [
        { name: 'ポルトガル語', level: 'ネイティブ', pct: 100 },
        { name: '英語', level: '流暢 · C2', pct: 96 },
        { name: '日本語', level: '初級', pct: 18 },
      ],
    },
    stack: {
      title: '技術スタックとスキル',
      groups: [
        {
          title: '現在の実務', badge: 'Eコマース', big: true,
          items: ['React', 'TypeScript', 'JavaScript (ES6)', 'Node.js', 'GraphQL', 'HTML', '高度なCSS', 'VTEX IO', 'FastStore', 'VTEX Legacy', 'jQuery', 'Git & GitHub'],
        },
        {
          title: '学習・個人開発', badge: '学習中',
          items: ['SQL', 'MySQL', 'Python', 'Django', 'C# / .NET', 'React Native', 'Redux', 'Context API', 'Docker', 'Jest', 'Vitest', 'Mocha', 'Chai', 'Sinon'],
        },
        {
          title: '概念・プラクティス',
          items: ['オブジェクト指向 (OOP)', 'SOLID', 'JWT', 'ORM', '自動テスト', 'パフォーマンス', 'クリーンコード'],
        },
      ],
    },
    projects: {
      title: 'プロジェクト',
      subtitle: '技術の探求や実践的な課題解決のために制作したプロジェクトの一部です。カードをクリックするとスクリーンショットをご覧いただけます。',
      viewImagesAria: (title) => `${title}のスクリーンショットを見る`,
      viewImagesHint: (count) => `画像を見る · ${count}`,
      viewDemo: 'デモを見る',
      code: 'コード',
      moreTitle: '他にもあります…',
      moreText: 'すべてのリポジトリ、学習記録、コントリビューションはGitHubでご覧いただけます。',
      modalAria: (title) => `${title}のスクリーンショット`,
      closeAria: '閉じる',
      prevAria: '前の画像',
      nextAria: '次の画像',
      thumbsAria: 'サムネイル',
      viewImageAria: (n) => `画像 ${n} を見る`,
      items: [
        {
          title: 'PopPulse', badge: 'AI · Full Stack', featured: true,
          description: '音楽・ゲーム・映画の最新リリース、チャート、ニュースを一箇所に集約するリアルタイムダッシュボード。質問への回答やリリースの比較、ライブデータの活用ができるAIアシスタント「Aria」（Gemini）を搭載し、APIキーがない場合のフォールバック検索にも対応しています。',
          stack: ['React 19', 'TypeScript', 'Node.js', 'Express', 'Gemini API', 'RSS'],
          repo: `${gh}/pop-pulse`, demo: 'https://pop-pulse.onrender.com/',
          images: shots('pop-pulse', ['Ariaアシスタントのチャットと並んだリリース・ニュースフィード', 'ニュース、カード、Ariaとの会話を備えたインターフェース', 'Steam Deckについて説明するAriaとの会話', 'ゲームカードとポップカルチャーハブを備えたモバイル版']),
        },
        {
          title: 'Chatbot Evaluator', badge: 'AI · .NET', featured: true,
          description: 'チャットボットの品質を検証するツール。シミュレートされた顧客がボットと会話し、別のLLMが審査員としてルールやナレッジベースに基づき会話を採点します。プロンプトの劣化、ハルシネーション、ポリシー違反の検出に役立ちます。',
          stack: ['C# / .NET 8', 'React', 'TypeScript', 'SQLite', 'Docker', 'LLMs'],
          repo: `${gh}/chatbot-evaluator`, demo: 'https://chatbot-evaluator.onrender.com/',
          images: shots('chatbot-evaluator', ['編集可能なナレッジベースとシミュレーションシナリオ', '審査員の判定付きシミュレーション会話', 'ボットとのライブチャット', '評価用の会話データのインポート', 'スコアと履歴を表示する結果ダッシュボード']),
        },
        {
          title: 'Flux', badge: 'ファイナンス',
          description: 'マルチ通貨対応の支出管理アプリ。登録時点の為替レートを固定することで、時間が経っても一貫した金額管理が可能です。認証、保護ルート、ユーザー別データ、ライト/ダークテーマ、レスポンシブデザインを備えています。',
          stack: ['React 18', 'TypeScript', 'Redux Toolkit', 'Supabase', 'Vitest'],
          repo: `${gh}/flux`, demo: 'https://flux-xdmo.onrender.com/',
          images: shots('flux', ['レアル建ての合計と新規支出フォームを備えたダッシュボード', '複数通貨の支出と米ドル換算の合計', 'モバイル版の支出カード一覧', 'モバイル版の新規支出フォーム']),
        },
        {
          title: 'Recipes App', badge: 'Front-End',
          description: '料理やドリンクのレシピを探せるアプリ。名前・材料・頭文字での検索、お気に入り登録、ブラウザに進捗が保存されるステップごとの調理ガイドを搭載。英語とポルトガル語の切り替えに対応し、API停止時もキャッシュデータで動作します。',
          stack: ['React', 'TypeScript', 'Chakra UI', 'Context API', 'Vitest'],
          repo: `${gh}/recipes-app`, demo: 'https://devgabrielav.github.io/recipes-app/',
          images: shots('recipes-app', ['おすすめレシピを表示するホーム画面', 'カテゴリーフィルター付きの料理一覧', 'モバイル版の調理中材料チェックリスト', 'モバイル版の調理中レシピ一覧', 'モバイル版の材料と作り方', 'モバイル版のステップガイドとレシピ動画']),
        },
        {
          title: 'PlayTunes', badge: 'Front-End',
          description: '音楽ディスカバリー＆個人ライブラリプラットフォーム。アーティストやアルバムの検索、トラックの試聴、リアルタイムのお気に入り登録、そしてお気に入りや編集可能なプロフィールを個別に保持できるプロフィール切り替え機能を備えています。',
          stack: ['React 18', 'TypeScript', 'React Router', 'iTunes API', 'Local Storage'],
          repo: `${gh}/playtunes`, demo: 'https://devgabrielav.github.io/playtunes/',
          images: shots('playtunes', ['PlayTunesのログイン画面', 'おすすめアーティストと楽曲を表示するホーム画面', 'The Weekndのアルバム検索結果', 'モバイル版のトラックリストと試聴付きアルバム画面', 'モバイル版のお気に入り楽曲一覧']),
        },
      ],
    },
    contact: {
      title: 'お問い合わせ',
      big: '気軽にお話ししませんか？新しい機会やプロジェクト、技術交流をいつでも歓迎しています。',
      muted: 'メール、LinkedIn、またはWhatsAppにて返信いたします。ご都合の良い方法でお気軽にご連絡ください。',
      emailLabel: 'メール',
      whatsappText: 'こんにちは、Gabrielaさん！ポートフォリオを拝見し、ぜひお話ししたいと思いました。',
    },
    footer: {
      madeWith: '心を込めて、コーヒーとともに制作',
      backToTop: 'トップへ戻る ↑',
    },
  },
}

interface I18nContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translations
}

const I18nContext = createContext<I18nContextValue>({
  lang: 'pt',
  setLang: () => {},
  t: translations.pt,
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem('lang') as Lang | null
      return saved && saved in translations ? saved : 'pt'
    } catch {
      return 'pt'
    }
  })

  useEffect(() => {
    const opt = LANG_OPTIONS.find((o) => o.code === lang)
    document.documentElement.lang = opt?.htmlLang || 'pt-BR'
    document.title = translations[lang].docTitle
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
