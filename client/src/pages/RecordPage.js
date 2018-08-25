import React, { Component } from "react";
import RecordCC from "../components/record/RecordCC";
import HeaderCC from "../components/header/HeaderCC";
import StepCC from "../components/step/StepCC";

import withToken from "../hocs/withToken";

import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

class RecordPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Header className={"header"}>
            <HeaderCC {...this.props} />
          </Header>
          <Content>
            <RecordCC {...this.props} />
          </Content>
          <Footer className={"footer"}>
            <StepCC {...this.props} />
          </Footer>
        </Layout>
      </React.Fragment>
    );
  }
}

export default withToken(RecordPage);
