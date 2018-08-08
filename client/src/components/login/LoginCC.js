import React, { Component } from "react";
import LoginPC from "./LoginPC";
import { graphql } from "react-apollo";
import { getTokenMutation } from "../../queries/queries";

class LoginCC extends Component {
  state = {
    name: "",
    pw: ""
  };

  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };

  handleChangePw = e => {
    this.setState({ pw: e.target.value });
  };

  handleSubmit = async e => {
    const res = await this.props.getTokenMutation({
      variables: {
        name: this.state.name,
        pw: this.state.pw
      }
    });
    console.log("submit", res.data.token.token);
    if (res.data.token.token) {
      localStorage.setItem("token", res.data.token.token);
    }
  };

  render() {
    return (
      <LoginPC
        onChangeName={this.handleChangeName}
        onChangePw={this.handleChangePw}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default graphql(getTokenMutation, { name: "getTokenMutation" })(LoginCC);
