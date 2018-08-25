import React, { Component } from "react";
import StepPC from "./StepPC";

class StepCC extends Component {
  state = {
    step: 0
  };

  componentDidMount = () => {
    const scrolling = () => {
      const x = window.scrollY;

      console.log("Y: ", x);

      switch (true) {
        case x < 300:
          this.setState({ step: 0 });
          break;
        case 300 <= x && x < 606:
          this.setState({ step: 1 });
          break;
        case 606 <= x && x < 900:
          this.setState({ step: 2 });
          break;
        case 900 <= x && x < 1200:
          this.setState({ step: 3 });
          break;
        case 1200 <= x:
          this.setState({ step: 4 });
          break;
        default:
          break;
      }
    };

    window.addEventListener("scroll", scrolling);
  };

  render() {
    return <StepPC {...this.state} {...this.props} />;
  }
}

export default StepCC;
