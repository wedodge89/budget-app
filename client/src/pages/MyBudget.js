import React, { Component } from "react";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import API from "../utils/API";
import ProgressBar from "react-bootstrap/ProgressBar"
import Jumbotron from "react-bootstrap/Jumbotron";
import "../pageCss/MyBudget.css";


class Budget extends Component {


  state = {
    budget: [],
    id: "",
    total: 0,
    rent: 0,
    car: 0,
    utility: 0,
    food: 0,
    school: 0,
    misc: 0,
    bills: [],
    newTotal: 0,
    newRent: 0,
    newCar: 0,
    newUtil: 0,
    newFood: 0,
    newSchool: 0,
    newMisc: 0

  }

  componentDidMount() {
    this.getMyBudget();
    this.getAllBills();
  }


  getMyBudget = () => {
    API.getBudget()
      .then(res => {
        let myBudget = res.data;
        console.log(myBudget._id)
        for (let i = 0; i < myBudget.length; i++) {
          this.setState({
            budget: myBudget.concat()
          })
        }
        console.log(this.state.budget)
      })
      .catch(err => console.log(err));
  };

  getAllBills = () => {
    API.getMyBills().then(res => {
      let myBill = res.data;
      console.log(myBill);
      let total = 0;
      let rent = 0;
      let car = 0;
      let utility = 0;
      let food = 0;
      let school = 0;
      let misc = 0;
      res.data.bills.forEach(bill => {
        switch (bill.category) {
          case "rent":
            rent += bill.amount;
            break;
          case "car":
            car += bill.amount;
            break;
          case "utility":
            utility += bill.amount;
            break;
          case "food":
            food += bill.amount;
            break;
          case "school":
            school += bill.amount;
            break;
          case "misc":
            misc += bill.amount;
            break;
        }
        total += bill.amount;
      });
      this.setState({
        rent,
        car,
        utility,
        food,
        school,
        misc,
        total
      });
    });
  };

  deleteBudget = (id) => {
    API.deleteMyBudget(id)
      .then(res => {
        this.getMyBudget();

      })
      .catch(err => console.log(err));
    console.log("click working")
    console.log(id)
  }






