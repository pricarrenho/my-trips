import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    z-index: 1100;
    top: 48px;
    right: 16px;
    cursor: pointer;
  `}
`;
