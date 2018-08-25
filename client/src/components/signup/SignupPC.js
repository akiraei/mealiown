import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Alert } from "antd";

class SignupPC extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={"page-container"}>
          <input onChange={this.props.onChangeName} placeholder={"id"} />
          <input onChange={this.props.onChangePw} placeholder={"pw"} />
          <input onChange={this.props.onChangeRePw} placeholder={"re-pw"} />
          {/* <Link to={"/record"} onClick={this.props.onSubmit}> */}
          <Button
            type={!this.props.match && "dashed"}
            onClick={this.props.onSubmit}
          >
            submit
          </Button>
          {this.props.occupied && (
            <Alert
              message="Error"
              description="ID occupied"
              type="error"
              showIcon
            />
          )}
          {/* </Link> */}
        </div>
      </React.Fragment>
    );
  }
}

export default SignupPC;
