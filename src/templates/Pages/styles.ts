import styled from "styled-components";

export const Content = styled.section`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: var(--container);

  @media (max-width: 700px) {
    padding: var(--small);
  }
`;

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--large);

  @media (max-width: 700px) {
    font-size: var(--medium);
    margin-bottom: var(--small);
  }
`;

export const Body = styled.div`
  p {
    font-size: var(--medium);
    line-height: var(--medium);
  }
  a {
    font-size: var(--medium);
  }

  @media (max-width: 700px) {
    p {
      font-size: var(--small);
    }
    a {
      font-size: var(--small);
    }
  }
`;
