import React from "react";
import "./LoginForm.css";

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
        className={`login-form ${this.props.className}`}
        onSubmit={this.handleSubmit}
      >
        <div className="login-form__content">
          <h3 className="login-form__header">Log In</h3>
          <input
            className={
              isAuthError
                ? "login-form__input login-form__input_error"
                : "login-form__input"
            }
            name="email"
            type="email"
            placeholder="E-Mail"
            value={this.state.email}
            onChange={this.handleChangeValueEmail}
          />
          <input
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
          <input
            className="login-form__button"
            type="submit"
            name="submit"
            value="Login"
          />
        </div>
      </form>
    );
  }
}

export default LoginForm;
