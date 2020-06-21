import styled from "@xstyled/styled-components";
import { width, display } from "@xstyled/system";

import { createCleanComponent } from "#utils";

const CleanCard = createCleanComponent("div", ["width", "display"]);

const Card = styled(CleanCard)`
  ${width}
  ${display}

  background-color: bg;
  padding: sm;
  border-radius: default;
  border: default;
  border-color: border;
  box-shadow: default;
`;

Card.defaultProps = {
  width: "fit-content%",
};

export default Card;
