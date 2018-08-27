import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";

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
                <Button size="small" onClick={this.props.onClose}>
                  <Link to="/record">
                    <p className={"modal-button"}>record</p>
                  </Link>
                </Button>
              </Col>
              <Col>
                <Button size="small">
                  <Link to="/dashboard">
                    <p className={"modal-button"}>dashboard</p>{" "}
                  </Link>
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ModalPC;
