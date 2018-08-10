import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getTokenMutation } from "../queries/queries";

var jwt = require("jsonwebtoken");

const { Provider, Consumer } = React.createContext();

class ProfileProvider extends Component {
  state = {
    username: "",
    logined: false
  };

  componentDidMount = () => {
    if (localStorage.getItem("token")) {
      this.setState({
        username: jwt.verify(localStorage.getItem("token"), "secret").name,
        logined: true,
      });
    }
  };

  login = async e => (name,pw) => {
    const res = await this.props.getTokenMutation({
      variables: {
        name: name,
        pw: pw
      }
    });
    if (res.data.token.token) {
      localStorage.setItem("token", res.data.token.token);
      this.setState({username: name, logined: true})
    }
  };

  logout = () => {
       localStorage.removeItem('token');
      this.setState({username: "", logined: false})
  };

  render() {
    const value = {
        ProfileCTX: {
            state:this.state,
            func: { login: this.login, logout: this.logout }
        }
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { ProfileProvider, Consumer as ProfileConsumer };
