import styled from "@xstyled/styled-components";
import { prop } from "ramda";
import { ifElseAlways } from "ramdu";
import { Menu, MenuButton, MenuItem } from "reakit/Menu";

const getVisibleStyle = (visibleValue, hiddenValue) =>
  ifElseAlways(prop("visible"), visibleValue, hiddenValue);

export const SMenuButton = styled(MenuButton)`
  display: flex;
  align-items: center;
  border: default;
  border-color: border;
  font-size: md;
  justify-content: space-around;
  border-radius: default;
  padding-top: xxs;
  padding-bottom: xxs;
  padding-left: xs;
  padding-right: xs;
  background-color: bg;
  cursor: pointer;
  min-width: xxl;

  ouline: none;
  outline: none;
  transition: default;
  opacity: ${getVisibleStyle(1, 0.8)};

  :hover {
    opacity: 1;
  }

  svg {
    margin-left: xs;
    padding: 0;
    transition: default;
    transform: rotateZ(${getVisibleStyle(0, "180deg")});
  }
`;

export const SMenu = styled(Menu)`
  background-color: fg;
  display: flex;
  flex-direction: column;
  margin-top: xs;
  border-radius: default;
  outline: none;
  min-width: xxl;
  z-index: 1000;

  > div {
    display: flex;
    flex-direction: column;
    background: white;
    transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;
    opacity: 0;
    transform-origin: top center;
    transform: scaleY(0);
    [data-enter] & {
      opacity: 1;
      transform: scaleY(1);
    }
  }
`;

export const SMenuItem = styled(MenuItem)`
  color: black;
  cursor: pointer;
  transition: default;
  outline: none;
  padding: sm;
  border: default;
  boder-color: border;
  border-top: none;

  :first-child {
    border-radius: 6px 6px 0 0;
    border-top: default;
  }

  :last-child {
    border-radius: 0 0 6px 6px;
  }

  :hover {
    background-color: border;
  }
`;

export const SArrowIcon = styled.svg`
  width: md;
  height: md;
`;
