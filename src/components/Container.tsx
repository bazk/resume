import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  margin: 2rem auto;
  width: var(--page-width);
  padding: 1rem 2rem;
  background: var(--page-background);
  box-shadow: var(--box-shadow);

  @media print {
    margin: 0;
    width: initial;
    padding: 0;
    box-shadow: none;
  }
`;
