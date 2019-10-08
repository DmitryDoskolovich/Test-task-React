import React from "react";
import logo from "./logo.svg";
import "./Logo.css";
import classNames from "classnames";

class Logo extends React.Component {
  render() {
    return (
      <div className={classNames("logo", this.props.className)}>
        <img className="logo__img" src={logo} alt="logo" />
      </div>
    );
  }
}

export default Logo;
