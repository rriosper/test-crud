import { Box } from "@xstyled/styled-components";
import { mapObjIndexed, pipe, values } from "ramda";
import React from "react";

import { useThemeNode } from "#theme";

export default {
  title: "Tokens/Theme",
  parameters: {
    template: {
      mode: "center",
    },
  },
};

// eslint-disable-next-line react/prop-types
const FontSample = ({ fontSize, fontKey }) => (
  <Box
    display="flex"
    flexDirection="column"
    marginBottom="md"
    textAlign="center"
  >
    <Box
      marginBottom="xs"
      border="default"
      padding="xs"
      textTransform="uppercase"
      fontWeight="Bold"
    >
      {fontKey}
    </Box>
    <Box fontSize={fontKey}>
      This is a text with
      {fontSize}
    </Box>
  </Box>
);

const SampleBook = () => {
  const samples = pipe(
    useThemeNode,
    mapObjIndexed((fontSize, key) => (
      <FontSample key={key} fontSize={fontSize} fontKey={key} />
    )),
    values
  )("fontSizes");

  return samples;
};

export const FontSizes = () => <SampleBook />;
