import React, { Component } from "react";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import API from "../utils/API";
import Card from "../components/BillCard/Card";

class Bills extends Component{
state = {
    bills: [],
    name: "",
    amount: "",
    date: ""
};

componentDidMount() {
this.getMyBills();
}

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    
    
  };

  getMyBills = () => {
      API.getBills()
      .then(res => {
          let myBills = res.data;
          for(let i = 0; i < myBills.length; i++) {
            this.setState({
                bills: myBills.concat()
            })
        }
        
        console.log(this.state.bills)
      })
      .catch(err => console.log(err));
  };

  render(){
      return(
          <Container>
              <Row>
                  <Col size="md-12"><h1>My Bills</h1></Col>
              </Row>
              <Row>
                  {this.state.bills.map(bill => (
                  <Col size="md-12" key={bill._id}>
                      <Card 
                      name={bill.name}
                      amount={bill.amount}
                      date={bill.date}
                      />
                  </Col>
                  ))}
              </Row>
          </Container>
      )
  }

}

export default Bills;