import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { SideBar } from "../pages/SideBar";
import { HomePage } from "../pages/HomePage";

import { FavoritePage } from "../pages/FavoritePage";
import { MapPage } from "../pages/MapPage";
import { Login } from "../pages/Login";

import { ContactPage } from "../pages/ContactPage";
import { AboutPage } from "../pages/AboutPage";

export const RouterPaths = () => {
  /* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */
  return (
    <Switch>
      <Route path="/favorite">{SideBar(<FavoritePage />)}</Route>
      <Route path="/map">{SideBar(<MapPage />)}</Route>
      <Route path="/about">{SideBar(<AboutPage />)}</Route>
      <Route path="/contact">{SideBar(<ContactPage />)}</Route>
      <Route path="/login">{SideBar(<Login />)}</Route>
      <Route path="/home">{SideBar(<HomePage />)}</Route>
      <Route path="/">{SideBar(<Login />)}</Route>
    </Switch>
  );
};
