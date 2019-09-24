import React from "react";
import "./LogoutButton.css";

class LogoutButton extends React.Component {
  render() {
    return (
      <div className="logout-button_container ">
        <input
          className="logout-button logout-button_position"
          type="submit"
          value="Logout"
          onClick={this.props.onClick}
        ></input>
      </div>
    );
  }
}

export default LogoutButton;
