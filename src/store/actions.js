import { generateActions } from "reduxt";

const [userAT, userAC] = generateActions(
  "user",
  "add",
  "edit",
  "remove",
  "set"
);

const [usersAT, usersAC] = generateActions("users", "add", "remove");

const [filterAT, filterAC] = generateActions(
  "filter",
  "change type",
  "change search"
);

const [modalsAT, modalsAC] = generateActions("modals", "add", "remove");

const [modalAT, modalAC] = generateActions("modal", "toggle", "set");

const actions = {
  types: {
    user: userAT,
    users: usersAT,
    filter: filterAT,
    modals: modalsAT,
    modal: modalAT,
  },
  creators: {
    user: userAC,
    users: usersAC,
    filter: filterAC,
    modals: modalsAC,
    modal: modalAC,
  },
};

export default actions;
