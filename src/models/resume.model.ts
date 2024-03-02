import { ReactNode } from "react";
import { OptionallyLocalized } from "./localization.model";

export interface Resume {
  page: {
    title: OptionallyLocalized<string>;
    description?: OptionallyLocalized<string>;
    keywords?: OptionallyLocalized<string>[];
  };

  header: {
    name: OptionallyLocalized<string>;
    tagline?: OptionallyLocalized<string>;
    email?: OptionallyLocalized<string>;
    phone?: OptionallyLocalized<string>;
    location?: OptionallyLocalized<string>;
    linkedin?: OptionallyLocalized<string>;
    github?: OptionallyLocalized<string>;
  };

  summary?: OptionallyLocalized<ReactNode>;

  jobExperiences?: {
    title: OptionallyLocalized<string>;
    company?: OptionallyLocalized<string>;
    fromDate: OptionallyLocalized<string>;
    toDate?: OptionallyLocalized<string>;
    description?: OptionallyLocalized<ReactNode>;
    projects?: {
      title: OptionallyLocalized<string>;
      description?: OptionallyLocalized<ReactNode>;
    }[];
  }[];

  academicExperiences?: {
    title: OptionallyLocalized<string>;
    organization?: OptionallyLocalized<string>;
    fromDate: OptionallyLocalized<string>;
    toDate?: OptionallyLocalized<string>;
    description?: OptionallyLocalized<ReactNode>;
    projects?: {
      title: OptionallyLocalized<string>;
      fromDate?: OptionallyLocalized<string>;
      toDate?: OptionallyLocalized<string>;
      description?: OptionallyLocalized<ReactNode>;
    }[];
  }[];

  certifications?: {
    title: OptionallyLocalized<string>;
    organization?: OptionallyLocalized<string>;
    issueDate?: Date;
    expirationDate?: Date;
    description?: OptionallyLocalized<ReactNode>;
    link?: string;
  }[];

  publications?: {
    title: OptionallyLocalized<string>;
    journal?: OptionallyLocalized<string>;
    publicationDate?: OptionallyLocalized<string>;
    description?: OptionallyLocalized<ReactNode>;
  }[];

  technicalSkills?: {
    category: OptionallyLocalized<string>;
    skills: OptionallyLocalized<string>[];
  }[];

  softSkills?: OptionallyLocalized<string>[];

  languages?: {
    language: OptionallyLocalized<string>;
    proficiency: OptionallyLocalized<string>;
  }[];
}
