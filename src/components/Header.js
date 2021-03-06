import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <div>
      <ul>
        <li>
          <NavLink to="/" activeClassName="is-active" exact={true}>
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/create" activeClassName="is-active">
            Add expense
          </NavLink>
        </li>

        <li>
          <NavLink to="/help" activeClassName="is-active">
            Help
          </NavLink>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
