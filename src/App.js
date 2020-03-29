import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { MapPage } from "./components/pages/MapPage";
import { RouterPaths } from "./components/router/RouterPaths";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <RouterPaths />
      </div>
    </Router>
  );
}
