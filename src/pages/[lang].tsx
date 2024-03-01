import Head from "next/head";

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
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

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
    },
  };
};

export type ResumePageProps = {
  lang: LocalizationKey;
};

export default function ResumePage({ lang }: ResumePageProps) {
  const data = BazkResume;

  return (
    <>
      <Head>
        <title>{getText(data.page.title, lang)}</title>
        {data.page.description && (
          <meta
            name="description"
            content={getText(data.page.description, lang) as string}
          />
        )}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        name={getText(data.header.name, lang)}
        tagline={getText(data.header.tagline, lang)}
        email={getText(data.header.email, lang)}
        phone={getText(data.header.phone, lang)}
        location={getText(data.header.location, lang)}
        linkedin={getText(data.header.linkedin, lang)}
        github={getText(data.header.github, lang)}
      />

      <TwoColumnsLayout>
        <main>
          {data.summary && (
            <section>
              <h2>Profile</h2>
              {getText(data.summary, lang)}
            </section>
          )}

          {data.jobExperiences && (
            <section>
              <h2>Professional experience</h2>
              <Timeline>
                {data.jobExperiences.map((job, idx) => (
                  <TimelineItem key={idx}>
                    <ExperienceJob
                      title={getText(job.title, lang)}
                      company={getText(job.company, lang)}
                      fromDate={getText(job.fromDate, lang)}
                      toDate={getText(job.toDate, lang)}
                    >
                      {getText(job.description, lang)}
                      {job.projects && (
                        <>
                          <h4>Main projects:</h4>
                          {job.projects.map((project, idx) => (
                            <ExperienceProject
                              key={idx}
                              title={getText(project.title, lang) || ""}
                            >
                              {getText(project.description, lang)}
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
              <h2>Academic experience</h2>
              {data.academicExperiences.map((academic, idx) => (
                <ExperienceJob
                  key={idx}
                  title={getText(academic.title, lang)}
                  company={getText(academic.organization, lang)}
                  fromDate={getText(academic.fromDate, lang)}
                  toDate={getText(academic.toDate, lang)}
                >
                  {getText(academic.description, lang)}
                  {academic.projects && (
                    <Timeline>
                      {academic.projects.map((project, idx) => (
                        <TimelineItem key={idx}>
                          <ExperienceProject
                            title={getText(project.title, lang) || ""}
                            fromDate={getText(project.fromDate, lang)}
                            toDate={getText(project.toDate, lang)}
                          >
                            {getText(project.description, lang)}
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
              <h2>Certifications</h2>
              {data.certifications.map((certification, idx) => (
                <ExperienceJob
                  key={idx}
                  title={getText(certification.title, lang)}
                  fromDate={getText(certification.issueDate, lang)}
                >
                  {getText(certification.description, lang)}
                </ExperienceJob>
              ))}
            </section>
          )}

          {data.publications && (
            <section>
              <h2>Publications</h2>
              {data.publications.map((publication, idx) => (
                <ExperienceJob
                  key={idx}
                  title={getText(publication.title, lang)}
                  fromDate={getText(publication.publicationDate, lang)}
                >
                  {getText(publication.description, lang)}
                </ExperienceJob>
              ))}
            </section>
          )}
        </main>

        <aside>
          {data.technicalSkills && (
            <section>
              <h2>Technical skills</h2>
              {data.technicalSkills.map((group, idx) => (
                <TagGroup key={idx}>
                  <label>{getText(group.category, lang)}</label>
                  {group.skills.map((skill, idx) => (
                    <Tag key={idx}>{getText(skill, lang)}</Tag>
                  ))}
                </TagGroup>
              ))}
            </section>
          )}
          {data.softSkills && (
            <section>
              <h2>Soft skills</h2>
              <p>
                {data.softSkills.map((skill, idx) => (
                  <React.Fragment key={idx}>
                    {getText(skill, lang)}
                    <Bullet />
                  </React.Fragment>
                ))}
              </p>
            </section>
          )}
          {data.languages && (
            <section>
              <h2>Languages</h2>
              <ul>
                {data.languages.map((language, idx) => (
                  <li key={idx}>
                    <strong>{getText(language.language, lang)}</strong>
                    <Bullet />
                    {getText(language.proficiency, lang)}
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
