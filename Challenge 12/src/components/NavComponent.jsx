import React from "react";
import { NavLink } from "react-router-dom";
import "./NavComponent.css"; 

export const NavComponent = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="nav" to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
