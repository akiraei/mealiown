import React, { Component } from "react";
import RecordPC from "./RecordPC";
import { graphql } from "react-apollo";
import { saveRecordMutation } from "../../queries/queries";
import withProfile from "../../hocs/withProfile";

var moment = require("moment");

class RecordCC extends Component {
  state = {
    calories: 1,
    balance: 1,
    tasty: 1,
    category: "",
    date: moment().format("YYYY/MM/DD"),
    time: moment().format("HH:mm"),
    count: 1,
    // memo: "",
    modal: false
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

  handleSubmit = async () => {
    const value = {
      name: this.props.ProfileCTX.state.username,
      category: this.state.category,
      date: this.state.date,
      time: this.state.time,
      calories: this.state.calories,
      balance: this.state.balance,
      tasty: this.state.tasty,
      // memo: this.state.memo,
      modal: this.state.modal
    };
    const res = await this.props.saveRecordMutation({
      variables: {
        ...value
      }
    });
    res.data && this.setState({ modal: true });
  };

  handleModalClose = () => {
    window.scrollTo(0, 0);
    this.setState({ modal: false, category: "" });
  };

  render() {
    return (
      <RecordPC
        {...this.state}
        {...this.props}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        onClose={this.handleModalClose}
      />
    );
  }
}

export default graphql(saveRecordMutation, { name: "saveRecordMutation" })(
  withProfile(RecordCC)
);
