import { useState } from "react";
import * as S from "./styles";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <S.Header>
      <S.Menu onClick={toggleMenu} isOpen={menuOpen}>
        <div />
      </S.Menu>

      <S.MenuBackground isOpen={menuOpen} />

      <S.Nav isOpen={menuOpen}>
        <S.Ul>
          <S.Li>Home</S.Li>
          <S.Li>Sobre a página</S.Li>
          <S.Li>Sobre mim</S.Li>
          <S.Li>Contato</S.Li>
        </S.Ul>
      </S.Nav>
    </S.Header>
  );
};
