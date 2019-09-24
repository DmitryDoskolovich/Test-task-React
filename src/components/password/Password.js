import React from "react";
import "./Password.css";

class Password extends React.Component {
  render() {
    return (
      <input
        className="password password_position"
        name="password"
        type="password"
        placeholder="Password"
        value={this.props.value}
        onChange={this.props.onChangeValue}
      />
    );
  }
}

export default Password;
