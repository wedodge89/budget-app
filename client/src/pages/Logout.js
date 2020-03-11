import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import API from "../utils/API";
import "../pageCss/Logout.css";


class Logout extends Component {

    componentDidMount(){
        this.loggedout();
        
    }
    

    loggedout = () => {
        API.logout()
          .then(res => {
            console.log(res.data);
            
          })
          .catch(err => {
            console.log(err);
          });
      };
      
      render(){
          return(
              <div id="logout">
                  <h2>You have logged out</h2>
              </div>
          )
      }
}
export default withRouter(Logout);