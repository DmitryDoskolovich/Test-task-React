import React from "react";
import Logo from "./components/Logo/Logo";
import LoginForm from "./components/LoginForm/LoginForm";
import "./App.css";
import UserProfile from "./components/UserProfile/UserProfile";

const CLASSLOGINFORM = "app__login-form_position app__login-form_size";
const CLASSLOGO = "app__logo_position";
const CLASSUSERPROFILE = "app__user-profile_size app__user-profile_position";

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
        <Logo className={CLASSLOGO} />
        {this.state.isLoggedIn ? (
          <UserProfile
            className={CLASSUSERPROFILE}
            avatarUrl={this.state.avatarUrl}
            userName={this.state.userName}
            onClick={this.handleOnClickLogout}
          />
        ) : (
          <LoginForm
            className={CLASSLOGINFORM}
            loginSuccessful={this.loginSuccessful}
          />
        )}
      </div>
    );
  }
}

export default App;
