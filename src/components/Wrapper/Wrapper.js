import React from "react";
import "./Wrapper.css";
import classNames from "classnames";

class Wrapper extends React.Component {
  render() {
    return (
      <div
        {...this.props}
        className={classNames("wrapper", this.props.className)}
      ></div>
    );
  }
}

export default Wrapper;
