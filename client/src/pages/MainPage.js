import React, { Component } from "react";
import MainCC from "../components/main/MainCC";
import withProfile from "../hocs/withProfile";

class MainPage extends Component {
  render() {
    return (
      <React.Fragment>
        <MainCC />
      </React.Fragment>
    );
  }
}

export default withProfile(MainPage);
