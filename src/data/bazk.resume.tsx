import { Resume } from "@/models/resume.model";

export const BazkResume: Resume = {
  page: {
    title: {
      en: "Resume",
      pt: "Currículo",
    },
    description: {
      en: "Eduardo Buratti's Resume, software engineer & architect.",
      pt: "Currículo de Eduardo Buratti, arquiteto e engenheiro de software.",
    },
    keywords: [
      {
        en: "resume",
        pt: "currículo",
      },
      {
        en: "software engineer",
        pt: "engenheiro de software",
      },
      {
        en: "developer",
        pt: "desenvolvedor",
      },
      {
        en: "programmer",
        pt: "programador",
      },
      {
        en: "architect",
        pt: "arquiteto",
      },
    ],
  },

  header: {
    name: "Eduardo Luis Buratti",
    tagline: {
      en: "Software Engineer & Architect",
      pt: "Arquiteto & Engenheiro de Software",
    },
    email: "eburatti09@gmail.com",
    phone: {
      en: "+55 (41) 9 9918 4327",
      pt: "(41) 9 9918 4327",
    },
    location: {
      en: "Curitiba, Paraná, Brazil",
      pt: "Curitiba, PR",
    },
    linkedin: "eburatti",
    github: "bazk",
  },

  summary: {
    en: (
      <ul>
        <li>
          Software engineer and architect with over 13 years of experience in
          full-stack web development and more than 3 years in mobile
          development.
        </li>
        <li>
          Specialized in full-stack web technologies (React, Angular, Node.js,
          and .NET), mobile development (iOS, React Native), and cloud services
          (primarily AWS).
        </li>
        <li>
          Experienced in software architecture and technical leadership, guiding
          teams to develop technical solutions aligned with business goals.
        </li>
      </ul>
    ),
    pt: (
      <ul>
        <li>
          Arquiteto e engenheiro de software com mais de 13 anos de experiência
          em desenvolvimento web full-stack e mais de 3 anos em desenvolvimento
          mobile.
        </li>
        <li>
          Especialista em tecnologias web (React, Angular, Node.js e .NET),
          desenvolvimento mobile (iOS, React Native) e serviços de cloud
          (principalmente AWS).
        </li>
        <li>
          Experiência em arquitetura de software e liderança técnica, orientando
          equipes a desenvolver soluções técnicas alinhadas com os objetivos de
          negócios.
        </li>
      </ul>
    ),
  },

  technicalSkills: [
    {
      category: {
        en: "Programming Languages",
        pt: "Linguagens de Programação",
      },
      skills: [
        "JavaScript",
        "TypeScript",
        "C#",
        "Elixir",
        "Python",
        "Swift",
        "Java",
      ],
    },
    {
      category: {
        en: "Frameworks and Tools",
        pt: "Frameworks e Ferramentas",
      },
      skills: [
        "React",
        "Next.js",
        "React Native",
        "Expo",
        ".NET",
        "Swift (iOS)",
        "Angular",
        "Angular.js",
        "NestJS",
        "GraphQL",
        "Django",
        "Flask",
      ],
    },
    {
      category: {
        en: "Databases",
        pt: "Bancos de Dados",
      },
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "TypeORM",
        "Sequelize",
      ],
    },
    {
      category: {
        en: "Cloud & DevOps",
        pt: "Cloud & DevOps",
      },
      skills: [
        "Amazon AWS",
        "GCP",
        "Docker",
        "Kubernetes",
        "Terraform (IaC)",
        "GitLab CI/CD",
        "Azure DevOps",
      ],
    },
    {
      category: {
        en: "Team & Management",
        pt: "Equipe & Gestão",
      },
      skills: ["Lean", "Agile", "Scrum", "SAFe"],
    },
  ],

  softSkills: [
    {
      en: "Quick to learn and share technical knowledge",
      pt: "Aprendizagem rápida e habilidade em compartilhar conhecimentos",
    },
    {
      en: "Technical leadership",
      pt: "Liderança técnica",
    },
    {
      en: "Business vision",
      pt: "Visão de negócio",
    },
    {
      en: "Motivated and creative when facing challenges",
      pt: "Motivado e criativo diante de desafios",
    },
  ],

  languages: [
    {
      language: {
        en: "Portuguese",
        pt: "Português",
      },
      proficiency: {
        en: "Native",
        pt: "Nativo",
      },
    },
    {
      language: {
        en: "English",
        pt: "Inglês",
      },
      proficiency: {
        en: "Advanced reading, writing, and conversation",
        pt: "Leitura, escrita e conversação avançada",
      },
    },
  ],

  jobExperiences: [
    {
      title: {
        en: "Software Architect",
        pt: "Arquiteto de Software",
      },
      company: "GFT",
      fromDate: new Date("2022-01-01"),
      description: {
        en: (
          <p>
            As a software architect at GFT, I support various projects by
            resolving technical issues and assisting the commercial team. My
            role involves aligning customer needs with robust, scalable, and
            efficient technical solutions.
          </p>
        ),
        pt: (
          <p>
            Como arquiteto de software na GFT, apoio diversos projetos na
            resolução de problemas técnicos e assisto a equipe comercial. Meu
            papel envolve alinhar as necessidades dos clientes com soluções
            técnicas robustas, escaláveis e eficientes.
          </p>
        ),
      },
      projects: [
        {
          title: { en: "Sofisa Bank", pt: "Banco Sofisa" },
          description: {
            en: (
              <>
                <p>
                  Developed a new Mobile and Web application for Banco
                  Sofisa&apos;s corporate clients. The challenge was
                  simultaneous development for both platforms while maximizing
                  code reuse. I led the technical solution design and commercial
                  proposal, selecting React Native for its cross-platform
                  capabilities, and provided technical leadership during
                  development to ensure quality and efficiency.
                </p>
                <ul>
                  <li>
                    Mobile and web architecture and development with{" "}
                    <strong>React Native</strong> and <strong>Expo</strong>
                  </li>
                  <li>
                    DevOps pipeline maintenance with{" "}
                    <strong>Azure DevOps</strong>
                  </li>
                  <li>Technical leadership, mentoring, and team development</li>
                </ul>
              </>
            ),
            pt: (
              <>
                <p>
                  Desenvolvi uma nova aplicação Mobile e Web para os clientes
                  corporativos do Banco Sofisa. O desafio foi o desenvolvimento
                  simultâneo para ambas as plataformas, maximizando o
                  reaproveitamento de código. Liderei a concepção da solução
                  técnica e a proposta comercial, escolhendo React Native por
                  suas capacidades multiplataforma, e forneci liderança técnica
                  durante o desenvolvimento para garantir qualidade e
                  eficiência.
                </p>
                <ul>
                  <li>
                    Arquitetura e desenvolvimento mobile e web com{" "}
                    <strong>React Native</strong> e <strong>Expo</strong>
                  </li>
                  <li>
                    Manutenção de esteira DevOps com{" "}
                    <strong>Azure DevOps</strong>
                  </li>
                  <li>
                    Liderança técnica, mentoria e desenvolvimento de equipes
                  </li>
                </ul>
              </>
            ),
          },
        },
        {
          title: {
            en: "GFT Digital Studio - Business Development",
            pt: "GFT Digital Studio - Desenvolvimento de Negócios",
          },
          description: {
            en: (
              <>
                <p>
                  The Digital Studio at GFT centralizes expertise in digital
                  channels, customer experience, agility, and digital assets. I
                  support commercial activities related to digital channels,
                  aligning customer needs with innovative and optimized
                  technical solutions. Additionally, we conduct training and
                  qualification actions for GFT professionals, enhancing our
                  community of Mobile and Web developers.
                </p>
                <ul>
                  <li>Solution architecture and project estimation</li>
                  <li>Development of commercial proposals</li>
                  <li>
                    Development of new business in the area of digital channels
                  </li>
                  <li>
                    Training and qualification of professionals in technologies
                    for digital channels
                  </li>
                  <li>Technical leadership, mentoring, and team development</li>
                </ul>
              </>
            ),
            pt: (
              <>
                <p>
                  O Digital Studio da GFT centraliza expertise em canais
                  digitais, experiência do cliente, agilidade e ativos digitais.
                  Apoio atividades comerciais relacionadas a canais digitais,
                  alinhando as necessidades dos clientes com soluções técnicas
                  inovadoras e otimizadas. Além disso, realizamos ações de
                  treinamento e qualificação para profissionais da GFT,
                  aprimorando nossa comunidade de desenvolvedores Mobile e Web.
                </p>
                <ul>
                  <li>Arquitetura de soluções e estimativa de projetos</li>
                  <li>Construção de propostas comerciais</li>
                  <li>
                    Desenvolvimento de novos negócios na área de canais digitais
                  </li>
                  <li>
                    Treinamento e capacitação de profissionais em tecnologias
                    para canais digitais
                  </li>
                  <li>
                    Liderança técnica, mentoria e desenvolvimento de equipes
                  </li>
                </ul>
              </>
            ),
          },
        },
        {
          title: "Bradesco Bank",
          description: {
            en: (
              <>
                <p>
                  Bradesco Bank, based in Florida, serves over 11,000
                  non-resident customers in the US. I led a team to modernize
                  the full-stack Web application experience using React and
                  Python. The main challenge was aligning with various
                  third-party tools to develop improvements within their
                  limitations. We made structural technology improvements while
                  delivering optimized customer journeys.
                </p>
                <ul>
                  <li>
                    Full-stack architecture and development with{" "}
                    <strong>React</strong> and <strong>Python</strong>
                  </li>
                  <li>
                    Maintenance of DevOps pipeline with <strong>Gitlab</strong>
                  </li>
                  <li>Technical leadership, mentoring, and team development</li>
                </ul>
              </>
            ),
            pt: (
              <>
                <p>
                  O Bradesco Bank, localizado na Flórida, atende mais de 11 mil
                  clientes não-residentes nos EUA. Liderei uma equipe para
                  modernizar a experiência da aplicação Web full-stack usando
                  React e Python. O principal desafio foi alinhar com várias
                  ferramentas de terceiros para desenvolver melhorias dentro de
                  suas limitações. Fizemos melhorias estruturais na tecnologia
                  enquanto entregávamos jornadas otimizadas para os clientes.
                </p>
                <ul>
                  <li>
                    Arquitetura e desenvolvimento full-stack com{" "}
                    <strong>React</strong> e <strong>Python</strong>
                  </li>
                  <li>
                    Manutenção de esteira DevOps com <strong>Gitlab</strong>
                  </li>
                  <li>
                    Liderança técnica, mentoria e desenvolvimento de equipes
                  </li>
                </ul>
              </>
            ),
          },
        },
        {
          title: { en: "GFT Internal Project", pt: "Projeto Interno GFT" },
          description: {
            en: (
              <>
                <p>
                  I led the development of a management tool at GFT, from
                  project conception to solution architecture, including Cloud
                  infrastructure (AWS), development pipeline (Gitlab CI,
                  Cypress, AWS Serverless), back-end (.NET), and front-end
                  (Angular). I led the development and testing team throughout
                  the delivery of various features.
                </p>
                <ul>
                  <li>
                    Full-stack architecture and development with{" "}
                    <strong>React</strong> and <strong>.NET (C#)</strong>
                  </li>
                  <li>
                    Development and maintenance of DevOps pipeline with{" "}
                    <strong>Gitlab</strong>
                  </li>
                  <li>
                    Cloud architecture based on <strong>AWS</strong>
                  </li>
                  <li>Technical leadership, mentoring, and team development</li>
                </ul>
              </>
            ),
            pt: (
              <>
                <p>
                  Liderei o desenvolvimento de uma ferramenta de gestão na GFT,
                  desde a concepção do projeto até a arquitetura da solução,
                  incluindo infraestrutura Cloud (AWS), pipeline de
                  desenvolvimento (Gitlab CI, Cypress, AWS Serverless), back-end
                  (.NET) e front-end (Angular). Liderei a equipe de
                  desenvolvimento e testes durante a entrega de várias
                  funcionalidades.
                </p>
                <ul>
                  <li>
                    Arquitetura e desenvolvimento full-stack com{" "}
                    <strong>React</strong> e <strong>.NET (C#)</strong>
                  </li>
                  <li>
                    Construção e manutenção de esteira DevOps com{" "}
                    <strong>Gitlab</strong>
                  </li>
                  <li>
                    Arquitetura Cloud baseada em <strong>AWS</strong>
                  </li>
                  <li>
                    Liderança técnica, mentoria e desenvolvimento de equipes
                  </li>
                </ul>
              </>
            ),
          },
        },
        {
          title: "Mitre Realty",
          description: {
            en: (
              <>
                <p>
                  Mitre Realty, as a company in the civil construction industry,
                  developed a mobile application called Mitre Experience, based
                  on React Native, Node.js, and Oracle, to stay close to its
                  customers. I acted as the technical leader in a squad focused
                  on evolving this product, delivering personalized experiences
                  to users based on data and geolocation. Additionally, I
                  optimized the automated testing and development pipeline using
                  Gitlab CI, Playwright, and App Center+CodePush.
                </p>
                <ul>
                  <li>
                    Development with <strong>React</strong> and{" "}
                    <strong>React Native</strong>
                  </li>
                  <li>
                    Unit testing with <strong>Jest</strong>
                  </li>
                  <li>
                    Maintenance of the DevOps pipeline with{" "}
                    <strong>Gitlab</strong> and <strong>AppCenter</strong>
                  </li>
                  <li>Technical leadership, mentoring, and team development</li>
                </ul>
              </>
            ),
            pt: (
              <>
                <p>
                  A Mitre Realty, como empresa no ramo de construção civíl,
                  desenvolveu um aplicativo mobile chamado Mitre Experience,
                  baseado em React Native, Node.js e Oracle, para se manter
                  próxima de seus clientes. Atuei como líder técnico em um squad
                  focado na evolução deste produto, entregando experiências
                  personalizadas aos usuários com base em dados e
                  geolocalização. Além disso, otimizei a esteira de testes
                  automatizados e desenvolvimento usando Gitlab CI, Playwright e
                  App Center+CodePush.
                </p>
                <ul>
                  <li>
                    Desenvolvimento com <strong>React</strong> e{" "}
                    <strong>React Native</strong>
                  </li>
                  <li>
                    Testes unitários com <strong>Jest</strong>
                  </li>
                  <li>
                    Manutenção da esteira DevOps com <strong>Gitlab</strong> e{" "}
                    <strong>AppCenter</strong>.
                  </li>
                  <li>
                    Liderança técnica, mentoria e desenvolvimento de equipes
                  </li>
                </ul>
              </>
            ),
          },
        },
        {
          title: "Share Student Living",
          description: {
            en: (
              <>
                <p>
                  I led a team at Share Student Living, a Mitre group spin-off
                  focused on shared apartment rentals for university students. I
                  worked on the mobile application (React Native), implementing
                  new features for self-service requests, reducing the need for
                  call center contact. I also optimized the back-office system,
                  improving user journeys and reducing execution time for
                  various activities.
                </p>
                <ul>
                  <li>
                    Development with <strong>React</strong> and{" "}
                    <strong>React Native</strong>
                  </li>
                  <li>
                    Unit testing with <strong>Jest</strong>
                  </li>
                  <li>
                    Maintenance of the DevOps pipeline with{" "}
                    <strong>Gitlab</strong>
                  </li>
                  <li>Technical leadership, mentoring, and team development</li>
                </ul>
              </>
            ),
            pt: (
              <>
                <p>
                  Liderei uma equipe na Share Student Living, uma spin-off do
                  grupo Mitre focada em aluguel de apartamentos compartilhados
                  para estudantes universitários. Trabalhei no aplicativo mobile
                  (React Native), implementando novas funcionalidades para
                  requisições self-service, reduzindo a necessidade de contato
                  com o call center. Também otimizei o sistema de back-office,
                  melhorando as jornadas de usuário e reduzindo o tempo de
                  execução de várias atividades.
                </p>
                <ul>
                  <li>
                    Desenvolvimento com <strong>React</strong> e{" "}
                    <strong>React Native</strong>
                  </li>
                  <li>
                    Testes unitários com <strong>Jest</strong>
                  </li>
                  <li>
                    Manutenção da esteira DevOps com <strong>Gitlab</strong>
                  </li>
                  <li>
                    Liderança técnica, mentoria e desenvolvimento de equipes
                  </li>
                </ul>
              </>
            ),
          },
        },
      ],
    },

    {
      title: { en: "Front-end Developer", pt: "Desenvolvedor Front-end" },
      company: "GFT",
      fromDate: new Date("2019-07-01"),
      toDate: new Date("2021-12-01"),
      projects: [
        {
          title: "Banco BV",
          description: {
            en: (
              <>
                <p>
                  I worked as a front-end developer on a project to modernize
                  and restructure Banco BV&apos;s digital channels. My role
                  involved migrating several legacy technologies (Angular.js,
                  JSP, etc.) to more modern and flexible platforms (Angular
                  9/11, Liferay, etc.), transforming the entire content
                  management workflow. I also participated in the bank&apos;s
                  brand update process, making progressive adjustments to the
                  visual and verbal communication of the channels (website, web
                  application). Additionally, I worked with the Adobe Maxymiser
                  platform for A/B testing, later migrating to Salesforce
                  Marketing Cloud and Interaction Studio.
                </p>
                <ul>
                  <li>
                    Development with <strong>Angular</strong> and{" "}
                    <strong>Angular.js</strong>
                  </li>
                  <li>
                    Unit testing with <strong>Karma</strong> and{" "}
                    <strong>Jasmine</strong>
                  </li>
                  <li>
                    Maintenance of the DevOps pipeline with{" "}
                    <strong>Jenkins</strong>
                  </li>
                  <li>
                    Modernization of legacy CMS platforms (
                    <strong>OpenCMS</strong> to <strong>Liferay</strong>)
                  </li>
                  <li>Implementation of A/B tests</li>
                </ul>
              </>
            ),
            pt: (
              <>
                <p>
                  Atuei como desenvolvedor front-end no projeto de modernização
                  e reestruturação dos canais digitais do Banco BV. Minha função
                  envolveu a migração de várias tecnologias legadas (Angular.js,
                  JSP, etc.) para plataformas mais modernas e flexíveis (Angular
                  9/11, Liferay, etc.), transformando todo o fluxo de gestão de
                  conteúdo. Também participei do processo de atualização da
                  marca do banco, realizando ajustes progressivos na comunicação
                  visual e verbal dos canais (site, aplicativo web). Além disso,
                  trabalhei com a plataforma Adobe Maxymiser para testes A/B,
                  migrando posteriormente para o Salesforce Marketing Cloud e
                  Interaction Studio.
                </p>
                <ul>
                  <li>
                    Desenvolvimento com <strong>Angular</strong> e{" "}
                    <strong>Angular.js</strong>
                  </li>
                  <li>
                    Testes unitários com <strong>Karma</strong> e{" "}
                    <strong>Jasmine</strong>
                  </li>
                  <li>
                    Manutenção da esteira DevOps com <strong>Jenkins</strong>
                  </li>
                  <li>
                    Modernização de plataformas CMS legadas (
                    <strong>OpenCMS</strong> para <strong>Liferay</strong>)
                  </li>
                  <li>Implementação de testes A/B</li>
                </ul>
              </>
            ),
          },
        },
      ],
    },

    {
      title: { en: "Co-founder & CTO", pt: "Co-fundador & CTO" },
      company: "Contraktor",
      fromDate: new Date("2016-09-01"),
      toDate: new Date("2019-04"),
      description: {
        en: (
          <>
            <p>
              As a co-founder of the startup, I played a crucial role in
              developing the main product from the ground up. Today, it is
              actively used by its numerous clients, streamlining various
              contract management tasks, including document creation and digital
              signatures.
            </p>
            <ul>
              <li>
                Development of front-end applications using{" "}
                <strong>React</strong> (redux, styled-components, etc.)
              </li>
              <li>
                API modeling with <strong>REST</strong> and{" "}
                <strong>GraphQL</strong>
              </li>
              <li>
                Back-end development with <strong>Elixir</strong> and{" "}
                <strong>Node.js</strong>
              </li>
              <li>
                Cloud computing infrastructure management, primarily with{" "}
                <strong>Amazon AWS</strong>
              </li>
              <li>
                CI/CD pipeline development using <strong>Gitlab CI/CD</strong>
              </li>
              <li>
                Cloud resources configuration and provisioning with{" "}
                <strong>Kubernetes</strong> and <strong>Terraform</strong>
              </li>
              <li>Team and project management</li>
              <li>
                Provided technical leadership, mentoring, and team development
              </li>
            </ul>
          </>
        ),
        pt: (
          <>
            <p>
              Como co-fundador, contribuí desde o início para a construção do
              produto principal. Atualmente, ele é utilizado por diversas
              empresas, facilitando tarefas relacionadas à gestão de contratos,
              incluindo criação de documentos e assinaturas digitais.
            </p>
            <ul>
              <li>
                Desenvolvimento de aplicações front-end com{" "}
                <strong>React</strong> (redux, styled-components, etc.)
              </li>
              <li>
                Modelagem de APIs com <strong>REST</strong> e{" "}
                <strong>GraphQL</strong>
              </li>
              <li>
                Construção de sistemas back-end com <strong>Elixir</strong> e{" "}
                <strong>Node.js</strong>
              </li>
              <li>
                Gerenciamento de infraestrutura de computação em nuvem,
                principalmente com <strong>Amazon AWS</strong>
              </li>
              <li>
                Implementação de CI/CD usando <strong>Gitlab</strong>
              </li>
              <li>
                Configuração e provisionamento de recursos em nuvem com{" "}
                <strong>Kubernetes</strong> e <strong>Terraform</strong>
              </li>
              <li>Geranciamento de projetos e equipes</li>
              <li>Liderança técnica, mentoria e desenvolvimento de equipes</li>
            </ul>
          </>
        ),
      },
    },

    {
      title: { en: "Software Developer", pt: "Desenvolvedor" },
      company: "Centro de Computação Científica e Software Livre (C3SL)",
      fromDate: new Date("2011-08-01"),
      toDate: new Date("2016-11-01"),
      description: {
        en: (
          <>
            <p>
              Web development on two projects: PROINFODATA and &ldquo;
              <em>
                Sistema Integrado de Monitoramento do Ministério das
                Comunicações
              </em>{" "}
              (SIMMC)&rdquo;. I was involved from the beginning in both
              projects, which are now widely used by the Brazilian government.
              Reaching over 2,520 cities across the country, their goal is to
              monitor and assess the effectiveness of investments made in
              hardware and network technology in social programs.
            </p>
            <ul>
              <li>
                Full-stack Web application development with Play Framework (
                <strong>Java</strong>) and <strong>Angular.js</strong>
              </li>
              <li>
                RESTful API development with <strong>Node.js</strong>
              </li>
              <li>
                <strong>Data Warehouse</strong> development and maitenance
              </li>
              <li>
                Database operation with <strong>PostgreSQL</strong> and{" "}
                <strong>MongoDB</strong>
              </li>
              <li>
                <strong>Docker</strong> services deployment and management
              </li>
              <li>
                Trained teams in <strong>Node.js</strong> and{" "}
                <strong>Angular.js</strong>
              </li>
            </ul>
          </>
        ),
        pt: (
          <>
            <p>
              Desenvolvimento Web para os projetos PROINFODATA e Sistema
              Integrado de Monitoramento do Ministério das Comunicações (SIMMC).
              Participei desde o início do desenvolvimento dos projetos, que
              hoje são amplamente utilizados pelo governo brasileiro, atingindo
              mais de 2.520 municípios em todo o Brasil. O objetivo é monitorar
              a eficácia dos investimentos em recursos de hardware e rede
              realizados em programas sociais.
            </p>
            <ul>
              <li>
                Desenvolvimento full-stack de aplicações Web com os frameworks
                Play (<strong>Java</strong>) e <strong>Angular.js</strong>
              </li>
              <li>
                Criação de APIs RESTful com <strong>Node.js</strong>
              </li>
              <li>
                Modelagem e manutenção de <strong>Data Warehouses</strong>
              </li>
              <li>
                Administração de bancos de dados <strong>PostgreSQL</strong> e{" "}
                <strong>MongoDB</strong>
              </li>
              <li>
                Deploy de serviços utilizando <strong>Docker</strong>
              </li>
              <li>
                Treinamento de equipes em <strong>Node.js</strong> e{" "}
                <strong>Angular.js</strong>
              </li>
            </ul>
          </>
        ),
      },
    },
  ],

  academicExperiences: [
    {
      title: {
        en: "Bachelor of Computer Science",
        pt: "Bacharelado em Ciência da Computação",
      },
      organization: "Universidade Federal do Paraná (UFPR)",
      fromDate: new Date("2009-07-01"),
      toDate: new Date("2014-12-01"),
      projects: [
        {
          title: {
            en: "Scientific Research Program",
            pt: "Programa de Iniciação Científica",
          },
          fromDate: new Date("2012-07-01"),
          toDate: new Date("2013-07-01"),
          description: {
            en: (
              <>
                <p>
                  Participated in the Institutional Program of Scientific
                  Research at the Federal University of Paraná. Published in
                  EVINCI 2014:{" "}
                  <em>
                    &ldquo;Artificial Neural Networks Applied to Swarm
                    Robotics&rdquo;
                  </em>
                  .
                </p>
                <p>
                  Advisor: Prof. Dr. Eduardo Jaques Spinosa - Information
                  Technology Department (UFPR)
                </p>
              </>
            ),
            pt: (
              <>
                <p>
                  Programa Institucional de Iniciação Científica na Universidade
                  Federal do Paraná. Publicação no EVINCI 2014:{" "}
                  <em>
                    &ldquo;Redes Neurais Artificiais Aplicadas à Robótica de
                    Enxame&rdquo;
                  </em>
                  .
                </p>
                <p>
                  Orientador: Prof. Dr. Eduardo Jaques Spinosa - Departamento de
                  Informática (UFPR)
                </p>
              </>
            ),
          },
        },
      ],
    },
  ],

  publications: [
    {
      title:
        "A Case Study of the Aggregation Query Model in Read-Mostly NoSQL Document Stores",
      journal: "IDEAS 2016",
      publicationDate: new Date("2016-07-01"),
      doi: "10.1145/2938503.2938546",
      description: {
        en: (
          <p>
            This paper, presented at the IDEAS 2016 conference, compiles the
            results of research conducted at the &quot;Centro de Computação
            Científica e Software Livre (C3SL)&quot;. It explores the use of
            NoSQL databases in the context of Data Warehouses and demonstrates
            how these concepts were applied in our projects.
          </p>
        ),
        pt: (
          <p>
            Este artigo, apresentado na conferência IDEAS 2016, compila os
            resultados da pesquisa realizada no Centro de Computação Científica
            e Software Livre (C3SL). Ele explora o uso de bancos de dados NoSQL
            no contexto de Data Warehouses e demonstra como esses conceitos
            foram aplicados em nossos projetos.
          </p>
        ),
      },
    },
  ],

  certifications: [
    {
      title: "AWS Certified Solutions Architect - Associate",
      organization: "Amazon Web Services (AWS)",
      issueDate: new Date("2020-03-01"),
      expirationDate: new Date("2023-03-01"),
      link: "https://www.credly.com/badges/01442cb9-4225-46fb-8c45-dc35437e837f",
      image: {
        src: "/images/aws-certified-solutions-architect.png",
        width: 300,
        height: 300,
      },
    },
  ],
};
