import React from "react";
import Logo from "./components/Logo/Logo";
import LoginForm from "./components/LoginForm/LoginForm";
import "./App.css";
import UserProfile from "./components/UserProfile/UserProfile";

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
        <Logo className={this.props.classLogo} />
        {this.state.isLoggedIn ? (
          <UserProfile
            className={this.props.classUserProfile}
            avatarUrl={this.state.avatarUrl}
            userName={this.state.userName}
            onClick={this.handleOnClickLogout}
          />
        ) : (
          <LoginForm
            className={this.props.classLoginForm}
            loginSuccessful={this.loginSuccessful}
          />
        )}
      </div>
    );
  }
}

App.defaultProps = {
  classLoginForm: "app__login-form_position app__login-form_size",
  classLogo: "app__logo_position",
  classUserProfile: "app__user-profile_size app__user-profile_position "
};

export default App;
