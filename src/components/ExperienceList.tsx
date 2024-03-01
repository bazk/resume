import styled from "styled-components";

const List = styled.ol`
  margin: 0;
  list-style: none;
`;

export type ExperienceListProps = {
  title: string;
  children?: React.ReactNode;
};

export function ExperienceList({ title, children }: ExperienceListProps) {
  return (
    <div>
      <h2>{title}</h2>
      <List>{children}</List>
    </div>
  );
}
