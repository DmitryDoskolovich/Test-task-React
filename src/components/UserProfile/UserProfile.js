import React from "react";
import "./UserProfile.css";
import Button from "../Button/Button";
import classNames from "classnames";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={classNames("user-profile", this.props.className)}>
        <div className="user-profile__content">
          <img
            className="user-profile__avatar"
            src={this.props.avatarUrl}
            alt="avatar"
          />
          <p className="user-profile__user-name">{this.props.userName}</p>
          <Button
            className="user-profile__logout-button"
            value="Logout"
            type="button"
            onClick={this.props.onClick}
            buttonText="Logout"
          />
        </div>
      </div>
    );
  }
}

export default UserProfile;
