import React, { Component } from "react";
import LoginPC from "./LoginPC";
import { graphql } from "react-apollo";
import { getTokenMutation } from "../../queries/queries";
import withProfile from "../../hocs/withProfile";
import { Redirect } from "react-router-dom";

class LoginCC extends Component {
  state = {
    name: "",
    pw: "",
    success: false,
    error: false
  };

  handleChangeName = e => {
    this.setState({ name: e.target.value, error: false });
  };

  handleChangePw = e => {
    this.setState({ pw: e.target.value, error: false });
  };

  handleSubmit = async () => {
    try {
      const res = await this.props.getTokenMutation({
        variables: {
          name: this.state.name,
          pw: this.state.pw
        }
      });
      if (res.data.token) {
        localStorage.setItem("token", res.data.token.token);
        this.setState({ success: true });
        this.props.ProfileCTX.func.setUsername(this.state.name);
      } else {
        this.setState({ error: true });
      }
    } catch (e) {
      this.setState({ error: true });
    }
  };

  render() {
    return localStorage.getItem("token") ? (
      <Redirect to={"/record"} />
    ) : (
      <LoginPC
        {...this.props}
        {...this.state}
        onChangeName={this.handleChangeName}
        onChangePw={this.handleChangePw}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default graphql(getTokenMutation, { name: "getTokenMutation" })(
  withProfile(LoginCC)
);
