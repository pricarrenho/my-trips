const colors = {
  black: "#000000",
  white: "#ffffff",
  red: "#ff0000",
  menu: "#091525",
  neutral: {
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#13131a",
    950: "#04070e",
  },
};

const font = {
  sizes: {
    ssm: "1rem",
    sm: "1.4rem",
    mmd: "1.6rem",
    md: "1.8rem",
    lg: "2.4rem",
    xl: "3.6rem",
    xxl: "4.0rem",
    xxxl: "4.8rem",
  },
};

export const themeDefault = {
  colors: {
    ...colors,
    background: colors.neutral[900],
  },
  font,
};
