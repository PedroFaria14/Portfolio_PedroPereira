import type { BiString } from '../i18n/i18n';

export type ProjectCategory = 'web3' | 'backend' | 'frontend' | 'fullstack' | 'java' | 'ai' | 'other';

export interface Project {
  title: BiString;
  description: BiString;
  stack: string[];
  impact?: BiString;
  link?: string;
  github?: string;
  video?: string;
  featured?: boolean;
  category: ProjectCategory;
  categories?: ProjectCategory[];
  context?: BiString;
  quality?: ('tests' | 'ci' | 'docs')[];
  unavailable?: boolean;
  preview?: { src: string; alt: BiString; caption: BiString };
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
    pt: 'Desenvolvedor Frontend & Full Stack Júnior',
    en: 'Junior Frontend & Full Stack Developer',
  },
  focus: {
    pt: 'React & TypeScript',
    en: 'React & TypeScript',
  },
  // tagline curta exibida no hero
  tagline: {
    pt: 'Interfaces com React e TypeScript, integradas a APIs e regras de negócio. Experiência profissional com Go e Python e projetos pessoais que conectam frontend, backend e dados.',
    en: 'React and TypeScript interfaces connected to APIs and business logic. Professional experience with Go and Python, alongside personal projects connecting frontend, backend and data.',
  },
  about: [
    {
      pt: 'Busco oportunidades Frontend e Full Stack Júnior, com foco em React e TypeScript. Nos meus projetos pessoais e acadêmicos, construo interfaces responsivas, integro APIs e trabalho com persistência e testes, usando também Java/Spring Boot, Angular e Flutter.',
      en: 'I am seeking Junior Frontend and Full Stack opportunities, focused on React and TypeScript. In personal and academic projects, I build responsive interfaces, integrate APIs and work with persistence and tests, also using Java/Spring Boot, Angular and Flutter.',
    },
    {
      pt: 'No CPQD, atuo como estagiário de Desenvolvimento de Software (Blockchain), com Go, Python, APIs REST, Docker e Jenkins/CI/CD em projetos de blockchain e identidade digital. Minha experiência anterior em infraestrutura complementa essa visão de integração de sistemas.',
      en: 'At CPQD, I work as a Software Development Intern (Blockchain), using Go, Python, REST APIs, Docker and Jenkins/CI/CD on blockchain and digital identity projects. Previous IT infrastructure experience complements this systems integration perspective.',
    },
    {
      pt: 'Concluí Análise e Desenvolvimento de Sistemas na Universidade Cruzeiro do Sul em julho de 2026 e curso Engenharia da Computação na USF, com conclusão prevista para dezembro de 2028. IA, automação e Web3 são áreas complementares de estudo e experimentação.',
      en: 'I completed my degree in Systems Analysis and Development at Universidade Cruzeiro do Sul in July 2026 and am studying Computer Engineering at USF, with expected graduation in December 2028. AI, automation and Web3 are complementary areas of study and experimentation.',
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
    'TypeScript',
    'JavaScript',
    'Python',
    'Go (Golang)',
    'Java',
    'C',
    'Solidity',
    'Dart',
  ],
  frameworks: ['React', 'Angular', 'Spring Boot', 'FastAPI', 'Gin', 'NestJS', 'Flutter', 'Express'],
  web3: ['Smart Contracts', 'MetaMask', 'Hardhat', 'Solana', 'Anchor'],
  infra: [
    'Git/GitHub',
    'Docker',
    'PostgreSQL',
    'GitHub Actions',
    'Jenkins',
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
    title: { pt: 'TechSnacks', en: 'TechSnacks' },
    description: {
      pt: 'PDV para catálogo, pedidos e checkout, com React, API Go/Gin, PostgreSQL e acesso por perfil.',
      en: 'POS for catalog, orders and checkout, with React, a Go/Gin API, PostgreSQL and role-based access.',
    },
    stack: ['React', 'TypeScript', 'Go', 'Gin', 'PostgreSQL', 'Docker'],
    category: 'fullstack', categories: ['frontend', 'backend'],
    impact: { pt: 'Clean Architecture, regras de negócio isoladas e recuperação de checkout.', en: 'Clean Architecture, isolated business rules and checkout recovery.' },
    github: 'https://github.com/PedroFaria14/Project-Clean-Pos-Engine-TechSnacks',
    quality: ['tests', 'ci', 'docs'], featured: true,
    preview: { src: '/projects/techsnacks.jpg', alt: { pt: 'Página de apresentação do TechSnacks e prévia ilustrativa do caixa.', en: 'TechSnacks presentation page with an illustrative POS preview.' }, caption: { pt: 'Home original · renderização local', en: 'Original home · local rendering' } },
  },
  {
    title: { pt: 'AsyncRunner', en: 'AsyncRunner' },
    description: {
      pt: 'Dashboard React/TypeScript para acompanhar tarefas em um worker Go, com prioridades, retries e webhooks.',
      en: 'React/TypeScript dashboard to track tasks in a Go worker, with priorities, retries and webhooks.',
    },
    stack: ['React', 'TypeScript', 'Go', 'React Query', 'Docker'],
    category: 'fullstack', categories: ['frontend', 'backend'],
    context: { pt: 'Projeto de estudo · armazenamento em memória', en: 'Study project · in-memory storage' },
    impact: { pt: 'Fila com prioridades e até três tentativas. Dados perdidos ao reiniciar; não é um sistema de produção.', en: 'Priority queue with up to three attempts. Data is lost on restart; not a production system.' },
    github: 'https://github.com/PedroFaria14/AsyncRunner',
    quality: ['tests', 'ci', 'docs'], featured: true,
    preview: { src: '/projects/asyncrunner.jpg', alt: { pt: 'Home do AsyncRunner com apresentação do fluxo de tarefas.', en: 'AsyncRunner home presenting the task workflow.' }, caption: { pt: 'Home pública · fluxo ilustrativo', en: 'Public home · illustrative workflow' } },
  },
  {
    title: { pt: 'Chess Studio', en: 'Chess Studio' },
    description: {
      pt: 'Xadrez web em Angular e Java/Spring Boot, contra Stockfish ou duas pessoas no mesmo dispositivo.',
      en: 'Angular and Java/Spring Boot web chess against Stockfish or two people on the same device.',
    },
    stack: ['Java 21', 'Spring Boot 3.5', 'Angular 22', 'TypeScript', 'PostgreSQL', 'Stockfish'],
    category: 'fullstack', categories: ['frontend', 'backend', 'java'],
    impact: { pt: 'Partidas persistidas com histórico e retomada; API documentada e testes JUnit, MockMvc e Playwright.', en: 'Saved matches with history and resume; documented API and JUnit, MockMvc and Playwright tests.' },
    github: 'https://github.com/PedroFaria14/Chess-System-Java',
    quality: ['tests', 'ci', 'docs'], featured: true,
    preview: { src: '/projects/chess.jpg', alt: { pt: 'Tabuleiro e interface de partida do Chess Studio contra Stockfish.', en: 'Chess Studio board and match interface against Stockfish.' }, caption: { pt: 'Interface real · captura do repositório', en: 'Actual interface · repository screenshot' } },
  },
  {
    title: { pt: 'Survive the Destruction', en: 'Survive the Destruction' },
    description: {
      pt: 'Jogo multiplayer em React e Go, com salas em tempo real via WebSocket e placar em PostgreSQL.',
      en: 'React and Go multiplayer game with real-time WebSocket rooms and PostgreSQL scores.',
    },
    stack: ['React', 'Go', 'WebSocket', 'PostgreSQL', 'Canvas API'],
    category: 'fullstack', categories: ['frontend', 'backend'],
    impact: { pt: 'Estado sincronizado pelo servidor e controles para teclado e toque.', en: 'Server-synchronized state with keyboard and touch controls.' },
    link: 'https://survive.phfaria.com/',
    github: 'https://github.com/PedroFaria14/Jogo-survive-the-destruction',
    quality: ['tests', 'docs'], featured: true,
    preview: { src: '/projects/survive.jpg', alt: { pt: 'Partida de Survive the Destruction com jogadores e arena.', en: 'Survive the Destruction match showing players and arena.' }, caption: { pt: 'Gameplay real · captura do repositório', en: 'Actual gameplay · repository screenshot' } },
  },
  {
    title: {
      pt: 'CodePath (App Educacional)',
      en: 'CodePath (Educational App)',
    },
    description: {
      pt: 'App Flutter de ensino de programação com trilhas e desafios, API FastAPI e dados no Firestore.',
      en: 'Flutter programming learning app with paths and challenges, a FastAPI API and Firestore data.',
    },
    stack: ['Flutter', 'Dart', 'Python', 'FastAPI', 'Firestore'],
    category: 'fullstack', categories: ['backend', 'ai'],
    context: { pt: 'Projeto acadêmico · preparação para release Android', en: 'Academic project · Android release preparation' },
    impact: {
      pt: 'Sessões autenticadas e pontuação validada no servidor. Publicação Android pendente.',
      en: 'Authenticated sessions and server-validated scores. Android publication pending.',
    },
    github: 'https://github.com/PedroFaria14/Projeto_CodePath',
    video: 'https://www.youtube.com/watch?v=UzxwLV0mMh4',
    quality: ['tests', 'ci', 'docs'],
    featured: true,
    preview: { src: '/projects/codepath.jpg', alt: { pt: 'Tela de trilhas do CodePath exibida no vídeo de demonstração.', en: 'CodePath learning paths screen shown in the demonstration video.' }, caption: { pt: 'Prévia do vídeo de demonstração', en: 'Demonstration video preview' } },
  },
  {
    title: { pt: 'Jungle Gaming — Teste técnico', en: 'Jungle Gaming — Technical assessment' },
    description: {
      pt: 'Serviço NestJS de transações via HTTP e SQS/LocalStack, com PostgreSQL e TypeORM.',
      en: 'NestJS transaction service over HTTP and SQS/LocalStack, with PostgreSQL and TypeORM.',
    },
    stack: ['TypeScript', 'NestJS', 'PostgreSQL', 'TypeORM', 'SQS / LocalStack', 'Docker'],
    category: 'backend',
    context: { pt: 'Projeto de teste técnico', en: 'Technical assessment project' },
    impact: { pt: 'Idempotência persistente, concorrência por carteira e inbox/outbox transacional; carga validada em ambiente local.', en: 'Persistent idempotency, per-wallet concurrency and transactional inbox/outbox; locally validated load tests.' },
    github: 'https://github.com/PedroFaria14/Teste-tecnico-Jungle-Gaming',
    quality: ['tests', 'ci', 'docs'], featured: true,
    preview: { src: '/projects/jungle.jpg', alt: { pt: 'Documentação Swagger do contrato de carteiras e transações do Jungle Gaming.', en: 'Swagger documentation of the Jungle Gaming wallet and transaction contract.' }, caption: { pt: 'Contrato OpenAPI · renderização local', en: 'OpenAPI contract · local rendering' } },
  },
];

