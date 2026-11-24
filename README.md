# Portfólio — Pedro Pereira

Portfólio one-page em React + Vite + Tailwind CSS v4 + Framer Motion, com direção visual **Premium Elegante** (dark), foco em **Frontend e Full Stack Júnior — React e TypeScript** e suporte a **PT/EN**. Site: https://www.phfaria.com/.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript&logoColor=white)

---

## Visão Geral

Site pessoal de apresentação profissional, contendo:

- **Hero** com digitação do nome, anel giratório e glow na foto
- **Sobre** com soft skills animadas
- **Stack & Habilidades** organizada por categorias (Linguagens, Frameworks, Web3, Infra, Fundamentos)
- **Projetos** com seis destaques iniciais e filtros Frontend, Full Stack, Backend, Java, IA & Automação e Web3
- **Experiência profissional** e **Escolaridade**
- **Cursos & Certificações** com conclusão confirmada, cursos em andamento e formação complementar em seis categorias
- **Contato** com links para LinkedIn, GitHub e e-mail
- **i18n PT/EN**: inglês por padrão + seletor manual e persistência da preferência em `localStorage`; idioma do documento e metadados acompanham a seleção
- **Animações de fundo**: partículas reativas ao mouse, glow com mouse-follow, indicador de seção ativa

---

## Tecnologias

| Camada | Tecnologias |
| ------ | ----------- |
| Framework | React 19 + Vite 8 |
| Estilização | Tailwind CSS v4 (via plugin do Vite) |
| Animações | Framer Motion 12 |
| Ícones | lucide-react + ícones customizados (GitHub/LinkedIn) |
| Idioma | i18n próprio (PT/EN) sem dependência externa |
| Qualidade | TypeScript strict + ESLint + Prettier |

---

## Requisitos

- Node.js 20+ (projeto validado com Node 24)
- yarn 1.x

---

## Instalação

```bash
# clonar
git clone https://github.com/PedroFaria14/Portfolio_PedroPereira.git
cd Portfolio_PedroPereira

# instalar dependências
yarn install
```

---

## Execução

```bash
# ambiente de desenvolvimento
yarn dev

# build de produção
yarn build

# lint
yarn lint

# pré-visualizar o build
yarn preview
```

Após `yarn dev`, acesse `http://localhost:5173`.

---

## Estrutura de Pastas

```text
src/
├── components/        # Componentes de UI (Hero, Navbar, Projects, etc.)
│   ├── BackgroundCanvas.tsx   # Partículas + glow com mouse-follow
│   ├── Chip.tsx               # Chip animado reutilizável (soft skills, stack)
│   ├── Typewriter.tsx         # Efeito de digitação no nome
│   ├── SectionActiveIndicator.tsx  # Indicador lateral de seção ativa
│   └── ...
├── data/
│   └── portfolio.ts   # TODOS os dados editáveis do site
├── i18n/
│   ├── language.ts    # Contexto + hook useLanguage
│   ├── LanguageProvider.tsx   # Provider (inglês padrão + persistência + metadados)
│   ├── translations.ts        # Dicionário PT/EN da UI
│   └── i18n.ts        # Tipos e helper pick()
├── App.tsx            # Composição das seções
├── index.css          # Tema Tailwind (cores, fontes, keyframes)
└── main.tsx           # Bootstrap
```

---

## Como Editar os Dados

Toda a personalização de conteúdo está centralizada em **`src/data/portfolio.ts`**.

Campos traduzíveis usam o formato `{ pt, en }`:

```ts
role: {
  pt: 'Desenvolvedor Full Stack',
  en: 'Full Stack Developer',
},
```

### Seções editáveis

- `profile` — nome, cargo, foco, sobre, e-mail e links sociais
- `softSkills` — lista de soft skills
- `skills` — agrupadas em `languages`, `frameworks`, `web3`, `infra`, `foundations`
- `featuredProjects` / `allProjects` — destaques e catálogo secundário, respectivamente; cada projeto deve existir em apenas uma das listas
- Campos de projeto: `title`, `description`, `stack`, `impact`, `github`, `link`, `video`, `category`, `categories`, `context` e `quality`
- `quality` — indicadores `tests`, `ci` e `docs`, somente quando há evidência no repositório
- `unavailable` — preserva registros antigos fora do catálogo ativo, sem exibir links quebrados
- `experience` — itens de experiência
- `education` — formação acadêmica
- `courseCategories` + `courses` — categorias e cursos; `status`, `institution`, `hours`, `completedAt` (ISO) e `description` são opcionais

> Para destacar um projeto, mova seu registro para `featuredProjects`; não duplique em `allProjects`. Use `categories` para permitir múltiplos filtros. `featured: true` é metadado; a lista determina a exibição inicial.

Cursos com `status: 'completed'` aparecem como concluídos e cursos com `status: 'in-progress'` aparecem em andamento. Os registros anteriores sem status explícito permanecem em **Formação complementar**, sem inventar datas de conclusão. Nomes oficiais das três novas formações são mantidos em português também na interface inglesa, com detalhes traduzidos.

## Conteúdo e verificação

- CPQD: Estagiário de Desenvolvimento de Software (Blockchain), 03/2025 — Atual, conforme confirmação do autor.
- Destaques: TechSnacks, AsyncRunner, Chess Studio, Survive the Destruction, CodePath e Jungle Gaming (teste técnico).
- .NET: **Desenvolvimento de APIs com .NET**, DIO, 15 horas, concluído em 16/11/2026; formação complementar, não experiência profissional.
- Em andamento: bootcamp Itaú — Java com Inteligência Artificial (DIO, 45 horas) e extensão Kubernetes na Prática (CPQD/PUCPR), com atividades de laboratório.
- Repositórios indisponíveis são mantidos em um arquivo secundário acessível pelo filtro **Todos**.
- Fontes, limitações e links da auditoria: [AUDIT.md](AUDIT.md).

Os metadados estáticos usam inglês, acompanhando o idioma padrão. A troca de idioma atualiza o documento no navegador. Não há URLs separadas por idioma ou prerenderização; crawlers que não executam JavaScript recebem os metadados ingleses. Canonical, Open Graph, robots e sitemap usam o domínio final `www.phfaria.com`, destino do redirecionamento do domínio sem `www`.

---

## Tema e Personalização Visual

Cores e fontes ficam em **`src/index.css`** no bloco `@theme`:

```css
@theme {
  --color-base: #0b0c0e;       /* fundo */
  --color-accent: #c9a44a;     /* âmbar (destaques) */
  --color-ink: #f4f2ed;        /* texto principal */
  --color-muted: #a3a6ac;      /* texto secundário */
  --color-border: #23262c;     /* bordas */
}
```

Para trocar a cor de destaque, altere `--color-accent` e `--color-accent-hover`.

---

## Deploy na Vercel

O projeto inclui **`vercel.json`** com headers de segurança:

- `Content-Security-Policy` (script/style/font/img restritos)
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Frame-Options: DENY`

Deploy padrão do Vite na Vercel:

1. Importe o repositório `PedroFaria14/Portfolio_PedroPereira` na Vercel
2. Framework preset: **Vite**
3. Build command: `yarn build`
4. Output directory: `dist`

---

## Acessibilidade

- Animações desativadas automaticamente em `prefers-reduced-motion`
- Interações de mouse desativadas em dispositivos touch
- Navegação por teclado com `focus-visible` nos elementos interativos
- Menu mobile com `aria-expanded` e `aria-label`

---

## Licença

Uso pessoal. Todos os dados e conteúdo pertencem ao autor.
