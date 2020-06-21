import { omit } from "ramda";
import { createElement } from "react";

/**
 * Function to create cleaned component witouth any invalid html property.
 *
 * @param {string | React.Component} Component - Component to render, allow React component and string html tag like 'div'.
 * @param {string[]} propsToRemove - Properties list to remove from the received properties on the component.
 *
 * @return { React.Component }
 */
const createCleanComponent = (Component, propsToRemove) => ({
  children,
  ...props
}) => {
  const filteredProps = omit(propsToRemove, props);
  return createElement(Component, filteredProps, children);
};

export default createCleanComponent;
