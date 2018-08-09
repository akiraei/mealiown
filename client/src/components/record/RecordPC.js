import React, { Component } from "react";
import { Radio, Rate } from "antd";

var moment = require("moment");

const RadioGroup = Radio.Group;

class RecordPC extends Component {
  render() {
    return (
      <React.Fragment>
        <RadioGroup
          onChange={e => {
            this.props.onChange(e)("category");
          }}
        >
          <Radio value={"Breakfast"}>Breakfast</Radio>
          <Radio value={"Brunch"}>Brunch</Radio>
          <Radio value={"Lunch"}>Lunch</Radio>
          <Radio value={"Snack"}>Snack</Radio>
          <Radio value={"Dinner"}>Dinner</Radio>
          <Radio value={"Midnight"}>Midnight</Radio>
        </RadioGroup>

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
