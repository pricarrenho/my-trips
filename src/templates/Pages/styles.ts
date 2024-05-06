import styled, { css } from "styled-components";

export const Content = styled.section`
  padding: 114px 0px;

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
    gap: 24px;
    background-color: ${theme.colors.neutral[800]};
    padding: 24px;
    border-radius: 8px;

    @media (min-width: 800px) {
      padding: 48px;
    }
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 16px;

    p,
    a {
      font-size: ${theme.font.sizes.mmd};
      line-height: 40px;
    }

    a {
      color: ${theme.colors.neutral[500]};

      &:hover {
        color: ${theme.colors.red};
      }
    }

    @media (min-width: 800px) {
      gap: 24px;

      p,
      a {
        font-size: ${theme.font.sizes.lg};
        line-height: 34px;
      }
    }
  `}
`;
