import styled from "styled-components";

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding-top: 72px;

  @media (min-width: 800px) {
    padding-top: 120px;
  }
`;

export const Heading = styled.h1`
  font-size: 40px;

  @media (min-width: 800px) {
    font-size: 48px;
  }
`;

export const Body = styled.div`
  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  p,
  a {
    font-size: 24px;
    line-height: 40px;
  }

  @media (min-width: 800px) {
    div {
      gap: 18px;
    }

    p,
    a {
      font-size: 36px;
      line-height: 56px;
    }
  }
`;
