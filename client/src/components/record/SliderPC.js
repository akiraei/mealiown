import React, { Component } from "react";
import { Slider, Row, Col } from "antd";

class SliderPC extends Component {
  render() {
    const style = {
      height: 100
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
        <Row
          type="flex"
          justify="center"
          align="center"
          className={"slider-1000"}
        >
          <Col>
            <div>Lv.10</div>
          </Col>
        </Row>

        <Row
          type="flex"
          justify="center"
          align="center"
          className={"slider-bar"}
        >
          <Col>
            <div>
              <Slider
                className={"slider-self"}
                tipFormatter={formatter}
                vertical
                step={10}
                onChange={e => {
                  this.props.onChange(e)(this.props.category);
                }}
              />
            </div>
          </Col>
        </Row>

        <Row type="flex" justify="center" align="center" className={"slider-1"}>
          <Col>
            <div>Lv.1</div>
          </Col>
        </Row>

        <Row
          type="flex"
          justify="center"
          align="center"
          className={"slider-category"}
        >
          <Col>
            <div>{this.props.category}</div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default SliderPC;
