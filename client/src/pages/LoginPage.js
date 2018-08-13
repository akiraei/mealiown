import React, { Component } from "react";
import LoginCC from "../components/login/LoginCC";

class LoginPage extends Component {
  render() {
    return (
      <React.Fragment>
        <LoginCC {...this.props} />
      </React.Fragment>
    );
  }
}

export default LoginPage;
