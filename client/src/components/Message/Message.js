import React, { Component } from "react";
import API from "../../utils/API";


class Message extends Component {
    state = {
        message: ""
    };
    
    
    
    
    
    
    render() {
        return (
            <div>
              <h3>
                Ca$h Money is an application that allows you to manage your budget how you see fit.
              </h3>
              <p>From building your budget to adding bills, you can manage anything right in this application!</p>
          </div>
      )
    };
};

export default Message;