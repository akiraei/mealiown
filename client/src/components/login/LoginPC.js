import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Alert, Input, Row, Col, Button } from "antd";
class LoginPC extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={"page-container page-filler"}>
          <div className={"login-box"}>
            <Row type="flex" justify="center" align="center">
              <Col>
                <Input onChange={this.props.onChangeName} placeholder={"id"} />
              </Col>
            </Row>
            <Row type="flex" justify="center" align="center">
              <Col>
                <Input onChange={this.props.onChangePw} placeholder={"pw"} />
              </Col>
            </Row>
            <Row type="flex" justify="center" align="center">
              <Col>
                <Button onClick={this.props.onSubmit}>submit</Button>
              </Col>
            </Row>
          </div>

          {this.props.error && (
            <Row type="flex" justify="center" align="center">
              <Col>
                <Alert
                  message="Error"
                  description="Wrong ID or Password"
                  type="error"
                  showIcon
                />
              </Col>
            </Row>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default LoginPC;
