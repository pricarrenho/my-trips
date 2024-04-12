import styled, { css, keyframes } from "styled-components";

const expandAnimationToOpen = keyframes`
  from {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    right: 20px; 
    top: 20px;
  }
  to {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    right: 0; 
    top: 0;
  }
`;

const expandAnimationToClosed = keyframes`
  from {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    right: 0; 
    top: 0;
  }

  to {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    right: 20px; 
    top: 20px;
  
  }
`;

type MenuContainerProps = {
  expanded: boolean;
};

export const MenuContainer = styled.div<MenuContainerProps>`
  ${({ expanded }) => css`
    position: fixed;
    top: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;
    transition: all 0.3s ease;

    ${expanded
      ? css`
          animation: ${expandAnimationToOpen} 0.5s forwards;
        `
      : css`
          animation: ${expandAnimationToClosed} 0.5s forwards;
        `}
  `}
`;

export const Hamburger = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  border: none;
  background-color: white;
  cursor: pointer;
`;

export const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: red;
`;

export const ExpandedMenu = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: white;
  color: white;
  font-size: 24px;
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  font-size: 32px;
  border: none;
  background-color: transparent;
  color: red;
  cursor: pointer;
`;
