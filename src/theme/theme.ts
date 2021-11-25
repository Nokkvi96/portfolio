import { darken, modularScale } from "polished";

import { ThemeGrid } from "@components/system";
import { DefaultTheme } from "styled-components";

import { colors } from "./colors";
import { grid } from "./grid";

let fontSizes = [];
for (let i = 0; i < 15; i++) {
  fontSizes[i] = modularScale(i - 2, "1rem", "majorThird");
}

const space = [
  "0rem", // 0
  "0.2rem", // 1
  "0.4rem", // 2
  "0.8rem", // 3
  "1rem", // 4
  "1.2rem", // 5
  "1.6rem", // 6
  "1.4rem", // 7
  "1.8rem", // 8
  "2rem", // 9
  "2.4rem", // 10
  "2.8rem", // 11
  "3.2rem", // 12
  "3.6rem", // 13
  "4rem", // 14
  "4.5rem", // 15
  "5rem", // 16
  "5.5rem", // 17
  "6rem", // 18
  "7rem", // 19
];

const buttonBase = {
  fontWeight: "bold",
  border: "1px solid",
  borderColor: "primary",
  padding: "0 20px",
  height: 50,
  borderRadius: 10,
};

export const buttons = {
  primary: {
    ...buttonBase,
    bg: "primary",
    color: "white",
    ["&:hover, &:focus"]: {
      backgroundColor: "colors.primary.600",
    },
  },
  secondary: {
    ...buttonBase,
    color: "black",
  },
  clear: {
    backgroundColor: "transparent",
    border: "none",
    padding: "0",
    height: "auto",
  },
};

const fonts = {
  body: "Poppins, sans-serif",
  heading: "Lora, serif",
};

const shadows = {
  small: "0 0 4px rgba(0, 0, 0, .125)",
  medium: "0 0 12px rgba(0, 0, 0, .125)",
  large: "0 0 24px rgba(0, 0, 0, .125)",
  outline: "0px 0px 0px 4px rgba(0, 0, 0, 0.1);",
};

export interface CustomTheme {
  breakpoints: string[];
  fontSizes: typeof fontSizes;
  colors: typeof colors;
  space: typeof space;
  fonts: typeof fonts;
  shadows: typeof shadows;
  buttons: typeof buttons;
  outline?: string;
  grid: ThemeGrid;
}

export const theme: DefaultTheme = {
  breakpoints: ["40rem", "52rem", "64rem", "80rem"],
  fontSizes,
  space,
  fonts,
  shadows,
  outline: `5px auto #5E9ED6`,
  colors,
  buttons,
  grid,
};
