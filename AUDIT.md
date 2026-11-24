# Auditoria de conteúdo do portfólio

Verificação realizada em 24/11/2026. Escopo: conteúdo público dos repositórios, links e consistência com as informações confirmadas pelo autor. A consulta à documentação não equivale a executar ou homologar cada projeto.

## Fontes dos destaques

| Projeto | Fonte | Limite de apresentação |
| --- | --- | --- |
| TechSnacks | [Repositório e README](https://github.com/PedroFaria14/Project-Clean-Pos-Engine-TechSnacks), documentação de autenticação, checkout e CI em `backend/docs/` | PDV em evolução com Go/Gin, React/TypeScript, PostgreSQL/GORM e Clean Architecture; não atribuir recursos futuros ao escopo atual. |
| AsyncRunner | [Repositório e README](https://github.com/PedroFaria14/AsyncRunner) | Estudo com armazenamento em memória, worker serial, retries de jobs e webhooks best effort; não é um sistema de produção. |
| Chess Studio | [Repositório e README](https://github.com/PedroFaria14/Chess-System-Java), `backend/pom.xml`, `frontend/package.json` e workflow CI | Java 21, Spring Boot 3.5, Angular 22, persistência e Stockfish; partidas locais ou contra computador, sem multiplayer online concluído. |
| Survive the Destruction | [Repositório e README](https://github.com/PedroFaria14/Jogo-survive-the-destruction) e contrato WebSocket | Multiplayer em tempo real, estado autoritativo no servidor e placar PostgreSQL; reconexão não recupera a participação anterior. |
| CodePath | [Repositório e README](https://github.com/PedroFaria14/Projeto_CodePath), documentação de release Android | Flutter/Dart, FastAPI e Firestore; pontuação validada no servidor e IA opcional configurável. Publicação na Play Store ainda pendente. |
| Jungle Gaming | [Repositório e README](https://github.com/PedroFaria14/Teste-tecnico-Jungle-Gaming), `ARCHITECTURE.md` e referência a `LOAD_TEST.md` | Origem de teste técnico explícita. Carga documentada é de ambiente local; o portfólio não reproduz métricas numéricas. |

Nos destaques com indicador de CI, foi confirmada a existência de workflow em `.github/workflows/`. Os indicadores de testes e documentação representam evidência no repositório, não a execução dessas suítes nesta auditoria.

## Catálogo secundário

- [OrangeVision](https://github.com/PedroFaria14/OrangeVision): distinguir o site React/TypeScript e a API `web_api/` dos componentes Raspberry Pi. Inspeção depende de migration, provisionamento, câmera e calibração.
- [CaixaUNI](https://github.com/PedroFaria14/CaixaUNI): MVP de hackathon; integração Squads em Solana Devnet, com login e parte do estado demonstrativos locais, sem backend próprio.
- [AtaFlow](https://github.com/PedroFaria14/-AtaFlow): README documenta React, FastAPI, PostgreSQL e Docker. Não atribuir SLA, métricas ou qualidade de transcrição não verificados.
- [AttestCredit](https://github.com/PedroFaria14/AttestCredit): projeto solo de hackathon com integração documentada em testnets; não apresentar como produto financeiro de produção.
- [AnonDApp](https://github.com/PedroFaria14/web3-anon-dapp): prova de conceito de mensagens e votações; não garantir anonimato criptográfico ou segurança absoluta.
- [Caminho Seguro](https://github.com/PedroFaria14/caminho-seguro): fork com escopo experimental descrito no GitHub; README genérico, sem comprovação de implantação operacional.
- Workshops [Spring Boot/JPA](https://github.com/PedroFaria14/WorkShop-SpringBoot3-JPA) e [Spring Boot/MongoDB](https://github.com/PedroFaria14/WorkShop-SpringBoot3-MongoDB): projetos de curso/estudo, separados da experiência profissional.
- ReactGram, Secret-Word, Details_Movies, Design-Lab, New_Home, site_JornadaDev e Workshop JavaFX/JDBC: existência pública e descrições consultadas no GitHub. `site_JornadaDev` não tinha README acessível no caminho padrão; sua descrição acadêmica vem dos metadados do repositório.

## Links e disponibilidade

- `https://phfaria.com/` redireciona com HTTP 308 para `https://www.phfaria.com/`, que respondeu HTTP 200. Canonical, Open Graph e sitemap usam esse destino.
- Demos de [Survive](https://survive.phfaria.com/), [AtaFlow](https://ata-flow.phfaria.com/) e [Caminho Seguro](https://caminho-seguro.rcg-tech.com.br/) responderam HTTP 200. Isso não comprova todas as integrações de backend.
- O [vídeo do CodePath](https://www.youtube.com/watch?v=UzxwLV0mMh4) respondeu HTTP 200; seu conteúdo audiovisual não foi auditado.
- O [LinkedIn](https://www.linkedin.com/in/pedrohenriquedefaria/) bloqueou a consulta automatizada com HTTP 999; endereço preservado, verificação manual pendente.
- Cinco repositórios retornaram HTTP 404: `zero-custody-solana-agent`, `Lista_de_Tarefas`, `ProjetoAquario`, `Projeto-Agenda` e `Calculadora-Python`. Os registros permanecem no arquivo secundário, sem links públicos clicáveis. O status 404 não permite distinguir repositório privado, removido ou renomeado.
- A duplicação de Survive entre destaques e catálogo secundário foi eliminada. AsyncRunner possui apenas um registro, com stack e descrição atualizadas.

## Dados confirmados pelo autor

- CPQD: Estagiário de Desenvolvimento de Software (Blockchain), desde março de 2025; período confirmado como `03/2025 — Atual`. Atuação com Go, Python, APIs REST, Docker, Git, Jenkins/CI/CD, blockchain e identidade digital.
- Análise e Desenvolvimento de Sistemas concluído na Universidade Cruzeiro do Sul em julho de 2026; Engenharia da Computação na USF com conclusão prevista para dezembro de 2028.
- **Desenvolvimento de APIs com .NET**: DIO, 15 horas, concluído em 16/11/2026. Formação complementar, não experiência profissional.
- **Itaú — Java com Inteligência Artificial**: DIO, 45 horas, em andamento; tópicos descritos como previstos.
- **Kubernetes na Prática: Domine a Orquestração de Contêineres**: extensão CPQD/PUCPR, em andamento; prática restrita ao contexto de laboratório informado.
- Cursos anteriores preservados em Formação complementar, sem inventar datas ou confirmar conclusão não informada. Nomes oficiais das novas formações preservados em PT/EN, com detalhes traduzidos.

## Limites técnicos

- O site permanece uma SPA React/Vite. Metadados estáticos em inglês; idioma do documento, título e descrições atualizados no navegador ao trocar PT/EN.
- Sem URLs separadas por idioma ou prerenderização. Não atribuir métricas de Core Web Vitals sem medição específica.
- Nenhum deploy, publicação em loja ou execução de transações blockchain faz parte desta atualização do portfólio.
