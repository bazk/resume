import styled from "styled-components";

import { DateIntervalSeparator } from "@/components/DateIntervalSeparator";

const Secondary = styled.span`
  color: #2e9a82;
`;

export type ExperienceJobProps = {
  title?: string;
  company?: string;
  fromDate?: string;
  toDate?: string;
  children: React.ReactNode;
};

export function ExperienceJob({
  title,
  company,
  fromDate,
  toDate,
  children,
}: ExperienceJobProps) {
  return (
    <>
      {title && company && (
        <h3>
          {title} <Secondary>@ {company}</Secondary>
        </h3>
      )}
      {title && !company && <h3>{title}</h3>}
      {!title && company && <h3>{company}</h3>}

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
