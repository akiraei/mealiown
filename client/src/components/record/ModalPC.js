import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

class ModalPC extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={"modal-container"}>
          <div className={"modal-card"}>
            <div className={"modal-title"}>Recorded</div>

            <Row
              className={"modal-row"}
              type="flex"
              justify="space-around"
              align="center"
            >
              <Col>
                <Link to="/record">
                  <p className={"modal-button"}>record</p>{" "}
                </Link>
              </Col>
              <Col>
                <Link to="/dashboard">
                  <p className={"modal-button"}>dashboard</p>{" "}
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ModalPC;
