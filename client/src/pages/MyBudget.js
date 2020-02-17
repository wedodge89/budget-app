import React from "react";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";

const Budget = props => {
    return (
        <div>
            <Container>
                <Row>
                    <Col size="md-12">
                        <h1>My Budget</h1>
                    </Col>
                </Row>

                <Row>
                    <Col size="md-12">
                        <h2>My Total Monthly Budget is:</h2>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <div className="budgetCat">

                            <h3>Rent/Mortgage</h3>                            
                            <div class="progress" style={{height: 20}}>
                                <div class="progress-bar" role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <h3>Car Payments/Car Insurance</h3>                            
                            <div class="progress" style={{height: 20}}>
                                <div class="progress-bar" role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <h3>Utilities</h3>                            
                            <div class="progress" style={{height: 20}}>
                                <div class="progress-bar" role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <h3>Food/Gas</h3>                            
                            <div class="progress" style={{height: 20}}>
                                <div class="progress-bar" role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <h3>Tuitions/Student Loans</h3>                            
                            <div class="progress" style={{height: 20}}>
                                <div class="progress-bar" role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <h3>Misc</h3>                            
                            <div class="progress" style={{height: 20}}>
                                <div class="progress-bar" role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default Budget;