import React, { Component } from "react";
import { Row, Col, Icon } from "antd";

class HeaderPC extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className={"header-row"} gutter={16}>
          <Col className={"header-col"} span={3}>
            <div>
              {false ? <Icon type="dashboard" /> : <Icon type="form" />}
            </div>
          </Col>
          <Col className={"header-col"} span={18}>
            <div>{false ? "Dashboard" : "Record"}</div>
          </Col>
          <Col className={"header-col"} span={3}>
            <div>
              <Icon type="logout" />
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default HeaderPC;
