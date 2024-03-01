import styled from "styled-components";

import { DateIntervalSeparator } from "@/components/DateIntervalSeparator";

const Title = styled.h3`
  margin-bottom: 0.25em;
`;

const Organization = styled.h4`
  color: #2e9a82;
  margin-bottom: 0.75em;
`;

export type CertificationProps = {
  title?: string;
  organization?: string;
  fromDate?: string;
  toDate?: string;
  children: React.ReactNode;
};

export function Certification({
  title,
  organization,
  fromDate,
  toDate,
  children,
}: CertificationProps) {
  return (
    <>
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
    </>
  );
}
