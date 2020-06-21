import styled, { css } from "@xstyled/styled-components";
import { backgroundColor } from "@xstyled/system";
import { defaultTo, find, is, pipe, prop } from "ramda";
import { whenAlways } from "ramdu";
import { Button } from "reakit";

import { createCleanComponent } from "#utils";

import { shape as shapeVariant, size as sizeVariant } from "./variants";

// Check if an array contains any text node.
const checkText = pipe(find(is(String)), Boolean);

/**
 *  Keep fix width and height props when shape is rounded and children doesn't contain a text.
 *
 * @param {String} props.size - Size to keep a fixed width and height.
 * @param {String} props.children - Elements to check if it contains a text.
 */
const setSvgPadding = ({ children }) => {
  const hasText = checkText(children);

  if (hasText) {
    return css`
      :first-child {
        margin-right: xs;
      }
    `;
  }
  return css`
    :first-child {
      margin-right: 0;
    }
  `;
};
// Disabled styles
const disabledStyle = whenAlways(prop("disabled"), "opacity: 0.5");

const CleanButton = createCleanComponent(Button, ["size", "backgroundColor"]);

export const SButton = styled(CleanButton)`
  padding: xs;

  ${backgroundColor};

  outline: none;
  border: none;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  user-select: none;
  color: white;

  svg {
    fill: ${pipe(prop("fill"), defaultTo("white"))};
    :first-child {
      ${setSvgPadding};
    }
  }
  ${shapeVariant};
  ${disabledStyle}
  ${sizeVariant()};
`;

const CleanWrapper = createCleanComponent("div", ["shape"]);

export const SWrapper = styled(CleanWrapper)`
  ${shapeVariant()};
  transition: default;
  opacity: 0.8;
  height: fit-content;
  width: fit-content;

  :hover {
    box-shadow: default;
    opacity: 1;
  }
`;
