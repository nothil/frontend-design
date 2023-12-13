import * as React from "react";
import "./nav.scss";
import Logo from "../../assets/logo.svg";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-container">
      <div className="">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <img alt="logo" height="{45.25}" src={Logo} width="100" />
          </li>
          <div className="left-content"></div>
        </ul>
      </div>
      <div className="brand-center">
        <a className="navbar-brand mx-auto" href="/">
          services
        </a>
        <a className="navbar-brand mx-auto" href="/">
          Industries
        </a>
        <a className="navbar-brand mx-auto" href="/">
          Cases
        </a>
        <a className="navbar-brand mx-auto" href="/">
          Contact
        </a>
      </div>
      <div className="brand-right">
        <a className="navbar-brand mx-auto" href="/">
          lets talk
        </a>
      </div>
    </nav>
  );
};

export default Nav;
