import React, { Component } from "react";
import HeaderPC from "./HeaderPC";
import { graphql } from "react-apollo";
import { getTokenMutation } from "../../queries/queries";

class HeaderCC extends Component {
  render() {
    return <HeaderPC />;
  }
}

export default HeaderCC;
