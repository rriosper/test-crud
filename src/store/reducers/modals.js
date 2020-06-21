import {
  always,
  append,
  filter,
  lensProp,
  map,
  not,
  over,
  propEq,
  when,
} from "ramda";
import { generateReducer } from "reduxt";

import { actions } from "#store";

const initialState = [];

const addFn = (state, { payload }) => append(payload, state);
const removeFn = (state, { payload }) => filter(propEq("id", payload), state);

const toggleFn = (state, { payload }) => {
  return map(when(propEq("id", payload), over(lensProp("active"), not)), state);
};

const setFn = (state, { payload: { id, active } }) => {
  return map(
    when(propEq("id", id), over(lensProp("active"), always(active))),
    state
  );
};

const reducer = generateReducer(initialState, {
  [actions.types.modals.add]: addFn,
  [actions.types.modals.remove]: removeFn,
  [actions.types.modal.toggle]: toggleFn,
  [actions.types.modal.set]: setFn,
});

export default reducer;
