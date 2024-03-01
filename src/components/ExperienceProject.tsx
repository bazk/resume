import styled from "styled-components";
import { DateIntervalSeparator } from "./DateIntervalSeparator";

const Wrapper = styled.div`
  margin-left: 1rem;
`;

export type ExperienceProjectProps = {
  title: string;
  fromDate?: string;
  toDate?: string;
  children?: React.ReactNode;
};

export function ExperienceProject({
  title,
  fromDate,
  toDate,
  children,
}: ExperienceProjectProps) {
  return (
    <Wrapper>
      <h5>{title}</h5>

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
    </Wrapper>
  );
}
