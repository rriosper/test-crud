import { createSelector } from "reselect";
import { defaultTo, length, pipe, prop, find, propEq } from "ramda";

import { USERS_TYPES_FILTER } from "#constants";

const users = pipe(prop("users"), defaultTo([]));

const userItems = pipe(users, prop("items"));

const usersCount = pipe(users, length);

const userById = (id) => pipe(userItems, prop(id));

const selectedIdUser = pipe(users, prop("selected"));

const selectedUser = createSelector(selectedIdUser, userItems, (id, items) => ({
  ...prop(id, items),
  id,
}));

const filter = pipe(prop("filter"), defaultTo(USERS_TYPES_FILTER.default));

const filterType = pipe(filter, prop("type"));
const filterSearch = pipe(filter, prop("search"));

const modals = prop("modals");
const modalById = (id) => pipe(modals, find(propEq("id", id)));

const selectors = {
  users: {
    root: users,
    items: userItems,
    count: usersCount,
    byId: userById,
    selectedId: selectedIdUser,
    selected: selectedUser,
  },
  filter: {
    root: filter,
    type: filterType,
    search: filterSearch,
  },
  modals: {
    root: modals,
    byId: modalById,
  },
};

export default selectors;
