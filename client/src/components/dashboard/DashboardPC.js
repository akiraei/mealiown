import React, { Component } from "react";
import { Progress } from "antd";

class DashboardPC extends Component {
  render() {
    return (
      <React.Fragment>
        <Progress type="dashboard" percent={this.props.count / 10} />
        <div>{this.props.count}</div>

        <div>
          <div>
            <div>
              <Progress
                strokeLinecap="square"
                type="dashboard"
                percent={this.props.calAvg / 10}
                width={50}
                format={percent => `${percent * 10} point`}
              />
            </div>
            <div>Calories</div>
          </div>

          <div>
            <div>
              <Progress
                strokeLinecap="square"
                type="dashboard"
                percent={this.props.balAvg / 10}
                width={50}
                format={percent => `${percent * 10} point`}
              />
            </div>
            <div>Balance</div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <Progress
                strokeLinecap="square"
                type="dashboard"
                percent={this.props.tastyAvg / 10}
                width={50}
                format={percent => `${percent * 10} point`}
              />
            </div>
            <div>Tasty</div>
          </div>
          <div>
            <div>
              <Progress
                strokeLinecap="square"
                type="dashboard"
                percent={this.props.sumAvg / 10}
                width={50}
                format={percent => `${percent * 10} point`}
              />
            </div>
            <div>Sum</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DashboardPC;
