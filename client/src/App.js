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
import Update from "./pages/UpdateBills"
import About from "./pages/About";
import API from "./utils/API";
import Logout from "./pages/Logout";

class App extends Component {

  state = {
    authorized: false,
    updateBillId: null
  }

  componentDidMount() {
    this.isAuthorized();
  }

  updateBillId = (id) => {
    this.setState({
      updateBillId: id
    })
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
        
          <Navbar logout={this.logout}/>
          
            <Route exact path="/home">
              {this.state.authorized ? (
              <Home  />) : ( 
              <Redirect to="/" />
              )}</Route>

            <Route exact path="/login">
              {this.state.authorized ? (
                <Redirect to="/home" />
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
                <Bills updateBillId={this.updateBillId}/> 
              ) : (
                <Redirect to="/login" />
              )}
              </Route>
            <Route exact path="/register">
              {this.state.authorized ? (
                <Redirect to="/home" />
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

              <Route exact path="/updatebills">
              {this.state.authorized ? (
                <Update billId={this.state.updateBillId}/> 
              ) : (
                <Redirect to="/login" />
              )}
              </Route>  

              <Route exact path="/">
               
                <About /> 
              
              </Route>      

              <Route exact path="/logout">
              {this.state.authorized ? 
                <Logout logout={this.logout} /> 
               : 
                <Redirect to="/login" />
              }
              </Route>       
     

      </Router>
      
    );
  }
}

export default App;
