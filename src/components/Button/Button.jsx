import PropTypes from "prop-types";
import React from "react";

import { DEFAULT_BUTTON_STYLES } from "#constants";
import { SButton, SWrapper } from "./styles";

/**
 *  Regular button using the logic of Reakit button
 *
 *  {@link https://reakit.io/docs/button/}
 */

class Button extends React.PureComponent {
  render() {
    const { shape, disabled, children, className, ...props } = this.props;
    return (
      <SWrapper shape={shape} className={className}>
        <SButton shape={shape} disabled={disabled} {...props}>
          {children}
        </SButton>
      </SWrapper>
    );
  }
}

Button.defaultProps = {
  type: "button",
  backgroundColor: DEFAULT_BUTTON_STYLES.backgroundColor,
  size: undefined,
  shape: undefined,
  fill: undefined,
  disabled: false,
  className: undefined,
};

Button.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  backgroundColor: PropTypes.string,
  shape: PropTypes.oneOf(["rounded"]),
  children: PropTypes.node.isRequired,
  fill: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
