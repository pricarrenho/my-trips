import { themeDefault } from "./src/styles/theme";

type Theme = typeof themeDefault;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
