import styled from "styled-components";
import { useTranslations } from "next-intl";

import { DateIntervalSeparator } from "@/components/DateIntervalSeparator";
import { IconLink } from "@/icons/IconLink";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const CertMain = styled.div`
  margin-right: 1em;
  flex-grow: 1;
`;

const CertAside = styled.div`
  width: 10rem;
`;

const Title = styled.h3`
  margin-bottom: 0.25em;
`;

const Organization = styled.h4`
  color: #2e9a82;
  margin-bottom: 0.75em;
`;

const CertLink = styled.a`
  margin-top: 0.75em;
  color: #2e9a82;
  border: 1px solid #2e9a82;
  border-radius: 4px;
  padding: 0.5em 1em;
  display: inline-flex;
  align-items: center;

  transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);

  > * {
    margin-right: 0.5rem;

    &:last-child {
      margin-right: 0;
    }
  }

  &:hover {
    background-color: #2e9a82;
    color: white;
  }
`;

export type CertificationProps = {
  title?: string;
  organization?: string;
  fromDate?: string;
  toDate?: string;
  link?: string;
  children: React.ReactNode;
};

export function Certification({
  title,
  organization,
  fromDate,
  toDate,
  link,
  children,
}: CertificationProps) {
  const t = useTranslations();

  return (
    <Wrapper>
      <CertMain>
        <Title>{title}</Title>
        {organization && <Organization>{organization}</Organization>}

        {fromDate && toDate && (
          <p>
            {fromDate}
            <DateIntervalSeparator />
            {toDate}
          </p>
        )}
        {fromDate && !toDate && <p>{fromDate}</p>}
        {!fromDate && toDate && <p>{toDate}</p>}

        {children}

        {link && (
          <CertLink href={link} target="_blank">
            <span>{t("viewCertificate")}</span>
            <IconLink />
          </CertLink>
        )}
      </CertMain>

      <CertAside>
        <img src="/images/aws-certified-solutions-architect.png" alt={title} />
      </CertAside>
    </Wrapper>
  );
}
