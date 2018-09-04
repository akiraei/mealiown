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
const avgsOptions = ["Calories", "Balance", "Tasty", "Total"];

class SelectorPC extends Component {
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
                    onChange={this.props.ofFilter.onRadioChange}
                    buttonstyle={"solid"}
                    value={this.props.daybefore}
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
                      indeterminate={this.props.cateInd}
                      onChange={this.props.ofCate.onCateAll}
                      checked={this.props.cateAll}
                    >
                      Check all
                    </Checkbox>
                  </div>
                  <br />
                  <CheckboxGroup
                    options={cateOptions}
                    value={this.props.cateList}
                    onChange={this.props.ofCate.onCateChange}
                  />
                </div>

                <div className={"selector-avgs"}>
                  <div>Avgs</div>
                  <div style={{ borderBottom: "1px solid #E9E9E9" }}>
                    <Checkbox
                      indeterminate={this.props.avgsInd}
                      onChange={this.props.ofAvgs.onAvgsAll}
                      checked={this.props.avgsAll}
                    >
                      Check all
                    </Checkbox>
                  </div>
                  <br />
                  <CheckboxGroup
                    options={avgsOptions}
                    value={this.props.avgsList}
                    onChange={this.props.ofAvgs.onAvgsChange}
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
                      onChange={this.props.ofFilter.onSliderChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={"selector-submit"}>
              <Button
                disabled={
                  this.props.cateList.length * this.props.avgsList.length === 0
                }
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
