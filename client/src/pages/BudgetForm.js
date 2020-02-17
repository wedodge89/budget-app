import React from "react";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";


const BudgetForm = props => {
    return (
        <div>
            <Container>
                <Row>
                    <Col size="md-12">
                        <h1>Determine your Budget</h1>
                    </Col>
                </Row>

                <Row>
                    <Col size="md-12">
                        <form>
                            <div className="form-group">
                                <label for="totalBudget">Total Monthly Budget </label>
                                <input type="text" className="form-control" id="monthBudget" placeholder="Enter your total Montly Budget here."></input>
                            </div>

                            <div className="form-group">
                                <label for="rentBudget">Rent/Mortgage </label>
                                <input type="text" className="form-control" id="rent" placeholder="Enter your total for Rent here."></input>
                            </div>

                            <div className="form-group">
                                <label for="carBudget">Car Payments/Insurance </label>
                                <input type="text" className="form-control" id="car" placeholder="Enter your total for Car payments/insurance here."></input>
                            </div>

                            <div className="form-group">
                                <label for="utilityBudget">Utilities </label>
                                <input type="text" className="form-control" id="utilities" placeholder="Enter your total for Utilities here."></input>
                            </div>

                            <div className="form-group">
                                <label for="foodBudget">Food/Gas </label>
                                <input type="text" className="form-control" id="food" placeholder="Enter your total for Food and Gas here."></input>
                            </div>

                            <div className="form-group">
                                <label for="schoolBudget">Tuition/School Loans </label>
                                <input type="text" className="form-control" id="school" placeholder="Enter your total for Tuitions/School loans here."></input>
                            </div>

                            <div className="form-group">
                                <label for="miscBudget">Total Monthly Budget </label>
                                <input type="text" className="form-control" id="misc" placeholder="Enter your total for Miscellaneous here."></input>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
            )
}

export default BudgetForm;