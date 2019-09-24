import React from "react";
import "./Avatar.css";

class Avatar extends React.Component {
  render() {
    return (
      <img
        className="avatar avatar_position"
        src={this.props.value}
        alt="avatar"
      />
    );
  }
}

export default Avatar;
