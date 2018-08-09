import React, { Component } from "react";
import RecordPC from "./RecordPC";

var moment = require("moment");

class RecordCC extends Component {
  state = {
    calories: 1,
    balance: 1,
    tasty: 1,
    category: "",
    date: moment().format("YYYY/MM/DD"),
    tiem: moment().format("HH:mm")
  };

  pointFunc = v => {
    switch (v) {
      case 0:
        return 1;
      case 10:
        return 2;
      case 20:
        return 4;
      case 30:
        return 8;
      case 40:
        return 16;
      case 50:
        return 30;
      case 60:
        return 60;
      case 70:
        return 120;
      case 80:
        return 250;
      case 90:
        return 500;
      case 100:
        return 1000;
      default:
        return "";
    }
  };

  handleChange = e => cate => {
    e.target
      ? this.setState({ [cate]: e.target.value })
      : this.setState({ [cate]: this.pointFunc(e) });
  };

  render() {
    return <RecordPC {...this.state} onChange={this.handleChange} />;
  }
}

export default RecordCC;
