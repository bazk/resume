import styled from "styled-components";

export const TwoColumnsLayout = styled.div`
  display: flex;
  flex-direction: row;

  > :first-child {
    width: calc(70% - 2rem);
    margin-right: 2rem;
  }

  > :last-child {
    float: right;
    width: 30%;
  }
`;
