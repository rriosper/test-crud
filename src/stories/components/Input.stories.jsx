import { select, text } from "@storybook/addon-knobs";
import React from "react";

import { Input } from "#components";
import { KNOBS_GROUPS } from "#constants";

export default {
  title: "Components/Input",
  parameters: {
    template: {
      mode: "center",
      maxWidth: "500px",
      margin: "0 auto",
    },
  },
};

export const Main = () => {
  const placeholder = text("Placeholder", "Enter text...", KNOBS_GROUPS.params);
  const as = select(
    "As",
    {
      Input: undefined,
      TextArea: "textarea",
    },
    undefined,
    KNOBS_GROUPS.params
  );
  return <Input placeholder={placeholder} as={as} />;
};
