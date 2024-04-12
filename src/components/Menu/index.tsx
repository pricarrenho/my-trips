import { useState } from "react";
import Link from "next/link";
import * as S from "./styles";

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <S.MenuContainer expanded={menuOpen}>
      {menuOpen ? (
        <S.ExpandedMenu>
          <Link href="/about">Sobre</Link>

          <S.CloseButton onClick={toggleMenu}>X</S.CloseButton>
        </S.ExpandedMenu>
      ) : (
        <S.Hamburger onClick={toggleMenu}>
          <S.Line />
          <S.Line />
          <S.Line />
        </S.Hamburger>
      )}
    </S.MenuContainer>
  );
};
