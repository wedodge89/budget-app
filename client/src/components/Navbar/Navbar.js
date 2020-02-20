import React from "react";
import { Link, Router } from "react-router-dom";

const Navbar = props => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to="/">
                Home
            </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/login" className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}>
                            Login
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/register" className={window.location.pathname === "/register" ? "nav-link active" : "nav-link"}>
                            Register
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/budget" className={window.location.pathname === "/budget" ? "nav-link active" : "nav-link"}>
                            My Budget
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/budgetform" className={window.location.pathname === "/budgetform" ? "nav-link active" : "nav-link"}>
                            Build Budget
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/billsform" className={window.location.pathname === "/billsform" ? "nav-link active" : "nav-link"}>
                            Add Bills
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/bills" className={window.location.pathname === "/bills" ? "nav-link active" : "nav-link"}>
                            My Bills
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>
    )
}
export default Navbar;