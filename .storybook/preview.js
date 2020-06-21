import { addDecorator, addParameters } from "@storybook/react";
import { Box } from "@xstyled/styled-components";
import React from "react";
import { withKnobs, button } from "@storybook/addon-knobs";
import { useColorMode } from "@xstyled/styled-components";

import { strPathOr, strPath } from "ramdu";
import { KNOBS_GROUPS } from "#constants";
import Theme from "#theme";

addDecorator(withKnobs);

addParameters({
  options: {
    showRoots: true,
  },
});

const KnobsControl = () => {
  const [mode, setMode] = useColorMode();
  const handler = () => setMode(mode === "default" ? "dark" : "default");
  button("Toggle", handler, KNOBS_GROUPS.theme);

  return null;
};

const getTemplateMode = (key) => {
  const modes = {
    center: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return key ? strPath(key, modes) : {};
};

addDecorator((story, { parameters: { template = {} } }) => {
  return (
    <Theme>
      <>
        <KnobsControl />
        <Box
          minHeight="100vh"
          {...getTemplateMode(template.mode)}
          {...template}
        >
          {story()}
        </Box>
      </>
    </Theme>
  );
});
