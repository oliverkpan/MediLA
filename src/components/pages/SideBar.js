import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Brightness1Icon from "@material-ui/icons/Brightness1";

import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar
}));

const upperMenu = [
  { text: "Home", to: "/home" },
  { text: "Favorites", to: "/favorite" },
  { text: "Map", to: "/map" },
  { text: "Login", to: "/login" }
];

const lowerMenu = [
  { text: "About us", to: "/about" },
  { text: "Contact", to: "/contact" }
];

export const SideBar = children => {
  const classes = useStyles();
  let location = useLocation();
  console.log("path ", location.pathname);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            MediLA
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {upperMenu.map((link, index) => (
            <StyledLink to={link.to}>
              <ListItem
                button
                key={link.text}
                selected={
                  location.pathname === link.to ||
                  (link.to === "/home" && location.pathname === "/")
                }
              >
                <ListItemIcon>
                  {location.pathname === link.to ||
                  (link.to === "/home" && location.pathname === "/") ? (
                    <Brightness1Icon color="primary" />
                  ) : (
                    ""
                  )}
                </ListItemIcon>
                <ListItemText primary={link.text} />
              </ListItem>
            </StyledLink>
          ))}
        </List>
        <Divider />
        <List>
          {lowerMenu.map((link, index) => (
            <StyledLink to={link.to}>
              <ListItem
                button
                key={link.text}
                selected={location.pathname === link.to}
              >
                <ListItemIcon>
                  {location.pathname === link.to ? (
                    <Brightness1Icon color="primary" />
                  ) : (
                    ""
                  )}
                </ListItemIcon>
                <ListItemText primary={link.text} />
              </ListItem>
            </StyledLink>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  color: #202020;
`;
