import styled, { Box, useColorMode } from "@xstyled/styled-components";
import { backgroundColor } from "@xstyled/system";
import { mergeDeepRight, pipe, propOr } from "ramda";
import React from "react";

import { values } from "#theme";

export default {
  title: "Tokens/Theme",
  parameters: {
    template: {
      mode: "center",
    },
  },
};

const Color = styled.div`
  ${backgroundColor}
  width: xxl;
  height: xxl;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 md;
  border: 1px solid;
  border-color: text;
  text-shadow: default;
  text-transform: uppercase;
`;

/**
 * This function is required because xstyled can't get the updated theme with the color modes applied.
 * {@link https://github.com/smooth-code/xstyled/issues/102#issuecomment-590225868}
 */
const useUpdatedColors = () => {
  const [mode] = useColorMode();
  const {
    colors: { modes, ...colors },
  } = values;

  return pipe(propOr({}, mode), mergeDeepRight(colors))(modes);
};

const Palette = () => {
  const colors = useUpdatedColors();
  return Object.keys(colors).map((keyColor) => {
    const color = colors[keyColor];
    return (
      <Color key={keyColor} backgroundColor={color}>
        <b>{keyColor}</b>
        {color}
      </Color>
    );
  });
};

export const Colors = () => (
  <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gridGap="md">
    <Palette />
  </Box>
);
