import { ThemeContext } from "styled-components";
import { DisplayProps, HeightProps } from "styled-system";
import { Box } from "./Box";
import { useContext } from "react";

type ContainProps = DisplayProps & HeightProps;

export const Contain: React.FC<ContainProps> = (props) => {
  const themeContext = useContext(ThemeContext);

  return (
    <Box
      mx="auto"
      px={themeContext?.grid?.container?.padding}
      maxWidth={themeContext?.grid?.container?.maxWidth}
      {...props}
    />
  );
};

export const Grid = Contain;
