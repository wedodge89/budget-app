import React, { Component } from "react";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import API from "../utils/API";
import Card from "../components/BillCard/Card";
import Calendar from "react-calendar";
import {withRouter} from "react-router-dom";


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
      this.getMyBills()
    })
    .catch(err => console.log(err));
    console.log("click working")
    
  }
  updateBill = (id) => {
    console.log(id)
    this.props.updateBillId(id);
    this.props.history.push("/updatebills")
  }
  

    get bills(){
      const { bills } = this.state
      console.log(bills);
      if(Array.isArray(bills)){
          return bills.map(bill => 
            <Card 
            key={bill._id}
            _id={bill._id}
            name={bill.name}
            amount={bill.amount}
            date={bill.date}
            deleteBill={this.deleteBill}
            updateBill={this.updateBill}
            />
        )
      }
      

      return <h4>Sorry no bills to show</h4>

  }

  render(){
      return(
          <Container>
              <Row>
                  <Col size="md-12"><h1>My Bills</h1></Col>
              </Row>
              <Row>
                  <Col size="md-6" id="billCardCol">
                      {this.bills}
                  </Col>
                  <Col size="md-6">
                    <Calendar></Calendar>
                  </Col>
              </Row>
          </Container>
      )
  }

}
export default withRouter(Bills);