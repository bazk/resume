import styled from "styled-components";

export const Tag = styled.li`
  border: 1px solid rgba(var(--primary-rgb), 0.3);
  background-color: rgba(var(--primary-rgb), 0.05);
  padding: 0 0.5em;
  margin: 0.2em;
  border-radius: 4px;
  font-size: 0.8em;
  font-weight: bold;
  color: rgb(var(--primary-rgb));

  transition: background-color var(--transition-timing-long)
    var(--transition-easing-long);

  &:hover {
    background-color: rgba(var(--primary-rgb), 0.1);
  }
`;
