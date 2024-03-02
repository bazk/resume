import styled from "styled-components";
import { useTranslations } from "next-intl";

import { DateIntervalSeparator } from "@/components/DateIntervalSeparator";
import { useDateFormatter } from "@/hooks/useDateFormatter";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const Main = styled.div`
  margin-right: 1em;
  flex-grow: 1;
`;

const Title = styled.h3`
  margin-bottom: 0.25em;
`;

const Organization = styled.h4`
  color: rgb(var(--primary-rgb));
  margin-bottom: 0.5em;
`;

const DOILink = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;

  transition: var(--transition-short);

  > :first-child {
    color: var(--text-color-light);
  }

  &:hover,
  &:hover > :first-child {
    color: rgb(var(--primary-rgb));
    text-decoration: underline;
  }
`;

export type PublicationProps = {
  title?: string;
  organization?: string;
  publicationDate?: Date;
  doi?: string;
  children: React.ReactNode;
};

export function Publication({
  title,
  organization,
  publicationDate,
  doi,
  children,
}: PublicationProps) {
  const d = useDateFormatter("MMM/yyyy");

  return (
    <Wrapper>
      <Main>
        <Title>{title}</Title>
        {organization && <Organization>{organization}</Organization>}
        <p>
          {publicationDate && d(publicationDate)}
          <DateIntervalSeparator />
          {doi && (
            <DOILink href={`https://doi.org/${doi}`} target="_blank">
              <span>doi.org/</span>
              {doi}
            </DOILink>
          )}
        </p>
        {children}
      </Main>
    </Wrapper>
  );
}
