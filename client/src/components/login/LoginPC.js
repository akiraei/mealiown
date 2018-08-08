import React, { Component } from "react";

class LoginPC extends Component {
  render() {
    return (
      <React.Fragment>
        <input onChange={this.props.onChangeName} placeholder={"id"} />
        <input onChange={this.props.onChangePw} placeholder={"pw"} />
        <button onClick={this.props.onSubmit}>submit</button>
      </React.Fragment>
    );
  }
}

export default LoginPC;
