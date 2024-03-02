import styled from "styled-components";

import { DateIntervalSeparator } from "./DateIntervalSeparator";
import { useDateFormatter } from "@/hooks/useDateFormatter";

const Wrapper = styled.div`
  margin-left: 1rem;
`;

export type ExperienceProjectProps = {
  title: string;
  fromDate?: Date;
  toDate?: Date;
  children?: React.ReactNode;
};

export function ExperienceProject({
  title,
  fromDate,
  toDate,
  children,
}: ExperienceProjectProps) {
  const d = useDateFormatter("MMM/yyyy");

  return (
    <Wrapper>
      <h5>{title}</h5>

      {fromDate && toDate && (
        <p>
          {d(fromDate)}
          <DateIntervalSeparator />
          {d(toDate)}
        </p>
      )}
      {fromDate && !toDate && <p>{d(fromDate)}</p>}
      {!fromDate && toDate && <p>{d(toDate)}</p>}

      {children}
    </Wrapper>
  );
}
