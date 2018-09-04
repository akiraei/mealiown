import React, { Component } from "react";
import SelectorPC from "./SelectorPC";
import { graphql } from "react-apollo";
import { getRecordsMutation } from "../../queries/queries";

class SelectorCC extends Component {
  state = {
    blank: false,
    selectorOpen: true
  };

  render() {
    return <SelectorPC {...this.props} {...this.state} />;
  }
}

export default graphql(getRecordsMutation, { name: "getRecordsMutation" })(
  SelectorCC
);
