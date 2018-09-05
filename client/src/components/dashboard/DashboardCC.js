import React, { Component } from "react";
import DashboardPC from "./DashboardPC";
import { graphql, compose } from "react-apollo";
import { getRecordsMutation, getFilteredMutation } from "../../queries/queries";
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
const avgsOptions = ["Calories", "Balance", "Tasty", "Sum"];
const avgsDefault = ["Calories", "Balance", "Tasty", "Sum"];

class DashboardCC extends Component {
  state = {
    count: 0,
    calAvg: 0,
    balAvg: 0,
    tastyAvg: 0,
    sumAvg: 0,

    cateList: cateDefault,
    avgsList: avgsDefault,
    cateInd: true,
    avgsInd: true,
    cateAll: false,
    avgsAll: false,
    time: [0, 24],
    daybefore: 99999,

    loading: true,
    open: false,
    submitted: false
  };

  componentDidMount = async () => {
    const res = await this.props.getRecordsMutation({
      variables: {
        token: localStorage.getItem("token")
      }
    });
    const obj = res.data.records;
    this.setState({ ...obj, loading: false });
  };

  //----------------filer -------------------

  handleOpen = () => {
    this.state.open
      ? this.setState({ open: false })
      : this.setState({ open: true });
  };

  handleSubmit = async obj => {
    const res = await this.props.getFilteredMutation({
      variables: {
        token: localStorage.getItem("token"),
        cate: obj.cateList.join("/"),
        avgs: obj.avgsList.map(e => e.toLowerCase()).join("/"),
        daybefore: obj.daybefore,
        starttime: obj.time[0],
        endtime: obj.time[1]
      }
    });

    const data = res.data.filtered;

    if (data) {
      this.setState({
        submitted: true,
        open: false,
        count: data.count ? data.count : 0,
        calAvg: data.calories ? data.calories : 0,
        balAvg: data.balance ? data.balance : 0,
        tastyAvg: data.tasty ? data.tasty : 0,
        sumAvg: data.sum ? data.sum : 0,
        ...obj
      });
    } else {
      this.setState({
        submitted: true,
        open: false,
        count: 0,
        calAvg: 0,
        balAvg: 0,
        tastyAvg: 0,
        sumAvg: 0,
        ...obj
      });
    }
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

export default compose(
  graphql(getRecordsMutation, { name: "getRecordsMutation" }),
  graphql(getFilteredMutation, { name: "getFilteredMutation" })
)(withProfile(DashboardCC));
