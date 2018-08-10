import React, { Component } from "react";
import { Radio, DatePicker, TimePicker, Button } from "antd";
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
          <div>
            <Radio.Button value={"Breakfast"}>Breakfast</Radio.Button>
            <Radio.Button value={"Brunch"}>Brunch</Radio.Button>
            <Radio.Button value={"Lunch"}>Lunch</Radio.Button>
          </div>
          <div>
            <Radio.Button value={"Snack"}>Snack</Radio.Button>
            <Radio.Button value={"Dinner"}>Dinner</Radio.Button>
            <Radio.Button value={"Midnight"}>Midnight</Radio.Button>
          </div>
        </Radio.Group>

        {arr.map(element => (
          <div key={element}>
            <div>
              <SliderPC {...this.props} category={element} />
            </div>
            <div>{element}</div>
          </div>
        ))}

        <div>
          {this.props.calories + this.props.balance + this.props.tasty > 1000
            ? "Over 1000"
            : this.props.calories + this.props.balance + this.props.tasty}
        </div>

        <div>
          {/* <div>#{this.props.count}</div> */}
          <div>Date: {this.props.date}</div>
          <div>Time: {this.props.time}</div>
          <div>Meal: {this.props.category}</div>
          <div>Calories: {this.props.calories}</div>
          <div>Balance: {this.props.balance}</div>
          <div>Tasty: {this.props.tasty}</div>
          <div>
            Sum: {this.props.calories + this.props.balance + this.props.tasty}
          </div>
          <Button disabled={!this.props.category} onClick={this.props.onSubmit}>
            Submit
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default RecordPC;
