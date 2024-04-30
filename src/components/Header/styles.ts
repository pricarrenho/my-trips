import styled, { DefaultTheme, css } from "styled-components";

export const Header = styled.header``;

type MenuToggleProps = {
  isOpen: boolean;
};

const MenuToggleModifier = {
  isOpen: (theme: DefaultTheme) => css`
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

    &:before,
    &:after,
    div {
      background: ${theme.colors.white};
    }
  `,
};

export const MenuToggle = styled.button<MenuToggleProps>`
  ${({ isOpen, theme }) => css`
    position: fixed;
    top: 30px;
    right: 30px;
    width: 56px;
    height: 56px;
    border: none;
    border-radius: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 999;

    background-color: transparent;

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

    ${isOpen && MenuToggleModifier.isOpen(theme)}
  `}
`;

type MenuBackgroundProps = {
  isOpen: boolean;
};

const MenuBackgroundModifier = {
  isOpen: (theme: DefaultTheme) => css`
    transform: scale(100);
    background-color: ${theme.colors.menu};
    transition: transform 0.8s, background-color 0.3s;
  `,
};

export const MenuBackground = styled.div<MenuBackgroundProps>`
  ${({ isOpen, theme }) => css`
    position: fixed;
    top: 30px;
    right: 30px;
    width: 56px;
    height: 56px;
    background-color: ${theme.colors.white};
    border: none;
    border-radius: 50%;
    z-index: 997;
    transition: transform 0.8s, background-color 0.3s linear 0.3s;

    ${isOpen && MenuBackgroundModifier.isOpen(theme)}
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
    a {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.lg};
      transition: color 0.2s;

      &:hover {
        color: ${theme.colors.neutral[400]};
      }
    }
  `}
`;
