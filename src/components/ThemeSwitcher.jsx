import { useColorMode } from "@xstyled/styled-components";
import React from "react";
import { WbSunny } from "styled-icons/material";
import { WbSunny as WbSunnyOutlined } from "styled-icons/material-outlined";

import { THEME_COLOR_MODES } from "#theme";

import Button from "./Button";

// Button to switch between light and dark theme.
const ThemeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode();
  const isDarkTheme = colorMode === THEME_COLOR_MODES.dark;
  const Icon = isDarkTheme ? WbSunny : WbSunnyOutlined;
  const inverseTheme = isDarkTheme
    ? THEME_COLOR_MODES.light
    : THEME_COLOR_MODES.dark;

  return (
    <Button
      size="small"
      shape="rounded"
      backgroundColor="secondary"
      fill="text"
      onClick={() => setColorMode(inverseTheme)}
    >
      <Icon />
    </Button>
  );
};

export default ThemeSwitcher;
