import React, {Component} from "react";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import { FormGroup, Input, Label, FormBtn } from "../components/Form/Form";

const axios = require("axios")
class BudgetForm extends Component {

    state = {
        total: 0,
        rent: 0,
        car: 0,
        utility: 0,
        food: 0,
        school: 0,
        misc: 0
    };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        
      };

      submit = (event) => {
          event.preventDefault();
          axios.post("/budgetform", {
              total: this.state.total,
              rent: this.state.rent,
              car: this.state.car,
              utility: this.state.utility,
              food: this.state.food,
              school: this.state.school,
              misc: this.state.misc
          }).then(function(data){
              console.log(data);
          })
      }

    render(){
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
                            <FormGroup>
                                <Label text="Monthly Total" />
                                <Input type="text" 
                                name="total" 
                                value={this.state.total}
                                onChange={this.handleInputChange} 
                                className="form-control" id="monthBudget" 
                                placeholder="Enter your total Montly Budget here." />
                            </FormGroup>

                            <FormGroup>
                                <Label  text="Rent"/>
                                <Input type="text"
                                name="rent" 
                                value={this.state.rent}
                                onChange={this.handleInputChange} 
                                className="form-control" id="rent" 
                                placeholder="Enter your total for Rent here." />
                            </FormGroup>

                            <FormGroup>
                                <Label  text="Car Payments/Insurance"/>
                                <Input type="text"
                                name="car" 
                                value={this.state.car}
                                onChange={this.handleInputChange} 
                                className="form-control" id="car" 
                                placeholder="Enter your total for Car payments/insurance here." />
                            </FormGroup>

                            <FormGroup>
                                <Label  text="Utilities"/>
                                <Input type="text"
                                name="utility" 
                                value={this.state.utility}
                                onChange={this.handleInputChange} 
                                className="form-control" id="utilities" 
                                placeholder="Enter your total for Utilities here." />
                            </FormGroup>

                            <FormGroup>
                                <Label  text="Food/Gas"/>
                                <Input type="text"
                                name="food" 
                                value={this.state.food}
                                onChange={this.handleInputChange} 
                                className="form-control" id="food" 
                                placeholder="Enter your total for Food and Gas here." />
                            </FormGroup>

                            <FormGroup>
                                <Label  text="Tuition/School loans"/>
                                <Input type="text"
                                name="school" 
                                value={this.state.school}
                                onChange={this.handleInputChange} 
                                className="form-control" id="school" 
                                placeholder="Enter your total for Tuitions/School loans here." />
                            </FormGroup>

                            <FormGroup>
                                <Label  text="Miscellaneous"/>
                                <Input type="text"
                                name="misc" 
                                value={this.state.misc}
                                onChange={this.handleInputChange} 
                                className="form-control" id="misc" 
                                placeholder="Enter your total for Miscellaneous here." />
                            </FormGroup>

                            <FormBtn text="Submit" onClick={this.submit} classes="btn-primary"/>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
            )
    }
}

export default BudgetForm;