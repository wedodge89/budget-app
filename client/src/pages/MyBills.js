import React, { Component } from "react";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import API from "../utils/API";
import Card from "../components/BillCard/Card";

export default class Bills extends Component{
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
      API.getMyBills()
      .then(res => {
          let myBills = res.data.bills;
          this.setState({
            bills: myBills
        })


       
      })
      .catch(err => console.log(err));
  };

  deleteBill = (id) => {
      API.deleteMyBill(id)
      .then(res => {
      let newBills = res.data;
      for(let i = 0; i <newBills.length; i++) {
      this.setState({
          bills: newBills.concat()
      })
    }
      console.log(this.state.bills);
    })
    .catch(err => console.log(err));
    console.log("click working")
    
  }

  get bills(){
      const { bills } = this.state
      console.log(bills);
      if(Array.isArray(bills)){
          return bills.map(bill => 
            <Card 
            key={bill._id}
            id={bill._id}
            name={bill.name}
            amount={bill.amount}
            date={bill.date}
            deleteBill={this.deleteBill}
            />
        )
      }

      return <p>Sorry no bills to show</p>

  }

  render(){
      return(
          <Container>
              <Row>
                  <Col size="md-12"><h1>My Bills</h1></Col>
              </Row>
              <Row>
                  <Col size="md-12">
                      {this.bills}
                  </Col>
              </Row>
          </Container>
      )
  }

}
