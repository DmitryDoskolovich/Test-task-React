import React from "react";
import "./Input.css";
import classNames from "classnames";

class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input
        {...this.props}
        className={classNames(
          "input",
          { input_error: this.props.isAuthError },
          this.props.className
        )}
      />
    );
  }
}

export default Input;
