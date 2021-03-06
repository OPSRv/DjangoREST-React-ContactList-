import { Redirect } from "react-router-dom";
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../authorization.css";
import axios from "axios";
import ApiService from "../../../Services/ApiService";

class SingUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
      isRedirect: false,
    };
  }

  getLogin = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  getEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  getPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  getPasswordConfirm = (event) => {
    this.setState({
      password2: event.target.value,
    });
  };

  onSendDataUs = (event) => {
    event.preventDefault();

    const { username, email, password, password2 } = this.state;
    if (password === password2) {
      let newUser = {
        username: username,
        email: email,
        password: password,
        password2: password2,
      };

      axios({
        method: "post",
        url: "http://127.0.0.1:8000/auth/register/",
        data: newUser,
      })
        .then(function (response) {
          console.log(response.status, "getCreateAccount - response - Вітаю");
        })
        .catch(function (error) {
          console.log(error, "error getCreateAccount - INDEX");
        });
    } else {
      alert("Passwords do not match");
    }

    this.setState({
      isRedirect: true,
    });
  };

  render() {
    if (this.state.isRedirect) {
      return <Redirect to="/authorization" />;
    }
    const { username, email, password, password2 } = this.state;
    return (
      <Fragment>
        <div class="login-page">
          <div class="form box">
            <form className="register-form" onSubmit={this.onSendDataUs}>
              <input
                value={username}
                onChange={this.getLogin}
                type="text"
                id="reg_login"
                className="animateInput"
                placeholder="login"
                autocomplete="username"
                name="username"
                required
              />
              <input
                value={email}
                onChange={this.getEmail}
                id="reg_email"
                className="animateInput"
                placeholder="email address"
                name="email"
                autocomplete="username email"
                type="email"
                required
              />

              <input
                value={password}
                onChange={this.getPassword}
                type="password"
                id="reg_password"
                className="animateInput"
                placeholder="password"
                name="password"
                autoComplete="new-password"
                required
              />
              <input
                value={password2}
                onChange={this.getPasswordConfirm}
                type="password"
                id="reg_password2"
                className="animateInput"
                placeholder="password"
                name="password"
                autoComplete="current-password"
                required
              />
              <button id="reg_btn" className="btn-auth">
                create
              </button>
              <p className="message">
                Already registered?{" "}
                <Link to="/authorization/sing-in" id="register">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SingUp;
