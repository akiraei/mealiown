import React, { Component } from "react";
import {
  Row,
  Col,
  Modal,
  DatePicker,
  Checkbox,
  Slider,
  Button,
  Radio
} from "antd";

var classNames = require("classnames");

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const CheckboxGroup = Checkbox.Group;

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

class SelectorPC extends Component {
  state = {
    cateList: cateDefault,
    avgsList: avgsDefault,
    cateInd: true,
    avgsInd: true,
    cateAll: false,
    avgsAll: false,
    time: [0, 24],
    daybefore: 99999
  };

  //----------------controll -------------------

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
    const obj = (() => {
      let obj = {};
      for (let i = 0; i < 9; i++) {
        obj[i * 3] = (24 - i * 3).toString();
      }
      return obj;
    })();

    const marks = {
      ...obj
    };

    return (
      <React.Fragment>
        <div
          className={classNames(
            {
              "selector-container": true
            },
            {
              "selector-open": this.props.open
            }
          )}
        >
          <div className={"selector-pseudoFooter"}>
            <Button onClick={this.props.ofFilter.onOpen}>Filter</Button>
          </div>

          <div className={"selector-content"}>
            <div className={"selector-controller"}>
              <div className={"selector-left"}>
                <div className={"selector-radio"}>
                  <div>Date Range</div>
                  <Radio.Group
                    className={"flex column justify"}
                    onChange={this.handleRadioChange}
                    buttonstyle={"solid"}
                    value={this.state.daybefore}
                    size="small"
                  >
                    <div
                      className={"flex colum justify selector-radio-container"}
                    >
                      <Radio.Button
                        className={"selector-radio-button"}
                        value={99999}
                      >
                        Entire
                      </Radio.Button>

                      <Radio.Button
                        className={"selector-radio-button"}
                        value={3}
                      >
                        3days
                      </Radio.Button>

                      <Radio.Button
                        className={"selector-radio-button"}
                        value={7}
                      >
                        7days
                      </Radio.Button>
                    </div>

                    <div
                      className={"flex colum justify selector-radio-container"}
                    >
                      <Radio.Button
                        className={"selector-radio-button"}
                        value={14}
                      >
                        14days
                      </Radio.Button>

                      <Radio.Button
                        className={"selector-radio-button"}
                        value={30}
                      >
                        30days
                      </Radio.Button>

                      <Radio.Button
                        className={"selector-radio-button"}
                        value={60}
                      >
                        60days
                      </Radio.Button>
                    </div>

                    <div
                      className={"flex colum justify selector-radio-container"}
                    >
                      <Radio.Button
                        className={"selector-radio-button"}
                        value={100}
                      >
                        100days
                      </Radio.Button>

                      <Radio.Button
                        className={"selector-radio-button"}
                        value={200}
                      >
                        200days
                      </Radio.Button>

                      <Radio.Button
                        className={"selector-radio-button"}
                        value={300}
                      >
                        300days
                      </Radio.Button>
                    </div>
                  </Radio.Group>
                </div>

                <div className={"selector-cate"}>
                  <div>Meal</div>
                  <div style={{ borderBottom: "1px solid #E9E9E9" }}>
                    <Checkbox
                      indeterminate={this.state.cateInd}
                      onChange={this.CateAllChange}
                      checked={this.state.cateAll}
                    >
                      Check all
                    </Checkbox>
                  </div>
                  <br />
                  <CheckboxGroup
                    options={cateOptions}
                    value={this.state.cateList}
                    onChange={this.CateChange}
                  />
                </div>

                <div className={"selector-avgs"}>
                  <div>Avgs</div>
                  <div style={{ borderBottom: "1px solid #E9E9E9" }}>
                    <Checkbox
                      indeterminate={this.state.avgsInd}
                      onChange={this.AvgsAllChange}
                      checked={this.state.avgsAll}
                    >
                      Check all
                    </Checkbox>
                  </div>
                  <br />
                  <CheckboxGroup
                    options={avgsOptions}
                    value={this.state.avgsList}
                    onChange={this.AvgsChange}
                  />
                </div>
              </div>
              <div className={"selector-right"}>
                <div className={"selector-time"}>
                  <div>Time Range</div>
                  <div>
                    <Slider
                      style={{ height: (window.innerHeight / 10) * 5 }}
                      vertical
                      range
                      defaultValue={[0, 24]}
                      max={24}
                      min={0}
                      tipFormatter={value => {
                        return value === 24 ? "0" : 24 - value;
                      }}
                      // step={1}
                      dots={false}
                      marks={marks}
                      onChange={this.handleSliderChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={"selector-submit"}>
              <Button
                disabled={
                  this.state.cateList.length * this.state.avgsList.length === 0
                }
                onClick={() => {
                  this.props.ofFilter.onSubmit({ ...this.state });
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SelectorPC;