export const allProjects: Project[] = [
  {
    title: { pt: 'OrangeVision', en: 'OrangeVision' },
    description: { pt: 'Sistema web com React/TypeScript e API Python/FastAPI para autenticação e dados, com integrações de banco. O site funciona separado dos componentes locais de inspeção.', en: 'Web system with React/TypeScript and a Python/FastAPI API for authentication and data, with database integrations. The website runs separately from local inspection components.' },
    stack: ['React', 'TypeScript', 'Python', 'FastAPI', 'Prisma'],
    category: 'fullstack', categories: ['frontend', 'backend', 'ai'],
    impact: { pt: 'Inspeção com Raspberry Pi depende de migration, equipamento, câmera e calibração.', en: 'Raspberry Pi inspection requires a migration, device provisioning, camera and calibration.' },
    github: 'https://github.com/PedroFaria14/OrangeVision', quality: ['docs'],
  },
  {
    title: { pt: 'CaixaUNI', en: 'CaixaUNI' },
    description: { pt: 'MVP de hackathon para tesourarias coletivas. Interface React/TypeScript com multisig Squads na Solana Devnet; login e dados da demonstração são locais, sem backend próprio.', en: 'Hackathon MVP for collective treasuries. React/TypeScript interface with Squads multisig on Solana Devnet; demo login and data are local, with no dedicated backend.' },
    stack: ['React', 'TypeScript', 'Solana Devnet', 'Squads'],
    category: 'web3', categories: ['frontend'],
    github: 'https://github.com/PedroFaria14/CaixaUNI', quality: ['docs'],
  },
  {
    title: { pt: 'AttestCredit', en: 'AttestCredit' },
    description: { pt: 'Projeto solo de hackathon para pontuação de crédito e empréstimos cross-chain. Contratos Solidity, API e worker TypeScript; integração documentada em Sepolia e Creditcoin Testnet.', en: 'Solo hackathon project for cross-chain credit scoring and lending. Solidity contracts, TypeScript API and worker; documented integration on Sepolia and Creditcoin Testnet.' },
    stack: ['Solidity', 'TypeScript', 'Express', 'Hardhat', 'Docker'],
    category: 'web3', categories: ['backend'],
    github: 'https://github.com/PedroFaria14/AttestCredit', quality: ['docs'],
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
      pt: 'Prova de conceito de mensagens e enquetes on-chain, com prevenção de voto duplicado.',
      en: 'Proof of concept for on-chain messages and polls, with duplicate-vote prevention.',
    },
    github: 'https://github.com/PedroFaria14/web3-anon-dapp',
    categories: ['frontend'],
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
      pt: 'Repositório fork; escopo experimental de proteção comunitária, sem afirmar implantação operacional.',
      en: 'Forked repository; experimental community protection scope, without claiming operational deployment.',
    },
    link: 'https://caminho-seguro.rcg-tech.com.br/',
    github: 'https://github.com/PedroFaria14/caminho-seguro',
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
    github: 'https://github.com/PedroFaria14/site_JornadaDev',
    context: { pt: 'Projeto acadêmico · USF', en: 'Academic project · USF' },
  },
  // Web3
  {
    title: { pt: 'zero-custody-solana-agent', en: 'zero-custody-solana-agent' },
    description: {
      pt: 'Agente Solana com custódia zero.',
      en: 'Solana agent with zero custody.',
    },
    stack: ['JavaScript', 'Solana'],
    category: 'web3',
    github: 'https://github.com/PedroFaria14/zero-custody-solana-agent',
    unavailable: true,
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
    github: 'https://github.com/PedroFaria14/ReactGram',
  },
  {
    title: { pt: 'Lista_de_Tarefas', en: 'Lista_de_Tarefas' },
    description: {
      pt: 'Lista de tarefas com classificação de importância.',
      en: 'Task list with importance classification.',
    },
    stack: ['React', 'TypeScript'],
    category: 'frontend',
    github: 'https://github.com/PedroFaria14/Lista_de_Tarefas',
    unavailable: true,
  },
  {
    title: { pt: 'Secret-Word', en: 'Secret-Word' },
    description: {
      pt: 'Jogo de adivinhar palavras.',
      en: 'Word guessing game.',
    },
    stack: ['React', 'JavaScript'],
    category: 'frontend',
    github: 'https://github.com/PedroFaria14/Secret-Word',
  },
  {
    title: { pt: 'Details_Movies', en: 'Details_Movies' },
    description: {
      pt: 'Site para pesquisar e descobrir filmes.',
      en: 'Website to search and discover movies.',
    },
    stack: ['React', 'JavaScript', 'TMDb API'],
    category: 'frontend',
    github: 'https://github.com/PedroFaria14/Details_Movies',
  },
  {
    title: { pt: 'Design-Lab', en: 'Design-Lab' },
    description: {
      pt: 'Blog para publicação de artes e designs com Firebase.',
      en: 'Blog for publishing art and designs with Firebase.',
    },
    stack: ['React', 'JavaScript', 'Firebase'],
    category: 'frontend',
    github: 'https://github.com/PedroFaria14/Design-Lab',
  },
  {
    title: { pt: 'New_Home', en: 'New_Home' },
    description: {
      pt: 'Site de vendas de imóveis com opções de propriedades.',
      en: 'Real estate sales website with property options.',
    },
    stack: ['JavaScript'],
    category: 'frontend',
    github: 'https://github.com/PedroFaria14/New_Home',
  },
  // Outros
  {
    title: { pt: 'ProjetoAquario', en: 'ProjetoAquario' },
    description: { pt: 'Projeto acadêmico.', en: 'Academic project.' },
    stack: ['C++'],
    category: 'other',
    github: 'https://github.com/PedroFaria14/ProjetoAquario',
    unavailable: true,
  },
  {
    title: { pt: 'AtaFlow', en: 'AtaFlow' },
    description: { pt: 'Aplicação para transformar áudio de reuniões em atas estruturadas com IA. Frontend React integrado a uma API FastAPI, PostgreSQL e migrations com Alembic/SQLAlchemy.', en: 'Application for turning meeting audio into structured minutes with AI. React frontend connected to a FastAPI API, PostgreSQL and Alembic/SQLAlchemy migrations.' },
    stack: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    category: 'ai', categories: ['frontend', 'backend', 'fullstack'],
    link: 'https://ata-flow.phfaria.com/',
    github: 'https://github.com/PedroFaria14/-AtaFlow',
  },
  {
    title: { pt: 'Projeto-Agenda', en: 'Projeto-Agenda' },
    description: {
      pt: 'Agenda de compromissos.',
      en: 'Appointment scheduler.',
    },
    stack: ['Python'],
    category: 'other',
    github: 'https://github.com/PedroFaria14/Projeto-Agenda',
    unavailable: true,
  },
  {
    title: { pt: 'Calculadora-Python', en: 'Calculadora-Python' },
    description: {
      pt: 'Calculadora com PySide6.',
      en: 'Calculator with PySide6.',
    },
    stack: ['Python'],
    category: 'other',
    github: 'https://github.com/PedroFaria14/Calculadora-Python',
    unavailable: true,
  },
  {
    title: { pt: '-WorkShop-JavaFX-JDBC', en: '-WorkShop-JavaFX-JDBC' },
    description: {
      pt: 'Sistema de gerenciamento de usuários com JavaFX e JDBC.',
      en: 'User management system with JavaFX and JDBC.',
    },
    stack: ['Java'],
    category: 'java',
    github: 'https://github.com/PedroFaria14/-WorkShop-JavaFX-JDBC',
  },
  {
    title: { pt: 'Workshop Spring Boot — JPA', en: 'Spring Boot Workshop — JPA' },
    description: { pt: 'Projeto de curso de backend Java com Spring Boot 3, Maven e persistência JPA.', en: 'Java backend course project with Spring Boot 3, Maven and JPA persistence.' },
    stack: ['Java', 'Spring Boot 3', 'JPA', 'Maven'],
    category: 'java', categories: ['backend'],
    github: 'https://github.com/PedroFaria14/WorkShop-SpringBoot3-JPA',
  },
  {
    title: { pt: 'Workshop Spring Boot — MongoDB', en: 'Spring Boot Workshop — MongoDB' },
    description: { pt: 'Projeto de estudo para gerenciamento de publicações com Java, Spring Boot 3 e MongoDB.', en: 'Study project for managing posts with Java, Spring Boot 3 and MongoDB.' },
    stack: ['Java', 'Spring Boot 3', 'MongoDB'],
    category: 'java', categories: ['backend'],
    github: 'https://github.com/PedroFaria14/WorkShop-SpringBoot3-MongoDB',
  },
];

