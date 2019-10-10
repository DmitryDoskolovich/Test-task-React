import React from "react";
import "./Button.css";
import classNames from "classnames";

class Button extends React.Component {
  render() {
    return (
      <input
        className={classNames("button", this.props.className)}
        type="submit"
        name="submit"
        value={this.props.value}
        onClick={this.props.onClick}
      />
    );
  }
}

export default Button;
