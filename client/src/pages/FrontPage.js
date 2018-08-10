import React, { Component } from "react";
import FrontCC from "../components/front/FrontCC";
import withProfile from "../hocs/WithProfile";
class FrontPage extends Component {
  render() {
    return (
      <React.Fragment>
        <FrontCC />
      </React.Fragment>
    );
  }
}

export default withProfile(FrontPage);
