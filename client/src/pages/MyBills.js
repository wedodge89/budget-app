import React, { Component } from "react";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import API from "../utils/API";
import Card from "../components/BillCard/Card";
import { withRouter } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../pageCss/MyBills.css";

class Bills extends Component {
  state = {
    bills: [],
    name: "",
    amount: "",
    date: "",
    paid: ""
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
    this.props.history.push("/home")

  }
  updateBill = (id) => {
    console.log(id)
    this.props.updateBillId(id);
    this.props.history.push("/updatebills")
  }



  get paidBills() {
    const { bills } = this.state
    console.log(bills);
    if (Array.isArray(bills)) {
      return bills.map(bill => {
        console.log("Hello Jamie")
        if (bill.paid) {
          return <Card
            key={bill._id}
            _id={bill._id}
            name={bill.name}
            amount={bill.amount}
            category={bill.category}
            date={bill.date}
            paid={bill.paid}
            deleteBill={this.deleteBill}
            updateBill={this.updateBill}
          />
        }
      }

      )
    }
    return <h4>Sorry no bills to show</h4>
  }
  get unPaidBills() {
    const { bills } = this.state
    console.log(bills);
    if (Array.isArray(bills)) {
      return bills.map(bill => {
        console.log("Hello Jamie")
        if (!bill.paid) {
          return <Card
            key={bill._id}
            _id={bill._id}
            name={bill.name}
            amount={bill.amount}
            category={bill.category}
            date={bill.date}
            paid={bill.paid}
            deleteBill={this.deleteBill}
            updateBill={this.updateBill}
          />
        }
      }

      )
    }
    return <h4>Sorry no bills to show</h4>
  }


  render() {
    return (
      <Container >
        <h1 class="headText">$ My Bills $</h1>
        
        <Row >
            <h3 class="paidBillHeader">My Paid Bills</h3>
            <h3 class="unPaidBillHeader">My UnPaid Bills</h3>
        </Row>
        <Row>
          <Col size="md-6" id="paidBillCardCol">
            {this.paidBills}
          </Col>
          <Col size="md-6" id="unPaidBillCardCol">
            {this.unPaidBills}
          </Col>
        </Row>
      </Container>
    )
  }

}
export default withRouter(Bills);