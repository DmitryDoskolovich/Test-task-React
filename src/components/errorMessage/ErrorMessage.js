import React from "react";
import "./ErrorMessage.css";

class ErrorMessage extends React.Component {
  render() {
    return (
      <p className="error-message error-message_position">
        E-Mail or password is incorrect
      </p>
    );
  }
}

export default ErrorMessage;
