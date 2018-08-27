import React, { Component } from "react";
import LoginCC from "../components/login/LoginCC";
import { Layout } from "antd";

import HeaderCC from "../components/header/HeaderCC";
const { Header, Footer, Sider, Content } = Layout;
class LoginPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Header className={"header"}>
            <HeaderCC {...this.props} />
          </Header>
          <Content>
            <LoginCC {...this.props} />
          </Content>
        </Layout>
      </React.Fragment>
    );
  }
}

export default LoginPage;
