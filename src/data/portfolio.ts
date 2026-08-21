import type { BiString } from '../i18n/i18n';

export interface Project {
  title: BiString;
  description: BiString;
  stack: string[];
  impact?: BiString;
  link?: string;
  featured?: boolean;
  category: 'web3' | 'backend' | 'frontend' | 'other';
}

export interface NavLink {
  key: string;
  href: string;
}

/* ============================================================
   DADOS DO PORTFÓLIO — EDITE AQUI OS SEUS DADOS
   Campos com { pt, en } são traduzidos automaticamente
   pelo seletor de idioma do site.
   ============================================================ */

export const profile = {
  name: 'Pedro Henrique de Faria Pereira',
  role: {
    pt: 'Desenvolvedor Full Stack',
    en: 'Full Stack Developer',
  },
  focus: {
    pt: 'Sistemas Escaláveis & Web3',
    en: 'Scalable Systems & Web3',
  },
  // tagline curta exibida no hero
  tagline: {
    pt: 'Desenvolvimento Full Stack e construção de sistemas escaláveis, com forte atuação em Web3.',
    en: 'Full Stack development building scalable systems, with strong Web3 expertise.',
  },
  about: [
    {
      pt: 'Com forte foco em sistemas escaláveis e tecnologia blockchain, atuo no ciclo completo de desenvolvimento de software e modelagem arquitetural (P&D) até o deploy.',
      en: 'Strongly focused on scalable systems and blockchain technology, I work across the complete software development cycle and architectural modeling (R&D) through to deployment.',
    },
    {
      pt: 'Formado em Análise e Desenvolvimento de Sistemas e atual estudante de Engenharia da Computação, aplico os fundamentos de ciência da computação e boas práticas de engenharia para construir soluções eficientes, tanto em ambientes Web2 estruturados quanto em ecossistemas descentralizados (Web3).',
      en: 'Graduated in Systems Analysis and Development and current Computer Engineering student, I apply computer science fundamentals and sound engineering practices to build efficient solutions, both in structured Web2 environments and decentralized (Web3) ecosystems.',
    },
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
  { key: 'sobre', href: '#sobre' },
  { key: 'stack', href: '#stack' },
  { key: 'projetos', href: '#projetos' },
  { key: 'experiencia', href: '#experiencia' },
  { key: 'formacao', href: '#educacao' },
  { key: 'certificacoes', href: '#cursos' },
  { key: 'contato', href: '#contato' },
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
    { pt: 'Análise de Sistemas', en: 'Systems Analysis' },
    { pt: 'Engenharia de Requisitos', en: 'Requirements Engineering' },
    { pt: 'Modelagem UML', en: 'UML Modeling' },
    { pt: 'Estruturas de Dados', en: 'Data Structures' },
  ],
};

export const softSkills: BiString[] = [
  { pt: 'Inglês Técnico', en: 'Technical English' },
  { pt: 'Desenvolvimento colaborativo', en: 'Collaborative development' },
  { pt: 'Resolução de Problemas', en: 'Problem Solving' },
  {
    pt: 'Aprendizado Contínuo & Adaptabilidade',
    en: 'Continuous Learning & Adaptability',
  },
  { pt: 'Comunicação eficaz', en: 'Effective communication' },
  { pt: 'Trabalho em equipe', en: 'Teamwork' },
  { pt: 'Gestão de tempo', en: 'Time management' },
  { pt: 'Visão Analítica e Sistêmica', en: 'Analytical and Systemic Vision' },
];

