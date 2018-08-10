import React, { Component } from "react";
import RecordCC from "../components/record/RecordCC";
import withProfile from "../hocs/WithProfile";

class RecordPage extends Component {
  render() {
    return (
      <React.Fragment>
        <RecordCC />
      </React.Fragment>
    );
  }
}

export default withProfile(RecordPage);
