import styled from "styled-components";

import { DateIntervalSeparator } from "@/components/DateIntervalSeparator";
import { useDateFormatter } from "@/hooks/useDateFormatter";
import { useTranslations } from "next-intl";

const Secondary = styled.span`
  color: rgb(var(--primary-rgb));
`;

export type ExperienceJobProps = {
  title?: string;
  company?: string;
  fromDate?: Date;
  toDate?: Date;
  children: React.ReactNode;
};

export function ExperienceJob({
  title,
  company,
  fromDate,
  toDate,
  children,
}: ExperienceJobProps) {
  const d = useDateFormatter("MMM/yyyy");

  const t = useTranslations();

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
          {d(fromDate)}
          <DateIntervalSeparator />
          {d(toDate)}
        </p>
      )}
      {fromDate && !toDate && (
        <p>
          {d(fromDate)} <DateIntervalSeparator /> {t("present")}
        </p>
      )}
      {!fromDate && toDate && <p>{d(toDate)}</p>}

      {children}
    </>
  );
}