export const featuredProjects: Project[] = [
  {
    title: {
      pt: 'CodePath (App Educacional)',
      en: 'CodePath (Educational App)',
    },
    description: {
      pt: 'Aplicativo gamificado para o ensino de lógica de programação. Arquitetura full-stack com Flutter, backend em Python/FastAPI e integração via Firebase.',
      en: 'Gamified app for teaching programming logic. Full-stack architecture with Flutter, Python/FastAPI backend and Firebase integration.',
    },
    stack: ['Flutter', 'Python', 'FastAPI', 'Firebase'],
    category: 'frontend',
    impact: {
      pt: 'Facilita o engajamento no aprendizado de lógica com arquitetura desacoplada e resposta em tempo real.',
      en: 'Boosts engagement in learning logic with a decoupled architecture and real-time responses.',
    },
    link: 'https://github.com/PedroFaria14/Projeto_CodePath',
    featured: true,
  },
  {
    title: { pt: 'Web3 Anon DApp', en: 'Web3 Anon DApp' },
    description: {
      pt: 'Aplicação descentralizada (dApp) para mensagens e votações anônimas. Smart contracts em Solidity com interface em React.',
      en: 'Decentralized application (dApp) for anonymous messaging and voting. Solidity smart contracts with a React interface.',
    },
    stack: ['React', 'Solidity', 'Smart Contracts', 'MetaMask'],
    category: 'web3',
    impact: {
      pt: 'Garante privacidade e imutabilidade em votações e interações através de smart contracts.',
      en: 'Ensures privacy and immutability in voting and interactions through smart contracts.',
    },
    link: 'https://github.com/PedroFaria14/web3-anon-dapp',
    featured: true,
  },
  {
    title: { pt: 'caminho-seguro', en: 'caminho-seguro' },
    description: {
      pt: 'Rede comunitária de proteção infantil com QR, Bluetooth, alertas e provas de integridade na Solana.',
      en: 'Community child protection network with QR, Bluetooth, alerts and integrity proofs on Solana.',
    },
    stack: ['TypeScript', 'Solana'],
    category: 'web3',
    impact: {
      pt: 'Combina rastreabilidade física e criptografia em blockchain para segurança comunitária.',
      en: 'Combines physical traceability and on-chain cryptography for community safety.',
    },
    link: 'https://caminho-seguro.rcg-tech.com.br/',
    featured: true,
  },
  {
    title: { pt: 'TechSnacks', en: 'TechSnacks' },
    description: {
      pt: 'Sistema de gestão comercial para controle de pedidos e estoque, com modelagem de classes e levantamento de requisitos funcionais.',
      en: 'Commercial management system for orders and inventory control, with class modeling and functional requirements gathering.',
    },
    stack: ['Modelagem UML', 'Análise de Sistemas'],
    category: 'backend',
    impact: {
      pt: 'Estrutura requisitos e modelagem de dados para otimizar processos de gestão comercial.',
      en: 'Structures requirements and data modeling to optimize commercial management processes.',
    },
    link: 'https://github.com/PedroFaria14/Project-Clean-Pos-Engine-TechSnacks',
    featured: true,
  },
  {
    title: {
      pt: 'Jogo-survive-the-destruction',
      en: 'Jogo-survive-the-destruction',
    },
    description: {
      pt: 'Jogo multiplayer em tempo real via WebSocket onde a arena de ilhas flutuantes é destruída aos poucos. Sobreviva pulando entre as ilhas, use power-ups e empurre os oponentes enquanto o chão desaparece.',
      en: 'Real-time multiplayer WebSocket game where the floating islands arena is gradually destroyed. Survive by jumping between islands, using power-ups, and pushing opponents while the ground disappears.',
    },
    stack: ['React', 'Vite', 'MUI', 'Go', 'PostgreSQL', 'WebSocket'],
    category: 'frontend',
    impact: {
      pt: 'Jogo multiplayer com física no servidor (tick 60 FPS), arena procedural, power-ups e leaderboard em PostgreSQL.',
      en: 'Multiplayer game with server-side physics (60 FPS tick), procedural arena, power-ups, and PostgreSQL leaderboard.',
    },
    link: 'https://survive.phfaria.com/',
    featured: true,
  },
  {
    title: { pt: 'site_JornadaDev', en: 'site_JornadaDev' },
    description: {
      pt: 'Aplicativo educacional gamificado da USF para apoiar estudantes nos estágios iniciais de formação em TI.',
      en: 'Gamified educational app from USF to support students in the early stages of IT training.',
    },
    stack: ['React', 'JavaScript'],
    category: 'frontend',
    impact: {
      pt: 'Apoia a retenção e a jornada acadêmica de estudantes ingressantes na área de tecnologia.',
      en: 'Supports retention and the academic journey of students entering the tech field.',
    },
    link: 'https://github.com/PedroFaria14/site_JornadaDev',
    featured: true,
  },
];

