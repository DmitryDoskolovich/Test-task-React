import React from "react";
import "./LoginForm.css";
import LoginButton from "../loginButton/LoginButton";
import LogoutButton from "../logoutButton/LogoutButton";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Email from "../email/Email";
import Password from "../password/Password";
import FormHeader from "../formHeader/FormHeader";
import Avatar from "../avatar/Avatar";
import AvatarName from "../avatarName/AvatarName";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isAuthError: false,
      email: "",
      password: "",
      avatarUrl: "",
      avatarName: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeValueEmail = this.handleChangeValueEmail.bind(this);
    this.handleChangeValuePassword = this.handleChangeValuePassword.bind(this);
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
            this.setState({ avatarName: responseObj["name"] });
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
      <div className="login-form login-form_position">
        <form onSubmit={this.handleSubmit}>
          {isLoggedIn ? (
            <div>
              <Avatar value={this.state.avatarUrl} />
              <AvatarName value={this.state.avatarName} />
              <LogoutButton onClick={this.handleOnClickLogout} />
            </div>
          ) : (
            <div>
              <FormHeader />
              <Email
                className={this.state.isAuthError}
                value={this.state.email}
                onChangeValue={this.handleChangeValueEmail}
              />
              <Password
                value={this.state.password}
                onChangeValue={this.handleChangeValuePassword}
              />
              {isAuthError ? <ErrorMessage /> : null}
              <LoginButton />
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default LoginForm;
