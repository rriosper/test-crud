import PropTypes from "prop-types";
import { map } from "ramda";
import React, { useMemo } from "react";
import { useMenuState } from "reakit/Menu";
import { KeyboardArrowUp } from "styled-icons/material";

import { SArrowIcon, SMenu, SMenuButton, SMenuItem } from "./styles";

const generateItems = (items = [], menu) =>
  map(
    ({ text, onClick }) => (
      <SMenuItem
        key={text}
        onClick={(e) => {
          onClick(e);
          menu.toggle();
        }}
        {...menu}
      >
        {text}
      </SMenuItem>
    ),
    items
  );

const Dropdown = ({ name, items, children }) => {
  const menu = useMenuState();

  const processedItems = useMemo(() => generateItems(items, menu), [
    items,
    menu,
  ]);

  return (
    <>
      <SMenuButton {...menu}>
        {children}
        <SArrowIcon as={KeyboardArrowUp} />
      </SMenuButton>
      <SMenu {...menu} aria-label="Preferences">
        {processedItems}
      </SMenu>
    </>
  );
};

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    }).isRequired
  ).isRequired,
};

export default Dropdown;
