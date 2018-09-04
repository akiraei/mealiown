import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Alert, Row, Col, Input } from "antd";
import UploaderCC from "../Uploader/UploaderCC";

class SignupPC extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={"page-container page-filler"}>
          <div className={"signup-box"}>
            {/* <Row type="flex" justify="center" align="center">
              <Col>
                <UploaderCC />
              </Col>
            </Row> */}
            <Row type="flex" justify="center" align="center">
              <Col>
                <Input
                  onChange={this.props.onChangeName}
                  placeholder={"id"}
                  value={this.props.name}
                />
              </Col>
            </Row>
            <Row type="flex" justify="center" align="center">
              <Col>
                <Input
                  onChange={this.props.onChangePw}
                  placeholder={"pw"}
                  value={this.props.pw}
                />
              </Col>
            </Row>
            <Row type="flex" justify="center" align="center">
              <Col>
                <Input
                  onChange={this.props.onChangeRePw}
                  placeholder={"re-pw"}
                  value={this.props.repw}
                />
              </Col>
            </Row>
            <Row type="flex" justify="center" align="center">
              <Col>
                <Button
                  type={this.props.match ? "" : "dashed"}
                  onClick={this.props.onSubmit}
                >
                  submit
                </Button>
              </Col>
            </Row>
          </div>

          {this.props.occupied && (
            <Row type="flex" justify="center" align="center">
              <Col>
                <Alert
                  message="Error"
                  description="ID occupied"
                  type="error"
                  showIcon
                />
              </Col>
            </Row>
          )}
          {/* </Link> */}
        </div>
      </React.Fragment>
    );
  }
}

export default SignupPC;
