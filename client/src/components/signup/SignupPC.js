import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignupPC extends Component {
  render() {
    return (
      <React.Fragment>
        <input onChange={this.props.onChangeName} placeholder={"id"} />
        <input onChange={this.props.onChangePw} placeholder={"pw"} />
        {/* <Link to={"/record"} onClick={this.props.onSubmit}> */}
        <button onClick={this.props.onSubmit}>submit</button>
        {/* </Link> */}
      </React.Fragment>
    );
  }
}

export default SignupPC;
