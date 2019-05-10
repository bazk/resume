import React from "react"

import Layout from "../components/Layout"
import Header from "../components/Header"
import SEO from "../components/SEO"

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
      description="Brasileiro, casado, 27 anos"
      email="eburatti09@gmail.com"
      phone="+55 (41) 9 9918 4327"
      location="Curitiba, PR"
      linkedin="eburatti"
      github="bazk"
    />

    {/* <ExperienceList title="Experiência profissional">
      <ExperienceJob
        place="Contraktor"
        fromDate={new Date('2016-09-01')}
        toDate={new Date('2019-04-028')}
      >
        <ExperienceJobPosition
          position="Chief Technology Officer (CTO)"
          fromDate={new Date('2018-01-01')}
          toDate={new Date('2019-04-028')}
        />
        <ExperienceJobPosition
          position="Engenheiro de Software"
          fromDate={new Date('2016-09-01')}
          toDate={new Date('2018-01-01')}
        />
      </ExperienceJob>
      <ExperienceJob
        place="Centro de Computação Científica e Software Livre (C3SL)"
        fromDate={new Date('2011-08-01')}
        toDate={new Date('2016-11-01')}
      >
        <ExperienceJobPosition
          position="Estagiário"
          fromDate={new Date('2011-08-01')}
          toDate={new Date('2016-11-01')}
          description={
            <div>
              <p>
                Desenvolvimento Web para os projetos PROINFODATA e Sistema Integrado de
                Monitoramento do Ministério das Comunicações (SIMMC). Projetos amplamente
                utilizado pelo governo brasileiro com objetivo de monitorar recursos de
                hardware e rede provenientes de projetos sociais. Abrange mais de
                2.520 municípios distribuídos por todo o Brasil. Dentre as atividades
                realizadas destacam-se:
              </p>
              <ul>
                <li>Criação de RESTful API’s com a plataforma Node.js;</li>
                <li>Administração de bancos de dados PostgreSQL e MongoDB;</li>
                <li>Modelagem e manutenção de Data Warehouses;</li>
                <li>Deploy de serviços utilizando a ferramenta Docker;</li>
                <li>Construção de páginas Web responsivas utilizando os frameworks Play (PROINFODATA) e Angular.js (SIMMC);</li>
                <li>Administração de servidores Linux.</li>
              </ul>
            </div>
          }
        />
      </ExperienceJob>
    </ExperienceList>

    <ExperienceList title="Formação acadêmica">
      <ExperienceDegree
        school="Universidade Federal do Paraná"
        degree="Bacharel em Ciência da Computação"
        fromDate={new Date('2009-07-01')}
        toDate={new Date('2014-12-01')}
      >
        <ExperienceDegreeActivity
          activity="Iniciação Científica Voluntária"
          fromDate={new Date('2012-07-01')}
          toDate={new Date('2013-07-01')}
          description={
            <div>
              <p>Bolsista de Iniciação Científica na Universidade Federal do Paraná.</p>
              <p>
                Participação no EVINCI 2014 com o tema: “Redes neurais
                artificiais aplicadas à robótica de enxame”.
              </p>
              <p>
                Orientador: Prof. Dr. Eduardo Jaques Spinosa - Departamento de
                Informática (UFPR)
              </p>
            </div>
          }
        />
      </ExperienceDegree>
    </ExperienceList> */}
  </Layout>
)

export default IndexPage
