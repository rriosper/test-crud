import React from "react";

import { Avatar } from "#components";

export default {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    template: {
      mode: "center",
    },
  },
};

export const Main = () => {
  return <Avatar />;
};
