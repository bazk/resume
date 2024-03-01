import styled from "styled-components";

export const Bullet = styled.span`
  display: inline-block;
  width: 0.25em;
  height: 0.25em;
  margin: 0.2em 0.5em;
  border-radius: 100%;
  background-color: #bececa;

  &:last-child {
    margin-bottom: 0.2em;
  }
`;
