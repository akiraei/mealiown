import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { getTokenMutation, verifyTokenMutation } from "../queries/queries";

const { Provider, Consumer } = React.createContext();

class ProfileProvider extends Component {
  state = {
    username: "",
    logined: false
  };

  componentDidMount = async () => {
    if (localStorage.getItem("token")) {
      const res = await this.props.verifyTokenMutation({
        variables: {
          token: localStorage.getItem("token")
        }
      });
      this.setState({
        username: res.data.sign.name,
        logined: true
      });
    }
  };

  login = async e => async (name, pw) => {
    const res = await this.props.getTokenMutation({
      variables: {
        name: name,
        pw: pw
      }
    });
    if (res.data.token.token) {
      localStorage.setItem("token", res.data.token.token);
      this.setState({ username: name, logined: true });
    }
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState({ username: "", logined: false });
  };

  render() {
    const value = {
      ProfileCTX: {
        state: { ...this.state },
        func: { login: this.login, logout: this.logout }
      }
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

const provider = compose(
  graphql(getTokenMutation, { name: "getTokenMutation" }),
  graphql(verifyTokenMutation, { name: "verifyTokenMutation" })
)(ProfileProvider);

export { provider as ProfileProvider, Consumer as ProfileConsumer };
