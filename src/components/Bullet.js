import styled from "styled-components"

const Bullet = styled.span`
  display: inline-block;
  width: 0.250em;
  height: 0.250em;
  margin: 0.2em 0.5em;
  border-radius: 100%;
  background-color: #bececa;

  &:last-child {
    margin-bottom: 0.2em;
  }
`;

export default Bullet;