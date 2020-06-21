import React from "react";
import { useCheckboxState } from "reakit";
import { boolean } from "@storybook/addon-knobs";
import { Checkbox } from "#components";
import { KNOBS_GROUPS } from "#constants";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    template: {
      mode: "center",
    },
  },
};

const CheckboxStory = () => {
  const checkbox = useCheckboxState({ state: false });

  return <Checkbox {...checkbox} />;
};

export const Main = () => {
  return <CheckboxStory />;
};
