import React, { Component } from "react";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import API from "../utils/API";
import {withRouter} from "react-router-dom";
import {FormGroup, Input, Label, FormBtn} from "../components/Form/Form";
let moment = require("moment");

class Update extends Component {
    constructor(props) {
        super(props);
    this.state = {
        name: "",
        amount: "",
        category: "",
        date: "",
        paid: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
}

    componentDidMount() {
        this.getBill();
        }
        

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        
        
      };

      getBill = () => {
          API.getBill(this.props.billId)
          .then(res => {
              this.setState({
                  name: res.data.name,
                  amount: res.data.amount,
                  category: res.data.category,
                  paid: res.data.paid,
                  date: res.data.date
              })
          });
          
      }

      billUpdate = (event) => {
        event.preventDefault();
        API.billUpdate(
            this.props.billId,
            {
            name: this.state.name,
            amount: this.state.amount,
            category: this.state.category,
            paid: this.state.paid,
            date: this.state.date  
        }).then( res => {
            console.log(res);
          console.log("Bill updated")
          this.props.history.push("/bills")
            
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <h1>Update Your Bill</h1>
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
                                    placeholder={this.state.name} />
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
                                <Label text="Paid" />
                                <select className="form-control" name="paid" value={this.state.paid} onChange={this.handleInputChange}>
                                    <option value="true">Bill Paid</option>
                                    <option value="false">Not Paid</option>
                                </select>
                            </FormGroup>

                            <FormGroup>
                                <Label text="Due Date" />
                                <Input type="date"
                                    name="date"
                                    value={moment(this.state.date).format("MM/DD/YYYY")}
                                    onChange={this.handleInputChange}
                                    className="form-control" id="date"
                                    placeholder="MM/DD/YYYY" />
                            </FormGroup>

                            <FormBtn text="Submit" onClick={this.billUpdate} classes="btn-primary"/>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default withRouter(Update);