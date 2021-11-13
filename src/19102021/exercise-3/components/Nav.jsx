import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav className="navbar">
    {/*`end`: Strictly matching `/` only instead of both `/` and `/admin` */}
    <NavLink to="/" end>
      Home
    </NavLink>
    <NavLink to="/books" end>
      Books
    </NavLink>
    <NavLink to="/admin">Admin</NavLink>
  </nav>
);

export default Nav;
