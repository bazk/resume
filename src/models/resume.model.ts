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
    fromDate: Date;
    toDate?: Date;
    description?: OptionallyLocalized<ReactNode>;
    projects?: {
      title: OptionallyLocalized<string>;
      description?: OptionallyLocalized<ReactNode>;
    }[];
  }[];

  academicExperiences?: {
    title: OptionallyLocalized<string>;
    organization?: OptionallyLocalized<string>;
    fromDate: Date;
    toDate?: Date;
    description?: OptionallyLocalized<ReactNode>;
    projects?: {
      title: OptionallyLocalized<string>;
      fromDate?: Date;
      toDate?: Date;
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
    image?: {
      src: string;
      width: number;
      height: number;
    };
  }[];

  publications?: {
    title: OptionallyLocalized<string>;
    journal?: OptionallyLocalized<string>;
    publicationDate?: Date;
    description?: OptionallyLocalized<ReactNode>;
    doi?: string;
    link?: string;
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
