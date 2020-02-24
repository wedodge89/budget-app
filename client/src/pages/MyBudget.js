import React, { Component } from "react";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import API from "../utils/API";

class Budget extends Component {


    state = {
        budget: [],
        total: 0,
        rent: 0,
        car: 0,
        utility: 0,
        food: 0,
        school: 0,
        misc: 0,
        bills: [],
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
                for (let i = 0; i < myBudget.length; i++) {
                    this.setState({
                        budget: myBudget.concat()
                    })
                }

                // console.log(this.state.budget)
            })
            .catch(err => console.log(err));
    };

    getAllBills = () => {
        API.getMyBills()
            .then(res => {
                let myBill = res.data;
                for (let i = 0; i < myBill.length; i++) {
                    this.setState({
                        bills: myBill.concat()
                    })

                }
               let myRent = myBill.filter(bill => bill.category.includes("rent"));
               let rents = myRent.reduce((r,d) => r + d.amount, 0);
               this.setState({
                   newRent: rents
               })
                
               let myCar = myBill.filter(bill => bill.category.includes("car"));
               let result = myCar.reduce((r,d) => r + d.amount, 0);
            //    console.log(result);
               this.setState({
                   newCar: result
               });

               let myUtil = myBill.filter(bill => bill.category.includes("utility"));
               let util = myUtil.reduce((r,d) => r + d.amount, 0);
               this.setState({
                   newUtil: util
               });

               let myFood = myBill.filter(bill => bill.category.includes("food"));
               let foods = myFood.reduce((r,d) => r + d.amount, 0);
               this.setState({
                   newFood: foods
               });

               let mySchool = myBill.filter(bill => bill.category.includes("school"));
               let schl = mySchool.reduce((r,d) => r + d.amount, 0);
               this.setState({
                   newSchool: schl
               });

               let myMisc = myBill.filter(bill => bill.category.includes("misc"));
               let miscl = myMisc.reduce((r,d) => r + d.amount, 0);
               this.setState({
                   newMisc: miscl
               })
            });
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
                                <h2>My Total Monthly Budget is:${bdgt.total} You have spent:</h2>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <Row>
                    {this.state.budget.map(myBdgt => (
                        <Col size="md-12" key={myBdgt._id}>
                            <div className="budgetCat">

                                <h3>Rent/Mortgage</h3> <h4>Budget: ${myBdgt.rent} You have spent: ${this.state.newRent}</h4>                    
                                <div className="progress" style={{ height: 20 }}>
                                    <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>


                                <h3>Car Payments/Car Insurance</h3> <h4>Budget: ${myBdgt.car} You have spent:${this.state.newCar} </h4>
                                <div className="progress" style={{ height: 20 }}>
                                    <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>


                                <h3>Utilities</h3> <h4>Budget: ${myBdgt.utility} You have spent: ${this.state.newUtil} </h4>
                                <div className="progress" style={{ height: 20 }}>
                                    <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>


                                <h3>Food/Gas</h3> <h4>Budget: ${myBdgt.food} You have spent: ${this.state.newFood}</h4>
                                <div className="progress" style={{ height: 20 }}>
                                    <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>


                                <h3>Tuitions/Student Loans</h3> <h4>Budget: ${myBdgt.school} You have spent: ${this.state.newSchool}</h4>
                                <div className="progress" style={{ height: 20 }}>
                                    <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>


                                <h3>Misc</h3> <h4>Budget: ${myBdgt.misc} You have spent: ${this.state.newMisc}</h4>
                                <div className="progress" style={{ height: 20 }}>
                                    <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

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