export const allProjects: Project[] = [
  // Web3
  {
    title: { pt: 'zero-custody-solana-agent', en: 'zero-custody-solana-agent' },
    description: {
      pt: 'Agente Solana com custódia zero.',
      en: 'Solana agent with zero custody.',
    },
    stack: ['JavaScript', 'Solana'],
    category: 'web3',
    link: 'https://github.com/PedroFaria14/zero-custody-solana-agent',
  },
  // Frontend
  {
    title: { pt: 'ReactGram', en: 'ReactGram' },
    description: {
      pt: 'Rede social de compartilhamento de fotos e vídeos.',
      en: 'Photo and video sharing social network.',
    },
    stack: ['React', 'JavaScript', 'Express'],
    category: 'frontend',
    link: 'https://github.com/PedroFaria14/ReactGram',
  },
  {
    title: { pt: 'Lista_de_Tarefas', en: 'Lista_de_Tarefas' },
    description: {
      pt: 'Lista de tarefas com classificação de importância.',
      en: 'Task list with importance classification.',
    },
    stack: ['React', 'TypeScript'],
    category: 'frontend',
    link: 'https://github.com/PedroFaria14/Lista_de_Tarefas',
  },
  {
    title: { pt: 'Secret-Word', en: 'Secret-Word' },
    description: {
      pt: 'Jogo de adivinhar palavras.',
      en: 'Word guessing game.',
    },
    stack: ['React', 'JavaScript'],
    category: 'frontend',
    link: 'https://github.com/PedroFaria14/Secret-Word',
  },
  {
    title: { pt: 'Details_Movies', en: 'Details_Movies' },
    description: {
      pt: 'Site para pesquisar e descobrir filmes.',
      en: 'Website to search and discover movies.',
    },
    stack: ['JavaScript'],
    category: 'frontend',
    link: 'https://github.com/PedroFaria14/Details_Movies',
  },
  {
    title: { pt: 'Design-Lab', en: 'Design-Lab' },
    description: {
      pt: 'Blog para publicação de artes e designs com Firebase.',
      en: 'Blog for publishing art and designs with Firebase.',
    },
    stack: ['React', 'JavaScript', 'Firebase'],
    category: 'frontend',
    link: 'https://github.com/PedroFaria14/Design-Lab',
  },
  {
    title: { pt: 'New_Home', en: 'New_Home' },
    description: {
      pt: 'Site de vendas de imóveis com opções de propriedades.',
      en: 'Real estate sales website with property options.',
    },
    stack: ['JavaScript'],
    category: 'frontend',
    link: 'https://github.com/PedroFaria14/New_Home',
  },
  // Outros
  {
    title: { pt: 'ProjetoAquario', en: 'ProjetoAquario' },
    description: { pt: 'Projeto acadêmico.', en: 'Academic project.' },
    stack: ['C++'],
    category: 'other',
    link: 'https://github.com/PedroFaria14/ProjetoAquario',
  },
  {
    title: { pt: '-AtaFlow', en: '-AtaFlow' },
    description: { pt: 'Projeto autoral.', en: 'Personal project.' },
    stack: ['Python'],
    category: 'other',
    link: 'https://ata-flow.phfaria.com/',
  },
  {
    title: {
      pt: 'Jogo-survive-the-destruction',
      en: 'Jogo-survive-the-destruction',
    },
    description: { pt: 'Jogo autoral.', en: 'Personal game.' },
    stack: ['Go'],
    category: 'other',
    link: 'https://github.com/PedroFaria14/Jogo-survive-the-destruction',
  },
  {
    title: { pt: 'Projeto-Agenda', en: 'Projeto-Agenda' },
    description: {
      pt: 'Agenda de compromissos.',
      en: 'Appointment scheduler.',
    },
    stack: ['Python'],
    category: 'other',
    link: 'https://github.com/PedroFaria14/Projeto-Agenda',
  },
  {
    title: { pt: 'Calculadora-Python', en: 'Calculadora-Python' },
    description: {
      pt: 'Calculadora com PySide6.',
      en: 'Calculator with PySide6.',
    },
    stack: ['Python'],
    category: 'other',
    link: 'https://github.com/PedroFaria14/Calculadora-Python',
  },
  {
    title: { pt: '-WorkShop-JavaFX-JDBC', en: '-WorkShop-JavaFX-JDBC' },
    description: {
      pt: 'Sistema de gerenciamento de usuários com JavaFX e JDBC.',
      en: 'User management system with JavaFX and JDBC.',
    },
    stack: ['Java'],
    category: 'other',
    link: 'https://github.com/PedroFaria14/-WorkShop-JavaFX-JDBC',
  },
  {
    title: { pt: 'AsyncRunner', en: 'AsyncRunner' },
    description: { pt: 'Projeto autoral.', en: 'Personal project.' },
    stack: ['TypeScript'],
    category: 'other',
    link: 'https://github.com/PedroFaria14/AsyncRunner',
  },
];

