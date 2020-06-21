import React from "react";

import { Card } from "#components";

export default {
  title: "Components/Card",
  parameters: {
    template: {
      mode: "center",
    },
  },
};

export const Main = () => {
  return <Card width="500px">Works</Card>;
};
