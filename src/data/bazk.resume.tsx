import { Resume } from "@/models/resume.model";

export const BazkResume: Resume = {
  page: {
    title: {
      en: "Resume",
      pt: "Currículo",
    },
    description: {
      en: "Eduardo Buratti's Resume, software engineer.",
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
        en: "arquiteto",
        pt: "arquiteto",
      },
    ],
  },

  header: {
    name: "Eduardo Luis Buratti",
    tagline: {
      en: "Software Engineer",
      pt: "Arquiteto & Engenheiro de Software | Canais Digitais",
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
          Software engineer & architect with more than 12 years of experience in
          digital channels.
        </li>
        <li>
          Focus on Web technologies (React, Angular and Vue), Mobile (iOS, React
          Native) and Cloud (AWS mainly).
        </li>
        <li>
          Experienced in the roles of software architect and technical
          leadership, helping teams develop technical solutions aligned with the
          business vision.
        </li>
      </ul>
    ),
    pt: (
      <ul>
        <li>
          Arquiteto e engenheiro de software com mais de 12 anos de experiência
          em canais digitais.
        </li>
        <li>
          Foco em tecnologias Web (React, Angular e Vue), Mobile (iOS, React
          Native) e Cloud (AWS principalmente).
        </li>
        <li>
          Experiente nos papéis de arquitetura e liderança técnica, auxiliando
          os times a desenvolver soluções técnicas alinhas com a visão de
          negócio.
        </li>
      </ul>
    ),
  },

  technicalSkills: [
    {
      category: {
        en: "Programming languages",
        pt: "Linguagens de programação",
      },
      skills: ["JavaScript", "TypeScript", "Elixir", "Python", "Java"],
    },
    {
      category: {
        en: "Frameworks and tools",
        pt: "Frameworks e ferramentas",
      },
      skills: [
        "React",
        "Next.js",
        "React Native",
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
        pt: "Banco de dados",
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
        "AppCenter",
      ],
    },
    {
      category: {
        en: "Team & Management",
        pt: "Equipe & Gestão",
      },
      skills: ["Lean", "Agile Software Development", "Scrum"],
    },
  ],

  softSkills: [
    {
      en: "Ease of learning and sharing new concepts and technologies",
      pt: "Facilidade no aprendizado e compartilhamento de novos conceitos e tecnologias",
    },
    {
      en: "Technical leadership",
      pt: "Liderança técnica",
    },
    {
      en: "Bussiness vision",
      pt: "Visão de negócio",
    },
    {
      en: "Motivated and creative in face of challenges",
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
        en: "Advanced reading, writing and conversation",
        pt: "Leitura, escrita e conversação avançada",
      },
    },
  ],

  jobExperiences: [
    {
      title: {
        en: "Digital Channels Architect",
        pt: "Arquiteto de Canais Digitais",
      },
      company: "GFT",
      fromDate: { en: "January 2022", pt: "Janeiro 2022" },
      toDate: { en: "present", pt: "atualmente" },
      description: {
        en: (
          <p>
            As a software architect at GFT, in addition to supporting various
            projects in resolving technical issues, I also play a support role
            for the commercial team, seeking to align our customers needs with
            robust, scalable, and efficient technical solutions.
          </p>
        ),
        pt: (
          <p>
            Como arquiteto de software na GFT, além de apoiar diversos projetos
            na resolução de problemas técnicos, também desempenho um papel de
            apoio ao time comercial, buscando aliar as necessidades de nossos
            clientes a soluções técnicas robustas, escaláveis e eficientes.
          </p>
        ),
      },
      projects: [
        {
          title: "GFT Digital Studio",
          description: {
            en: (
              <p>
                The Digital Studio is the area of GFT that centralizes the
                expertise in digital channels (Web and Mobile development),
                customer experience, agility, and digital assets. My focus on
                the team is to support commercial activities in opportunities
                related to digital channels, combining the needs of our
                customers with the search for innovative and optimized technical
                solutions. In addition, we carry out various training and
                qualification actions for GFT professionals, evolving our
                community of Mobile and Web developers.
              </p>
            ),
            pt: (
              <p>
                O Digital Studio é a área da GFT que centraliza as expertises de
                canais digitais (desenvolvimento Web e Mobile), experiência do
                cliente, agilidade e assets digitais. Meu foco no time é apoiar
                nas atividades comerciais em oportunidades relacionadas a canais
                digitais, aliando as necessidades de nossos clientes a busca por
                soluções técnicas inovadoras e otimizadas. Além disso,
                realizamos diversas ações de treinamento e capacitação dos
                profissionais GFT, evoluindo nossa comunidade de desenvolvedores
                Mobile e Web.
              </p>
            ),
          },
        },
        {
          title: "Bradesco Bank",
          description: {
            en: (
              <p>
                Bradesco Bank, based in Coral Gables, Florida, is a division of
                Bradesco focused on providing financial services to more than
                11,000 non-resident customers in the United States. I
                participated in the modernization of the Mobile and Web
                application experience, leading a development team focused on
                React and Python technologies. The biggest challenge was
                alignment with various third-party tools that made up the
                application, with the goal of developing improvements within the
                limitations of these. We made several structural improvements in
                technology, while delivering more optimized journeys for the
                bank&lsquo;s customers.
              </p>
            ),
            pt: (
              <p>
                O Bradesco Bank, baseado em Coral Gables, Florida, é uma divisão
                do Bradesco focada em prover serviços financeiros a mais de 11
                mil clientes não-residentes nos Estados Unidos. Atuei na
                modernização da experiência do aplicativo Mobile e Web,
                liderando um time de desenvolvimento focado nas tecnologias
                React e Python. O maior desafio foi o alinhamento com as
                diversas ferramentas de terceiros que compunham a aplicação, com
                o objetivo de desenvolver as melhorias dentro das limitações
                destas. Realizamos diversas melhorias estruturais em tecnologia,
                ao mesmo tempo que entregamos jornadas mais otimizadas para os
                clientes do banco.
              </p>
            ),
          },
        },
        {
          title: { en: "GFT Internal Project", pt: "Projeto Interno GFT" },
          description: {
            en: (
              <p>
                One of the internal projects that I executed at GFT was a
                management tool, in which I was involved from the conception of
                the project, architecting the solution as a whole, including
                Cloud infrastructure (AWS), development pipeline (Gitlab CI,
                Cypress, AWS Serverless), back-end (.NET) and front-end
                (Angular). I led the development and testing team throughout the
                delivery of various features.
              </p>
            ),
            pt: (
              <p>
                Um dos projetos internos que eu executei na GFT era relacionada
                a cosntrução de uma ferramenta de gestão, na qual atuei desde a
                concepção do projeto, arquitetando a solução como um todo,
                incluíndo infraestrutura Cloud (AWS), esteira de desenvolvimento
                (Gitlab CI, Cypress, AWS Serverless), back-end (.NET) e
                front-end (Angular). Liderei o time de desenvolvimento e testes
                ao longo da entrega de diversas funcionalidades.
              </p>
            ),
          },
        },
        {
          title: "Mitre Realty",
          description: {
            en: (
              <p>
                Mitre Realty, as a company in the civil construction industry,
                seeking to stay close to its customers, built a mobile
                application called Mitre Experience, based on React Native,
                Node.js and Oracle. I acted as technical leader in a squad for
                the evolution of this product, focused on delivering more
                personalized experiences to users, based on data, geolocation,
                etc. In addition, I performed several optimizations in the
                automated testing and development pipeline, using Gitlab CI,
                Playwright and App Center+CodePush.
              </p>
            ),
            pt: (
              <p>
                A Mitre Realty, como empresa no ramo de construção civíl,
                buscando manter-se próxima de seus clientes, construiu um
                aplicativo mobile chamado Mitre Experience, baseado em React
                Native, Node.js e Oracle. Atuei como líder técnico em um squad
                de evolução deste produto, como foco em entregar experiências
                mais personalizadas aos usuários, com base em dados,
                geolocalização, etc. Além disso, realizei diversas otimizações
                na esteira de testes automatizados e desenvolvimento, usando
                Gitlab CI, Playwrigth e App Center+CodePush.
              </p>
            ),
          },
        },
        {
          title: "Share Student Living",
          description: {
            en: (
              <p>
                I acted as a technical leader in a team of a Mitre group
                spin-off company called Share Student Living. The business was
                focused on providing shared apartment rentals for university
                students. I acted on two fronts, the first was related to the
                mobile application (React Native), in which we implemented new
                features to allow students to make various common requests
                through the App (self-service), without the need to contact the
                call center and generate operational effort from the
                back-office. The other front was related precisely to the system
                used by the back-office, optimizing user journeys, reducing time
                to execute various activities.
              </p>
            ),
            pt: (
              <p>
                Atuei como líder técnico em um time de uma spin-off do grupo
                Mitre chamada Share Student Living. O negócio era focado em
                disponibilizar aluguel de apartamentos compartilhados para
                estudantes universitários. Atuei em duas frentes, a primeira era
                relacionada ao aplicativo mobile (React Native), no qual
                implementamos novas funcionalidades para permitir aos estudantes
                realizar diversas requisições comuns através do App
                (self-service), sem a necessidade de contatar o call center e
                gerar esforço operacional por parte do back-office. A outra
                frente era relacionada justamente ao sistema utilizado pelo
                back-office, otimizando as jornadas de usuário, reduzindo tempo
                para execução de diversas atividades.
              </p>
            ),
          },
        },
      ],
    },

    {
      title: { en: "Front-end Developer", pt: "Desenvolvedor Front-end" },
      company: "GFT",
      fromDate: { en: "July 2019", pt: "Julho 2019" },
      toDate: { en: "December 2021", pt: "Dezembro 2021" },
      projects: [
        {
          title: "Banco BV",
          description: {
            en: (
              <p>
                I worked as a front-end developer in a project to modernize and
                restructure the digital channels of Banco BV. In the project, I
                performed the migration of several legacy technologies
                (Angular.js, JSP, etc.) to more modern and flexible platforms
                (Angular 9/11, Liferay, etc.), transforming the entire content
                management flow. I participated in the process of updating the
                bank&lsquo;s brand, in which we made progressive adjustments to
                the visual and verbal communication of the communication
                channels (website, Web application). I worked with the Adobe
                Maxymiser platform for A/B testing, later migrating to
                Salesforce Marketing Cloud/Interaction Studio.
              </p>
            ),
            pt: (
              <p>
                Atuei no papel de desenvolvedor front-end no projeto de
                modernização e reestruturação dos canais digitais do banco BV.
                Realizei migração de diversas tecnologias legadas (Angular.js,
                JSP, etc.) para plataformas mais modernas e flexíveis (Angular
                9/11, Liferay, etc.), transformando todo o fluxo de gestão de
                conteúdo. Participei do processo de atualização da marca do
                banco, no qual realizamos progressivas adequações na comunição
                visual e verbal dos canais de comunicação (site, aplicativo
                Web). Atuei com a plataforma Adobe Maxymiser para testes A/B,
                mais tarde migrando para Salesforce Marketing Cloud/Interaction
                Studio.
              </p>
            ),
          },
        },
      ],
    },

    {
      title: { en: "Co-founder & CTO", pt: "Co-founder & CTO" },
      company: "Contraktor",
      fromDate: { en: "September 2016", pt: "Setembro 2016" },
      toDate: { en: "April 2019", pt: "Abril 2019" },
      description: {
        en: (
          <>
            <p>
              As co-founder of the startup, I contributed since the beginning
              for the construction of the main product. To this date, it is
              active in several companies, facilitating all kinds of tasks
              related to contract management, including document creation,
              digital signature, etc.
            </p>
            <ul>
              <li>
                Cloud computing management (mainly <strong>Amazon AWS</strong>)
              </li>
              <li>
                Continous Integration and Continous Delivery (
                <strong>Gitlab CI/CD</strong>)
              </li>
              <li>
                Orchestration and provisioning of cloud resources (
                <strong>Kubernetes</strong> and <strong>Terraform</strong>)
              </li>
              <li>
                Front-end development with <strong>React</strong> (redux,
                styled-components, <em>etc.</em>)
              </li>
              <li>
                API modeling (<strong>REST</strong> and <strong>GraphQL</strong>
                )
              </li>
              <li>
                Back-end development with <strong>Elixir</strong> and{" "}
                <strong>Node.js</strong>
              </li>
              <li>Project and team management</li>
              <li>Scrum and Agile</li>
              <li>Technical leadership, mentoring and team development</li>
            </ul>
          </>
        ),
        pt: (
          <>
            <p>
              Sou co-fundador e contribui desde o início para a construção do
              produto. Presente em diversas empresas de pequeno, médio e grande
              porte, a plataforma ajuda a desburocratizar todas as tarefas
              ligadas a elaboração, gestão e assinatura de documentos digitais.
            </p>
            <ul>
              <li>
                Gerenciamento de computação em nuvem (principalmente{" "}
                <strong>Amazon AWS</strong>)
              </li>
              <li>
                Integração Contínua e Entrega Contínua (
                <strong>Gitlab CI/CD</strong>)
              </li>
              <li>
                Orquestração e provisionamento (<strong>Kubernetes</strong> e{" "}
                <strong>Terraform</strong>)
              </li>
              <li>
                Desenvolvimento front-end com <strong>React</strong> (redux,
                styled-components, <em>etc.</em>)
              </li>
              <li>
                Modelagem de APIs <strong>REST</strong> e{" "}
                <strong>GraphQL</strong>
              </li>
              <li>
                Desenvolvimento back-end com <strong>Elixir</strong> e{" "}
                <strong>Node.js</strong>
              </li>
              <li>Gestão de equipes e projetos</li>
              <li>Scrum e Agile</li>
              <li>Liderança técnica, mentoria e treinamento de equipes</li>
            </ul>
          </>
        ),
      },
    },

    {
      title: { en: "Software developer", pt: "Desenvolvedor" },
      company: "Centro de Computação Científica e Software Livre (C3SL)",
      fromDate: { en: "October 2011", pt: "Outubro 2011" },
      toDate: { en: "November 2016", pt: "Novembro 2016" },
      description: {
        en: (
          <>
            <p>
              Web development on two projects: PROINFODATA and &ldquo;
              <em>
                Sistema Integrado de Monitoramento do Ministério das
                Comunicações
              </em>{" "}
              (SIMMC)&rdquo;. I worked since the beggining in both projects that
              today are widely used by the brazilian governament. Reaching over
              2,520 cities all around the country, their objective is to monitor
              and assess the effectiveness of investments made in hardware and
              network technology in social programs.
            </p>
            <ul>
              <li>
                RESTful API development with <strong>Node.js</strong>
              </li>
              <li>
                <strong>Data Warehouses</strong> architecture
              </li>
              <li>
                Database administration with <strong>PostgreSQL</strong> and{" "}
                <strong>MongoDB</strong>
              </li>
              <li>
                Deployment of services with <strong>Docker</strong>
              </li>
              <li>
                Development of Web applications with Play Framework (
                <strong>Java</strong>) and <strong>Angular.js</strong>
              </li>
              <li>
                Team training (<strong>Node.js</strong> and{" "}
                <strong>Angular.js</strong>)
              </li>
              <li>
                <strong>Linux</strong> systems administration
              </li>
            </ul>
          </>
        ),
        pt: (
          <>
            <p>
              Desenvolvimento Web para os projetos PROINFODATA e Sistema
              Integrado de Monitoramento do Ministério das Comunicações (SIMMC).
              Dei inicio ao desenvolvimento dos projetos que hoje são amplamente
              utilizados pelo governo brasileiro, atingindo mais de 2.520
              municípios distribuídos por todo o Brasil. Tem como objetivo
              monitorar a eficácia dos investimentos em recursos de hardware e
              rede realizados em projetos sociais.
            </p>
            <ul>
              <li>
                Criação de RESTful API’s com <strong>Node.js</strong>
              </li>
              <li>
                Modelagem e manutenção de <strong>Data Warehouses</strong>
              </li>
              <li>
                Administração de bancos de dados <strong>PostgreSQL</strong> e{" "}
                <strong>MongoDB</strong>
              </li>
              <li>
                Deploy de serviços utilizando a ferramenta{" "}
                <strong>Docker</strong>
              </li>
              <li>
                Construção de aplicações Web com os frameworks Play (
                <strong>Java</strong>) e <strong>Angular.js</strong>
              </li>
              <li>
                Treinamento de equipes em <strong>Node.js</strong> e{" "}
                <strong>Angular.js</strong>
              </li>
              <li>
                Administração de servidores <strong>Linux</strong>
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
        en: "Bachelor in Computer Science",
        pt: "Bacharelado em Ciência da Computação",
      },
      organization: "Universidade Federal do Paraná (UFPR)",
      fromDate: { en: "July 2009", pt: "Julho 2009" },
      toDate: { en: "December 2014", pt: "Dezembro 2014" },
      projects: [
        {
          title: {
            en: "Scientific Initiation Program",
            pt: "Iniciação Científica Voluntária",
          },
          fromDate: { en: "July 2012", pt: "Julho 2012" },
          toDate: { en: "July 2013", pt: "Julho 2013" },
          description: {
            en: (
              <>
                <p>
                  Institutional Program of Scientific Initiation at the Federal
                  University of Paraná. Publication in EVINCI 2014:{" "}
                  <em>
                    &ldquo;Redes neurais artificiais aplicadas à robótica de
                    enxame&rdquo;
                  </em>
                  &nbsp; (
                  <em>Artificial neural networks applied to swarm robotics</em>
                  ).
                </p>
                <p>
                  Advisor: Prof. Dr. Eduardo Jaques Spinosa - Information
                  Technology Deparment (UFPR)
                </p>
              </>
            ),
            pt: (
              <>
                <p>
                  Bolsista de Iniciação Científica na Universidade Federal do
                  Paraná. Participação no EVINCI 2014 com o tema:{" "}
                  <em>
                    &ldquo;Redes neurais artificiais aplicadas à robótica de
                    enxame&rdquo;
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
        {
          title: {
            en: "Teaching and Research Initiation Program",
            pt: "Programa de Iniciação à Docência - Monitoria",
          },
          fromDate: { en: "March 2010", pt: "Março 2010" },
          toDate: { en: "December 2010", pt: "Dezembro 2010" },
          description: {
            en: (
              <p>
                Discipline: Algorithms and Data Structures I. Advisor: Prof. Dr.
                Fabiano Silva - Information Technology Deparment (UFPR)
              </p>
            ),
            pt: (
              <p>
                Disciplina: Algoritmos e Estruturas de Dados I
                <br />
                Orientador: Prof. Dr. Fabiano Silva - Departamento de
                Informática (UFPR)
              </p>
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
      publicationDate: { en: "July 2016", pt: "Julho 2016" },
      description: {
        en: (
          <p>
            Paper published on IDEAS 2016 conference. Compiles results of
            research work made while I was working in &ldquo;Centro de
            Computação Científica e Software Livre (C3SL)&rdquo;. The paper
            presents how NoSQL databases can be used in the context of Data
            Warehouses and how we applied those concepts in our projects.
          </p>
        ),
        pt: (
          <p>
            Artigo publicado na conferência IDEAS 2016 compilando os resultados
            do trabalho de pesquisa realizado no Centro de Computação Científica
            e Software Livre (C3SL). Trata sobre a utilização de banco de dados
            NoSQL em Data Warehouses e como aplicamos esse conceito em alguns
            projetos.
          </p>
        ),
      },
    },
  ],

  certifications: [
    {
      title: "AWS Certified Solutions Architect - Associate",
      organization: "Amazon Web Services (AWS)",
      issueDate: { en: "March 2020", pt: "Março 2020" },
      expirationDate: { en: "March 2023", pt: "Março 2023" },
    },
  ],
};
