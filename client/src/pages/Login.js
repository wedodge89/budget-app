import React from "react";
import Container from "../components/Container/Container";
const Login = props => {
    return(
        <Container>
        <form className="userLogin">
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="text" className="form-control" placeholder="Enter your email address" id="email" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" className="form-control" placeholder="Enter your password" id="password" />
            </div>
            <button type="submit"  className="btn btn-success">Submit</button>
        </form>
        </Container>
    )
}

export default Login;