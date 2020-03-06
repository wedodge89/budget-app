import React, { Component } from "react";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import API from "../utils/API";
import ProgressBar from "react-bootstrap/ProgressBar"
import Jumbotron from "react-bootstrap/Jumbotron";
import { withRouter } from "react-router-dom";
import "../pageCss/MyBudget.css";


class Budget extends Component {


  state = {
    budget: null,
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
        let myBudget = res.data[0].budget;
        console.log(myBudget);
        if(typeof(myBudget) == "object") {
          this.setState({budget: myBudget});
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
    this.props.history.push("/budgetform")
  }






  render() {
      if (!this.state.budget) {
        return <Jumbotron><h1>Sorry, you have not created a budget!</h1></Jumbotron>
      }
      return (
        <div id="budget">
          <Container>
            <h1 class="headText">$ My Budgets $</h1>
              <div className="totalbdgt">
                <Row id="total-budget">
                  <Col size="md-12" >
                    <h2>Total:</h2> 
                    <h3>Budget: ${this.state.budget.total}</h3>
                    <h3>Spent: ${this.state.total}</h3>
                    <h3>Left: ${parseFloat(this.state.budget.total) - parseFloat(this.state.total)}</h3>

                  </Col>
                </Row>
                <Row id="total-progress">
                  <Col size="md-12">
                    <ProgressBar now={parseFloat(`${this.state.total}`) / parseFloat(`${this.state.budget.total}`) * 100} striped variant={(parseFloat(`${this.state.total}`) / parseFloat(`${this.state.budget.total}`) * 100) < 50 ? "success" : (parseFloat(`${this.state.total}`) / parseFloat(`${this.state.budget.total}`) * 100) < 85 ? "warning" : "danger"} />
                  </Col>
                </Row>
                <hr></hr>

              </div>


              <div className="budgetCat">
                <Row className="budget-row">
                  <Col size="md-12">
                    <h3>Rent/Mortgage</h3> 
                    <h4>Budget: ${this.state.budget.rent}</h4> 
                    <h4>Spent: ${this.state.rent}</h4>
                    <h4>Left: ${parseFloat(this.state.budget.rent) - parseFloat(this.state.rent)}</h4>
                  </Col>
                </Row>
                <Row id="rent-progress">
                  <Col size="md-12">
                    <ProgressBar now={parseFloat(`${this.state.rent}`) / parseFloat(`${this.state.budget.rent}`) * 100} variant={(parseFloat(`${this.state.rent}`) / parseFloat(`${this.state.budget.rent}`) * 100) < 50 ? "success" : (parseFloat(`${this.state.rent}`) / parseFloat(`${this.state.budget.rent}`) * 100) < 85 ? "warning" : "danger"} />
                  </Col>
                </Row>
                
                <hr></hr>

                <Row className="budget-row">
                  <Col size="md-12">
                    <h3>Car/Insurance</h3>
                    <h4>Budget: ${this.state.budget.car}</h4>
                    <h4>Spent: ${this.state.car}</h4>
                    <h4>Left: ${parseFloat(this.state.budget.car) - parseFloat(this.state.car)}</h4>
                  </Col>
                </Row>
                <Row id="car-progress">
                  <Col size="md-12">
                    <ProgressBar now={parseFloat(`${this.state.car}`) / parseFloat(`${this.state.budget.car}`) * 100} variant={(parseFloat(`${this.state.car}`) / parseFloat(`${this.state.budget.car}`) * 100) < 50 ? "success" : (parseFloat(`${this.state.car}`) / parseFloat(`${this.state.budget.car}`) * 100) < 85 ? "warning" : "danger"} />
                  </Col>
                </Row>

                <hr></hr>

                <Row className="budget-row">
                  <Col size="md-12">
                    <h3>Utilities</h3>
                    <h4>Budget: ${this.state.budget.utility}</h4>
                    <h4>Spent: ${this.state.utility}</h4>
                    <h4>Left: ${parseFloat(this.state.budget.utility) - parseFloat(this.state.utility)}</h4>
                  </Col>
                </Row>
                <Row id="utility-progress">
                  <Col size="md-12">
                    <ProgressBar now={parseFloat(`${this.state.utility}`) / parseFloat(`${this.state.budget.utility}`) * 100} variant={(parseFloat(`${this.state.utility}`) / parseFloat(`${this.state.budget.utility}`) * 100) < 50 ? "success" : (parseFloat(`${this.state.utility}`) / parseFloat(`${this.state.budget.utility}`) * 100) < 85 ? "warning" : "danger"} />
                  </Col>
                </Row>

                <hr></hr>

                <Row className="budget-row">
                  <Col size="md-12">
                    <h3>Food/Gas</h3>
                    <h4>Budget: ${this.state.budget.food}</h4>
                    <h4>Spent: ${this.state.food}</h4>
                    <h4>Left: ${parseFloat(this.state.budget.food) - parseFloat(this.state.food)}</h4>
                  </Col>
                </Row>
                <Row id="food-progress">
                  <Col size="md-12">
                    <ProgressBar now={parseFloat(`${this.state.food}`) / parseFloat(`${this.state.budget.food}`) * 100} variant={(parseFloat(`${this.state.food}`) / parseFloat(`${this.state.budget.food}`) * 100) < 50 ? "success" : (parseFloat(`${this.state.food}`) / parseFloat(`${this.state.budget.food}`) * 100) < 85 ? "warning" : "danger"} />
                  </Col>
                </Row>

                <hr></hr>

                <Row className="budget-row">
                  <Col size="md-12">
                    <h3>School/Tuition</h3>
                    <h4>Budget: ${this.state.budget.school}</h4>
                    <h4>Spent: ${this.state.school}</h4>
                    <h4>Left: ${parseFloat(this.state.budget.school) - parseFloat(this.state.school)}</h4>
                  </Col>
                </Row>
                <Row id="school-progress">
                  <Col size="md-12">
                    <ProgressBar now={parseFloat(`${this.state.school}`) / parseFloat(`${this.state.budget.school}`) * 100} variant={(parseFloat(`${this.state.school}`) / parseFloat(`${this.state.budget.school}`) * 100) < 50 ? "success" : (parseFloat(`${this.state.school}`) / parseFloat(`${this.state.budget.school}`) * 100) < 85 ? "warning" : "danger"} />
                  </Col>
                </Row>

                <hr></hr>

                <Row className="budget-row">
                  <Col size="md-12">
                    <h3>Miscellaneous</h3>
                    <h4>Budget: ${this.state.budget.misc}</h4>
                    <h4>Spent: ${this.state.misc}</h4>
                    <h4>Left: ${parseFloat(this.state.budget.misc) - parseFloat(this.state.misc)}</h4>
                  </Col>
                </Row>
                <Row id="misc-progress">
                  <Col size="md-12">
                    <ProgressBar now={parseFloat(`${this.state.misc}`) / parseFloat(`${this.state.budget.misc}`) * 100} variant={(parseFloat(`${this.state.misc}`) / parseFloat(`${this.state.budget.misc}`) * 100) < 50 ? "success" : (parseFloat(`${this.state.misc}`) / parseFloat(`${this.state.budget.misc}`) * 100) < 85 ? "warning" : "danger"} />
                  </Col>
                </Row>
                <button id="budget-btn" className="btn btn-success" onClick={() => this.deleteBudget(this.state.budget._id)} >Delete</button>

              </div>
          </Container>
        </div>
      )
  }
}
export default withRouter(Budget);