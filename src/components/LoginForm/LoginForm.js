import React from "react";
import "./LoginForm.css";
import UserProfile from "../UserProfile/UserProfile";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isAuthError: false,
      email: "",
      password: "",
      avatarUrl: "",
      userName: "",
      classUserProfile:
        "login-form__user-profile_size login-form__user-profile_position"
    };
    this.handleChangeValueEmail = this.handleChangeValueEmail.bind(this);
    this.handleChangeValuePassword = this.handleChangeValuePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnClickLogout = this.handleOnClickLogout.bind(this);
  }

  handleChangeValueEmail = e => this.setState({ email: e.target.value });
  handleChangeValuePassword = e => this.setState({ password: e.target.value });

  handleOnClickLogout = e =>
    this.setState({
      isLoggedIn: false,
      isAuthError: false,
      email: "",
      password: ""
    });

  handleSubmit(event) {
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
            this.setState({ avatarUrl: responseObj["photoUrl"] });
            this.setState({ userName: responseObj["name"] });
            this.setState({ isLoggedIn: true });
          });
        }
      })
      .catch(error => console.error("Fetch error", error));
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const isAuthError = this.state.isAuthError;
    return (
      <div>
        {isLoggedIn ? (
          <UserProfile
            className={this.state.classUserProfile}
            avatarUrl={this.state.avatarUrl}
            userName={this.state.userName}
            onClick={this.handleOnClickLogout}
          />
        ) : (
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
        )}
      </div>
    );
  }
}

export default LoginForm;
