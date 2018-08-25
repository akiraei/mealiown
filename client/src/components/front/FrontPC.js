import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "antd";

class FrontPC extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={"front-container"}>
          <Link to={localStorage.getItem("token") ? "/record" : "/login"}>
            <Card className={"front-card"}>
              <Row type="flex" justify="center" align="center">
                <Col>
                  <div className={"front-postline"}>Welcome</div>
                </Col>
              </Row>
              <Row type="flex" justify="center" align="center">
                <Col>
                  <div className={"front-postline"}>meal - I - Own</div>
                </Col>
              </Row>
            </Card>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default FrontPC;
