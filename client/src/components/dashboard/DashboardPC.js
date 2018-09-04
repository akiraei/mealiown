import React, { Component } from "react";
import { Progress, Row, Col, Spin } from "antd";
import SelectorCC from "./SelectorCC";
class DashboardPC extends Component {
  render() {
    const width = document.body.offsetHeight / 6.3;
    const bigone = document.body.offsetHeight / 4.2;

    return (
      <React.Fragment>
        {this.props.loading ? (
          <div className={"loading-container"}>
            <Spin size="large" tip="Loading..." />
          </div>
        ) : (
          <div className={"page-container page-filler"}>
            <div className={"dashboard-index"}>
              <p>{this.props.daybefore}</p>
              <p>
                {this.props.time[0]} ~ {this.props.time[1]}
              </p>
              <p>
                {this.props.cateList.reduce((total, element) => {
                  total + element;
                }, "")}
              </p>
              {/* <p>
                {() => {
                  let str = "";
                  this.props.avgsList.forEach(e => {
                    str + ", " + e;
                  });
                  return str;
                }}
              </p> */}
            </div>

            <div className={"dashboard-box"}>
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

            <div className={"dashboard-box"}>
              <Row type="flex" justify="center" align="center">
                <Col className={"dashboard-small"}>
                  <div>
                    <Progress
                      strokeLinecap="square"
                      type="dashboard"
                      percent={this.props.calAvg / 10}
                      width={width}
                      format={percent => `${percent * 10} point`}
                    />
                  </div>
                  <Row type="flex" justify="center" align="center">
                    <Col>
                      <div>Avg.Calories</div>
                    </Col>
                  </Row>
                </Col>
                <Col className={"dashboard-small"}>
                  <div>
                    <Progress
                      strokeLinecap="square"
                      type="dashboard"
                      percent={this.props.balAvg / 10}
                      width={width}
                      format={percent => `${percent * 10} point`}
                    />
                  </div>
                  <Row type="flex" justify="center" align="center">
                    <Col>
                      <div>Avg.Balance</div>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row type="flex" justify="center" align="center">
                <Col className={"dashboard-small"}>
                  <div>
                    <Progress
                      strokeLinecap="square"
                      type="dashboard"
                      percent={this.props.tastyAvg / 10}
                      width={width}
                      format={percent => `${percent * 10} point`}
                    />
                  </div>
                  <Row type="flex" justify="center" align="center">
                    <Col>
                      <div>Avg.Tasty</div>
                    </Col>
                  </Row>
                </Col>
                <Col className={"dashboard-small"}>
                  <div>
                    <Progress
                      strokeLinecap="square"
                      type="dashboard"
                      percent={this.props.sumAvg / 10}
                      width={width}
                      format={percent => `${percent * 10} point`}
                    />
                  </div>
                  <Row type="flex" justify="center" align="center">
                    <Col>
                      <div>Avg.Pt</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>

            <SelectorCC {...this.props} {...this.state} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default DashboardPC;
