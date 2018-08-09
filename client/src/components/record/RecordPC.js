import React, { Component } from "react";
import { Radio, Rate, DatePicker, TimePicker } from "antd";

var moment = require("moment");

const { MonthPicker, RangePicker } = DatePicker;

class RecordPC extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <DatePicker
            defaultValue={moment()}
            format={"YYYY/MM/DD"}
            onChange={e => {
              this.props.onChange(e)("date");
            }}
          />
          <TimePicker
            defaultValue={moment()}
            format={"HH:mm"}
            onChange={e => {
              this.props.onChange(e)("time");
            }}
          />
        </div>

        <Radio.Group
          onChange={e => {
            this.props.onChange(e)("category");
          }}
          buttonstyle={"solid"}
        >
          <Radio.Button value={"Breakfast"}>Breakfast</Radio.Button>
          <Radio.Button value={"Brunch"}>Brunch</Radio.Button>
          <Radio.Button value={"Lunch"}>Lunch</Radio.Button>
          <Radio.Button value={"Snack"}>Snack</Radio.Button>
          <Radio.Button value={"Dinner"}>Dinner</Radio.Button>
          <Radio.Button value={"Midnight"}>Midnight</Radio.Button>
        </Radio.Group>

        <div>
          {"Calories: "}
          <Rate
            onChange={e => {
              this.props.onChange(e)("calories");
            }}
          />
          {this.props.calories}
        </div>

        <div>
          {"Balance: "}
          <Rate
            onChange={e => {
              this.props.onChange(e)("balance");
            }}
          />
          {this.props.balance}
        </div>

        <div>
          {"Tasty: "}
          <Rate
            onChange={e => {
              this.props.onChange(e)("tasty");
            }}
          />
          {this.props.tasty}
        </div>
      </React.Fragment>
    );
  }
}

export default RecordPC;
