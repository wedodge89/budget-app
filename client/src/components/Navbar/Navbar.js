import React, {Component} from "react";
import { Link, Router } from "react-router-dom";
import "./../../compCss/Navbar.css"


class Navbar extends Component {
    render() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" id="navHeader">
            <Link className="navbar-brand" to="/home">
                Home
            </Link>
            <button className="navbar-toggler" type="button"
                data-toggle="collapse"
                data-target="#navbarToggler"
                aria-controls="navbarToggler" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarToggler">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/login" className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}>
                            Sign In
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/logout" onClick={this.props.logout} className={window.location.pathname === "/logout" ? "nav-link active" : "nav-link"}>
                            Sign Out
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/register" className={window.location.pathname === "/register" ? "nav-link active" : "nav-link"}>
                            Register
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/budget" className={window.location.pathname === "/budget" ? "nav-link active" : "nav-link"}>
                            My Budgets
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/budgetform" className={window.location.pathname === "/budgetform" ? "nav-link active" : "nav-link"}>
                            Build Budgets
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/bills" className={window.location.pathname === "/bills" ? "nav-link active" : "nav-link"}>
                            My Bills
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/billsform" className={window.location.pathname === "/billsform" ? "nav-link active" : "nav-link"}>
                            Add Bills
                        </Link>
                    </li>

                </ul>

            </div>
        </nav>
    )
}
}
export default Navbar;