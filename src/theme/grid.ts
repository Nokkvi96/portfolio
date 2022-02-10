export const grid = {
  gutter: [15, null, 30],
  container: {
    maxWidth: 1280,
    padding: [5, null, 6],
    paddingSmall: 15,
  },
};

export interface ThemeGridContainer {
  maxWidth: number;
  padding: number | any[];
}

export interface ThemeGrid {
  gutter: number | any[];
  container: ThemeGridContainer;
}
