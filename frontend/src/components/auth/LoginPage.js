import React, { Component } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Auth from "../../services/Auth";

class LoginPage extends Component {
  async login(loginData) {
    const loginSuccess = await Auth.login(loginData);
    if (!loginSuccess) {
      alert("Invalid credentials");
    }
  }
  async register(registrationData) {
    const registerSuccess = await Auth.register(registrationData);
    if (!registerSuccess) {
      alert("Couldn't register check credentials and try again");
    }
  }
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="row mt-4">
            <div className="col-lg-12 ">
              <img src="logo.png" alt="logo" className="logo" />
              <p className="big-p">
                Transact with Peace of Mind Trustap is a secure transaction
                platform that completely protects you from being scammed when
                you want to buy or sell with someone you don't know.{" "}
              </p>
            </div>
            <div className="col-md-12" id="loginform">
              <div className="row">
                <div className="col-6 mt-5 strong-shadow">
                  <LoginForm onSubmit={this.login} />
                </div>
                <div className="col-6 mt-5">
                  <RegisterForm onSubmit={this.register} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default LoginPage;
//halo