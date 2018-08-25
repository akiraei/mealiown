import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Alert } from "antd";
class LoginPC extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={"page-container"}>
          <input onChange={this.props.onChangeName} placeholder={"id"} />
          <input onChange={this.props.onChangePw} placeholder={"pw"} />
          {/* <Link to={"/record"} onClick={this.props.onSubmit}> */}
          <button onClick={this.props.onSubmit}>submit</button>
          {/* </Link> */}
          {this.props.error && (
            <Alert
              message="Error"
              description="Wrong ID or Password"
              type="error"
              showIcon
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default LoginPC;
