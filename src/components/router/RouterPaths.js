import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { SideBar } from "../pages/SideBar";
import { HomePage } from "../pages/HomePage";

import { FavoritePage } from "../pages/FavoritePage";
import { MapPage } from "../pages/MapPage";
import { RandomTemplatePage } from "../pages/RandomTemplatePage";

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
      <Route path="/login">{SideBar(<RandomTemplatePage />)}</Route>
      <Route path="/home">{SideBar(<HomePage />)}</Route>
      <Route path="/">{SideBar(<HomePage />)}</Route>
    </Switch>
  );
};
