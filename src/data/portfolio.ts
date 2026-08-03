export interface Project {
  title: string;
  description: string;
  stack: string[];
  impact?: string;
  link?: string;
  featured?: boolean;
  category: 'web3' | 'backend' | 'frontend' | 'other';
}

export interface NavLink {
  label: string;
  href: string;
}

/* ============================================================
   DADOS DO PORTFÓLIO — EDITE AQUI OS SEUS DADOS
   Nome, links, texto, stack e projetos.
   ============================================================ */

export const profile = {
  name: 'Pedro Henrique de Faria Pereira',
  role: 'Desenvolvedor Full Stack',
  focus: 'Sistemas Escaláveis & Web3',
  // tagline curta exibida no hero
  tagline:
    'Desenvolvimento Full Stack e construção de sistemas escaláveis, com forte atuação em Web3.',
  about: [
    'Com forte foco em sistemas escaláveis e tecnologia blockchain, atuo no ciclo completo de desenvolvimento de software e modelagem arquitetural (P&D) até o deploy.',
    'Formado em Análise e Desenvolvimento de Sistemas e atual estudante de Engenharia da Computação, aplico os fundamentos de ciência da computação e boas práticas de engenharia para construir soluções eficientes, tanto em ambientes Web2 estruturados quanto em ecossistemas descentralizados (Web3).',
  ],
  photo: '/photo.jpg',
  email: 'pedrohfariap@gmail.com',
  links: {
    github: 'https://github.com/PedroFaria14',
    linkedin: 'https://www.linkedin.com/in/pedrohenriquedefaria/',
    email: 'mailto:pedrohfariap@gmail.com',
  },
};

export const navLinks: NavLink[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Formação', href: '#educacao' },
  { label: 'Certificações', href: '#cursos' },
  { label: 'Contato', href: '#contato' },
];

export const skills = {
  languages: [
    'Python',
    'JavaScript',
    'TypeScript',
    'Go (Golang)',
    'Java',
    'C',
    'Solidity',
    'Dart',
  ],
  frameworks: ['React', 'Express', 'FastAPI', 'Flutter', 'Gin'],
  web3: ['Smart Contracts', 'MetaMask', 'Hardhat', 'Solana', 'Anchor'],
  infra: [
    'Git/GitHub',
    'Docker',
    'Firebase',
    'MongoDB',
    'APIs REST',
    'Power BI',
  ],
  foundations: [
    'Análise de Sistemas',
    'Engenharia de Requisitos',
    'Modelagem UML',
    'Estruturas de Dados',
  ],
};

export const softSkills = [
  'Inglês Técnico',
  'Desenvolvimento colaborativo',
  'Resolução de Problemas',
  'Aprendizado Contínuo & Adaptabilidade',
  'Comunicação eficaz',
  'Trabalho em equipe',
  'Gestão de tempo',
  'Visão Analítica e Sistêmica',
];

export const featuredProjects: Project[] = [
  {
    title: 'CodePath (App Educacional)',
    description:
      'Aplicativo gamificado para o ensino de lógica de programação. Arquitetura full-stack com Flutter, backend em Python/FastAPI e integração via Firebase.',
    stack: ['Flutter', 'Python', 'FastAPI', 'Firebase'],
    category: 'frontend',
    impact:
      'Facilita o engajamento no aprendizado de lógica com arquitetura desacoplada e resposta em tempo real.',
    link: 'https://github.com/PedroFaria14/Projeto_CodePath',
    featured: true,
  },
  {
    title: 'Web3 Anon DApp',
    description:
      'Aplicação descentralizada (dApp) para mensagens e votações anônimas. Smart contracts em Solidity com interface em React.',
    stack: ['React', 'Solidity', 'Smart Contracts', 'MetaMask'],
    category: 'web3',
    impact:
      'Garante privacidade e imutabilidade em votações e interações através de smart contracts.',
    link: 'https://github.com/PedroFaria14/web3-anon-dapp',
    featured: true,
  },
  {
    title: 'caminho-seguro',
    description:
      'Rede comunitária de proteção infantil com QR, Bluetooth, alertas e provas de integridade na Solana.',
    stack: ['TypeScript', 'Solana'],
    category: 'web3',
    impact:
      'Combina rastreabilidade física e criptografia em blockchain para segurança comunitária.',
    link: 'https://caminho-seguro.rcg-tech.com.br/',
    featured: true,
  },
  {
    title: 'TechSnacks',
    description:
      'Sistema de gestão comercial para controle de pedidos e estoque, com modelagem de classes e levantamento de requisitos funcionais.',
    stack: ['Modelagem UML', 'Análise de Sistemas'],
    category: 'backend',
    impact:
      'Estrutura requisitos e modelagem de dados para otimizar processos de gestão comercial.',
    link: 'https://github.com/PedroFaria14/Project-Clean-Pos-Engine-TechSnacks',
    featured: true,
  },
  {
    title: 'ecommerce-golang',
    description:
      'Loja virtual em Go com PostgreSQL, incluindo cadastro de produtos e e-commerce básico.',
    stack: ['Go', 'PostgreSQL', 'HTML'],
    category: 'backend',
    impact:
      'Foco em performance de backend e persistência segura para transações de e-commerce.',
    link: 'https://github.com/PedroFaria14/ecommerce-golang',
    featured: true,
  },
  {
    title: 'site_JornadaDev',
    description:
      'Aplicativo educacional gamificado da USF para apoiar estudantes nos estágios iniciais de formação em TI.',
    stack: ['React', 'JavaScript'],
    category: 'frontend',
    impact:
      'Apoia a retenção e a jornada acadêmica de estudantes ingressantes na área de tecnologia.',
    link: 'https://github.com/PedroFaria14/site_JornadaDev',
    featured: true,
  },
];

