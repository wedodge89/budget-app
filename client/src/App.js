import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Budget from "./pages/MyBudget";
import Bills from "./pages/MyBills";
import BudgetForm from "./pages/BudgetForm";
import BillsForm from "./pages/BillsForm";
import API from "./utils/API";

class App extends Component {

  state = {
    authorized: false
  }

  componentDidMount() {
    this.isAuthorized();
  }

  isAuthorized = () => {
    API.isAuthorized()
      .then(res => {
        if (res.data.message) {
          this.setState({ authorized: false });
        } else {
          this.setState({ authorized: true });
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ authorized: false });
      });
  };

  logout = () => {
    API.logout()
      .then(res => {
        console.log("logged out");
        this.isAuthorized();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Router>
        
          <Navbar />
          
            <Route exact path="/">
              {this.state.authorized ? (
              <Home logout={this.logout} />) : ( 
              <Redirect to="/" />
              )}</Route>

            <Route exact path="/login">
              {this.state.authorized ? (
                <Redirect to="/" />
              ) : (
                <Login isAuthorized={this.isAuthorized} />
              )}
            </Route>
            <Route exact path="/budget">
              {this.state.authorized ? (
                <Budget /> 
              ) : (
                <Redirect to="/login" />
              )}
              </Route>
              <Route exact path="/bills">
              {this.state.authorized ? (
                <Bills /> 
              ) : (
                <Redirect to="/login" />
              )}
              </Route>
            <Route exact path="/register">
              {this.state.authorized ? (
                <Redirect to="/" />
              ) : (
                <Register isAuthorized={this.isAuthorized} />
              )}
            </Route>
            <Route exact path="/budgetform">
              {this.state.authorized ? (
                <BudgetForm /> 
              ) : (
                <Redirect to="/login" />
              )}
              </Route>
              <Route exact path="/billsform">
              {this.state.authorized ? (
                <BillsForm /> 
              ) : (
                <Redirect to="/login" />
              )}
              </Route>
          

      </Router>
      
    );
  }
}

export default App;
