# Relatório — Cursos e Certificações

## Resultado

- 36 cursos preservados, todos com status **Concluído**, conforme a confirmação mais recente do titular, incluindo Itaú/DIO e Kubernetes CPQD/PUCPR. Essa confirmação substitui os status anteriores desses dois cursos.
- Nome do curso separado de instituição e plataforma; 19 registros com instituição conhecida, 2 com a plataforma Coursera e 15 sem instituição/plataforma confirmada.
- Datas removidas do modelo de cursos e da apresentação.
- Cargas horárias preservadas somente quando confirmadas: .NET (15 horas) e Itaú/DIO (45 horas).
- Nenhum link de certificado fornecido; nenhum botão de certificado é exibido atualmente. O componente suporta o campo opcional `certificateUrl` para links futuros confirmados.
- Um único `CourseCard` para todos os registros, com categoria, status, instituição/plataforma conhecida e carga confirmada.
- Nove destaques iniciais; **Ver todos os cursos** expande para 36 cartões únicos e **Mostrar menos** retorna aos nove.
- Nomes oficiais das formações .NET, Itaú e Kubernetes preservados em português também na versão inglesa; detalhes e controles traduzidos.

## Relação completa

Todos os registros abaixo estão concluídos. **Pendente** nesta tabela é uma pendência administrativa de instituição, nunca um texto exibido aos visitantes. ★ indica destaque inicial.

| Nº | Curso | Instituição ou plataforma | Área | Horas confirmadas |
| --- | --- | --- | --- | --- |
| 1 ★ | TypeScript do Básico ao Avançado com React e Express | Udemy | Frontend & JavaScript | — |
| 2 | TypeScript Part 1: Evolving Your JavaScript | Alura | Frontend & JavaScript | — |
| 3 ★ | React do Básico ao Avançado | Udemy | Frontend & JavaScript | — |
| 4 | Web Frontend Fundamentos: HTML5, CSS3 e JavaScript | Udemy | Frontend & JavaScript | — |
| 5 | Introdução a Vue | Pendente | Frontend & JavaScript | — |
| 6 ★ | SOLID Aplicado ao React | Alura | Frontend & JavaScript | — |
| 7 ★ | Go e Gin: Criando API REST com Simplicidade | Alura | Backend, Java & APIs | — |
| 8 | Go: A Linguagem do Google | Alura | Backend, Java & APIs | — |
| 9 | Go: Orientação a Objetos | Alura | Backend, Java & APIs | — |
| 10 | Go: Boas Práticas em Projetos | Alura | Backend, Java & APIs | — |
| 11 | Trilha Aprenda a Programar em Go | Alura | Backend, Java & APIs | — |
| 12 ★ | Java — Programação Orientada a Objetos | Udemy | Backend, Java & APIs | — |
| 13 | Java Web com JSP e MySQL | Pendente | Backend, Java & APIs | — |
| 14 | REST API com Docker e AWS | Pendente | Backend, Java & APIs | — |
| 15 ★ | Desenvolvimento de APIs com .NET | DIO — Digital Innovation One | Backend, Java & APIs | 15 |
| 16 ★ | Itaú — Java com Inteligência Artificial | Itaú / DIO | Backend, Java & APIs | 45 |
| 17 | Blockchain Basics | Cyfrin Updraft | Blockchain & Web3 | — |
| 18 | Blockchain: Aumente a Confiança da Sua Aplicação | Alura | Blockchain & Web3 | — |
| 19 ★ | Docker: Criando e Gerenciando Containers | Alura | Infraestrutura & DevOps | — |
| 20 | Endpoint Security | Pendente | Infraestrutura & DevOps | — |
| 21 | 5G — Básico | Pendente | Infraestrutura & DevOps | — |
| 22 | MongoDB: Validando Dados | Alura | Infraestrutura & DevOps | — |
| 23 ★ | Kubernetes na Prática: Domine a Orquestração de Contêineres | CPQD / PUCPR | Infraestrutura & DevOps | — |
| 24 | SOLID: Os 5 Princípios para as Boas Práticas da POO | Pendente | Fundamentos, IA & Desenvolvimento | — |
| 25 | Introdução à Inteligência Artificial | Pendente | Fundamentos, IA & Desenvolvimento | — |
| 26 | Introdução a Machine Learning | Pendente | Fundamentos, IA & Desenvolvimento | — |
| 27 | Introdução ao Desenvolvimento de Jogos | Pendente | Fundamentos, IA & Desenvolvimento | — |
| 28 | Felicidade e Qualidade de Vida | Pendente | Fundamentos, IA & Desenvolvimento | — |
| 29 | Microsoft Excel 2016 — Avançado | Fundação Bradesco | Dados, Power BI & Análise | — |
| 30 | Introdução ao Power BI | Pendente | Dados, Power BI & Análise | — |
| 31 | Power BI Completo | Pendente | Dados, Power BI & Análise | — |
| 32 | Modelando Dados no Power BI | Pendente | Dados, Power BI & Análise | — |
| 33 | Análise de Dados no Power BI | Pendente | Dados, Power BI & Análise | — |
| 34 | Preparando Dados para Análise (Microsoft Power BI) | Emissor pendente | Dados, Power BI & Análise | — |
| 35 | Análise de Dados em R | Coursera (plataforma) | Dados, Power BI & Análise | — |
| 36 | Análise de Dados | Coursera (plataforma) | Dados, Power BI & Análise | — |

## Instituições a confirmar

Registros **5, 13, 14, 20, 21, 24–28 e 30–34**: instituição/plataforma ainda não fornecida. O campo fica ausente na interface, sem placeholders públicos.

Registros **35 e 36**: Coursera é a plataforma confirmada; instituição emissora não informada. A interface os identifica explicitamente como **Plataforma: Coursera**.

## Correções de dados e apresentação

- Retirados sufixos de instituição dos títulos e o prefixo Coursera dos nomes.
- Padronizados capitalização, JavaScript por extenso, Power BI e a nomenclatura da trilha Go.
- Categorias apresentadas em cada cartão e traduzidas para inglês.
- Status obrigatório no tipo `Course`, sem inferência de conclusão por ausência de valor.
- Nenhuma nova carga, data, instituição ou URL inferida de nomes de cursos ou tecnologias.
