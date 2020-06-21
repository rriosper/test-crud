import { generateReducer } from "reduxt";
import {
  concat,
  always,
  append,
  over,
  lensProp,
  mergeDeepLeft,
  lensPath,
  __,
} from "ramda";
import actions from "../actions";

const initialState = {
  selected: null,
  items: [],
};

// Users - Affects the whole set.
const addUsersFn = (state, { payload }) =>
  over(lensProp("items"), concat(__, payload), state);
const removeUsersFn = always([]);

const users = {
  [actions.types.users.add]: addUsersFn,
  [actions.types.users.remove]: removeUsersFn,
};

// User - Affects a single user.
const addUserFn = (state, { payload }) =>
  over(lensProp("items"), append(payload), state);

const removeUserFn = (state, { payload }) =>
  over(lensProp("items"), (x) => x.filter((_, idx) => idx !== payload), state);

const editUserFn = (state, { payload: { id, ...user } }) =>
  over(lensPath(["items", id]), mergeDeepLeft(user), state);

const setFn = (state, { payload }) =>
  over(lensProp("selected"), always(payload), state);

const user = {
  [actions.types.user.add]: addUserFn,
  [actions.types.user.remove]: removeUserFn,
  [actions.types.user.edit]: editUserFn,
  [actions.types.user.set]: setFn,
};

// Mixed reducer.
const reducer = generateReducer(initialState, {
  ...users,
  ...user,
});

export default reducer;