export const allProjects: Project[] = [
  ...featuredProjects,
  // Web3
  {
    title: 'zero-custody-solana-agent',
    description: 'Agente Solana com custódia zero.',
    stack: ['JavaScript', 'Solana'],
    category: 'web3',
    link: 'https://github.com/PedroFaria14/zero-custody-solana-agent',
  },
  // Frontend
  {
    title: 'ReactGram',
    description: 'Rede social de compartilhamento de fotos e vídeos.',
    stack: ['React', 'JavaScript', 'Express'],
    category: 'frontend',
    link: 'https://github.com/PedroFaria14/ReactGram',
  },
  {
    title: 'Lista_de_Tarefas',
    description: 'Lista de tarefas com classificação de importância.',
    stack: ['React', 'TypeScript'],
    category: 'frontend',
    link: 'https://github.com/PedroFaria14/Lista_de_Tarefas',
  },
  {
    title: 'Secret-Word',
    description: 'Jogo de adivinhar palavras.',
    stack: ['React', 'JavaScript'],
    category: 'frontend',
    link: 'https://github.com/PedroFaria14/Secret-Word',
  },
  {
    title: 'Details_Movies',
    description: 'Site para pesquisar e descobrir filmes.',
    stack: ['JavaScript'],
    category: 'frontend',
    link: 'https://github.com/PedroFaria14/Details_Movies',
  },
  {
    title: 'Design-Lab',
    description: 'Blog para publicação de artes e designs com Firebase.',
    stack: ['React', 'JavaScript', 'Firebase'],
    category: 'frontend',
    link: 'https://github.com/PedroFaria14/Design-Lab',
  },
  {
    title: 'New_Home',
    description: 'Site de vendas de imóveis com opções de propriedades.',
    stack: ['JavaScript'],
    category: 'frontend',
    link: 'https://github.com/PedroFaria14/New_Home',
  },
  // Outros
  {
    title: 'ProjetoAquario',
    description: 'Projeto acadêmico.',
    stack: ['C++'],
    category: 'other',
    link: 'https://github.com/PedroFaria14/ProjetoAquario',
  },
  {
    title: '-AtaFlow',
    description: 'Projeto autoral.',
    stack: ['Python'],
    category: 'other',
    link: 'https://github.com/PedroFaria14/-AtaFlow',
  },
  {
    title: 'Jogo-survive-the-destruction',
    description: 'Jogo autoral.',
    stack: ['Go'],
    category: 'other',
    link: 'https://github.com/PedroFaria14/Jogo-survive-the-destruction',
  },
  {
    title: 'Projeto-Agenda',
    description: 'Agenda de compromissos.',
    stack: ['Python'],
    category: 'other',
    link: 'https://github.com/PedroFaria14/Projeto-Agenda',
  },
  {
    title: 'Calculadora-Python',
    description: 'Calculadora com PySide6.',
    stack: ['Python'],
    category: 'other',
    link: 'https://github.com/PedroFaria14/Calculadora-Python',
  },
  {
    title: '-WorkShop-JavaFX-JDBC',
    description: 'Sistema de gerenciamento de usuários com JavaFX e JDBC.',
    stack: ['Java'],
    category: 'other',
    link: 'https://github.com/PedroFaria14/-WorkShop-JavaFX-JDBC',
  },
  {
    title: 'AsyncRunner',
    description: 'Projeto autoral.',
    stack: ['TypeScript'],
    category: 'other',
    link: 'https://github.com/PedroFaria14/AsyncRunner',
  },
];

