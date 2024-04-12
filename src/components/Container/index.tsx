import { ContainerProps } from "./types";
import * as S from "./styles";

export const Container = ({ children, ...props }: ContainerProps) => {
  return <S.Wrapper {...props}>{children}</S.Wrapper>;
};
