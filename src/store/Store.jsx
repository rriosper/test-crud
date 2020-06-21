import PropTypes from "prop-types";
import React, { Children } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";

const store = createStore(
  reducers,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Store = ({ children }) => {
  return <Provider store={store}>{Children.only(children)}</Provider>;
};

Store.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Store;
