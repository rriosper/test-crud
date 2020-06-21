import React, { useCallback } from "react";

import { useDispatch } from "react-redux";
import { actions } from "#store";
import { Input } from "#components";

const SearchInput = () => {
  const dispatch = useDispatch();

  const changeSearch = useCallback(
    ({ target: { value } }) => {
      dispatch(actions.creators.filter.changeSearch(value));
    },
    [dispatch]
  );

  return <Input placeholder="Search..." onChange={changeSearch} />;
};

export default SearchInput;
