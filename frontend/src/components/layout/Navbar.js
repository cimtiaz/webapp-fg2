import React from "react";
import { Link } from "react-router-dom";

function Navbar({ onLogout }) {
  return (
    <nav className="navbar navbar-expand-sm navbar-light navbar-custom ">
      <a className="navbar-brand" href="/About">
        <img
          src="home/images/logo.png"
          alt=""
          height="40"
          width="40"
          class="Nav-logo"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse navbar-padding">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item nav-list">
            <Link to="/seller" className="nav-link">
              Seller
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/buyer" className="nav-link">
              Buyer
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/transactions" className="nav-link">
              Transaction
            </Link>
          </li>
        </ul>
        <button className="btn btn-success my-2 my-sm-0" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
