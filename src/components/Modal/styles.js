import styled from "@xstyled/styled-components";
import { rgba } from "polished";

import { Card } from "#components";

export const SDialogBackdrop = styled.div`
  background-color: ${rgba("grey", 0.7)};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
`;

export const SDialog = styled(Card)`
  outline: none;
  width: fit-content;
  max-width: 100%;
`;
