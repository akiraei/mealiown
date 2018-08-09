import React, { Component } from "react";
import { Radio, DatePicker, TimePicker } from "antd";
import SliderPC from "./SliderPC";

var moment = require("moment");

const { MonthPicker, RangePicker } = DatePicker;

class RecordPC extends Component {
  render() {
    const arr = ["calories", "balance", "tasty"];

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

        {arr.map(element => (
          <div key={element}>
            <div>
              <SliderPC {...this.props} category={element} />
            </div>
            <div>{element}</div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default RecordPC;
