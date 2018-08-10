import React, { Component } from "react";
import LoginCC from "../components/login/LoginCC";
import withProfile from "../hocs/WithProfile";

class LoginPage extends Component {
  render() {
    return (
      <React.Fragment>
        <LoginCC />
      </React.Fragment>
    );
  }
}

export default withProfile(LoginPage);
