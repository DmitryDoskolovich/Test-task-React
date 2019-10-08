import React from "react";
import Logo from "./components/Logo/Logo";
import LoginForm from "./components/LoginForm/LoginForm";
import UserProfile from "./components/UserProfile/UserProfile";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      avatarUrl: "",
      userName: ""
    };
    this.loginSuccessful = this.loginSuccessful.bind(this);
    this.handleOnClickLogout = this.handleOnClickLogout.bind(this);
  }

  handleOnClickLogout = e =>
    this.setState({
      isLoggedIn: false,
      avatarUrl: "",
      userName: ""
    });

  loginSuccessful = responseObj => {
    this.setState({ isLoggedIn: true });
    this.setState({ avatarUrl: responseObj["photoUrl"] });
    this.setState({ userName: responseObj["name"] });
  };

  render() {
    return (
      <div className="authorization-page">
        <Logo className="app__logo_position" />
        {this.state.isLoggedIn ? (
          <UserProfile
            className="app__user-profile_properties"
            avatarUrl={this.state.avatarUrl}
            userName={this.state.userName}
            onClick={this.handleOnClickLogout}
          />
        ) : (
          <LoginForm
            className="app__login-form_properties"
            loginSuccessful={this.loginSuccessful}
          />
        )}
      </div>
    );
  }
}

export default App;
