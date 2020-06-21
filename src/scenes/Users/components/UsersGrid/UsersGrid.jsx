import styled, { css } from "@xstyled/styled-components";
import { breakpoints } from "@xstyled/system";
import { assoc, map, pipe, prop, sortBy, toLower, when, is } from "ramda";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions, selectors } from "#store";
import { usersService } from "#services";

import UserCard from "./UserCard";

const SUsersGrid = styled.div`
  justify-content: space-between;
  display: grid;
  height: 100%;
  grid-template-columns: 1fr;
  width: 100%;
  grid-gap: md;
  margin-top: xl;
  margin-bottom: md;

  ${breakpoints({
    md: css`
      grid-template-columns: repeat(2, 1fr);
    `,
    lg: css`
      grid-template-columns: repeat(3, 265px);
    `,
  })}
`;

const getUserCards = (users, { type }) =>
  pipe(
    (x) => x.map((user, idx) => assoc("id", idx, user)),
    sortBy(pipe(prop(type), when(is(String), toLower))),
    map(({ name, connectedUsers, ...user }) => (
      <UserCard
        key={connectedUsers}
        connectedUsers={connectedUsers}
        name={name}
        {...user}
      />
    ))
  )(users);

let isRequesting = false;

const UsersGrid = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const users = useSelector(selectors.users.items);
  const filter = useSelector(selectors.filter.root);
  const processedUsers = getUserCards(users, filter);

  const loadUsers = () => {
    isRequesting = true;
    const newUsers = usersService.loadChunk(users.length, 15);
    dispatch(actions.creators.users.add(newUsers));
    isRequesting = false;
  };

  function lazyFetch() {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !isRequesting
    ) {
      loadUsers();
    }
  }

  useEffect(() => {
    if (!users.length && !isRequesting) {
      loadUsers();
    }

    window.addEventListener("scroll", lazyFetch);
    return () => {
      window.removeEventListener("scroll", lazyFetch);
    };
  });

  return <SUsersGrid ref={ref}>{processedUsers}</SUsersGrid>;
};

export default UsersGrid;
