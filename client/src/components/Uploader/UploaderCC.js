import React, { Component } from "react";
import UploaderPC from "./UploaderPC";

class UploaderCC extends Component {
  handelBlob = (() => {
    let list = [];
    const reader = (name, blob) => {
      if (list.findIndex(e => e.name === name) === -1) {
        console.log("already", list.find(e => e.name === name));
        return list.find(e => e.name === name).url;
      } else {
        let newFileReader = new FileReader();
        const url = newFileReader.readAsDataURL(blob);
        list.push({ name, url });
        console.log("new one", { name, url });
        return url;
      }
    };
    return reader;
  })();

  render() {
    return <UploaderPC {...this.props} />;
  }
}

export default UploaderCC;
