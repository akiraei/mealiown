import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Redirect } from "react-router-dom";
import { verifyTokenMutation } from "../queries/queries";

const { Provider, Consumer } = React.createContext();

class ProfileProvider extends Component {
  state = {
    username: ""
  };

  componentDidMount = async () => {
    if (localStorage.getItem("token")) {
      const res = await this.props.verifyTokenMutation({
        variables: {
          token: localStorage.getItem("token")
        }
      });
      console.log("nooooog", res.data.sign);
      this.setState({
        username: res.data.sign.name
      });
    } else {
      this.setState({
        username: ""
      });
    }
  };

  render() {
    const value = {
      ProfileCTX: {
        state: { ...this.state }
      }
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

const provider = graphql(verifyTokenMutation, { name: "verifyTokenMutation" })(
  ProfileProvider
);

export { provider as ProfileProvider, Consumer as ProfileConsumer };
