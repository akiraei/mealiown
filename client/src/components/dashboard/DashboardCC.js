import React, { Component } from "react";
import DashboardPC from "./DashboardPC";
import { graphql } from "react-apollo";
import { getRecordsMutation } from "../../queries/queries";
import withProfile from "../../hocs/withProfile";

const cateOptions = [
  "Breakfast",
  "Brunch",
  "Lunch",
  "Snack",
  "Dinner",
  "Midnight"
];
const cateDefault = [
  "Breakfast",
  "Brunch",
  "Lunch",
  "Snack",
  "Dinner",
  "Midnight"
];
const avgsOptions = ["Calories", "Balance", "Tasty", "Total"];
const avgsDefault = ["Calories", "Balance", "Tasty", "Total"];

class DashboardCC extends Component {
  state = {
    count: 0,
    calAvg: 0,
    balAvg: 0,
    tastyAvg: 0,
    sumAvg: 0,
    loading: true,

    cateList: cateDefault,
    avgsList: avgsDefault,
    cateInd: true,
    avgsInd: true,
    cateAll: false,
    avgsAll: false,
    time: [0, 24],
    daybefore: 99999,

    open: false,
    submitted: false
  };

  componentDidMount = async () => {
    const res = await this.props.getRecordsMutation({
      variables: {
        token: localStorage.getItem("token")
      }
    });
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

  //----------------filer -------------------

  handleOpen = () => {
    this.state.open
      ? this.setState({ open: false })
      : this.setState({ open: true });
  };

  handleSubmit = obj => {
    console.log("submit");
    this.setState({
      submitted: true,
      open: false,
      ...obj
    });
  };

  render() {
    return (
      <DashboardPC
        {...this.props}
        {...this.state}
        ofFilter={{
          onOpen: this.handleOpen,
          onSliderChange: this.handleSliderChange,
          onRadioChange: this.handleRadioChange,
          onSubmit: this.handleSubmit
        }}
      />
    );
  }
}

export default graphql(getRecordsMutation, { name: "getRecordsMutation" })(
  withProfile(DashboardCC)
);
