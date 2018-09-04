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
    loading: true,

    cateList: cateDefault,
    avgsList: avgsDefault,
    cateInd: true,
    avgsInd: true,
    cateAll: false,
    avgsAll: false,
    open: false,
    time: [0, 24],
    daybefore: 99999
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

  CateChange = checkedList => {
    this.setState({
      cateList: checkedList,
      cateInd: !!checkedList.length && checkedList.length < cateOptions.length,
      cateAll: checkedList.length === cateOptions.length
    });
  };

  CateAllChange = e => {
    this.setState({
      cateList: e.target.checked ? cateOptions : [],
      cateInd: false,
      cateAll: e.target.checked
    });
  };

  AvgsChange = checkedList => {
    this.setState({
      avgsList: checkedList,
      avgsInd: !!checkedList.length && checkedList.length < avgsOptions.length,
      avgsAll: checkedList.length === avgsOptions.length
    });
  };

  AvgsAllChange = e => {
    this.setState({
      avgsList: e.target.checked ? avgsOptions : [],
      avgsInd: false,
      avgsAll: e.target.checked
    });
  };

  handleOpen = () => {
    this.state.open
      ? this.setState({ open: false })
      : this.setState({ open: true });
  };

  handleSliderChange = value => {
    let arr = [];
    arr.push(24 - value[1]);
    arr.push(24 - value[0]);
    this.setState({ time: arr });
  };

  handleRadioChange = e => {
    this.setState({ daybefore: e.target.value });
  };

  render() {
    return (
      <DashboardPC
        {...this.props}
        {...this.state}
        ofCate={{
          onCateChange: this.CateChange,
          onCateAll: this.CateAllChange
        }}
        ofAvgs={{
          onAvgsChange: this.AvgsChange,
          onAvgsAll: this.AvgsAllChange
        }}
        ofFilter={{
          onOpen: this.handleOpen,
          onSliderChange: this.handleSliderChange,
          onRadioChange: this.handleRadioChange
        }}
      />
    );
  }
}

export default graphql(getRecordsMutation, { name: "getRecordsMutation" })(
  withProfile(DashboardCC)
);
