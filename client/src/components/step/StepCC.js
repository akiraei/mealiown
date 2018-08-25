import React, { Component } from "react";
import StepPC from "./StepPC";
import { graphql } from "react-apollo";
import { saveRecordMutation } from "../../queries/queries";

var moment = require("moment");

class StepCC extends Component {
  static defaultProps = {
    ProfileCTX: {
      state: {
        username: "fds"
      }
    }
  };

  state = {
    calories: 1,
    balance: 1,
    tasty: 1,
    category: "",
    date: moment().format("YYYY/MM/DD"),
    time: moment().format("HH:mm"),
    count: 1,
    memo: ""
  };

  render() {
    return <StepPC {...this.state} {...this.props} />;
  }
}

export default StepCC;
