import React from "react";
import "./AvatarName.css";

class AvatarName extends React.Component {
  render() {
    return (
      <p className="avatar-name avatar-name_position">{this.props.value}</p>
    );
  }
}

export default AvatarName;
