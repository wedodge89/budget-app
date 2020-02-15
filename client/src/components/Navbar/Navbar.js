import React from "react";
import { Link } from "react-router-dom";

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
                        <Link to="/signup" className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}>
                            Sign Up
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/budget" className={window.location.pathname === "/budget" ? "nav-link active" : "nav-link"}>
                            My Budget
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/bills" className={window.location.pathname === "/bills" ? "nav-link active" : "nav-link"}>
                            Upcoming Bills
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>
    )
}
export default Navbar;