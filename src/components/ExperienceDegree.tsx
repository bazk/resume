import styled from "styled-components";

const List = styled.ol`
  margin: none;
  list-style: none;
`;

export type ExperienceDegreeProps = {
  title: string;
  children?: React.ReactNode;
};

export function ExperienceDegree({ title, children }: ExperienceDegreeProps) {
  return <List>{children}</List>;
}
