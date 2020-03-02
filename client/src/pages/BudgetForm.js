import React, {Component} from "react";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import { FormGroup, Input, Label, FormBtn } from "../components/Form/Form";
import API from "../utils/API";
import {withRouter} from "react-router-dom";

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
// validate form errors being empty
Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};


class BudgetForm extends Component {

    state = {
        total: null,
        rent: null,
        car: null,
        utility: null,
        food: null,
        school: null,
        misc: null,
        formErrors: {
            total: "",
            rent: "",
            car: "",
            utility: "",
            food: "",
            school: "",
            misc: ""
        }
       
    };
    handleInputChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
          case "total":
            formErrors.total =
              value.length < 1 ? "Total field cannot be empty." : "";
            break;
          case "rent":
            formErrors.rent =
              value.length < 1 ? "Rent field cannot be empty." : "";
            break;
          case "car":
            formErrors.car = 
            value.length < 1 ? "Car field cannot be empty." : "";
              
            break;
          case "utility":
            formErrors.utility =
              value.length < 1 ? "Utility field cannot be empty." : "";
            break;

            case "food":
            formErrors.food =
              value.length < 1 ? "Food field cannot be empty." : "";
            break;

            case "school":
            formErrors.school =
              value.length < 1 ? "School field cannot be empty." : "";
            break;

            case "misc":
            formErrors.misc =
              value.length < 1 ? "Miscellaneous field cannot be empty." : "";
            break;
          default:
            break;
        }
    
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };
      

      submit = (event) => {
          event.preventDefault();
          if(formValid(this.state)){
          API.submit({
              total: this.state.total,
              rent: this.state.rent,
              car: this.state.car,
              utility: this.state.utility,
              food: this.state.food,
              school: this.state.school,
              misc: this.state.misc
          }).then( res => {
              console.log(res);
              
              this.props.history.push("/")
              
          }).catch(err => {
              console.log(err)
          })
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        

    };
      };

    render(){
        const { formErrors } = this.state;
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
                        <form onClick={this.submit}>
                            <FormGroup>
                                <Label text="Monthly Total" />
                                <Input type="text"
                                className={formErrors.total.length > 0 ? "error" : null} 
                                name="total"
                                noValidate 
                                value={this.state.total}
                                onChange={this.handleInputChange} 
                                className="form-control" id="monthBudget" 
                                placeholder="Enter your total Montly Budget here." />
                                {formErrors.total.length > 0 && (
                                    <span className="errorMessage">{formErrors.total}</span>
                                    )}
                            </FormGroup>

                            <FormGroup>
                                <Label  text="Rent"/>
                                <Input type="text"
                                className={formErrors.rent.length > 0 ? "error" : null}
                                name="rent"
                                noValidate
                                value={this.state.rent}
                                onChange={this.handleInputChange} 
                                className="form-control" id="rent" 
                                placeholder="Enter your total for Rent here." />
                                {formErrors.rent.length > 0 && (
                                    <span className="errorMessage">{formErrors.rent}</span>
                                    )}
                            </FormGroup>

                            <FormGroup>
                                <Label  text="Car Payments/Insurance"/>
                                <Input type="text"
                                className={formErrors.car.length > 0 ? "error" : null}
                                name="car" 
                                noValidate
                                value={this.state.car}
                                onChange={this.handleInputChange} 
                                className="form-control" id="car" 
                                placeholder="Enter your total for Car payments/insurance here." />
                                {formErrors.car.length > 0 && (
                                    <span className="errorMessage">{formErrors.car}</span>
                                    )}
                            </FormGroup>

                            <FormGroup>
                                <Label  text="Utilities"/>
                                <Input type="text"
                                className={formErrors.utility.length > 0 ? "error" : null}
                                name="utility" 
                                noValidate
                                value={this.state.utility}
                                onChange={this.handleInputChange} 
                                className="form-control" id="utilities" 
                                placeholder="Enter your total for Utilities here." />
                                {formErrors.utility.length > 0 && (
                                    <span className="errorMessage">{formErrors.utility}</span>
                                    )}
                            </FormGroup>

                            <FormGroup>
                                <Label  text="Food/Gas"/>
                                <Input type="text"
                                className={formErrors.food.length > 0 ? "error" : null}
                                name="food" 
                                noValidate
                                value={this.state.food}
                                onChange={this.handleInputChange} 
                                className="form-control" id="food" 
                                placeholder="Enter your total for Food and Gas here." />
                                {formErrors.food.length > 0 && (
                                    <span className="errorMessage">{formErrors.food}</span>
                                    )}
                            </FormGroup>

                            <FormGroup>
                                <Label  text="Tuition/School loans"/>
                                <Input type="text"
                                className={formErrors.school.length > 0 ? "error" : null}
                                name="school"
                                noValidate 
                                value={this.state.school}
                                onChange={this.handleInputChange} 
                                className="form-control" id="school" 
                                placeholder="Enter your total for Tuitions/School loans here." />
                                {formErrors.school.length > 0 && (
                                    <span className="errorMessage">{formErrors.school}</span>
                                    )}
                            </FormGroup>

                            <FormGroup>
                                <Label  text="Miscellaneous"/>
                                <Input type="text"
                                className={formErrors.misc.length > 0 ? "error" : null}
                                name="misc" 
                                noValidate
                                value={this.state.misc}
                                onChange={this.handleInputChange} 
                                className="form-control" id="misc" 
                                placeholder="Enter your total for Miscellaneous here." />
                                {formErrors.misc.length > 0 && (
                                    <span className="errorMessage">{formErrors.misc}</span>
                                    )}
                            </FormGroup>

                            <FormBtn text="Submit"  classes="btn-primary"/>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
            )
    }
}

export default withRouter(BudgetForm);