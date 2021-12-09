import styled from "styled-components";
import { system, ResponsiveValue, TLengthStyledSystem } from "styled-system";
import { Flex } from "./Flex";
import { BoxProps } from "./Box";

type Direction = "column" | "row";

type Props = BoxProps & {
  /** Spacing between items */
  gap?: ResponsiveValue<TLengthStyledSystem>;
  direction?: ResponsiveValue<Direction>;
};

export const Stack = styled(Flex)<Props>(
  system({
    gap: {
      // @ts-ignore
      property: "> * + *",
      scale: "space",
      transform: (value, scale) => ({
        "--stack-gap": (scale as TLengthStyledSystem[])[value],
      }),
    },
    direction: {
      // @ts-ignore
      property: "&&",
      transform: (value) => ({
        flexDirection: value,
        "> * + *": {
          marginTop: value === "column" ? "var(--stack-gap)" : 0,
          marginLeft: value === "row" ? "var(--stack-gap)" : 0,
        },
      }),
    },
  })
);

Stack.defaultProps = {
  direction: "column",
};