export const experience = [
  {
    role: 'Estagiário de Desenvolvimento Blockchain',
    org: 'Área de P&D',
    period: '03/2025 — Atual',
    description:
      'Atuação em P&D, contribuindo para o desenvolvimento de soluções com tecnologia blockchain.',
    responsibilities: [
      'Tarefas de front-end e back-end',
      'Participação no ciclo completo de desenvolvimento',
    ],
  },
  {
    role: 'Estagiário de TI — Infraestrutura',
    org: 'Suporte Técnico',
    period: '06/2024 — 02/2025',
    description:
      'Suporte técnico e manutenção de infraestrutura para garantir disponibilidade das ferramentas de trabalho.',
    responsibilities: [
      'Suporte nível 1 e 2 aos usuários',
      'Manutenção e configuração de hardwares e sistemas operacionais',
      'Auxílio na gestão e monitoramento de redes locais',
    ],
  },
];

export const education = [
  {
    degree: 'Análise e Desenvolvimento de Sistemas',
    school: 'Universidade Cruzeiro do Sul',
    period: 'Concluído em 07/2026',
  },
  {
    degree: 'Engenharia da Computação',
    school: 'Universidade São Francisco (USF)',
    period: '6º semestre',
  },
  {
    degree: 'Técnico em Informática',
    school: 'ETEC Hortolândia',
    period: 'Concluído em 07/2023',
  },
];

export type Course = {
  name: string;
  category: string;
};

export const courseCategories = [
  'Frontend & JavaScript',
  'Backend & Go',
  'Blockchain & Web3',
  'Infra & DevOps',
  'Dados & BI',
  'Fundamentos & IA',
] as const;

export const courses: Course[] = [
  {
    name: 'TypeScript do básico ao avançado c/ React e Express (Udemy)',
    category: 'Frontend & JavaScript',
  },
  {
    name: 'TypeScript Part 1: Evolving Your JavaScript (Alura)',
    category: 'Frontend & JavaScript',
  },
  {
    name: 'React do Básico ao Avançado (Udemy)',
    category: 'Frontend & JavaScript',
  },
  {
    name: 'Web Frontend Fundamentos: HTML5, CSS3 e JS (Udemy)',
    category: 'Frontend & JavaScript',
  },
  { name: 'Introdução a Vue', category: 'Frontend & JavaScript' },
  {
    name: 'SOLID aplicado ao React (Alura)',
    category: 'Frontend & JavaScript',
  },
  {
    name: 'Go e Gin: Criando API REST com simplicidade (Alura)',
    category: 'Backend & Go',
  },
  { name: 'Go: a linguagem do Google (Alura)', category: 'Backend & Go' },
  { name: 'Go: Orientação a Objetos (Alura)', category: 'Backend & Go' },
  { name: 'Go: Boas práticas em projetos (Alura)', category: 'Backend & Go' },
  {
    name: 'Trilha Alura: Aprenda a programar em Go (Alura)',
    category: 'Backend & Go',
  },
  {
    name: 'Java — Programação Orientada a Objetos (Udemy)',
    category: 'Backend & Go',
  },
  { name: 'Java Web com JSP e MySQL', category: 'Backend & Go' },
  { name: 'REST API com Docker e AWS', category: 'Backend & Go' },
  { name: 'Blockchain basics (Cyfrin Updraft)', category: 'Blockchain & Web3' },
  {
    name: 'Blockchain: Aumente a confiança da sua aplicação (Alura)',
    category: 'Blockchain & Web3',
  },
  {
    name: 'Docker: Criando e gerenciando containers (Alura)',
    category: 'Infra & DevOps',
  },
  { name: 'Endpoint Security', category: 'Infra & DevOps' },
  { name: '5G — Básico', category: 'Infra & DevOps' },
  { name: 'MongoDB: Validando dados (Alura)', category: 'Infra & DevOps' },
  {
    name: 'SOLID: Os 5 Princípios Para as Boas Práticas da POO',
    category: 'Fundamentos & IA',
  },
  {
    name: 'Introdução à Inteligência Artificial',
    category: 'Fundamentos & IA',
  },
  { name: 'Introdução a Machine Learning', category: 'Fundamentos & IA' },
  {
    name: 'Introdução ao Desenvolvimento de Jogos',
    category: 'Fundamentos & IA',
  },
  { name: 'Felicidade e Qualidade de Vida', category: 'Fundamentos & IA' },
  {
    name: 'Microsoft Excel 2016 — Avançado (Fundação Bradesco)',
    category: 'Dados & BI',
  },
  { name: 'Introdução ao PowerBI', category: 'Dados & BI' },
  { name: 'Power BI Completo', category: 'Dados & BI' },
  { name: 'Modelando Dados no Power BI', category: 'Dados & BI' },
  { name: 'Análise de Dados no Power BI', category: 'Dados & BI' },
  {
    name: 'Preparando Dados para Análise (Microsoft Power BI)',
    category: 'Dados & BI',
  },
  { name: 'Coursera: Análise de Dados em R', category: 'Dados & BI' },
  { name: 'Coursera: Análise de Dados', category: 'Dados & BI' },
];
