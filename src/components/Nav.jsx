import React from "react";
import "./Nav.css";
import logo from "../images/Logo.png";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light fixed-top p-0">
      <div className="navContainer_outside">
        <div className="navContainer">
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
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link nav-active" : "nav-link"
                  }
                >
                  Home
                  <span id="activeLine">
                    <div className="d-flex justify-content-center">
                      <div className="border3"></div>
                    </div>
                  </span>
                </NavLink>
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
                <NavLink
                  to="/certificate"
                  className={({ isActive }) =>
                    isActive ? "nav-link nav-active" : "nav-link"
                  }
                >
                  Certificates
                  <span id="activeLine">
                    <div className="d-flex justify-content-center">
                      <div className="border3"></div>
                    </div>
                  </span>
                </NavLink>
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
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "nav-link nav-active" : "nav-link"
                  }
                >
                  Contact Us
                  <span id="activeLine">
                    <div className="d-flex justify-content-center">
                      <div className="border3"></div>
                    </div>
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
