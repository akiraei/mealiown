import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { ProfileConsumer } from "../contexts/ProfileCTX";

export default function wihtProfile(WrappedComponent) {
  return class extends Component {
    render() {
      return localStorage.getItem("token") ? (
        <ProjectConsumer>
          {({ ProfileCTX }) => (
            <WrappedComponent ProfileCTX={ProfileCTX} {...this.props} />
          )}
        </ProjectConsumer>
      ) : (
        <Redirect to="/login" />
      );
    }
  };
}
