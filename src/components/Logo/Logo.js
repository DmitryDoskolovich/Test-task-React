import React from "react";
import logo from "./logo.svg";
import "./Logo.css";

class Logo extends React.Component {
  render() {
    return (
      <div className="logo app__logo_position">
        <img className="logo__img" src={logo} alt="logo" />
      </div>
    );
  }
}

export default Logo;
