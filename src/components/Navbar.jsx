
import React, { useState } from "react";
import "./Styles/navbar.css";
import logo from "../assets/logo.svg"
function Navbar() {
 
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        <img className="img-logo" src={logo} alt="" />
      </a>
    </nav>
  );
}

export default Navbar;