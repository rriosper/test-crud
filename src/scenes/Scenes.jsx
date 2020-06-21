import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { Layout } from "#components";

import Users from "./Users";

const Scenes = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Users} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </Layout>
  );
};

export default Scenes;
