import React, { Component } from "react";
import { Row, Col, Button } from "antd";

var classNames = require("classnames");

class StepPC extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={"step-container"}>
          <div className={"step-box step-icon"}>
            <div className={"step-dot step-blue"}>
              <div className={"step-title"}>When</div>
            </div>
          </div>

          <div className={"step-box step-line"}>
            <div
              className={classNames(
                { "step-string": true },
                { "step-white": this.props.step < 1 },
                { "step-blue": this.props.step >= 1 }
              )}
            />
          </div>

          <div className={"step-box step-icon"}>
            <div
              className={classNames(
                { "step-dot": true },
                { "step-white": this.props.step < 2 },
                { "step-blue": this.props.step >= 2 }
              )}
            >
              <div className={"step-title"}>How</div>
            </div>
          </div>

          <div className={"step-box step-line"}>
            <div
              className={classNames(
                { "step-string": true },
                { "step-white": this.props.step < 3 },
                { "step-blue": this.props.step >= 3 }
              )}
            />
          </div>

          <div className={"step-box step-icon"}>
            <div
              className={classNames(
                { "step-dot": true },
                { "step-white": this.props.step < 4 },
                { "step-blue": this.props.step >= 4 }
              )}
            >
              <div className={"step-title"}>Confirm</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default StepPC;
