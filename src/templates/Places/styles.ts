import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  padding: 72px 0px;

  @media (min-width: 800px) {
    padding: 120px 0px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
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

    p {
      font-size: ${theme.font.sizes.lg};
      line-height: 40px;
    }

    @media (min-width: 800px) {
      p {
        font-size: ${theme.font.sizes.xl};
        line-height: 56px;
      }
    }
  `}
`;

export const Gallery = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
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
    min-width: 500px;
    min-height: 320px;
  }
`;
