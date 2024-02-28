import React from "react"

import Layout from "../components/Layout"
import TwoColumnsLayout from "../components/TwoColumnsLayout"
import SEO from "../components/SEO"
import Header from "../components/Header"
import Timeline from "../components/Timeline"
import ExperienceJob from "../components/ExperienceJob"
import Bullet from "../components/Bullet"
import TagGroup from "../components/TagGroup"
import Tag from "../components/Tag"
import PageBreak from "../components/PageBreak"
import { ExperienceProject } from "../components/ExperienceProject"

const IndexPage = () => (
  <Layout>
    <SEO
      lang="pt-BR"
      title="Currículo"
      description="Currículo de Eduardo Buratti, arquiteto e engenheiro de software."
      keywords={[
        "buratti",
        "lider técnico",
        "arquiteto",
        "desenvolvedor",
        "programador",
      ]}
    />

    <Header
      name="Eduardo Luis Buratti"
      tagline="Arquiteto & Engenheiro de Software | Canais Digitais"
      email="eburatti09@gmail.com"
      phone="+55 (41) 9 9918 4327"
      location="Curitiba, PR"
      linkedin="eburatti"
      github="bazk"
    />

    <TwoColumnsLayout>
      <main>
        <section>
          <h2>Resumo</h2>
          <ul>
            <li>
              Arquiteto e engenheiro de software com mais de 12 anos de
              experiência em canais digitais.
            </li>
            <li>
              Foco em tecnologias Web (React, Angular e Vue), Mobile (iOS, React
              Native) e Cloud (AWS principalmente).
            </li>
            <li>
              Experiente nos papéis de arquitetura e liderança técnica,
              auxiliando os times a desenvolver soluções técnicas alinhas com a
              visão de negócio.
            </li>
          </ul>
        </section>

        <section>
          <h2>Experiência profissional</h2>
          <Timeline>
            <Timeline.Item>
              <ExperienceJob
                title="Arquiteto de Canais Digitais"
                company="GFT"
                fromDate="Janeiro 2022"
                toDate="atualmente"
              >
                <p>
                  Como arquiteto de software na GFT, além de apoiar diversos
                  projetos na resolução de problemas técnicos, também desempenho
                  um papel de apoio ao time comercial, buscando aliar as
                  necessidades de nossos clientes a soluções técnicas robustas,
                  escaláveis e eficientes.
                </p>
                <h4>Principais projetos:</h4>
                <ExperienceProject title="GFT Digital Studio">
                  <p>
                    O Digital Studio é a área da GFT que centraliza as
                    expertises de canais digitais (desenvolvimento Web e
                    Mobile), experiência do cliente, agilidade e assets
                    digitais. Meu foco no time é apoiar nas atividades
                    comerciais em oportunidades relacionadas a canais digitais,
                    aliando as necessidades de nossos clientes a busca por
                    soluções técnicas inovadoras e otimizadas. Além disso,
                    realizamos diversas ações de treinamento e capacitação dos
                    profissionais GFT, evoluindo nossa comunidade de
                    desenvolvedores Mobile e Web.
                  </p>
                </ExperienceProject>
                <ExperienceProject title="Bradesco Bank">
                  O Bradesco Bank, baseado em Coral Gables, Florida, é uma
                  divisão do Bradesco focada em prover serviços financeiros a
                  mais de 11 mil clientes não-residentes nos Estados Unidos.
                  Atuei na modernização da experiência do aplicativo Mobile e
                  Web, liderando um time de desenvolvimento focado nas
                  tecnologias React e Python. O maior desafio foi o alinhamento
                  com as diversas ferramentas de terceiros que compunham a
                  aplicação, com o objetivo de desenvolver as melhorias dentro
                  das limitações destas. Realizamos diversas melhorias
                  estruturais em tecnologia, ao mesmo tempo que entregamos
                  jornadas mais otimizadas para os clientes do banco.
                </ExperienceProject>
                <ExperienceProject title="Projeto Interno GFT">
                  <p>
                    Um dos projetos internos que eu executei na GFT era
                    relacionada a cosntrução de uma ferramenta de gestão, na
                    qual atuei desde a concepção do projeto, arquitetando a
                    solução como um todo, incluíndo infraestrutura Cloud (AWS),
                    esteira de desenvolvimento (Gitlab CI, Cypress, AWS
                    Serverless), back-end (.NET) e front-end (Angular). Liderei
                    o time de desenvolvimento e testes ao longo da entrega de
                    diversas funcionalidades.
                  </p>
                </ExperienceProject>
                <ExperienceProject title="Mitre Realty">
                  <p>
                    A Mitre Realty, como empresa no ramo de construção civíl,
                    buscando manter-se próxima de seus clientes, construiu um
                    aplicativo mobile chamado Mitre Experience, baseado em React
                    Native, Node.js e Oracle. Atuei como líder técnico em um
                    squad de evolução deste produto, como foco em entregar
                    experiências mais personalizadas aos usuários, com base em
                    dados, geolocalização, etc. Além disso, realizei diversas
                    otimizações na esteira de testes automatizados e
                    desenvolvimento, usando Gitlab CI, Playwrigth e App
                    Center+CodePush.
                  </p>
                </ExperienceProject>
                <ExperienceProject title="Share Student Living">
                  <p>
                    Atuei como líder técnico em um time de uma spin-off do grupo
                    Mitre chamada Share Student Living. O negócio era focado em
                    disponibilizar aluguel de apartamentos compartilhados para
                    estudantes universitários. Atuei em duas frentes, a primeira
                    era relacionada ao aplicativo mobile (React Native), no qual
                    implementamos novas funcionalidades para permitir aos
                    estudantes realizar diversas requisições comuns através do
                    App (self-service), sem a necessidade de contatar o call
                    center e gerar esforço operacional por parte do back-office.
                    A outra frente era relacionada justamente ao sistema
                    utilizado pelo back-office, otimizando as jornadas de
                    usuário, reduzindo tempo para execução de diversas
                    atividades.
                  </p>
                </ExperienceProject>
              </ExperienceJob>
            </Timeline.Item>

            <Timeline.Item>
              <ExperienceJob
                title="Desenvolvedor Front-end"
                company="GFT"
                fromDate="Julho 2019"
                toDate="Dezembro 2021"
              >
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
                  mais tarde migrando para Salesforce Marketing
                  Cloud/Interaction Studio.
                </p>
                <h4>Principais projetos:</h4>
                <ExperienceProject title="banco BV">
                  <p>
                    Atuei no papel de desenvolvedor front-end no projeto de
                    modernização e reestruturação dos canais digitais do banco
                    BV. Realizei migração de diversas tecnologias legadas
                    (Angular.js, JSP, etc.) para plataformas mais modernas e
                    flexíveis (Angular 9/11, Liferay, etc.), transformando todo
                    o fluxo de gestão de conteúdo. Participei do processo de
                    atualização da marca do banco, no qual realizamos
                    progressivas adequações na comunição visual e verbal dos
                    canais de comunicação (site, aplicativo Web). Atuei com a
                    plataforma Adobe Maxymiser para testes A/B, mais tarde
                    migrando para Salesforce Marketing Cloud/Interaction Studio.
                  </p>
                </ExperienceProject>
              </ExperienceJob>
            </Timeline.Item>

            <Timeline.Item>
              <ExperienceJob
                title="Co-founder &amp; CTO"
                company="Contraktor"
                fromDate="Setembro 2016"
                toDate="Abril 2019"
              >
                <p>
                  Sou co-fundador e contribui desde o início para a construção
                  do produto. Presente em diversas empresas de pequeno, médio e
                  grande porte, a plataforma ajuda a desburocratizar todas as
                  tarefas ligadas a elaboração, gestão e assinatura de
                  documentos digitais.
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
                    Orquestração e provisionamento (<strong>Kubernetes</strong>{" "}
                    e <strong>Terraform</strong>)
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
              </ExperienceJob>
            </Timeline.Item>

            <PageBreak />

            <Timeline.Item>
              <ExperienceJob
                title="Desenvolvedor"
                company="Centro de Computação Científica e Software Livre (C3SL)"
                fromDate="Outubro 2011"
                toDate="Novembro 2016"
              >
                <p>
                  Desenvolvimento Web para os projetos PROINFODATA e Sistema
                  Integrado de Monitoramento do Ministério das Comunicações
                  (SIMMC). Dei inicio ao desenvolvimento dos projetos que hoje
                  são amplamente utilizados pelo governo brasileiro, atingindo
                  mais de 2.520 municípios distribuídos por todo o Brasil. Tem
                  como objetivo monitorar a eficácia dos investimentos em
                  recursos de hardware e rede realizados em projetos sociais.
                </p>
                <ul>
                  <li>
                    Criação de RESTful API’s com <strong>Node.js</strong>
                  </li>
                  <li>
                    Modelagem e manutenção de <strong>Data Warehouses</strong>
                  </li>
                  <li>
                    Administração de bancos de dados <strong>PostgreSQL</strong>{" "}
                    e <strong>MongoDB</strong>
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
              </ExperienceJob>
            </Timeline.Item>
          </Timeline>
        </section>

        <section>
          <h2>Experiência acadêmicas</h2>
          <ExperienceJob
            title="Bacharel em Ciência da Computação"
            company="Universidade Federal do Paraná (UFPR)"
            fromDate="Julho 2009"
            toDate="Dezembro 2014"
          >
            <Timeline>
              <Timeline.Item>
                <ExperienceJob
                  company="Iniciação Científica Voluntária"
                  fromDate="Julho 2012"
                  toDate="Julho 2013"
                >
                  <React.Fragment>
                    <p>
                      Bolsista de Iniciação Científica na Universidade Federal
                      do Paraná. Participação no EVINCI 2014 com o tema:{" "}
                      <em>
                        &ldquo;Redes neurais artificiais aplicadas à robótica de
                        enxame&rdquo;
                      </em>
                      .
                    </p>
                    <p>
                      Orientador: Prof. Dr. Eduardo Jaques Spinosa -
                      Departamento de Informática (UFPR)
                    </p>
                  </React.Fragment>
                </ExperienceJob>
              </Timeline.Item>
              <Timeline.Item>
                <ExperienceJob
                  company="Programa de Iniciação à Docência - Monitoria"
                  fromDate="Março 2010"
                  toDate="Dezembro 2010"
                >
                  <React.Fragment>
                    <p>
                      Disciplina: Algoritmos e Estruturas de Dados I
                      <br />
                      Orientador: Prof. Dr. Fabiano Silva - Departamento de
                      Informática (UFPR)
                    </p>
                  </React.Fragment>
                </ExperienceJob>
              </Timeline.Item>
            </Timeline>
          </ExperienceJob>
        </section>

        <PageBreak />

        <section>
          <h2>Publicações</h2>
          <ExperienceJob
            title="A Case Study of the Aggregation Query Model in Read-Mostly NoSQL Document Stores"
            fromDate="Julho 2016"
          >
            <p>
              Artigo publicado na conferência IDEAS 2016 compilando os
              resultados do trabalho de pesquisa realizado no Centro de
              Computação Científica e Software Livre (C3SL). Trata sobre a
              utilização de banco de dados NoSQL em Data Warehouses e como
              aplicamos esse conceito em alguns projetos.
            </p>
          </ExperienceJob>
        </section>
      </main>
      <aside>
        <section>
          <h2>Conhecimentos técnicos</h2>
          <TagGroup>
            <label>Linguagens de programação</label>
            <Tag>JavaScript</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Elixir</Tag>
            <Tag>Python</Tag>
            <Tag>Java</Tag>
            <label>Frameworks e ferramentas</label>
            <Tag>React</Tag>
            <Tag>Next.js</Tag>
            <Tag>React Native</Tag>
            <Tag>Swift (iOS)</Tag>
            <Tag>Angular</Tag>
            <Tag>Angular.js</Tag>
            <Tag>NestJS</Tag>
            <Tag>GraphQL</Tag>
            <Tag>Django</Tag>
            <Tag>Flask</Tag>
            <label>Banco de dados</label>
            <Tag>PostgreSQL</Tag>
            <Tag>MySQL</Tag>
            <Tag>MongoDB</Tag>
            <Tag>Redis</Tag>
            <Tag>TypeORM</Tag>
            <Tag>Sequelize</Tag>
            <label>Cloud & DevOps</label>
            <Tag>Amazon AWS</Tag>
            <Tag>GCP</Tag>
            <Tag>Docker</Tag>
            <Tag>Kubernetes</Tag>
            <Tag>Terraform (IaC)</Tag>
            <Tag>GitLab CI/CD</Tag>
            <Tag>Azure DevOps</Tag>
            <Tag>AppCenter</Tag>
            <label>Equipe & Gestão</label>
            <Tag>Lean</Tag>
            <Tag>Agile Software Development</Tag>
            <Tag>Scrum</Tag>
          </TagGroup>
        </section>
        <section>
          <h2>Habilidades e competências</h2>
          <p>
            Facilidade no aprendizado de novos conhecimentos e tecnologias
            <Bullet />
            Liderança técnica
            <Bullet />
            Visão de negócio
            <Bullet />
            Motivado por desafios
          </p>
        </section>
        <section>
          <h2>Idiomas</h2>
          <ul>
            <li>
              <strong>Português</strong> - nativo
            </li>
            <li>
              <strong>Inglês</strong> - leitura, escrita e conversação avançada.
            </li>
          </ul>
        </section>
      </aside>
    </TwoColumnsLayout>
  </Layout>
)

export default IndexPage
