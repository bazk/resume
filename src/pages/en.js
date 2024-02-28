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
            <li>
              Software engineer & architect with more than 12 years of
              experience in digital channels.
            </li>
            <li>
              Focus on Web technologies (React, Angular and Vue), Mobile (iOS,
              React Native) and Cloud (AWS mainly).
            </li>
            <li>
              Experienced in the roles of software architect and technical
              leadership, helping teams develop technical solutions aligned with
              the business vision.
            </li>
          </ul>
        </section>

        <section>
          <h2>Professional experience</h2>
          <Timeline>
            <Timeline.Item>
              <ExperienceJob
                title="Digital Channels Architect"
                company="GFT"
                fromDate="January 2022"
                toDate="present"
              >
                <p>
                  As a software architect at GFT, in addition to supporting
                  various projects in resolving technical issues, I also play a
                  support role for the commercial team, seeking to align our
                  customers' needs with robust, scalable, and efficient
                  technical solutions.
                </p>
                <h4>Main projects:</h4>
                <ExperienceProject title="GFT Digital Studio">
                  <p>
                    The Digital Studio is the area of GFT that centralizes the
                    expertise in digital channels (Web and Mobile development),
                    customer experience, agility, and digital assets. My focus
                    on the team is to support commercial activities in
                    opportunities related to digital channels, combining the
                    needs of our customers with the search for innovative and
                    optimized technical solutions. In addition, we carry out
                    various training and qualification actions for GFT
                    professionals, evolving our community of Mobile and Web
                    developers.
                  </p>
                </ExperienceProject>
                <ExperienceProject title="Bradesco Bank">
                  Bradesco Bank, based in Coral Gables, Florida, is a division
                  of Bradesco focused on providing financial services to more
                  than 11,000 non-resident customers in the United States. I
                  participated in the modernization of the Mobile and Web
                  application experience, leading a development team focused on
                  React and Python technologies. The biggest challenge was
                  alignment with various third-party tools that made up the
                  application, with the goal of developing improvements within
                  the limitations of these. We made several structural
                  improvements in technology, while delivering more optimized
                  journeys for the bank's customers.
                </ExperienceProject>
                <ExperienceProject title="GFT Internal Project">
                  <p>
                    One of the internal projects that I executed at GFT was a
                    management tool, in which I was involved from the conception
                    of the project, architecting the solution as a whole,
                    including Cloud infrastructure (AWS), development pipeline
                    (Gitlab CI, Cypress, AWS Serverless), back-end (.NET) and
                    front-end (Angular). I led the development and testing team
                    throughout the delivery of various features.
                  </p>
                </ExperienceProject>
                <ExperienceProject title="Mitre Realty">
                  <p>
                    Mitre Realty, as a company in the civil construction
                    industry, seeking to stay close to its customers, built a
                    mobile application called Mitre Experience, based on React
                    Native, Node.js and Oracle. I acted as technical leader in a
                    squad for the evolution of this product, focused on
                    delivering more personalized experiences to users, based on
                    data, geolocation, etc. In addition, I performed several
                    optimizations in the automated testing and development
                    pipeline, using Gitlab CI, Playwright and App
                    Center+CodePush.
                  </p>
                </ExperienceProject>
                <ExperienceProject title="Share Student Living">
                  <p>
                    I acted as a technical leader in a team of a Mitre group
                    spin-off company called Share Student Living. The business
                    was focused on providing shared apartment rentals for
                    university students. I acted on two fronts, the first was
                    related to the mobile application (React Native), in which
                    we implemented new features to allow students to make
                    various common requests through the App (self-service),
                    without the need to contact the call center and generate
                    operational effort from the back-office. The other front was
                    related precisely to the system used by the back-office,
                    optimizing user journeys, reducing time to execute various
                    activities.
                  </p>
                </ExperienceProject>
              </ExperienceJob>
            </Timeline.Item>

            <Timeline.Item>
              <ExperienceJob
                title="Front-end Developer"
                company="GFT"
                fromDate="July 2019"
                toDate="December 2021"
              >
                <p>
                  I worked as a front-end developer in a project to modernize
                  and restructure the digital channels of Banco BV. In the
                  project, I performed the migration of several legacy
                  technologies (Angular.js, JSP, etc.) to more modern and
                  flexible platforms (Angular 9/11, Liferay, etc.), transforming
                  the entire content management flow. I participated in the
                  process of updating the bank's brand, in which we made
                  progressive adjustments to the visual and verbal communication
                  of the communication channels (website, Web application). I
                  worked with the Adobe Maxymiser platform for A/B testing,
                  later migrating to Salesforce Marketing Cloud/Interaction
                  Studio.
                </p>
                <h4>Main projects:</h4>
                <ExperienceProject title="banco BV">
                  <p>
                    I worked as a front-end developer in a project to modernize
                    and restructure the digital channels of Banco BV. In the
                    project, I performed the migration of several legacy
                    technologies (Angular.js, JSP, etc.) to more modern and
                    flexible platforms (Angular 9/11, Liferay, etc.),
                    transforming the entire content management flow. I
                    participated in the process of updating the bank's brand, in
                    which we made progressive adjustments to the visual and
                    verbal communication of the communication channels (website,
                    Web application). I worked with the Adobe Maxymiser platform
                    for A/B testing, later migrating to Salesforce Marketing
                    Cloud/Interaction Studio.
                  </p>
                </ExperienceProject>
              </ExperienceJob>
            </Timeline.Item>

            <Timeline.Item>
              <ExperienceJob
                title="Co-founder &amp; CTO"
                company="Contraktor"
                fromDate="September 2016"
                toDate="April 2019"
              >
                <p>
                  As co-founder of the startup, I contributed since the
                  beginning for the construction of the main product. To this
                  date, it is active in several companies, facilitating all
                  kinds of tasks related to contract management, including
                  document creation, digital signature, <em>etc</em>.
                </p>
                <ul>
                  <li>
                    Cloud computing management (mainly{" "}
                    <strong>Amazon AWS</strong>)
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
                    API modeling (<strong>REST</strong> and{" "}
                    <strong>GraphQL</strong>)
                  </li>
                  <li>
                    Back-end development with <strong>Elixir</strong> and{" "}
                    <strong>Node.js</strong>
                  </li>
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
                  Web development on two projects: PROINFODATA and &ldquo;
                  <em>
                    Sistema Integrado de Monitoramento do Ministério das
                    Comunicações
                  </em>{" "}
                  (SIMMC)&rdquo;. I worked since the beggining in both projects
                  that today are widely used by the brazilian governament.
                  Reaching over 2,520 cities all around the country, their
                  objective is to monitor and assess the effectiveness of
                  investments made in hardware and network technology in social
                  programs.
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
                      Institutional Program of Scientific Initiation at the
                      Federal University of Paraná. Publication in EVINCI 2014:{" "}
                      <em>
                        &ldquo;Redes neurais artificiais aplicadas à robótica de
                        enxame&rdquo;
                      </em>
                      &nbsp; (
                      <em>
                        Artificial neural networks applied to swarm robotics
                      </em>
                      ).
                    </p>
                    <p>
                      Advisor: Prof. Dr. Eduardo Jaques Spinosa - Information
                      Technology Deparment (UFPR)
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
                      <br />
                      Advisor: Prof. Dr. Fabiano Silva - Information Technology
                      Deparment (UFPR)
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
              Paper published on IDEAS 2016 conference. Compiles results of
              research work made while I was working in &ldquo;Centro de
              Computação Científica e Software Livre (C3SL)&rdquo;. The paper
              presents how NoSQL databases can be used in the context of Data
              Warehouses and how we applied those concepts in our projects.
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
            <Tag>TypeScript</Tag>
            <Tag>Elixir</Tag>
            <Tag>Python</Tag>
            <Tag>Java</Tag>
            <label>Frameworks and tools</label>
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
            <label>Databases</label>
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
            <li>
              <strong>Portuguese</strong> - native
            </li>
            <li>
              <strong>English</strong> - advanced reading, writing and
              conversation.
            </li>
          </ul>
        </section>
      </aside>
    </TwoColumnsLayout>
  </Layout>
)

export default IndexPage
