import React, { Component } from "react";
import { Tag } from "antd";

class IndexPC extends Component {
  render() {
    const cateList = () => {
      const list = this.props.cateList.slice();
      const result = list.reduce((total, element) => {
        return total + " " + element;
      }, "");
      return result;
    };

    const avgsList = () => {
      const list = this.props.avgsList.slice();
      const result = list.reduce((total, element) => {
        return total + " " + element;
      }, "");
      return result;
    };

    const color = {
      Breakfast: "magenta",
      Brunch: "volcano",
      Lunch: "gold",
      Snack: "lime",
      Dinner: "cyan",
      Midnight: "geekblue"
    };

    const color2 = {
      Calories: "red",
      Balance: "green",
      Tasty: "blue",
      Total: "purple"
    };

    // <Tag color="magenta">magenta</Tag>
    // <Tag color="red">red</Tag>
    // <Tag color="volcano">volcano</Tag>
    // <Tag color="orange">orange</Tag>
    // <Tag color="gold">gold</Tag>
    // <Tag color="lime">lime</Tag>
    // <Tag color="green">green</Tag>
    // <Tag color="cyan">cyan</Tag>
    // <Tag color="blue">blue</Tag>
    // <Tag color="geekblue">geekblue</Tag>
    // <Tag color="purple">purple</Tag>

    return (
      <React.Fragment>
        <p>
          {this.props.daybefore > 9999 ? "Entire" : this.props.daybefore} /
          time: {this.props.time[0]} ~ {this.props.time[1]}
        </p>
        <p>
          {this.props.cateList.map(e => {
            return (
              <Tag className={"dashboard-index-tag"} color={color[e]}>
                {e}
              </Tag>
            );
          })}
        </p>
        <p>
          {this.props.avgsList.map(e => {
            return (
              <Tag className={"dashboard-index-tag"} color={color2[e]}>
                {e}
              </Tag>
            );
          })}
        </p>
      </React.Fragment>
    );
  }
}

export default IndexPC;