export const experience = [
  {
    role: {
      pt: 'Estagiário de Desenvolvimento Blockchain',
      en: 'Blockchain Development Intern',
    },
    org: { pt: 'Área de P&D', en: 'R&D Department' },
    period: '03/2025 — Atual',
    description: {
      pt: 'Atuação em P&D, contribuindo para o desenvolvimento de soluções com tecnologia blockchain.',
      en: 'Working in R&D, contributing to the development of blockchain-based solutions.',
    },
    responsibilities: [
      {
        pt: 'Tarefas de front-end e back-end',
        en: 'Front-end and back-end tasks',
      },
      {
        pt: 'Participação no ciclo completo de desenvolvimento',
        en: 'Participation in the full development cycle',
      },
    ],
  },
  {
    role: {
      pt: 'Estagiário de TI — Infraestrutura',
      en: 'IT Intern — Infrastructure',
    },
    org: { pt: 'Suporte Técnico', en: 'Technical Support' },
    period: '06/2024 — 02/2025',
    description: {
      pt: 'Suporte técnico e manutenção de infraestrutura para garantir disponibilidade das ferramentas de trabalho.',
      en: 'Technical support and infrastructure maintenance to ensure availability of work tools.',
    },
    responsibilities: [
      {
        pt: 'Suporte nível 1 e 2 aos usuários',
        en: 'Level 1 and 2 user support',
      },
      {
        pt: 'Manutenção e configuração de hardwares e sistemas operacionais',
        en: 'Hardware and operating system maintenance and configuration',
      },
      {
        pt: 'Auxílio na gestão e monitoramento de redes locais',
        en: 'Assistance with local network management and monitoring',
      },
    ],
  },
];

export const education = [
  {
    degree: {
      pt: 'Análise e Desenvolvimento de Sistemas',
      en: 'Systems Analysis and Development',
    },
    school: 'Universidade Cruzeiro do Sul',
    period: { pt: 'Concluído em 07/2026', en: 'Completed 07/2026' },
  },
  {
    degree: { pt: 'Engenharia da Computação', en: 'Computer Engineering' },
    school: 'Universidade São Francisco (USF)',
    period: { pt: '6º semestre', en: '6th semester' },
  },
  {
    degree: { pt: 'Técnico em Informática', en: 'Computer Technician' },
    school: 'ETEC Hortolândia',
    period: { pt: 'Concluído em 07/2023', en: 'Completed 07/2023' },
  },
];

export type CourseCategoryKey =
  'frontend' | 'backend' | 'web3' | 'infra' | 'foundations' | 'data';

export const courseCategories: { key: CourseCategoryKey; label: BiString }[] = [
  {
    key: 'frontend',
    label: { pt: 'Frontend & JavaScript', en: 'Frontend & JavaScript' },
  },
  { key: 'backend', label: { pt: 'Backend & Go', en: 'Backend & Go' } },
  { key: 'web3', label: { pt: 'Blockchain & Web3', en: 'Blockchain & Web3' } },
  { key: 'infra', label: { pt: 'Infra & DevOps', en: 'Infra & DevOps' } },
  { key: 'data', label: { pt: 'Dados & BI', en: 'Data & BI' } },
  {
    key: 'foundations',
    label: { pt: 'Fundamentos & IA', en: 'Fundamentals & AI' },
  },
];

export type Course = {
  name: BiString;
  category: CourseCategoryKey;
};

