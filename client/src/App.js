import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Budget from "./pages/MyBudget";
import Bills from "./pages/UpcomingBill";
import BudgetForm from "./pages/BudgetForm";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/budget" component={Budget} />
            <Route exact path="/bills" component={Bills} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/budgetform" component={BudgetForm} />
          </Wrapper>
        </div>

      </Router>
      
    );
  }
}

export default App;
