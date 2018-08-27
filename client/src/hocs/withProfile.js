import React, { Component } from "react";
import { ProfileConsumer } from "../contexts/ProfileCTX";

export default function wihtProfile(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <ProfileConsumer>
          {({ ProfileCTX }) => (
            <WrappedComponent ProfileCTX={ProfileCTX} {...this.props} />
          )}
        </ProfileConsumer>
      );
    }
  };
}
