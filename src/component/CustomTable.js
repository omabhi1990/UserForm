import React, { Component } from "react";
import { Form, Button, Row, Col, Table } from "react-bootstrap";

class CustomTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col md={4} />
        <Col md={4}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sr.No.</th>
                <th>Email</th>
                <th>Password </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{this.props.data.email}</td>
                <td>{this.props.data.pwd}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col md={4} />
      </Row>
    );
  }
}
export default CustomTable;
