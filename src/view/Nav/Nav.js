import React from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router";

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/todo"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Todos
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/User"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Users
        </NavLink>

        {/* <Link to="/">Home</Link>
        <Link to="/todo">Todos</Link>
        <Link to="/about">About</Link> */}

        {/* <a className="active" href="/">
          Home
        </a>
        <a href="/todo">Todo</a>
        <a href="/about">About</a> */}
      </div>
    );
  }
}

export default Nav;
