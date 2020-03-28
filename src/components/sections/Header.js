import React from "react";
import styled from "styled-components";
import { Router } from "../router/RouterPaths";

export const Header = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/map">Map</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
};

const Parent = styled.div`
  background-color: #ffdc00;
`;
