import styled from "styled-components";

export const Timeline = styled.div``;

export const TimelineItem = styled.div`
  margin-left: 2rem;
  position: relative;

  :not(:first-child) {
    > h3 {
      margin-top: 1.5rem;
    }
  }

  &:before {
    content: "";
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    left: calc(-1rem - 0.25rem);
    top: 0.5rem;
    background: var(--text-color-lighter);
    border-radius: 100%;
  }

  &:not(:last-child):after {
    content: "";
    display: block;
    width: 2px;
    height: calc(100%);
    position: absolute;
    left: calc(-1rem - 1px);
    top: 1.5rem;
    background: var(--text-color-lighter);
  }
`;
