import { TypographyProps } from "styled-system";

import { Flex, FlexProps, Text } from "@components/system";
import { Icon } from "@components/atoms";
import { IconOption } from "src/theme";

export type TextWithIconProps = FlexProps &
  TypographyProps & {
    icon: IconOption;
    text: string;
  };

export const TextWithIcon: React.FC<TextWithIconProps> = ({
  color = "black",
  icon,
  fontSize = "2rem",
  fontWeight = "regular",
  gap = 2,
  text,
  ...props
}) => {
  return (
    <Flex alignItems="center" color={color} gap={gap}>
      <Icon icon={icon} fontSize={fontSize} />
      <Text fontSize={fontSize} fontWeight={fontWeight} {...props}>
        {text}
      </Text>
    </Flex>
  );
};
