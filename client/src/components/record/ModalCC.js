import React, { Component } from "react";
import ModalPC from "./ModalPC";

class ModalCC extends Component {
  // componentDidMount = () => {
  //   console.log(history);
  // };

  render() {
    return <ModalPC {...this.props} />;
  }
}

export default ModalCC;