export const courses: Course[] = [
  {
    name: {
      pt: 'TypeScript do básico ao avançado c/ React e Express (Udemy)',
      en: 'TypeScript from basic to advanced w/ React and Express (Udemy)',
    },
    category: 'frontend',
  },
  {
    name: {
      pt: 'TypeScript Part 1: Evolving Your JavaScript (Alura)',
      en: 'TypeScript Part 1: Evolving Your JavaScript (Alura)',
    },
    category: 'frontend',
  },
  {
    name: {
      pt: 'React do Básico ao Avançado (Udemy)',
      en: 'React from Basic to Advanced (Udemy)',
    },
    category: 'frontend',
  },
  {
    name: {
      pt: 'Web Frontend Fundamentos: HTML5, CSS3 e JS (Udemy)',
      en: 'Web Frontend Fundamentals: HTML5, CSS3 and JS (Udemy)',
    },
    category: 'frontend',
  },
  {
    name: { pt: 'Introdução a Vue', en: 'Introduction to Vue' },
    category: 'frontend',
  },
  {
    name: {
      pt: 'SOLID aplicado ao React (Alura)',
      en: 'SOLID applied to React (Alura)',
    },
    category: 'frontend',
  },
  {
    name: {
      pt: 'Go e Gin: Criando API REST com simplicidade (Alura)',
      en: 'Go and Gin: Building REST APIs with simplicity (Alura)',
    },
    category: 'backend',
  },
  {
    name: {
      pt: 'Go: a linguagem do Google (Alura)',
      en: 'Go: the Google language (Alura)',
    },
    category: 'backend',
  },
  {
    name: {
      pt: 'Go: Orientação a Objetos (Alura)',
      en: 'Go: Object-Oriented Programming (Alura)',
    },
    category: 'backend',
  },
  {
    name: {
      pt: 'Go: Boas práticas em projetos (Alura)',
      en: 'Go: Best practices in projects (Alura)',
    },
    category: 'backend',
  },
  {
    name: {
      pt: 'Trilha Alura: Aprenda a programar em Go (Alura)',
      en: 'Alura Track: Learn to program in Go (Alura)',
    },
    category: 'backend',
  },
  {
    name: {
      pt: 'Java — Programação Orientada a Objetos (Udemy)',
      en: 'Java — Object-Oriented Programming (Udemy)',
    },
    category: 'backend',
  },
  {
    name: { pt: 'Java Web com JSP e MySQL', en: 'Java Web with JSP and MySQL' },
    category: 'backend',
  },
  {
    name: {
      pt: 'REST API com Docker e AWS',
      en: 'REST API with Docker and AWS',
    },
    category: 'backend',
  },
  {
    name: {
      pt: 'Blockchain basics (Cyfrin Updraft)',
      en: 'Blockchain basics (Cyfrin Updraft)',
    },
    category: 'web3',
  },
  {
    name: {
      pt: 'Blockchain: Aumente a confiança da sua aplicação (Alura)',
      en: 'Blockchain: Increase your application trust (Alura)',
    },
    category: 'web3',
  },
  {
    name: {
      pt: 'Docker: Criando e gerenciando containers (Alura)',
      en: 'Docker: Creating and managing containers (Alura)',
    },
    category: 'infra',
  },
  {
    name: { pt: 'Endpoint Security', en: 'Endpoint Security' },
    category: 'infra',
  },
  { name: { pt: '5G — Básico', en: '5G — Basic' }, category: 'infra' },
  {
    name: {
      pt: 'MongoDB: Validando dados (Alura)',
      en: 'MongoDB: Validating data (Alura)',
    },
    category: 'infra',
  },
  {
    name: {
      pt: 'SOLID: Os 5 Princípios Para as Boas Práticas da POO',
      en: 'SOLID: The 5 Principles for OOP Best Practices',
    },
    category: 'foundations',
  },
  {
    name: {
      pt: 'Introdução à Inteligência Artificial',
      en: 'Introduction to Artificial Intelligence',
    },
    category: 'foundations',
  },
  {
    name: {
      pt: 'Introdução a Machine Learning',
      en: 'Introduction to Machine Learning',
    },
    category: 'foundations',
  },
  {
    name: {
      pt: 'Introdução ao Desenvolvimento de Jogos',
      en: 'Introduction to Game Development',
    },
    category: 'foundations',
  },
  {
    name: {
      pt: 'Felicidade e Qualidade de Vida',
      en: 'Happiness and Quality of Life',
    },
    category: 'foundations',
  },
  {
    name: {
      pt: 'Microsoft Excel 2016 — Avançado (Fundação Bradesco)',
      en: 'Microsoft Excel 2016 — Advanced (Fundação Bradesco)',
    },
    category: 'data',
  },
  {
    name: { pt: 'Introdução ao PowerBI', en: 'Introduction to Power BI' },
    category: 'data',
  },
  {
    name: { pt: 'Power BI Completo', en: 'Power BI Complete' },
    category: 'data',
  },
  {
    name: {
      pt: 'Modelando Dados no Power BI',
      en: 'Modeling Data in Power BI',
    },
    category: 'data',
  },
  {
    name: {
      pt: 'Análise de Dados no Power BI',
      en: 'Data Analysis in Power BI',
    },
    category: 'data',
  },
  {
    name: {
      pt: 'Preparando Dados para Análise (Microsoft Power BI)',
      en: 'Preparing Data for Analysis (Microsoft Power BI)',
    },
    category: 'data',
  },
  {
    name: {
      pt: 'Coursera: Análise de Dados em R',
      en: 'Coursera: Data Analysis in R',
    },
    category: 'data',
  },
  {
    name: { pt: 'Coursera: Análise de Dados', en: 'Coursera: Data Analysis' },
    category: 'data',
  },
];
