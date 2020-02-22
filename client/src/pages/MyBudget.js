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
        misc: 0
    }

    componentDidMount() {
        this.getMyBudget();
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

                console.log(this.state.budget)
            })
            .catch(err => console.log(err));
    };


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
                            <h2>My Total Monthly Budget is:${bdgt.total}</h2>
                        </Col>
                        ))}
                    </Row>
                </Container>
                <Row>
                    {this.state.budget.map(myBdgt => (
                    <Col size="md-12" key={myBdgt._id}>
                        <div className="budgetCat">

                            <h3>Rent/Mortgage</h3>
                            <div className="progress" style={{ height: 20 }}>
                                <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                <h4>Budget: ${myBdgt.rent}</h4>
                            </div>

                            <h3>Car Payments/Car Insurance</h3>
                            <div className="progress" style={{ height: 20 }}>
                                <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                <h4>Budget: ${myBdgt.car}</h4>
                            </div>

                            <h3>Utilities</h3>
                            <div className="progress" style={{ height: 20 }}>
                                <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                <h4>Budget: ${myBdgt.utility}</h4>
                            </div>

                            <h3>Food/Gas</h3>
                            <div className="progress" style={{ height: 20 }}>
                                <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                <h4>Budget: ${myBdgt.food}</h4>
                            </div>

                            <h3>Tuitions/Student Loans</h3>
                            <div className="progress" style={{ height: 20 }}>
                                <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                <h4>Budget: ${myBdgt.school}</h4>
                            </div>

                            <h3>Misc</h3>
                            <div className="progress" style={{ height: 20 }}>
                                <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                <h4>Budget: ${myBdgt.misc}</h4>
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