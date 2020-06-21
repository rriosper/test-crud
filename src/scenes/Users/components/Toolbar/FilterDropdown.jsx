import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Dropdown } from "#components";
import { USERS_TYPES_FILTER } from "#constants";
import { actions, selectors } from "#store";

const ITEMS_TEXT = {
  [USERS_TYPES_FILTER.name]: "Name",
  [USERS_TYPES_FILTER.surname]: "Surname",
  [USERS_TYPES_FILTER.age]: "Age",
  [USERS_TYPES_FILTER.connectedUsers]: "Connected users",
};

const FilterDropdown = () => {
  const filter = useSelector(selectors.filter.type);
  const dispatch = useDispatch();

  const updateFilter = (key) =>
    dispatch(actions.creators.filter.changeType(key));

  const items = [
    {
      text: ITEMS_TEXT[USERS_TYPES_FILTER.name],
      onClick: () => updateFilter(USERS_TYPES_FILTER.name),
    },
    {
      text: ITEMS_TEXT[USERS_TYPES_FILTER.surname],
      onClick: () => updateFilter(USERS_TYPES_FILTER.surname),
    },
    {
      text: ITEMS_TEXT[USERS_TYPES_FILTER.age],
      onClick: () => updateFilter(USERS_TYPES_FILTER.age),
    },
    {
      text: ITEMS_TEXT[USERS_TYPES_FILTER.connectedUsers],
      onClick: () => updateFilter(USERS_TYPES_FILTER.connectedUsers),
    },
  ];

  return (
    <Dropdown name="filter" items={items}>
      {ITEMS_TEXT[filter] || "Select filter"}
    </Dropdown>
  );
};

export default FilterDropdown;
