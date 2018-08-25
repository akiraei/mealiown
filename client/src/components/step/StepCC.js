import React, { Component } from "react";
import StepPC from "./StepPC";

class StepCC extends Component {
  state = {
    step: 0
  };

  componentDidMount = () => {
    const scrolling = () => {
      console.log(this.state.step);
      window.scrollY > 590
        ? window.scrollY > 1200
          ? this.setState({ step: 2 })
          : this.setState({ step: 1 })
        : this.setState({ step: 0 });
    };

    window.addEventListener("scroll", scrolling);
  };

  render() {
    return <StepPC {...this.state} {...this.props} />;
  }
}

export default StepCC;
