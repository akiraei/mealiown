import React, { Component } from "react";
import { Link } from "react-router-dom";

class FrontPC extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to={localStorage.getItem("token") ? "/main" : "/login"}>
          <div>Welcome</div>
          <div>meal - I - Own</div>
        </Link>
      </React.Fragment>
    );
  }
}

export default FrontPC;
