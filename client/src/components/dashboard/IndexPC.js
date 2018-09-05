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
      Sum: "purple"
    };

    return (
      <React.Fragment>
        <div className={"dashboard-index-box"}>
          <div className={"dashboard-index-times"}>
            {this.props.daybefore > 9999
              ? "Entire"
              : this.props.daybefore.toString() + " days before"}
          </div>
          <div className={"dashboard-index-times"}>
            Time: {this.props.time[0]} ~ {this.props.time[1]}
          </div>
        </div>
        <div className={"dashboard-index-box"}>
          {this.props.cateList.map(e => {
            return (
              <Tag className={"dashboard-index-tag"} key={e} color={color[e]}>
                {e}
              </Tag>
            );
          })}
        </div>
        <div className={"dashboard-index-box"}>
          {this.props.avgsList.map(e => {
            return (
              <Tag className={"dashboard-index-tag"} key={e} color={color2[e]}>
                {e}
              </Tag>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default IndexPC;
