import React from "react";
import "./UserProfile.css";
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`user-profile ${this.props.className}`}>
        <img
          className="user-profile__avatar"
          src={this.props.avatarUrl}
          alt="avatar"
        />
        <p className="user-profile__user-name">{this.props.userName}</p>
        <input
          className="user-profile__logout-button"
          type="submit"
          value="Logout"
          onClick={this.props.onClick}
        ></input>
      </div>
    );
  }
}

export default UserProfile;
