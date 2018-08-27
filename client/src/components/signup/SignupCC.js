import React, { Component } from "react";
import SignupPC from "./SignupPC";
import { graphql } from "react-apollo";
import { saveUserMutation } from "../../queries/queries";
import { Redirect } from "react-router-dom";
import withProfile from "../../hocs/withProfile";

class SignupCC extends Component {
  state = {
    name: "",
    pw: "",
    repw: "",
    match: false,
    logined: false,
    occupied: false
  };

  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };

  handleChangePw = e => {
    if (this.state.repw === e.target.value) {
      this.setState({ pw: e.target.value, match: true });
    } else {
      this.setState({ pw: e.target.value, match: false });
    }
  };

  handleChangeRePw = e => {
    if (this.state.pw === e.target.value) {
      this.setState({ repw: e.target.value, match: true });
    } else {
      this.setState({ repw: e.target.value, match: false });
    }
  };

  handleSubmit = async () => {
    if (this.state.match) {
      const res = await this.props.saveUserMutation({
        variables: {
          name: this.state.name,
          pw: this.state.pw
        }
      });
      if (res.data.addUser) {
        localStorage.setItem("token", res.data.addUser.token);
        this.setState({ logined: true });
        this.props.ProfileCTX.func.setUsername(this.state.name);
      } else {
        this.setState({ occupied: true, pw: "", repw: "" });
      }
    }
  };

  render() {
    return localStorage.getItem("token") || this.state.logined ? (
      <Redirect to={"/record"} />
    ) : (
      <SignupPC
        {...this.props}
        {...this.state}
        onChangeName={this.handleChangeName}
        onChangePw={this.handleChangePw}
        onChangeRePw={this.handleChangeRePw}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default graphql(saveUserMutation, { name: "saveUserMutation" })(
  withProfile(SignupCC)
);
