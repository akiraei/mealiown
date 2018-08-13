import React, { Component } from "react";
import HeaderPC from "./HeaderPC";
import { Redirect } from "react-router-dom";

class HeaderCC extends Component {
  state = {
    sign: true
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({ sign: false });
  };

  render() {
    return this.state.sign ? (
      <HeaderPC {...this.props} onLogout={this.handleLogout} />
    ) : (
      <Redirect to={"./record"} />
    );
  }
}

export default HeaderCC;
