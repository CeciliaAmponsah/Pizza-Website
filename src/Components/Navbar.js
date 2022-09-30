import React from "react";
import Logo from "../assets/images/Pizza-logo.png";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="leftside">
        <img src={Logo}  height="100" width="150"/>
      </div>
      <div className="rightside">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/contact">Contact us</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
