import styled from "@xstyled/styled-components";
import {
  width,
  gridTemplateColumns,
  gridTemplateRows,
  gridGap,
} from "@xstyled/system";

const Grid = styled.div`
  ${width}
  ${gridTemplateColumns}
  ${gridTemplateRows}
  ${gridGap};

  display: grid;

  padding: sm;
  border-radius: default;
  border: default;
  border-color: border;
`;

Grid.defaultProps = {
  width: "100%",
};

export default Grid;
