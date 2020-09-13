import React from "react";
import { NavLink } from "react-router-dom";
import c from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={c.nav}>
      <div className={c.item}>
        <NavLink to="/Economics">Economics</NavLink>
      </div>
      <div className={c.item}>
        <a href="/Sport">Sport</a>
      </div>
      <div className={c.item}>
        <a href="#">Business</a>
      </div>
      <div className={c.item}>
        <a href="#">Tech</a>
      </div>
      <div className={c.item}>
        <a href="#">Culture</a>
      </div>
      <div className={c.item}>
        <a href="#">Politics</a>
      </div>
    </nav>
  );
};

export default Navbar;