export const experience = [
  {
    role: {
      pt: 'Estagiário de Desenvolvimento de Software (Blockchain)',
      en: 'Software Development Intern (Blockchain)',
    },
    org: { pt: 'CPQD', en: 'CPQD' },
    period: { pt: '03/2025 — Atual', en: '03/2025 — Present' },
    description: {
      pt: 'Desenvolvimento de software em projetos envolvendo blockchain e identidade digital.',
      en: 'Software development on projects involving blockchain and digital identity.',
    },
    responsibilities: [
      {
        pt: 'Desenvolvimento com Go e Python e integração de APIs REST.',
        en: 'Development with Go and Python and REST API integration.',
      },
      {
        pt: 'Uso de Docker e Git, com integração a pipelines Jenkins/CI/CD.',
        en: 'Use of Docker and Git, with integration into Jenkins/CI/CD pipelines.',
      },
    ],
  },
  {
    role: {
      pt: 'Estagiário de TI — Infraestrutura',
      en: 'IT Intern — Infrastructure',
    },
    org: { pt: 'Galena Farmacêutica', en: 'Galena Farmacêutica' },
    period: { pt: '06/2024 — 02/2025', en: '06/2024 — 02/2025' },
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
    period: { pt: 'Em andamento · conclusão prevista em 12/2028', en: 'In progress · expected graduation 12/2028' },
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
  { key: 'backend', label: { pt: 'Backend & APIs', en: 'Backend & APIs' } },
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
  status?: 'completed' | 'in-progress';
  institution?: string;
  hours?: number;
  completedAt?: string;
  description?: BiString;
  highlight?: boolean;
};

export const courses: Course[] = [
  {
    name: { pt: 'Desenvolvimento de APIs com .NET', en: 'Desenvolvimento de APIs com .NET' },
    institution: 'DIO — Digital Innovation One', hours: 15,
    completedAt: '2026-11-16', status: 'completed', category: 'backend',
    description: { pt: 'Conhecimento complementar em desenvolvimento de APIs com .NET.', en: 'Complementary knowledge in API development with .NET.' },
  },
  {
    name: { pt: 'Itaú — Java com Inteligência Artificial', en: 'Itaú — Java com Inteligência Artificial' },
    institution: 'DIO — Digital Innovation One', hours: 45,
    status: 'in-progress', category: 'backend',
    description: { pt: 'Conteúdos previstos: Java, orientação a objetos, Spring Boot e integração com IA Generativa.', en: 'Planned topics: Java, object-oriented programming, Spring Boot and Generative AI integration.' },
  },
  {
    name: { pt: 'Kubernetes na Prática: Domine a Orquestração de Contêineres', en: 'Kubernetes na Prática: Domine a Orquestração de Contêineres' },
    institution: 'CPQD · Pontifícia Universidade Católica do Paraná (PUCPR)',
    status: 'in-progress', category: 'infra',
    description: { pt: 'Curso de extensão com formação prática em orquestração de contêineres: configuração de clusters Kubernetes, gerenciamento de Pods e namespaces e uso de kubeadm, containerd e Flannel em ambiente de laboratório.', en: 'University extension course with hands-on container orchestration: configuring Kubernetes clusters, managing Pods and namespaces, and using kubeadm, containerd and Flannel in a lab environment.' },
  },
  {
    name: {
      pt: 'TypeScript do básico ao avançado c/ React e Express (Udemy)',
      en: 'TypeScript from basic to advanced w/ React and Express (Udemy)',
    },
    category: 'frontend',
    highlight: true,
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
    highlight: true,
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
    highlight: true,
  },
  {
    name: {
      pt: 'Go e Gin: Criando API REST com simplicidade (Alura)',
      en: 'Go and Gin: Building REST APIs with simplicity (Alura)',
    },
    category: 'backend',
    highlight: true,
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
    highlight: true,
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
    highlight: true,
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
