import styled, { css } from "styled-components";

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 72px 0px;

  @media (min-width: 800px) {
    padding: 120px 0px;
  }
`;

export const Heading = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxl};

    @media (min-width: 800px) {
      font-size: ${theme.font.sizes.xxxl};
    }
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    text-align: center;

    div {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    p,
    a {
      font-size: ${theme.font.sizes.lg};
      line-height: 40px;
    }

    @media (min-width: 800px) {
      div {
        gap: 18px;
      }

      p,
      a {
        font-size: ${theme.font.sizes.xl};
        line-height: 56px;
      }
    }
  `}
`;
