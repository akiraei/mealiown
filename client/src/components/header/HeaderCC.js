import React, { Component } from "react";
import HeaderPC from "./HeaderPC";
import { Redirect } from "react-router-dom";
import withProfile from "../../hocs/withProfile";
class HeaderCC extends Component {
  state = {
    sign: true
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({ sign: false });
    this.props.ProfileCTX.func.setUsername("");
  };

  render() {
    return this.state.sign ? (
      <HeaderPC {...this.props} onLogout={this.handleLogout} />
    ) : (
      <Redirect to={"./record"} />
    );
  }
}

export default withProfile(HeaderCC);
