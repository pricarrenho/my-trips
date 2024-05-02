import styled, { css } from "styled-components";

export const Content = styled.section`
  padding: 72px 0px;

  @media (min-width: 800px) {
    padding: 140px 0px;
  }
`;

export const Heading = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xl};

    @media (min-width: 800px) {
      font-size: ${theme.font.sizes.xxl};
    }
  `}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    background-color: ${theme.colors.neutral[800]};
    padding: 24px;
    border-radius: 8px;
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 8px;

    p,
    a {
      font-size: ${theme.font.sizes.mmd};
      line-height: 40px;
    }

    a {
      color: ${theme.colors.red};
    }

    @media (min-width: 800px) {
      gap: 16px;

      p,
      a {
        font-size: ${theme.font.sizes.lg};
        line-height: 48px;
      }
    }
  `}
`;
