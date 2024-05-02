import styled, { css } from "styled-components";

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 0px;
  gap: 48px;

  @media (min-width: 800px) {
    padding: 140px 0px;
  }
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    background-color: ${theme.colors.neutral[800]};
    padding: 24px;
    border-radius: 8px;
  `}
`;

export const Heading = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xl};

    @media (min-width: 800px) {
      font-size: ${theme.font.sizes.xxl};
    }
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

export const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  border-radius: 4px;
  width: 343px;
  height: 206px;
  object-fit: cover;
  object-position: top;
  display: block;

  @media (min-width: 800px) {
    min-width: 530px;
    min-height: 320px;
  }
`;
