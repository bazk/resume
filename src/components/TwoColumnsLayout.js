import styled from "styled-components"

const TwoColumnsLayout = styled.div`
  > :first-child {
    display: inline-block;
    width: calc(70% - 2rem);
    margin-right: 2rem;
  }

  > :last-child {
    display: inline-block;
    float: right;
    width: 30%;
  }
`;

export default TwoColumnsLayout;