export interface Project {
  title: string
  badge: string
  description: string
  stack: string[]
  repo: string
  demo?: string
  featured?: boolean
  images: { src: string; alt: string }[]
}

const gh = 'https://github.com/devgabrielav'

// Capturas de tela ficam em public/projects/<slug>/<prefix>-<n>.png
const filePrefix: Record<string, string> = {
  'chatbot-evaluator': 'chatbot',
  'recipes-app': 'recipes',
}

export const shots = (slug: string, alts: string[]) => {
  const prefix = filePrefix[slug] ?? slug
  return alts.map((alt, i) => ({ src: `/projects/${slug}/${prefix}-${i + 1}.png`, alt }))
}

export const projects: Project[] = [
  {
    title: 'PopPulse', badge: 'IA · Full Stack', featured: true,
    description: 'Painel em tempo real que reúne lançamentos, paradas e notícias de música, games e filmes em um só lugar. Inclui a Aria, uma assistente de IA (Gemini) que responde dúvidas, compara lançamentos e usa dados ao vivo, com busca alternativa quando não há chave de API.',
    stack: ['React 19', 'TypeScript', 'Node.js', 'Express', 'Gemini API', 'RSS'],
    repo: `${gh}/pop-pulse`, demo: 'https://pop-pulse.onrender.com/',
    images: shots('pop-pulse', ['Feed de lançamentos e notícias ao lado do chat com a assistente Aria', 'Interface em português com notícias, cards e conversa com a Aria', 'Conversa com a Aria explicando o Steam Deck', 'Versão mobile com card de jogos e central de cultura pop']),
  },
  {
    title: 'Chatbot Evaluator', badge: 'IA · .NET', featured: true,
    description: 'Ferramenta para testar a qualidade de chatbots: um cliente simulado conversa com o bot e um segundo LLM atua como juiz, pontuando a conversa contra regras e uma base de conhecimento. Ajuda a detectar regressões de prompt, alucinações e violações de política.',
    stack: ['C# / .NET 8', 'React', 'TypeScript', 'SQLite', 'Docker', 'LLMs'],
    repo: `${gh}/chatbot-evaluator`, demo: 'https://chatbot-evaluator.onrender.com/',
    images: shots('chatbot-evaluator', ['Base de conhecimento editável e cenários de simulação', 'Conversa simulada com o veredito do juiz', 'Chat ao vivo com o bot', 'Importação de conversas para avaliação', 'Painel de resultados com notas e histórico']),
  },
  {
    title: 'Flux', badge: 'Finanças',
    description: 'Controle de gastos multimoeda: a cotação é travada no momento do lançamento, mantendo os valores consistentes ao longo do tempo. Autenticação, rotas protegidas, dados por usuário, tema claro/escuro e layout responsivo.',
    stack: ['React 18', 'TypeScript', 'Redux Toolkit', 'Supabase', 'Vitest'],
    repo: `${gh}/flux`, demo: 'https://flux-xdmo.onrender.com/',
    images: shots('flux', ['Painel de despesas com total em reais e formulário de nova despesa', 'Despesas em várias moedas com total convertido para dólar', 'Lista de despesas em cards no celular', 'Formulário de nova despesa no celular']),
  },
  {
    title: 'Recipes App', badge: 'Front-End',
    description: 'App para descobrir receitas de comidas e bebidas: busca por nome, ingrediente ou letra, favoritos e acompanhamento do passo a passo, com progresso salvo no navegador. Alterna entre inglês e português e funciona com dados em cache se a API cair.',
    stack: ['React', 'TypeScript', 'Chakra UI', 'Context API', 'Vitest'],
    repo: `${gh}/recipes-app`, demo: 'https://devgabrielav.github.io/recipes-app/',
    images: shots('recipes-app', ['Página inicial com sugestões de receitas', 'Lista de comidas com filtros por categoria', 'Checklist de ingredientes durante o preparo no celular', 'Receitas em andamento no celular', 'Ingredientes e modo de preparo no celular', 'Passo a passo e vídeo da receita no celular']),
  },
  {
    title: 'PlayTunes', badge: 'Front-End',
    description: 'Plataforma de descoberta musical e biblioteca pessoal: busque artistas e álbuns, ouça prévias das faixas, favorite músicas em tempo real e alterne entre perfis salvos, cada um com seus próprios favoritos e dados editáveis.',
    stack: ['React 18', 'TypeScript', 'React Router', 'iTunes API', 'Local Storage'],
    repo: `${gh}/playtunes`, demo: 'https://devgabrielav.github.io/playtunes/',
    images: shots('playtunes', ['Tela de login do PlayTunes', 'Home com artistas e músicas sugeridas', 'Resultado de busca de álbuns do The Weeknd', 'Álbum com lista de faixas e prévias no celular', 'Lista de músicas favoritas no celular']),
  },
]
