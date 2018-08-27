import React, { Component } from "react";
import DashboardPC from "./DashboardPC";
import { graphql } from "react-apollo";
import { getRecordsMutation } from "../../queries/queries";
import withProfile from "../../hocs/withProfile";

class DashboardCC extends Component {
  state = {
    count: 0,
    calAvg: 0,
    balAvg: 0,
    tastyAvg: 0,
    loading: true
  };

  componentDidMount = async () => {
    const res = await this.props.getRecordsMutation({
      variables: {
        token: localStorage.getItem("token")
      }
    });
    console.log("dash res", res.data);
    const arr = res.data.records;
    const count = arr.length
      ? res.data.records.sort((a, b) => b.count - a.count)[0].count
      : 0;
    const calAvg =
      count && parseInt(arr.reduce((acu, cv) => acu + cv.calories, 0) / count);
    const balAvg =
      count && parseInt(arr.reduce((acu, cv) => acu + cv.balance, 0) / count);
    const tastyAvg =
      count && parseInt(arr.reduce((acu, cv) => acu + cv.tasty, 0) / count);
    const sumAvg =
      count && parseInt(arr.reduce((acu, cv) => acu + cv.sum, 0) / count);
    this.setState({ count, calAvg, balAvg, tastyAvg, sumAvg, loading: false });
  };

  render() {
    return <DashboardPC {...this.props} {...this.state} />;
  }
}

export default graphql(getRecordsMutation, { name: "getRecordsMutation" })(
  withProfile(DashboardCC)
);
