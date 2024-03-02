import { Fragment } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useTranslations } from "next-intl";

import { BazkResume } from "@/data/bazk.resume";
import {
  LocalizationKey,
  Localized,
  OptionallyLocalized,
} from "@/models/localization.model";
import { Header } from "@/components/Header";
import { TwoColumnsLayout } from "@/components/TwoColumnsLayout";
import { Timeline, TimelineItem } from "@/components/Timeline";
import { ExperienceJob } from "@/components/ExperienceJob";
import { ExperienceProject } from "@/components/ExperienceProject";
import { TagGroup } from "@/components/TagGroup";
import { Tag } from "@/components/Tag";
import { Bullet } from "@/components/Bullet";
import { Certification } from "@/components/Certification";
import { Publication } from "@/components/Publication";

const messages = {
  en: {
    summary: "Profile",
    jobExperiences: "Professional experience",
    mainProjects: "Main projects",
    academicExperiences: "Academic experiences",
    certifications: "Certifications",
    publications: "Publications",
    technicalSkills: "Technical skills",
    softSkills: "Soft skills",
    languages: "Languages",
    certification: {
      issuedAt: "Issued at",
      expiresAt: "Expires at",
      expiredAt: "Expired at",
      viewCertificate: "View certificate",
    },
    present: "present",
  },
  pt: {
    summary: "Resumo",
    jobExperiences: "Experiências Profissionais",
    mainProjects: "Principais projetos",
    academicExperiences: "Experiência Acadêmicas",
    certifications: "Certifications",
    publications: "Publicações",
    technicalSkills: "Conhecimentos Técnicos",
    softSkills: "Habilidades e Competências",
    languages: "Idiomas",
    certification: {
      issuedAt: "Emitido em",
      expiresAt: "Expira em",
      expiredAt: "Expirado em",
      viewCertificate: "Visualizar certitificado",
    },
    present: "presente",
  },
};

function getText<T>(
  data?: Localized<T> | OptionallyLocalized<T> | null,
  lang: LocalizationKey = "en"
): T | undefined {
  const localized =
    data && typeof data === "object" && (data as Localized<T>)[lang];
  if (localized === "") {
    // handle the case of empty strings
    return localized as T;
  }
  return localized || (data as T) || undefined;
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: ["/en", "/pt"],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const lang = (params?.lang as LocalizationKey) || "en";

  return {
    props: {
      lang,
      messages: messages[lang],
    },
  };
};

export type ResumePageProps = {
  lang: LocalizationKey;
};

export default function ResumePage({ lang }: ResumePageProps) {
  const t = useTranslations();

  const l = function <T>(key: OptionallyLocalized<T>) {
    return getText(key, lang);
  };

  const data = BazkResume;

  return (
    <>
      <Head>
        <title>{l(data.page.title)}</title>
        {data.page.description && (
          <meta name="description" content={l(data.page.description)} />
        )}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        name={l(data.header.name)}
        tagline={l(data.header.tagline)}
        email={l(data.header.email)}
        phone={l(data.header.phone)}
        location={l(data.header.location)}
        linkedin={l(data.header.linkedin)}
        github={l(data.header.github)}
      />

      <TwoColumnsLayout>
        <main>
          {data.summary && (
            <section>
              <h2>{t("summary")}</h2>
              {l(data.summary)}
            </section>
          )}

          {data.jobExperiences && (
            <section>
              <h2>{t("jobExperiences")}</h2>
              <Timeline>
                {data.jobExperiences.map((job, idx) => (
                  <TimelineItem key={idx}>
                    <ExperienceJob
                      title={l(job.title)}
                      company={l(job.company)}
                      fromDate={job.fromDate}
                      toDate={job.toDate}
                    >
                      {l(job.description)}
                      {job.projects && (
                        <>
                          <h4>{t("mainProjects")}:</h4>
                          {job.projects.map((project, idx) => (
                            <ExperienceProject
                              key={idx}
                              title={l(project.title) || ""}
                            >
                              {l(project.description)}
                            </ExperienceProject>
                          ))}
                        </>
                      )}
                    </ExperienceJob>
                  </TimelineItem>
                ))}
              </Timeline>
            </section>
          )}

          {data.academicExperiences && (
            <section>
              <h2>{t("academicExperiences")}</h2>
              {data.academicExperiences.map((academic, idx) => (
                <ExperienceJob
                  key={idx}
                  title={l(academic.title)}
                  company={l(academic.organization)}
                  fromDate={academic.fromDate}
                  toDate={academic.toDate}
                >
                  {l(academic.description)}
                  {academic.projects && (
                    <Timeline>
                      {academic.projects.map((project, idx) => (
                        <TimelineItem key={idx}>
                          <ExperienceProject
                            title={l(project.title) || ""}
                            fromDate={project.fromDate}
                            toDate={project.toDate}
                          >
                            {l(project.description)}
                          </ExperienceProject>
                        </TimelineItem>
                      ))}
                    </Timeline>
                  )}
                </ExperienceJob>
              ))}
            </section>
          )}

          {data.certifications && (
            <section>
              <h2>{t("certifications")}</h2>
              {data.certifications.map((cert, idx) => (
                <Certification
                  key={idx}
                  title={l(cert.title)}
                  organization={l(cert.organization)}
                  issueDate={cert.issueDate}
                  expirationDate={cert.expirationDate}
                  link={cert.link}
                  image={cert.image}
                >
                  {l(cert.description)}
                </Certification>
              ))}
            </section>
          )}

          {data.publications && (
            <section>
              <h2>{t("publications")}</h2>
              {data.publications.map((publication, idx) => (
                <Publication
                  key={idx}
                  title={l(publication.title)}
                  organization={l(publication.journal)}
                  publicationDate={publication.publicationDate}
                  doi={publication.doi}
                >
                  {l(publication.description)}
                </Publication>
              ))}
            </section>
          )}
        </main>

        <aside>
          {data.technicalSkills && (
            <section>
              <h2>{t("technicalSkills")}</h2>
              {data.technicalSkills.map((group, idx) => (
                <TagGroup key={idx}>
                  <label>{l(group.category)}</label>
                  {group.skills.map((skill, idx) => (
                    <Tag key={idx}>{l(skill)}</Tag>
                  ))}
                </TagGroup>
              ))}
            </section>
          )}
          {data.softSkills && (
            <section>
              <h2>{t("softSkills")}</h2>
              <p>
                {data.softSkills.map((skill, idx) => (
                  <Fragment key={idx}>
                    {l(skill)}
                    <Bullet />
                  </Fragment>
                ))}
              </p>
            </section>
          )}
          {data.languages && (
            <section>
              <h2>{t("languages")}</h2>
              <ul>
                {data.languages.map((language, idx) => (
                  <li key={idx}>
                    <strong>{l(language.language)}</strong>
                    <Bullet />
                    {l(language.proficiency)}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </aside>
      </TwoColumnsLayout>
    </>
  );
}
