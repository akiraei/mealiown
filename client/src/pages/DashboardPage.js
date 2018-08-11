import React, { Component } from "react";
import DashboardCC from "../components/dashboard/DashboardCC";
import withProfile from "../hocs/withProfile";

class DashboardPage extends Component {
  render() {
    return (
      <React.Fragment>
        <DashboardCC {...this.props} />
      </React.Fragment>
    );
  }
}

export default withProfile(DashboardPage);
