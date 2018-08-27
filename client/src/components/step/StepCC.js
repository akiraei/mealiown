import React, { Component } from "react";
import StepPC from "./StepPC";

class StepCC extends Component {
  state = {
    step: 0
  };

  componentDidMount = () => {
    const range = document.body.scrollHeight - document.body.offsetHeight;
    const scrolling = () => {
      switch (true) {
        case window.scrollY < range / 4:
          this.handleChangeStep(0);
          break;
        case range / 4 <= window.scrollY && window.scrollY < range / 2:
          this.handleChangeStep(1);
          break;
        case range / 2 <= window.scrollY && window.scrollY < range * 0.75:
          this.handleChangeStep(2);
          break;
        case range * 0.75 <= window.scrollY && window.scrollY < range - 10:
          this.handleChangeStep(3);
          break;
        case range - 10 <= window.scrollY:
          this.handleChangeStep(4);
          break;
        default:
          break;
      }
    };
    window.addEventListener("scroll", scrolling);
  };

  handleChangeStep = x => {
    this.setState({ step: x });
  };

  render() {
    return <StepPC {...this.state} {...this.props} />;
  }
}

export default StepCC;
