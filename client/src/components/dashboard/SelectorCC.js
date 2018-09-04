import React, { Component } from "react";
import SelectorPC from "./SelectorPC";

class SelectorCC extends Component {
  render() {
    return <SelectorPC {...this.props} {...this.state} />;
  }
}

export default SelectorCC;
