import React, {Component} from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import UserApi from "./../../api/UserApi";

class Navbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: ""
    };
  }

    componentDidMount() {
        UserApi.getCurrrentUser()
          .then(({data}) => this.setState({user: data}))
          .catch(err => console.error(err));
    }

    render () {
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
                <Link to="/buyer" className="nav-link">
                  Buyer
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link">
                  Seller
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/transactions" className="nav-link">
                  My Transactions
                </Link>
              </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">My profile</a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item font-weight-bold" href="#">{this.state.user.name}</a>
                    <a className="dropdown-item" href="#">Change Password</a>
                    <a className="dropdown-item" href="#">Add Bank Account</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#" onClick={this.props.onLogout}>Logout</a>
                  </div>
                </li>
            </ul>

            Welcome &nbsp; <span className="nav-item font-weight-bold"> {this.state.user.name}</span> &nbsp;&nbsp;&nbsp;

            <button className="btn btn-success my-2 my-sm-0" onClick={this.props.onLogout}>
              Logout
            </button>
          </div>
        </nav>
        );
    }
}

export default Navbar;
