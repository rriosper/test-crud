import React, { useState } from "react";

import { Dropdown } from "#components";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    template: {
      mode: "center",
    },
  },
};

const DropdownStory = () => {
  const [selected, setSelected] = useState();
  const items = [
    {
      text: "Test 1",
      onClick: () => {
        setSelected("Test 1");
      },
    },
    {
      text: "Test 2",
      onClick: () => {
        setSelected("Test 2");
      },
    },
    {
      text: "Test 3",
      onClick: () => {
        setSelected("Test 3");
      },
    },
  ];
  return <Dropdown items={items}>{selected || "I am a Dropdown"}</Dropdown>;
};

export const Main = () => <DropdownStory />;
