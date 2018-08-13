import React, { Component } from "react";
import SignupPC from "./SignupPC";
import { graphql } from "react-apollo";
import { saveUserMutation } from "../../queries/queries";
import { Redirect } from "react-router-dom";

class SignupCC extends Component {
  state = {
    name: "",
    pw: "",
    logined: false
  };

  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };

  handleChangePw = e => {
    this.setState({ pw: e.target.value });
  };

  handleSubmit = async () => {
    const res = await this.props.saveUserMutation({
      variables: {
        name: this.state.name,
        pw: this.state.pw
      }
    });
    if (res.data.addUser) {
      localStorage.setItem("token", res.data.addUser.token);
      this.setState({ logined: true });
    }
  };

  render() {
    return localStorage.getItem("token") || this.state.logined ? (
      <Redirect to={"/record"} />
    ) : (
      <SignupPC
        {...this.props}
        onChangeName={this.handleChangeName}
        onChangePw={this.handleChangePw}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default graphql(saveUserMutation, { name: "saveUserMutation" })(
  SignupCC
);
