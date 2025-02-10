import styled from "styled-components";
import { useLocale, useTranslations } from "next-intl";

import { DateIntervalSeparator } from "@/components/DateIntervalSeparator";
import { IconLink } from "@/icons/IconLink";
import { useDateFormatter } from "@/hooks/useDateFormatter";
import { useRouter } from "next/router";
import Image from "next/image";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const CertMain = styled.div`
  margin-right: 1em;
  flex-grow: 1;
`;

const CertImage = styled(Image)`
  width: 12rem;
  height: auto;
`;

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0.25em;
`;

const Organization = styled.h4`
  color: rgb(var(--primary-rgb));
  margin-bottom: 0.5em;
`;

const CertLink = styled.a`
  margin-top: 0.75em;
  color: rgb(var(--primary-rgb));
  border: 1px solid rgb(var(--primary-rgb));
  border-radius: 4px;
  padding: 0.5em 1em;
  display: inline-flex;
  align-items: center;

  transition: var(--transition-short);

  > * {
    margin-right: 0.5rem;

    &:last-child {
      margin-right: 0;
    }
  }

  &:hover {
    background-color: rgb(var(--primary-rgb));
    color: white;
  }
`;

export type CertificationProps = {
  title: string;
  organization?: string;
  issueDate?: Date;
  expirationDate?: Date;
  link?: string;
  image?: {
    src: string;
    width: number;
    height: number;
  };
  children: React.ReactNode;
};

export function Certification({
  title,
  organization,
  issueDate,
  expirationDate,
  link,
  image,
  children,
}: CertificationProps) {
  const router = useRouter();

  const d = useDateFormatter("MMM/yyyy");

  const t = useTranslations("certification");

  const isExpired = expirationDate && expirationDate < new Date();
  const issuedAt = issueDate && t("issuedAt");
  const expiresAt = expirationDate && t(isExpired ? "expiredAt" : "expiresAt");

  return (
    <Wrapper>
      <CertMain>
        <Title>{title}</Title>
        {organization && <Organization>{organization}</Organization>}

        {issuedAt && expiresAt && (
          <p>
            {issuedAt} {d(issueDate)}
            <DateIntervalSeparator />
            {expiresAt} {d(expirationDate)}
          </p>
        )}
        {issuedAt && !expiresAt && (
          <p>
            {issuedAt} {d(issueDate)}
          </p>
        )}
        {!issuedAt && expiresAt && (
          <p>
            {expiresAt} {d(expirationDate)}
          </p>
        )}

        {children}

        {link && (
          <CertLink href={link} target="_blank">
            <span>{t("viewCertificate")}</span>
            <IconLink />
          </CertLink>
        )}
      </CertMain>

      {image && (
        <CertImage
          src={
            image.src.startsWith("/")
              ? `${router.basePath}${image.src}`
              : image.src
          }
          alt={title}
          width={image.width}
          height={image.height}
        />
      )}
    </Wrapper>
  );
}
