import React, { Component } from "react";
import RecordCC from "../components/record/RecordCC";
import HeaderCC from "../components/header/HeaderCC";
import withProfile from "../hocs/withProfile";

import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

class RecordPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Header className={"header"}>
            <HeaderCC />
          </Header>
          <Content>
            <RecordCC />
          </Content>
        </Layout>
      </React.Fragment>
    );
  }
}

export default withProfile(RecordPage);
