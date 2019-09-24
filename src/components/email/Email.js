import React from "react";
import "./Email.css";

class Email extends React.Component {
  render() {
    return (
      <input
        className={
          this.props.className
            ? "email email_error email_position "
            : "email email_position "
        }
        name="email"
        type="email"
        placeholder="E-Mail"
        value={this.props.value}
        onChange={this.props.onChangeValue}
      />
    );
  }
}

export default Email;
