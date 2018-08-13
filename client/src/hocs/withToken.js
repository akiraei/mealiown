import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default function withToken(WrappedComponent) {
  return class extends Component {
    render() {
      return localStorage.getItem("token") ? (
        <WrappedComponent {...this.props} />
      ) : (
        <Redirect to="/login" />
      );
    }
  };
}
