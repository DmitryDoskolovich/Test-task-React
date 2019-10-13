import React from "react";
import "./Input.css";
import classNames from "classnames";

class Input extends React.Component {
  render() {
    const { isAuthError, ...other } = { ...this.props };
    return (
      <input
        {...other}
        className={classNames(
          "input",
          { input_error: isAuthError },
          this.props.className
        )}
      />
    );
  }
}

export default Input;
