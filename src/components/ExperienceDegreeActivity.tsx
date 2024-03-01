import styled from "styled-components";

const List = styled.ol`
  margin: none;
  list-style: none;
`;

export type ExperienceDegreeActivityProps = {
  title: string;
  children?: React.ReactNode;
};

export function ExperienceDegreeActivity({
  title,
  children,
}: ExperienceDegreeActivityProps) {
  return <List>{children}</List>;
}
