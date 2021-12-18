import React from "react";
import "./Nav.css";
import logo from "../images/Logo.png";
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light fixed-top p-0">
      <div className="container">
        <a href="/#" className="navbar-brand">
          <img src={logo} className="nav-logo-icon" alt="icon-logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="/#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                Natural Dyes
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                Certificates
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                Career
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
