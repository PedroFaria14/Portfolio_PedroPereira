# Portfólio — Pedro Pereira - https://portfolio-pedro-pereira.vercel.app/

Portfólio one-page em React + Vite + Tailwind CSS v4 + Framer Motion, com direção visual **Premium Elegante** (dark), foco em **Sistemas Escaláveis & Web3** e suporte completo a **PT/EN**.

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
- **Projetos** em destaque + lista completa (26 projetos)
- **Experiência profissional** e **Escolaridade**
- **Cursos & Certificações** (34 cursos em 6 categorias)
- **Contato** com links para LinkedIn, GitHub e e-mail
- **i18n PT/EN**: detecção automática por `navigator.language` + seletor manual
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
│   ├── LanguageProvider.tsx   # Provider (detecção + persistência)
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
- `featuredProjects` / `allProjects` — projetos (campos `title`, `description`, `stack`, `impact`, `link`, `featured`, `category`)
- `experience` — itens de experiência
- `education` — formação acadêmica
- `courseCategories` + `courses` — categorias e cursos

> Dica: para adicionar um projeto, basta incluir um objeto em `allProjects`. Marque `featured: true` para aparecer na seção de destaque.

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
