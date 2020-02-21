import React, { Component } from "react";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import API from "../utils/API";
import Card from "../components/BillCard/Card";
class Bills extends Component{
state = {
    name: "",
    amount: "",
    date: ""
};

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    
  };


  render(){
      return(
          <Container>
              <Row>
                  <Col size="md-12"><h1>My Bills</h1></Col>
              </Row>
              <Row>
                  <Col size="md-12">
                      <Card 
                      
                      />
                  </Col>
              </Row>
          </Container>
      )
  }

}

export default Bills;