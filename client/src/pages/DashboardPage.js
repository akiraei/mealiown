import React, { Component } from "react";
import DashboardCC from "../components/dashboard/DashboardCC";
import HeaderCC from "../components/header/HeaderCC";

import withToken from "../hocs/withToken";

import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

class DashboardPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Header className={"header"}>
            <HeaderCC {...this.props} />
          </Header>
          <Content>
            <DashboardCC {...this.props} />
          </Content>
        </Layout>
      </React.Fragment>
    );
  }
}

export default withToken(DashboardPage);
