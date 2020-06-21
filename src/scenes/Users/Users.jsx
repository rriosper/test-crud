import React from "react";

import { ArrowUpward } from "styled-icons/material-outlined";
import { ThemeSwitcher } from "#components";

import { Toolbar, UsersGrid } from "./components";
import { SLayout, STitle, SButtonTop } from "./styles";

const Users = () => {
  const scrollToTop = () => window.scrollTo(0, 0);
  return (
    <SLayout>
      <STitle>
        <h1>USERS</h1>
        <ThemeSwitcher />
      </STitle>
      <Toolbar />
      <UsersGrid />
      <SButtonTop
        onClick={scrollToTop}
        shape="rounded"
        backgroundColor="secondary"
      >
        <ArrowUpward />
      </SButtonTop>
    </SLayout>
  );
};

export default Users;
