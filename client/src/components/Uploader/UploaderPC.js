import React, { Component } from "react";
import { Form, Button, Upload, Icon, Row, Col } from "antd";
import {
  EXIF,
  TiffTags,
  findEXIFinJPEG
} from "../../../node_modules/exif-js/exif";

var classNames = require("classnames");

class UploaderPC extends Component {
  state = {
    imgURL: ""
  };

  handleSaveImg = url => {
    this.setState({ imgURL: url });
  };

  render() {
    const nothing = (() => {
      return <div>+Img</div>;
    })();

    const exifjs = () => {
      let img = document.getElementById("upload-img");
      let exif;
      EXIF.getData(img, function() {
        exif = EXIF.findEXIFinJPEG(this);
      });
      console.log("exif: ", exif, img);
    };

    return (
      <React.Fragment>
        <Row type="flex" justify="center" align="center">
          <Col>
            <div
              className={"uploader-circle"}
              style={{ backgroundImage: `url(${this.state.imgURL})` }}
            >
              {!this.state.imgURL === "" ? (
                nothing
              ) : (
                <img src={`${this.state.imgURL}`} id="upload-img" />
              )}
              <input
                className={"uploader-input  uploader-unvisible"}
                type="file"
                id="fileElem"
                accept="image/*"
                onChange={e => {
                  try {
                    const url = window.URL.createObjectURL(e.target.files[0]);
                    exifjs();
                    this.handleSaveImg(url);
                  } catch (e) {
                    console.log("input error");
                  }
                }}
              />
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default UploaderPC;
