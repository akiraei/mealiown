import React, { Component } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

class MainPC extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Link to={"/record"}>
            <Button>Record</Button>
          </Link>
        </div>
        <div>
          <Link to={"/dashboard"}>
            <Button>Dashboard</Button>
          </Link>
        </div>
        <div>
          <Link to={"/option"}>
            <Button>Option?!</Button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default MainPC;
