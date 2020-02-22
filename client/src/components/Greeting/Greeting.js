import React, { Component } from "react";
import API from "../../utils/API";

class Greeting extends Component {
    state = {
        username: ""
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
                    username: res.data.username
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
              <p>
                Welcome, {this.state.username}!
              </p>
          </div>
      )
    };
};

export default Greeting;