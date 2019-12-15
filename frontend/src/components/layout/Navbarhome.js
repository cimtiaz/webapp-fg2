import React from "react";
import { Link } from "react-router-dom";
import LoginPage from "../auth/LoginPage";

function Navbarhome({ LoginPage }) {
  return (
    <nav className="navbar navbar-expand-sm navbar-light navbar-custom ">
      <a className="navbar-brand" href="/about">
        <img
          src="home/images/logo.png"
          alt=""
          height="40"
          width="40"
          class="Nav-logo"
        />
      </a>

      <button
        class="navbar-toggler float-right btn btn-dark"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navbar-padding">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a href="#Home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item nav-list">
            <a href="#ourteam" className="nav-link">
              Our Team
            </a>
          </li>
          <li className="nav-item">
            <a href="#Contact-us" className="nav-link">
              Contact us
            </a>
          </li>
          <li className="nav-item">
            <a href="#Faq" className="nav-link">
              FAQ
            </a>
          </li>
        </ul>
        <a href="#login">
          <button
            className="btn btn-success my-2 my-sm-0"
            onClick={() => LoginPage}
          >
            Login
          </button>
        </a>
      </div>
    </nav>
  );
}

export default Navbarhome;
