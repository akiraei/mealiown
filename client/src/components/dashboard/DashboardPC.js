import React, { Component } from "react";
import { Progress, Row, Col, Spin } from "antd";
import SelectorCC from "./SelectorCC";
import IndexPC from "./IndexPC";

var classNames = require("classnames");

class DashboardPC extends Component {
  render() {
    const width =
      this.props.avgsList.length < 3
        ? document.body.offsetHeight / 5.8
        : document.body.offsetHeight / 6.3;
    const bigone = document.body.offsetHeight / 4.2;
    const progressList = [
      ["calAvg", "Avg.Calories", "Calories"],
      ["balAvg", "Avg.Balance", "Balance"],
      ["tastyAvg", "Avg.Tasty", "Tasty"],
      ["sumAvg", "Avg.pt", "Sum"]
    ];
    return (
      <React.Fragment>
        {this.props.loading ? (
          <div className={"loading-container"}>
            <Spin size="large" tip="Loading..." />
          </div>
        ) : (
          <div className={"page-container page-filler"}>
            {this.props.submitted && (
              <div className={"dashboard-index"}>
                <IndexPC {...this.state} {...this.props} />
              </div>
            )}

            <div
              className={classNames(
                { "dashboard-box": true },
                {
                  "dashboard-slided": this.props.submitted
                }
              )}
            >
              <Row type="flex" justify="center" align="center">
                <Col>
                  <Progress
                    type="dashboard"
                    percent={this.props.count / 10}
                    width={bigone}
                  />
                  <Row type="flex" justify="center" align="center">
                    <Col>
                      <div>
                        {"Count: "}
                        {this.props.count}
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>

            <div
              className={classNames(
                { "dashboard-box": true },
                { "dashboard-nowrap": this.props.avgsList.length < 3 }
              )}
            >
              {progressList.map(e => {
                if (this.props.avgsList.find(ele => ele === e[2])) {
                  return (
                    <div className={"dashboard-little"} key={e[0]}>
                      <div>
                        <Progress
                          strokeLinecap="square"
                          type="dashboard"
                          percent={this.props[`${e[0]}`] / 10}
                          width={width}
                          format={percent => `${percent * 10} point`}
                        />
                      </div>
                      <div>{e[1]}</div>
                    </div>
                  );
                }
              })}
            </div>

            <SelectorCC {...this.props} {...this.state} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default DashboardPC;
