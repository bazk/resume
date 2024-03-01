import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  margin: 2rem auto;
  max-width: 960px;
  min-height: 120vh;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 1px 1px 5px -2px rgba(0, 0, 0, 0.6);

  @media print {
    margin: 0;
    max-width: initial;
    padding: 0;
    box-shadow: none;
  }
`;
