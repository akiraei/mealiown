import React, { Component } from "react";
import { Radio, DatePicker, TimePicker, Button, Input, Row, Col } from "antd";
import SliderPC from "./SliderPC";
import ModalCC from "./ModalCC";

var moment = require("moment");

const { MonthPicker, RangePicker } = DatePicker;

class RecordPC extends Component {
  render() {
    const arr = ["calories", "balance", "tasty"];

    return (
      <React.Fragment>
        <div className={"record-container page-container flex column"}>
          <div className={"record-box green-yellow-bgc flex column"}>
            <Row
              type="flex"
              justify="center"
              align="center"
              className={"record-date-row"}
            >
              <Col span={12}>
                <DatePicker
                  className={"record-date-date"}
                  defaultValue={moment()}
                  format={"YYYY/MM/DD"}
                  onChange={e => {
                    this.props.onChange(e)("date");
                  }}
                />
              </Col>
            </Row>
            <Row
              type="flex"
              justify="center"
              align="center"
              className={"record-date-row"}
            >
              <Col span={12}>
                <TimePicker
                  className={"record-date-time"}
                  defaultValue={moment()}
                  format={"HH:mm"}
                  onChange={e => {
                    this.props.onChange(e)("time");
                  }}
                />
              </Col>
            </Row>

            <div className={"record-radio-box"}>
              <Radio.Group
                className={"flex column"}
                onChange={e => {
                  this.props.onChange(e)("category");
                }}
                buttonstyle={"solid"}
                value={this.props.category}
              >
                <Row className={"record-radio-row"}>
                  <Row
                    type="flex"
                    justify="center"
                    align="center"
                    className={"record-radio-element"}
                  >
                    <Col>
                      <Radio.Button
                        className={"record-radio-element-button flex"}
                        value={"Breakfast"}
                      >
                        Breakfast
                      </Radio.Button>
                    </Col>
                  </Row>
                  <Row
                    type="flex"
                    justify="center"
                    align="center"
                    className={"record-radio-element"}
                  >
                    <Col>
                      <Radio.Button
                        className={"record-radio-element-button flex"}
                        value={"Brunch"}
                      >
                        Brunch
                      </Radio.Button>
                    </Col>
                  </Row>
                  <Row
                    type="flex"
                    justify="center"
                    align="center"
                    className={"record-radio-element"}
                  >
                    <Col>
                      <Radio.Button
                        className={"record-radio-element-button flex"}
                        value={"Lunch"}
                      >
                        Lunch
                      </Radio.Button>
                    </Col>
                  </Row>
                  <Row
                    type="flex"
                    justify="center"
                    align="center"
                    className={"record-radio-element"}
                  >
                    <Col>
                      <Radio.Button
                        className={"record-radio-element-button flex"}
                        value={"Snack"}
                      >
                        Snack
                      </Radio.Button>
                    </Col>
                  </Row>
                  <Row
                    type="flex"
                    justify="center"
                    align="center"
                    className={"record-radio-element"}
                  >
                    <Col>
                      <Radio.Button
                        className={"record-radio-element-button flex"}
                        value={"Dinner"}
                      >
                        Dinner
                      </Radio.Button>
                    </Col>
                  </Row>
                  <Row
                    type="flex"
                    justify="center"
                    align="center"
                    className={"record-radio-element"}
                  >
                    <Col>
                      <Radio.Button
                        className={"record-radio-element-button flex"}
                        value={"Midnight"}
                      >
                        Midnight
                      </Radio.Button>
                    </Col>
                  </Row>
                </Row>
              </Radio.Group>
            </div>
          </div>

          <div className={"record-box yellow-blue-bgc"}>
            <div className={"slider-container"}>
              <Row>
                {arr.map(element => (
                  <Col span={8} key={element}>
                    <div>
                      <SliderPC {...this.props} category={element} />
                    </div>
                  </Col>
                ))}
              </Row>

              <Row
                type="flex"
                justify="center"
                align="center"
                className={"slider-sum"}
              >
                <Col>
                  <div>
                    {this.props.calories +
                      this.props.balance +
                      this.props.tasty >
                    1000
                      ? "Pt: Over 1000!"
                      : "Pt: " +
                        (
                          this.props.calories +
                          this.props.balance +
                          this.props.tasty
                        ).toString()}
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <div className={"record-box blue-violet-bgc"}>
            <div className={"result"}>
              {/* <div>#{this.props.count}</div> */}
              <div className={"result-row"}>Date: {this.props.date}</div>
              <div className={"result-row"}>Time: {this.props.time}</div>
              <div className={"result-row"}>Meal: {this.props.category}</div>
              <div className={"result-row"}>
                Calories: {this.props.calories}
              </div>
              <div className={"result-row"}>Balance: {this.props.balance}</div>
              <div className={"result-row"}>Tasty: {this.props.tasty}</div>
              <div className={"result-row"}>
                Sum:{" "}
                {this.props.calories + this.props.balance + this.props.tasty >
                1000
                  ? 1000
                  : this.props.calories + this.props.balance + this.props.tasty}
              </div>
              {/* <div className={"result-row"}>
                Memo
                <Input.TextArea autosize={{ minRows: 5, maxRows: 5 }} />
              </div> */}
              <div className={"result-row"}>
                <Row type="flex" justify="center" align="top">
                  <Col>
                    <Button
                      disabled={!this.props.category}
                      onClick={this.props.onSubmit}
                      className={"result-button"}
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>

        {this.props.modal && <ModalCC {...this.props} />}
      </React.Fragment>
    );
  }
}

export default RecordPC;
