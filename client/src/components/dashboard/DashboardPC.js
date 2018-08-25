import React, { Component } from "react";
import { Progress, Row, Col, Spin } from "antd";

class DashboardPC extends Component {
  render() {
    const width = 100;

    return (
      <React.Fragment>
        {this.props.loading ? (
          <div className={"loading-container"}>
            <Spin size="large" tip="Loading..." />
          </div>
        ) : (
          <div className={"page-container page-filler"}>
            <div className={"dashboard-box"}>
              <Row type="flex" justify="center" align="center">
                <Col>
                  <Progress
                    type="dashboard"
                    percent={this.props.count / 10}
                    width={180}
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
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default DashboardPC;
