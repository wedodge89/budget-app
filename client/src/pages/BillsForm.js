import React, { Component } from "react";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import { FormGroup, Input, Label, FormBtn, } from "../components/Form/Form";
import API from "../utils/API";
import {withRouter} from "react-router-dom";
import "../pageCss/BillsForm.css"

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
// validate form errors being empty
Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === "" && (valid = false);
  });

  return valid;
};


class BillsForm extends Component {
 constructor(props) {
    super(props);
this.state= {
    name: "",
    amount: 0,
    category: "rent",
    date: "",
    formErrors: {
        name: "",
        amount: "",
        category: "",
        date: ""
    }
};
 }
 

    handleInputChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
          case "name":
            formErrors.name =
              value.length < 1 ? "minimum 1 characaters required" : "";
            break;
          case "amount":
            formErrors.amount =
              value.length < 1 ? "minimum 1 characaters required" : "";
            break;
          case "category":
            formErrors.category = 
            value.length < 1 ? "minimum 1 characaters required" : "";
              
            break;
          case "date":
            formErrors.date =
              value.length < 1 ? "minimum 1 characaters required" : "";
            break;
          default:
            break;
        }
    
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };
    billSubmit = (event) => {        
        event.preventDefault();
        if(formValid(this.state)){
        API.billSubmit({
            name: this.state.name,
            amount: this.state.amount,
            category: this.state.category,
            date: this.state.date            
            
        }).then( res => {
            console.log(res);
          this.props.history.push("/bills")        
            
        }).catch(err => {
        console.log(err)       
       
    }) 
        }else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");      

    };
};



    render() {
        const { formErrors } = this.state;
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                    <h1 class="headText">$ Add Bills $</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <form onClick={this.billSubmit }>
                            <FormGroup>
                                <Label text="Name" />
                                <Input type="text" 
                                    className={formErrors.name.length > 0 ? "error" : null}
                                    name="name"
                                    noValidate
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    className="form-control" id="billName"
                                    placeholder="Enter the bill name" />
                                     {formErrors.name.length > 0 && (
                                    <span className="errorMessage">{formErrors.name}</span>
                                    )}
                            </FormGroup>

                            <FormGroup>
                                <Label text="Amount" />
                                <Input type="text"
                                    className={formErrors.amount.length > 0 ? "error" : null}
                                    name="amount"
                                    noValidate
                                    value={this.state.amount}
                                    onChange={this.handleInputChange}
                                    className="form-control" id="amount"
                                    placeholder="Enter the bill amount" />
                                    {formErrors.amount.length > 0 && (
                                    <span className="errorMessage">{formErrors.amount}</span>
                                    )}
                            </FormGroup>

                            <FormGroup>
                                <Label text="Category" />
                                <select className="form-control" name="category" value={this.state.category} onChange={this.handleInputChange}>
                                    <option value="rent" >Rent/Mortgage</option>
                                    <option value="car">Car/Insurance</option>
                                    <option value="utility">Utilities</option>
                                    <option value="food">Food/Gas</option>
                                    <option value="school">School Loans/Tuition</option>
                                    <option value="misc">Miscellaneous</option>
                                </select>
                            </FormGroup>

                            <FormGroup>
                                <Label text="Due Date" />
                                <Input type="date" 
                                    className={formErrors.date.length > 0 ? "error" : null}
                                    name="date"
                                    noValidate
                                    value={this.state.date}
                                    onChange={this.handleInputChange}
                                    className="form-control" id="date"
                                    placeholder="MM/DD/YYYY" />
                                    {formErrors.date.length > 0 && (
                                    <span className="errorMessage">{formErrors.date}</span>
                                    )}
                            </FormGroup>

                            <FormBtn text="Submit"  classes="btn-primary"/>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default withRouter(BillsForm);