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
      lang="en-US"
      title="Resume"
      description="Eduardo Buratti's Resume, software engineer."
      keywords={[`buratti`, `tech leader`, `developer`, `programmer`]}
    />

    <Header
      name="Eduardo Luis Buratti"
      tagline="Software Engineer"
      email="eburatti09@gmail.com"
      phone="+55 (41) 9 9918 4327"
      location="Curitiba, PR"
      linkedin="eburatti"
      github="bazk"
    />

    <TwoColumnsLayout>
      <main>
        <section>
          <h2>Profile</h2>
          <ul>
            <li>More than 7 years of experience as full-stack developer with JavaScript (Node, Angular and React)</li>
            <li>Motivated to learn and share knowledge</li>
            <li>Experienced in cloud management (AWS and Google Cloud)</li>
          </ul>
        </section>

        <section>
          <h2>Professional experience</h2>
          <Timeline>
            <Timeline.Item>
              <ExperienceJob
                title="Co-founder &amp; CTO"
                company="Contraktor"
                fromDate="September 2016"
                toDate="April 2019"
              >
                <p>
                  As co-founder of the startup, I contributed since the beginning for the construction
                  of the main product. To this date, it is active in several companies,
                  facilitating all kinds of tasks related to contract management,
                  including document creation, digital signature, <em>etc</em>.
                </p>
                <ul>
                  <li>Cloud computing management (mainly <strong>Amazon AWS</strong>)</li>
                  <li>Continous Integration and Continous Delivery (<strong>Gitlab CI/CD</strong>)</li>
                  <li>Orchestration and provisioning of cloud resources (<strong>Kubernetes</strong> and <strong>Terraform</strong>)</li>
                  <li>Front-end development with <strong>React</strong> (redux, styled-components, <em>etc.</em>)</li>
                  <li>API modeling (<strong>REST</strong> and <strong>GraphQL</strong>)</li>
                  <li>Back-end development with <strong>Elixir</strong> and <strong>Node.js</strong></li>
                  <li>Project and team management</li>
                  <li>Scrum and Agile</li>
                  <li>Technical leadership, mentoring and team development</li>
                </ul>
              </ExperienceJob>
            </Timeline.Item>

            <PageBreak />

            <Timeline.Item>
              <ExperienceJob
                title="Software developer"
                company="Centro de Computação Científica e Software Livre (C3SL)"
                fromDate="October 2011"
                toDate="November 2016"
              >
                <p>
                  Web development on two projects: PROINFODATA and &ldquo;<em>Sistema Integrado de
                  Monitoramento do Ministério das Comunicações</em> (SIMMC)&rdquo;. I worked since the 
                  beggining in both projects that today are widely used by the brazilian governament.
                  Reaching over 2,520 cities all around the country, their objective is to monitor and
                  assess the effectiveness of investments made in hardware and network technology
                  in social programs.
                </p>
                <ul>
                  <li>RESTful API development with <strong>Node.js</strong></li>
                  <li><strong>Data Warehouses</strong> architecture</li>
                  <li>Database administration with <strong>PostgreSQL</strong> and <strong>MongoDB</strong></li>
                  <li>Deployment of services with <strong>Docker</strong></li>
                  <li>Development of Web applications with Play Framework (<strong>Java</strong>) and <strong>Angular.js</strong></li>
                  <li>Team training (<strong>Node.js</strong> and <strong>Angular.js</strong>)</li>
                  <li><strong>Linux</strong> systems administration</li>
                </ul>
              </ExperienceJob>
            </Timeline.Item>
          </Timeline>
        </section>

        <section>
          <h2>Academic experience</h2>
          <ExperienceJob
            title="Bachelor in Computer Science"
            company="Universidade Federal do Paraná (UFPR)"
            fromDate="July 2009"
            toDate="December 2014"
          >
            <Timeline>
              <Timeline.Item>
                <ExperienceJob
                  company="Scientific Initiation Program"
                  fromDate="July 2012"
                  toDate="July 2013"
                >
                  <React.Fragment>
                    <p>
                      Institutional Program of Scientific Initiation at the Federal University
                      of Paraná. Publication in EVINCI 2014: <em>&ldquo;Redes neurais
                      artificiais aplicadas à robótica de enxame&rdquo;</em>&nbsp;
                      (<em>Artificial neural networks applied to swarm robotics</em>).
                    </p>
                    <p>
                      Advisor: Prof. Dr. Eduardo Jaques Spinosa - Information Technology Deparment (UFPR)
                    </p>
                  </React.Fragment>
                </ExperienceJob>
              </Timeline.Item>
              <Timeline.Item>
                <ExperienceJob
                  company="Teaching and Research Initiation Program"
                  fromDate="March 2010"
                  toDate="December 2010"
                >
                  <React.Fragment>
                    <p>
                      Discipline: Algorithms and Data Structures I
                      <br/>
                      Advisor: Prof. Dr. Fabiano Silva - Information Technology Deparment (UFPR)
                    </p>
                  </React.Fragment>
                </ExperienceJob>
              </Timeline.Item>
            </Timeline>
          </ExperienceJob>
        </section>

        <PageBreak />

        <section>
          <h2>Publications</h2>
          <ExperienceJob
            title="A Case Study of the Aggregation Query Model in Read-Mostly NoSQL Document Stores"
            fromDate="July 2016"
          >
            <p>
              Paper published on IDEAS 2016 conference. Compiles results of research work
              made while I was working in &ldquo;Centro de Computação Científica e
              Software Livre (C3SL)&rdquo;. The paper presents how NoSQL databases can be
              used in the context of Data Warehouses and how we applied those concepts in
              our projects.
            </p>
          </ExperienceJob>
        </section>
      </main>
      <aside>
        <section>
          <h2>Technical skills</h2>
          <TagGroup>
            <label>Programming languages</label>
            <Tag>JavaScript</Tag>
            <Tag>Elixir</Tag>
            <Tag>Python</Tag>
            <Tag>Java</Tag>
            <label>Frameworks and tools</label>
            <Tag>React</Tag>
            <Tag>React Native</Tag>
            <Tag>GraphQL</Tag>
            <Tag>Angular.js</Tag>
            <Tag>Django</Tag>
            <label>Databases</label>
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
            <label>Team & Management</label>
            <Tag>Lean</Tag>
            <Tag>Agile Software Development</Tag>
            <Tag>Scrum</Tag>
          </TagGroup>
        </section>
        <section>
          <h2>Soft skills</h2>
          <p>
            Ease of learning and sharing new concepts and technologies
            <Bullet />
            Technical leadership
            <Bullet />
            Bussiness vision
            <Bullet />
            Motivated and creative in face of challenges
          </p>
        </section>
        <section>
          <h2>Languages</h2>
          <ul>
            <li><strong>Portuguese</strong> - native</li>
            <li><strong>English</strong> - advanced reading, writing and conversation.</li>
          </ul>
        </section>
      </aside>
    </TwoColumnsLayout>
  </Layout>
)

export default IndexPage
