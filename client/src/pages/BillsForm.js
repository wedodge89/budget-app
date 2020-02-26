import React, { Component } from "react";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import { FormGroup, Input, Label, FormBtn, } from "../components/Form/Form";
import API from "../utils/API";

class BillsForm extends Component {

state= {
    name: "",
    amount: 0,
    category: "rent",
    date: ""
};




    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    };
    billSubmit = (event) => {
        event.preventDefault();
        API.billSubmit({
            name: this.state.name,
            amount: this.state.amount,
            category: this.state.category,
            date: this.state.date
            
            
        }).then( res => {
            console.log(res);
          
            
        })
    }



    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <h1>Add your Bills</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <form>
                            <FormGroup>
                                <Label text="Name" />
                                <Input type="text"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    className="form-control" id="billName"
                                    placeholder="Enter the bill name" />
                            </FormGroup>

                            <FormGroup>
                                <Label text="Amount" />
                                <Input type="text"
                                    name="amount"
                                    value={this.state.amount}
                                    onChange={this.handleInputChange}
                                    className="form-control" id="amount"
                                    placeholder="Enter the bill amount" />
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
                                <Input type="text"
                                    name="date"
                                    value={this.state.date}
                                    onChange={this.handleInputChange}
                                    className="form-control" id="date"
                                    placeholder="MM/DD/YYYY" />
                            </FormGroup>

                            <FormBtn text="Submit" onClick={this.billSubmit} classes="btn-primary"/>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default BillsForm;