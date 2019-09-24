import React from "react";
import "./LoginButton.css";

class LoginButton extends React.Component {
  render() {
    return (
      <div className="login-button_container">
        <input
          className="login-button login-button_position"
          type="submit"
          name="submit"
          value="Login"
        />
      </div>
    );
  }
}

export default LoginButton;
