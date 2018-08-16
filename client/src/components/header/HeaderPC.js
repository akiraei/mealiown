import React, { Component } from "react";
import { Row, Col, Icon } from "antd";
import { Link } from "react-router-dom";

class HeaderPC extends Component {
  render() {
    const url = this.props.match.url;
    const username = this.props.ProfileCTX.state.username;
    const component = url.slice(1, 2).toUpperCase() + url.slice(2);
    const switcher = () => {
      switch (url) {
        case "/record":
          return {
            title: username + "'s " + component,
            url: "/dashboard",
            icon: "dashboard"
          };
        case "/dashboard":
          return {
            title: username + "'s " + component,
            url: "/record",
            icon: "form"
          };
        case "/signup":
          return {
            title: component,
            url: "/login",
            icon: "login"
          };
        case "/login":
          return {
            title: component,
            url: "/signup",
            icon: "user-add"
          };
        default:
          return "";
      }
    };

    return (
      <React.Fragment>
        <Row className={"header-row"} gutter={16}>
          <Col className={"header-col"} span={3}>
            <div>
              <Link to={switcher().url}>
                <Icon type={switcher().icon} />
              </Link>
            </div>
          </Col>
          <Col className={"header-col"} span={18}>
            <div>{switcher().title}</div>
          </Col>
          <Col className={"header-col"} span={3}>
            <div>
              {url === "/record" || url === "/dashboard" ? (
                <Icon type="logout" onClick={this.props.onLogout} />
              ) : (
                ""
              )}
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default HeaderPC;
