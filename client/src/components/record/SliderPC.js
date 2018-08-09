import React, { Component } from "react";
import { Slider } from "antd";

class SliderPC extends Component {
  render() {
    const style = {
      height: 100
    };

    const marks = {
      0: "1",
      100: "1000"
    };

    function formatter(value) {
      switch (value) {
        case 0:
          return "1";
        case 10:
          return "2";
        case 20:
          return "4";
        case 30:
          return "8";
        case 40:
          return "16";
        case 50:
          return "30";
        case 60:
          return "60";
        case 70:
          return "120";
        case 80:
          return "250";
        case 90:
          return "500";
        case 100:
          return "1000";
        default:
          return "";
      }
    }

    return (
      <React.Fragment>
        <div style={style}>
          <Slider
            tipFormatter={formatter}
            vertical
            step={10}
            marks={marks}
            onChange={e => {
              this.props.onChange(e)(this.props.category);
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default SliderPC;
