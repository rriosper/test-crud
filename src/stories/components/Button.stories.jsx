import { boolean, select, text } from "@storybook/addon-knobs";
import { omit, pipe } from "ramda";
import React from "react";
import { AccountCircle, AllInbox, AllOut } from "styled-icons/material";

import { getThemeNode } from "#theme";
import { DEFAULT_BUTTON_STYLES, KNOBS_GROUPS } from "#constants";
import { Button } from "#components";

export default {
  title: "Components/Button",
  parameters: {
    template: {
      mode: "center",
    },
  },
};

const getKnobsColor = pipe(getThemeNode, omit(["modes", "text", "bg"]));

const icons = {
  icon1: <AllInbox />,
  icon2: <AccountCircle />,
  icon3: <AllOut />,
};

export const Main = () => {
  const size = select(
    "Size",
    {
      Small: "small",
      Medium: "medium",
      Big: "big",
    },
    DEFAULT_BUTTON_STYLES.size,
    KNOBS_GROUPS.params
  );

  const buttonText = text("Text", "Button Text", KNOBS_GROUPS.params);

  const backgroundColor = select(
    "Background color",
    getKnobsColor("colors"),
    DEFAULT_BUTTON_STYLES.backgroundColor,
    KNOBS_GROUPS.params
  );

  const shape = select(
    "Shape",
    {
      None: undefined,
      Rounded: "rounded",
    },
    undefined,
    KNOBS_GROUPS.params
  );

  const icon = select(
    "Icon",
    {
      None: null,
      "Icon 1": "icon1",
      "Icon 2": "icon2",
      "Icon 3": "icon3",
    },
    undefined,
    KNOBS_GROUPS.params
  );

  const disabled = boolean("Disabled", undefined, KNOBS_GROUPS.params);

  return (
    <Button
      size={size}
      shape={shape}
      backgroundColor={backgroundColor}
      disabled={disabled}
    >
      {icon && icons[icon]}
      {buttonText}
    </Button>
  );
};
