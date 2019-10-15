import React from "react";
import "./Button.css";
import classNames from "classnames";

class Button extends React.Component {
  render() {
    return (
      <button
        {...this.props}
        className={classNames("button", this.props.className)}
      />
    );
  }
}

export default Button;
