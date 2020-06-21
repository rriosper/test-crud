import React from "react";
import styled from "@xstyled/styled-components";

import AddUserButton from "./AddUserButton";
import FilterDropdown from "./FilterDropdown";

const SToolbar = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, auto);
  grid-gap: sm;
  align-items: center;
  justify-content: space-between;
`;

const ToolBar = () => {
  return (
    <SToolbar>
      <AddUserButton />
      <FilterDropdown />
    </SToolbar>
  );
};

export default ToolBar;