  render() {
    return (
      <div id="budget">
        <Container>
          <Jumbotron><h1>My Budget</h1></Jumbotron>
          {this.state.budget.map(bdgt => (
            <div className="totalbdgt" key={bdgt._id}>
              <Row id="total-budget">
                <Col size="md-12" >
                  <h2>My Total Monthly Budget is: ${bdgt.budget.total} You have spent: ${this.state.total}</h2>

                </Col>
              </Row>
              <Row id="total-progress">
                <Col size="md-12">
                  <ProgressBar now={parseFloat(`${this.state.total}`) / parseFloat(`${bdgt.budget.total}`) * 100} striped variant={(parseFloat(`${this.state.total}`) / parseFloat(`${bdgt.budget.total}`) * 100) < 50 ? "success" : (parseFloat(`${this.state.total}`) / parseFloat(`${bdgt.budget.total}`) * 100) < 85 ? "warning" : "danger"} />
                </Col>
              </Row>

            </div>
          ))}

          {this.state.budget.map(myBdgt => (


            <div className="budgetCat" key={myBdgt._id}>
              <Row id="rent-row">
                <Col size="md-12">
                  <h3>Rent/Mortgage</h3> <h4>Budget: ${myBdgt.budget.rent} You have spent: ${this.state.rent}</h4>
                </Col>
              </Row>
              <Row id="rent-progress">
                <Col size="md-12">
                  <ProgressBar now={parseFloat(`${this.state.rent}`) / parseFloat(`${myBdgt.budget.rent}`) * 100} variant={(parseFloat(`${this.state.rent}`) / parseFloat(`${myBdgt.budget.rent}`) * 100) < 50 ? "success" : (parseFloat(`${this.state.rent}`) / parseFloat(`${myBdgt.budget.rent}`) * 100) < 85 ? "warning" : "danger"} />
                </Col>
              </Row>


              <Row id="car-row">
                <Col size="md-12">
                  <h3>Car/Insurance</h3> <h4>Budget: ${myBdgt.budget.car} You have spent: ${this.state.car}</h4>
                </Col>
              </Row>
              <Row id="car-progress">
                <Col size="md-12">
                  <ProgressBar now={parseFloat(`${this.state.car}`) / parseFloat(`${myBdgt.budget.car}`) * 100} variant={(parseFloat(`${this.state.car}`) / parseFloat(`${myBdgt.budget.car}`) * 100) < 50 ? "success" : (parseFloat(`${this.state.car}`) / parseFloat(`${myBdgt.budget.car}`) * 100) < 85 ? "warning" : "danger"} />
                </Col>
              </Row>


              <Row id="utility-row">
                <Col size="md-12">
                  <h3>Utilities</h3> <h4>Budget: ${myBdgt.budget.utility} You have spent: ${this.state.utility}</h4>
                </Col>
              </Row>
              <Row id="utility-progress">
                <Col size="md-12">
                  <ProgressBar now={parseFloat(`${this.state.utility}`) / parseFloat(`${myBdgt.budget.utility}`) * 100} variant={(parseFloat(`${this.state.utility}`) / parseFloat(`${myBdgt.budget.utility}`) * 100) < 50 ? "success" : (parseFloat(`${this.state.utility}`) / parseFloat(`${myBdgt.budget.utility}`) * 100) < 85 ? "warning" : "danger"} />
                </Col>
              </Row>

              <Row id="food-row">
                <Col size="md-12">
                  <h3>Food/Gas</h3> <h4>Budget: ${myBdgt.budget.food} You have spent: ${this.state.food}</h4>
                </Col>
              </Row>
              <Row id="food-progress">
                <Col size="md-12">
                  <ProgressBar now={parseFloat(`${this.state.food}`) / parseFloat(`${myBdgt.budget.food}`) * 100} variant={(parseFloat(`${this.state.food}`) / parseFloat(`${myBdgt.budget.food}`) * 100) < 50 ? "success" : (parseFloat(`${this.state.food}`) / parseFloat(`${myBdgt.budget.food}`) * 100) < 85 ? "warning" : "danger"} />
                </Col>
              </Row>

              <Row id="school-row">
                <Col size="md-12">
                  <h3>School/Tuition</h3> <h4>Budget: ${myBdgt.budget.school} You have spent: ${this.state.school}</h4>
                </Col>
              </Row>
              <Row id="school-progress">
                <Col size="md-12">
                  <ProgressBar now={parseFloat(`${this.state.school}`) / parseFloat(`${myBdgt.budget.school}`) * 100} variant={(parseFloat(`${this.state.school}`) / parseFloat(`${myBdgt.budget.school}`) * 100) < 50 ? "success" : (parseFloat(`${this.state.school}`) / parseFloat(`${myBdgt.budget.school}`) * 100) < 85 ? "warning" : "danger"} />
                </Col>
              </Row>

              <Row id="misc-row">
                <Col size="md-12">
                  <h3>Miscellaneous</h3> <h4>Budget: ${myBdgt.budget.misc} You have spent: ${this.state.misc}</h4>
                </Col>
              </Row>
              <Row id="misc-progress">
                <Col size="md-12">
                  <ProgressBar now={parseFloat(`${this.state.misc}`) / parseFloat(`${myBdgt.budget.misc}`) * 100} variant={(parseFloat(`${this.state.misc}`) / parseFloat(`${myBdgt.budget.misc}`) * 100) < 50 ? "success" : (parseFloat(`${this.state.misc}`) / parseFloat(`${myBdgt.budget.misc}`) * 100) < 85 ? "warning" : "danger"} />
                </Col>
              </Row>
              <button id="budget-btn" className="btn btn-success" onClick={() => this.deleteBudget(myBdgt.budget._id)} >Delete</button>

            </div>

          ))}

        </Container>
      </div>
    )

  }
}
export default Budget;