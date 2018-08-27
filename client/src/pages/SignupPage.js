import React, { Component } from "react";
import SignupCC from "../components/signup/SignupCC";

import { Layout } from "antd";

import HeaderCC from "../components/header/HeaderCC";
const { Header, Footer, Sider, Content } = Layout;
class SignupPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Header className={"header"}>
            <HeaderCC {...this.props} />
          </Header>
          <Content>
            <SignupCC {...this.props} />
          </Content>
        </Layout>
      </React.Fragment>
    );
  }
}

export default SignupPage;
