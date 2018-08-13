import React, { Component } from "react";
import { Row, Col, Icon } from "antd";
import { Link } from "react-router-dom";

class HeaderPC extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className={"header-row"} gutter={16}>
          <Col className={"header-col"} span={3}>
            <div>
              {this.props.match.url === "/record" ? (
                <Link to={"/dashboard"}>
                  <Icon type="dashboard" />
                </Link>
              ) : (
                <Link to={"/record"}>
                  <Icon type="form" />
                </Link>
              )}
            </div>
          </Col>
          <Col className={"header-col"} span={18}>
            <div>
              {this.props.ProfileCTX.state.username}
              {"'s "}
              {this.props.match.url !== "/record" ? "Dashboard" : "Record"}
            </div>
          </Col>
          <Col className={"header-col"} span={3}>
            <div>
              <Icon type="logout" onClick={this.props.onLogout} />
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default HeaderPC;
