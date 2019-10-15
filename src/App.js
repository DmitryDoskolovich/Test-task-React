import React from "react";
import Logo from "./components/Logo/Logo";
import LoginForm from "./components/LoginForm/LoginForm";
import UserProfile from "./components/UserProfile/UserProfile";
import Wrapper from "./components/Wrapper/Wrapper";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      avatarUrl: "",
      userName: ""
    };
  }

  handleOnClickLogout = e =>
    this.setState({
      isLoggedIn: false,
      avatarUrl: "",
      userName: ""
    });

  loginSuccessful = responseObj => {
    this.setState({
      isLoggedIn: true,
      avatarUrl: responseObj["photoUrl"],
      userName: responseObj["name"]
    });
  };

  render() {
    return (
      <div className="app">
        <Logo className="app__logo" />
        {this.state.isLoggedIn ? (
          <Wrapper>
            <UserProfile
              className="app__content"
              avatarUrl={this.state.avatarUrl}
              userName={this.state.userName}
              onClick={this.handleOnClickLogout}
            />
          </Wrapper>
        ) : (
          <Wrapper>
            <LoginForm
              className="app__content"
              loginSuccessful={this.loginSuccessful}
            />
          </Wrapper>
        )}
      </div>
    );
  }
}

export default App;
