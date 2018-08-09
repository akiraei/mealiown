import React, { Component } from "react";
import RecordPC from "./RecordPC";

class RecordCC extends Component {
  state = {
    calories: 3,
    balance: 3,
    tasty: 3,
    category: ""
  };

  handleChange = e => cate => {
    console.log("change log", e, cate);
    e.target
      ? this.setState({ [cate]: e.target.value })
      : this.setState({ [cate]: e });
  };

  render() {
    return <RecordPC {...this.state} onChange={this.handleChange} />;
  }
}

export default RecordCC;
