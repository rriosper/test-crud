import styled from "@xstyled/styled-components";
import {
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  width,
} from "@xstyled/system";
import PropTypes from "prop-types";
import { Input as RInput } from "reakit";

import { createCleanComponent } from "#utils";

import { asTypeStyle, fancyStyle } from "./styles";

const CleanInput = createCleanComponent(RInput, ["fancy", "width"]);

const Input = styled(CleanInput)`
  ${asTypeStyle}
  ${fancyStyle}

  ${width}
  ${margin}
  ${marginBottom}
  ${marginLeft}
  ${marginRight}
  ${marginTop}

  outline: none;

  color: black;
  padding: sm;
  font-size: md;
  border-color: border;
  transition: default;
  border-radius: default;
  border: default;
  height: lg;
  
`;

Input.defaultProps = {
  fancy: false,
  as: undefined,
  width: "100%",
};

Input.propTypes = {
  fancy: PropTypes.bool,
  as: PropTypes.oneOf(["textarea"]),
};

export default Input;
