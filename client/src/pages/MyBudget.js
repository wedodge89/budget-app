import React from "react";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";

const Budget = props => {
    return (
        <div>
            <Container>
                <Row>
                    <Col size="md-12">
                        <h1>My Budget</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                    <table class="table">
  <thead>
    <tr>
      <th scope="col">Due Date</th>
      <th scope="col">Name</th>
      <th scope="col">Amount</th>
      <th scope="col">Paid</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
    </tr>
  </tbody>
</table>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default Budget;