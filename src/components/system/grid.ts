import { theme } from "src/theme";

export interface ThemeGridContainer {
  maxWidth: number;
  padding: number | any[];
}

export interface ThemeGrid {
  gutter: number | any[];
  container: ThemeGridContainer;
}

const { space } = theme;

export const defaultGrid = {
  gutter: [4, null, 8],
  container: {
    maxWidth: 1280,
    padding: [1, null, 4],
  },
};
