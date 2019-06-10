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

const IndexPage = () => (
  <Layout>
    <SEO
      lang="pt-BR"
      title="Currículo"
      description="Currículo de Eduardo Buratti, engenheiro de software."
      keywords={[`buratti`, `lider técnico`, `desenvolvedor`, `programador`]}
    />

    <Header
      name="Eduardo Luis Buratti"
      tagline="Engenheiro de Software"
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
            <li>Desenvolvedor full-stack com mais de 7 anos de experiência em JavaScript (Node, Angular e React)</li>
            <li>Motivado em aprender e compartilhar conhecimento</li>
            <li>Experiente em gereciamento de computação em nuvem (AWS e Google Cloud)</li>
          </ul>
        </section>

        <section>
          <h2>Experiência profissional</h2>
          <Timeline>
            <Timeline.Item>
              <ExperienceJob
                title="Co-founder &amp; CTO"
                company="Contraktor"
                fromDate="Setembro 2016"
                toDate="Abril 2019"
              >
                <p>
                  Sou co-fundador e contribui desde o início para a construção do produto.
                  Presente em diversas empresas de pequeno, médio e grande porte, a
                  plataforma ajuda a desburocratizar todas as tarefas ligadas a elaboração,
                  gestão e assinatura de documentos digitais.
                </p>
                <ul>
                  <li>Gerenciamento de computação em nuvem (principalmente <strong>Amazon AWS</strong>)</li>
                  <li>Integração Contínua e Entrega Contínua (<strong>Gitlab CI/CD</strong>)</li>
                  <li>Orquestração e provisionamento (<strong>Kubernetes</strong> e <strong>Terraform</strong>)</li>
                  <li>Desenvolvimento front-end com <strong>React</strong> (redux, styled-components, <em>etc.</em>)</li>
                  <li>Modelagem de APIs <strong>REST</strong> e <strong>GraphQL</strong></li>
                  <li>Desenvolvimento back-end com <strong>Elixir</strong> e <strong>Node.js</strong></li>
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
                  Desenvolvimento Web para os projetos PROINFODATA e Sistema Integrado de
                  Monitoramento do Ministério das Comunicações (SIMMC). Dei inicio ao desenvolvimento dos
                  projetos que hoje são amplamente utilizados pelo governo brasileiro, atingindo
                  mais de 2.520 municípios distribuídos por todo o Brasil. Tem como objetivo monitorar
                  a eficácia dos investimentos em recursos de hardware e rede realizados em projetos
                  sociais.
                </p>
                <ul>
                  <li>Criação de RESTful API’s com <strong>Node.js</strong></li>
                  <li>Modelagem e manutenção de <strong>Data Warehouses</strong></li>
                  <li>Administração de bancos de dados <strong>PostgreSQL</strong> e <strong>MongoDB</strong></li>
                  <li>Deploy de serviços utilizando a ferramenta <strong>Docker</strong></li>
                  <li>Construção de aplicações Web com os frameworks Play (<strong>Java</strong>) e <strong>Angular.js</strong></li>
                  <li>Treinamento de equipes em <strong>Node.js</strong> e <strong>Angular.js</strong></li>
                  <li>Administração de servidores <strong>Linux</strong></li>
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
                      Bolsista de Iniciação Científica na Universidade Federal do Paraná.
                      Participação no EVINCI 2014 com o tema: <em>&ldquo;Redes neurais
                      artificiais aplicadas à robótica de enxame&rdquo;</em>.
                    </p>
                    <p>
                      Orientador: Prof. Dr. Eduardo Jaques Spinosa - Departamento de
                      Informática (UFPR)
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
                      <br/>
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
              Artigo publicado na conferência IDEAS 2016 compilando os resultados
              do trabalho de pesquisa realizado no Centro de Computação Científica e
              Software Livre (C3SL). Trata sobre a utilização de banco de
              dados NoSQL em Data Warehouses e como aplicamos esse conceito em alguns
              projetos.
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
            <Tag>Elixir</Tag>
            <Tag>Python</Tag>
            <Tag>Java</Tag>
            <label>Frameworks e ferramentas</label>
            <Tag>React</Tag>
            <Tag>React Native</Tag>
            <Tag>GraphQL</Tag>
            <Tag>Angular.js</Tag>
            <Tag>Django</Tag>
            <label>Banco de dados</label>
            <Tag>PostgreSQL</Tag>
            <Tag>MySQL</Tag>
            <Tag>MongoDB</Tag>
            <label>Cloud & DevOps</label>
            <Tag>Amazon AWS</Tag>
            <Tag>Google Cloud Platform</Tag>
            <Tag>Docker</Tag>
            <Tag>Kubernetes</Tag>
            <Tag>Terraform (IaC)</Tag>
            <Tag>GitLab CI/CD</Tag>
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
            <li><strong>Português</strong> - nativo</li>
            <li><strong>Inglês</strong> - leitura, escrita e conversação avançada.</li>
          </ul>
        </section>
      </aside>
    </TwoColumnsLayout>
  </Layout>
)

export default IndexPage
