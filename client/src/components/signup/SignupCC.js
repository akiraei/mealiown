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

  handleSubmit = async (name, pw) => {
    const res = await this.props.saveUserMutation({
      variables: {
        name,
        pw
      }
    });
    if (res.data.addUser) {
      localStorage.setItem("token", res.data.addUser.token);
      this.setState({ username: name, logined: true });
    }
  };

  render() {
    return this.state.logined ? (
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
