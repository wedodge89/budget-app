import React, { Component } from "react";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import API from "../utils/API";

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
            <div>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <h1>My Budget</h1>
                        </Col>
                    </Row>

                    <Row>
                        {this.state.budget.map(bdgt => (
                            <Col size="md-12" key={bdgt._id}>
                                <h2>My Total Monthly Budget is:${bdgt.budget.total} You have spent: ${this.state.total}</h2>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <Row>
                    {this.state.budget.map(myBdgt => (
                        
                        <Col size="md-12" key={myBdgt._id}>
                            <div className="budgetCat">

                                <h3>Rent/Mortgage</h3> <h4>Budget: ${myBdgt.budget.rent} You have spent: ${this.state.rent}</h4>                    
                                <div className="progress" style={{ height: 20 }}>
                                    <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>


                                <h3>Car Payments/Car Insurance</h3> <h4>Budget: ${myBdgt.budget.car} You have spent:${this.state.car} </h4>
                                <div className="progress" style={{ height: 20 }}>
                                    <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>


                                <h3>Utilities</h3> <h4>Budget: ${myBdgt.budget.utility} You have spent: ${this.state.utility} </h4>
                                <div className="progress" style={{ height: 20 }}>
                                    <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>


                                <h3>Food/Gas</h3> <h4>Budget: ${myBdgt.budget.food} You have spent: ${this.state.food}</h4>
                                <div className="progress" style={{ height: 20 }}>
                                    <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>


                                <h3>Tuitions/Student Loans</h3> <h4>Budget: ${myBdgt.budget.school} You have spent: ${this.state.school}</h4>
                                <div className="progress" style={{ height: 20 }}>
                                    <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>


                                <h3>Misc</h3> <h4>Budget: ${myBdgt.budget.misc} You have spent: ${this.state.misc}</h4>
                                <div className="progress" style={{ height: 20 }}>
                                    <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <button onClick={() => this.deleteBudget(myBdgt.budget._id)} >Delete</button>
                            
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        )

    }
}
export default Budget;





// Tossing this in here for reference when we work on progress bars.
// function handleProgress() {
    //     const percent = (video.currentTime / video.duration) * 100;
    //     progressBar.style.flexBasis = `${percent}%`
    // };