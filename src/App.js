import React from "react";
import Logo from "./components/Logo/Logo";
import LoginForm from "./components/LoginForm/LoginForm";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classLoginForm: "app__login-form_position app__login-form_size",
      classLogo: "app__logo_position"
    };
  }
  render() {
    return (
      <div className="authorization-page authorization-page_default page__authorization-page_position page__authorization-page_size ">
        <Logo className={this.state.classLogo} />
        <LoginForm className={this.state.classLoginForm} />
      </div>
    );
  }
}

export default App;
