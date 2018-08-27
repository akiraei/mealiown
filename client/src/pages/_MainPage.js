import React, { Component } from "react";
import MainCC from "../components/main/MainCC";
import withToken from "../hocs/withToken";

class MainPage extends Component {
  render() {
    return (
      <React.Fragment>
        <MainCC />
      </React.Fragment>
    );
  }
}

export default withToken(MainPage);
