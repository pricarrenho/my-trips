import styled, { css } from "styled-components";

export const Header = styled.header``;

type MenuProps = {
  isOpen: boolean;
};

const MenuModifier = {
  isOpen: () => css`
    &:before {
      transform: translateY(12px) rotate(135deg);
      margin-left: 2px;
    }
    &:after {
      transform: translateY(-12px) rotate(-135deg);
      margin-top: 11px;
      margin-left: 2px;
    }
    & div {
      transform: scale(0);
    }
  `,
};

export const Menu = styled.button<MenuProps>`
  ${({ isOpen, theme }) => css`
    position: fixed;
    top: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background-color: ${theme.colors.white};
    border: none;
    border-radius: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 999;

    &:before,
    &:after,
    div {
      content: " ";
      position: relative;
      display: block;
      height: 2px;
      width: 22px;
      background: ${theme.colors.black};
      border-radius: 4px;
      margin: 3px 0;
      transition: 0.5s;
    }

    ${isOpen && MenuModifier.isOpen}
  `}
`;

type MenuBackgroundProps = {
  isOpen: boolean;
};

const MenuBackgroundModifier = {
  isOpen: () => css`
    transform: scale(100);
  `,
};

export const MenuBackground = styled.div<MenuBackgroundProps>`
  ${({ isOpen, theme }) => css`
    position: fixed;
    top: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background-color: #091525;
    border: none;
    border-radius: 50%;
    z-index: 997;
    transition: transform 0.8s;

    ${isOpen && MenuBackgroundModifier.isOpen}
  `}
`;

type NavProps = {
  isOpen: boolean;
};

export const NavModifier = {
  isOpen: () => css`
    opacity: 1;
    pointer-events: unset;
    transition: opacity 0.3s linear 0.3s;
  `,
};

export const Nav = styled.nav<NavProps>`
  ${({ isOpen }) => css`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 998;

    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0;
    pointer-events: none;

    transition: opacity 0.3s;

    ${isOpen && NavModifier.isOpen}
  `}
`;

export const Ul = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const Li = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.lg};
  `}
`;
