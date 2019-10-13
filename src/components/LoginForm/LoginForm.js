import React from "react";
import "./LoginForm.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import classNames from "classnames";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthError: false,
      email: "",
      password: ""
    };
  }

  handleChangeValueEmail = e => this.setState({ email: e.target.value });
  handleChangeValuePassword = e => this.setState({ password: e.target.value });

  handleSubmit = event => {
    event.preventDefault();
    let credentials = `{"email":"${this.state.email}","password":"${this.state.password}"}`;
    const url = "https://us-central1-mercdev-academy.cloudfunctions.net/login";
    fetch(url, {
      method: "POST",
      body: credentials,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200) {
          this.setState({ isAuthError: true });
        } else {
          res.json().then(response => {
            let responseObj = response;
            this.props.loginSuccessful(responseObj);
          });
        }
      })
      .catch(error => console.error("Fetch error", error));
  };

  render() {
    const isAuthError = this.state.isAuthError;
    return (
      <form
        className={classNames("login-form", this.props.className)}
        onSubmit={this.handleSubmit}
      >
        <h3 className="login-form__header">Log In</h3>
        <Input
          className="login-form__input"
          name="email"
          type="email"
          placeholder="E-Mail"
          value={this.state.email}
          onChange={this.handleChangeValueEmail}
          isAuthError={this.state.isAuthError}
        />
        <Input
          className="login-form__input"
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChangeValuePassword}
        />
        {isAuthError ? (
          <p className="login-form__error-message">
            E-Mail or password is incorrect
          </p>
        ) : null}
        <Button className="login-form__button" value="Login" type="submit">
          Login
        </Button>
      </form>
    );
  }
}

export default LoginForm;
