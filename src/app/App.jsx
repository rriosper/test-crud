import "intersection-observer";
import React from "react";

import Scenes from "#scenes";
import Store from "#store";
import Theme from "#theme";

const App = () => (
  <Store>
    <Theme>
      <Scenes />
    </Theme>
  </Store>
);

export default App;
