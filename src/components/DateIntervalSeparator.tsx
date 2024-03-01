import styled from "styled-components";

const Wrapper = styled.span`
  color: #cfcfcf;
  margin: 0 0.25em;
`;

export function DateIntervalSeparator() {
  return <Wrapper>&mdash;</Wrapper>;
}
