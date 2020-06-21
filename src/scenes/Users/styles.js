import styled, { css } from "@xstyled/styled-components";
import { th, breakpoints } from "@xstyled/system";

import { Button } from "#components";

export const SLayout = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: repeat(2, ${th("sizes.xl")}) auto;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;

  ${breakpoints({
    xs: css`
      padding-left: xs;
      padding-right: xs;
    `,
    md: css`
      padding-left: sm;
      padding-right: sm;
    `,
    xl: css`
      padding-left: 0;
      padding-right: 0;
    `,
  })}
`;

export const STitle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: sm;
  align-items: center;
`;

export const SButtonTop = styled(Button)`
  position: fixed;
  right: 40px;
  bottom: 40px;
  z-index: 999;
`;
