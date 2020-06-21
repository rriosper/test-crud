import { combineReducers } from "redux";
import filter from "./filter";
import modals from "./modals";
import users from "./users";

const reducers = combineReducers({
  users,
  modals,
  filter,
});

export default reducers;
