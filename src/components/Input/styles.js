import { css } from "@xstyled/styled-components";
import { prop } from "ramda";
import { whenAlways } from "ramdu";

export const fancyStyle = whenAlways(
  prop("fancy"),
  css(`
  opacity: 0.5;

  : hover {
    opacity: 1;
  }
`)
);

export const asTypeStyle = ({ as: asType }) => {
  return asType && css({ minHeight: "xl" });
};
