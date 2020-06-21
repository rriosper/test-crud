import { ThemeProvider, ColorModeProvider } from "@xstyled/styled-components";
import PropTypes from "prop-types";
import React, { Children } from "react";

import GlobalStyle from "./GlobalStyle";

import values from "./values";

const Theme = ({ children }) => (
  <ThemeProvider theme={values}>
    <ColorModeProvider>
      <GlobalStyle />
      {Children.only(children)}
    </ColorModeProvider>
  </ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
