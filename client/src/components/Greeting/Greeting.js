import React, { Component } from "react";
import API from "../../utils/API";
import "./../../compCss/Greeting.css"


class Greeting extends Component {
    state = {
        firstname: ""
    };
    
    
    componentDidMount() {
        console.log("Welcome page: retrieving info");
        this.getInfo();
    };
    
    getInfo = () => {
        API.isAuthorized()
        .then(res => {
            if (res.data.message) {
                this.setState({ authorized: false });
            } else {
                console.log(res);
                this.setState({
                    authorized: true,
                    firstname: res.data.firstname
                });
            }
        })
        .catch(err => {
            console.log(err);
            this.setState({ authorized: false});
        });
    };
    
    render() {
        return (
            <div>
              <h1>
                <p className="greeting">Welcome, {this.state.firstname}!</p>
              </h1>
          </div>
      )
    };
};

export default Greeting;