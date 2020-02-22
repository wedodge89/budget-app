import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormGroup, Input, Label, Small, FormBtn } from "../components/Form/Form";
import API from "../utils/API";
// import "./style.css";

class Register extends Component {
  state = {
    firstname: "",
    username: "",
    email: "",
    password: "",
    confirm: "",
    validUN: false,
    validEM: false,
    validPW: false,
    validCF: false,
    error: "",
    // eslint-disable-next-line
    reg: new RegExp(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  };

  validateField = (name, value) => {
    switch (name) {
      case "firstname":
        break;
      case "username":
        if (value.length > 7) {
          API.availableUN(value.toLowerCase())
            .then(res => {
              res.data.length < 1
                ? this.setState({ validUN: true })
                : this.setState({ validUN: false });
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          this.setState({ validUN: false });
        }
        break;
      case "email":
        this.setState({ validEM: this.state.reg.test(value) });
        break;
      case "password":
        this.setState({
          validPW: value.length > 7,
          validCF: value.length > 7 && value === this.state.confirm
        });
        break;
      case "confirm":
        this.setState({
          validCF: this.state.validPW && this.state.password === value
        });
        break;
      default:
    }
  };

  register = event => {
    console.log("pressed button")
    event.preventDefault();
    API.register({
      firstname: this.state.firstname.toLowerCase(),
      username: this.state.username.toLowerCase(),
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        if (res.data.message) {
          this.setState({
            error: res.data.message
          });
        } else {
          console.log("registration successful");
          this.props.isAuthorized();
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: "A server error has occured." });
      });

    this.setState({
      password: "",
      confirm: ""
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    this.validateField(name, value);
  };

  render() {
    return (
      <div className="container registerContainer">
        <form>
        <FormGroup>
          <Label text="First Name" />
          <Input
            name="firstname"
            value={this.state.firstname}
            onChange={this.handleInputChange}
            type="text"
          />
          </FormGroup>
        <FormGroup>
          <Label text="Username" />
          <Input
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            placeholder="at least 8 characters"
            type="text"
          />
          {this.state.validUN ? <Small text="Username is available" /> : <Small text="Username is not available" />}
          </FormGroup>
          <FormGroup>
          <Label text="Email" />
          <Input
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            placeholder="Email"
            type="email"
          />
          {this.state.validEM ? <Small text="Email is valid" /> : <Small text="Email is invalid" />}
          </FormGroup>
          <FormGroup>
          <Label text="Password" />
          <Input
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            placeholder="at least 8 characters"
            type="password"
          />
          {this.state.validPW ? <Small text="Password is valid" /> : <Small text="Password must be at least 8 characters" />}
          </FormGroup>
          <FormGroup>
          <Label text="Confirm Password" />
          <Input
            name="confirm"
            value={this.state.confirm}
            onChange={this.handleInputChange}
            type="password"
          />
          {this.state.validCF ? <Small text="Passwords match" /> : <Small text="Passwords don't match" />}
          </FormGroup>
          {this.state.error ? <Small text={this.state.error} /> : ""}

          <FormGroup>
            <FormBtn
              disabled={
                this.state.validUN && this.state.validEM && this.state.validCF
                  ? ""
                  : "disabled"
              }
              text="Submit"
              onClick={this.register}
              classes="btn-primary"
            />
            <Link to="/login">Already registered? Click here.</Link>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default Register;