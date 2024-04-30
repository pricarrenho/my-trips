import { useState } from "react";
import Link from "next/link";

import * as S from "./styles";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <S.Header>
      <S.MenuToggle onClick={toggleMenu} isOpen={menuOpen}>
        <div />
      </S.MenuToggle>

      <S.MenuBackground isOpen={menuOpen} />

      <S.Nav isOpen={menuOpen}>
        <S.Ul>
          <S.Li>
            <Link onClick={toggleMenu} href={"/"}>
              Home
            </Link>
          </S.Li>

          <S.Li>
            <Link href={"/about"}>Sobre a página</Link>
          </S.Li>
        </S.Ul>
      </S.Nav>
    </S.Header>
  );
};
