import styled from "styled-components";

export const TagGroup = styled.ul`
  margin: 0;
  list-style: none;

  > * {
    display: inline-block;
  }

  > label {
    font-size: 0.6em;
    font-weight: bold;
    text-transform: uppercase;
    width: 100%;
    margin-top: 0.5em;
    margin-left: 0.375em;
    margin-bottom: 0.2em;
    color: var(--text-color-light);
  }
`;
