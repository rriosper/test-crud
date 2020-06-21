import { generateReducer } from "reduxt";
import { over, lensProp, always } from "ramda";

import { USERS_TYPES_FILTER, FILTER_TYPES } from "#constants";

import actions from "../actions";

const initialState = {
  [FILTER_TYPES.type]: USERS_TYPES_FILTER.default,
  [FILTER_TYPES.search]: "",
};

const changeFn = (key) => (state, { payload }) =>
  over(lensProp(key), always(payload), state);

const changeTypeFn = changeFn(FILTER_TYPES.type);
const changeSearchFn = changeFn(FILTER_TYPES.search);

const reducer = generateReducer(initialState, {
  [actions.types.filter.changeType]: changeTypeFn,
  [actions.types.filter.changeSearch]: changeSearchFn,
});

export default reducer;
