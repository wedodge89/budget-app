import React, { Component } from "react";
import "./../../compCss/Message.css"


class Message extends Component {
    state = {
        message: ""
    };
    
    
    
    
    
    
    render() {
        return (
            <div>
              <h3>
                <strong><em>Ca$h Money</em></strong>   is an application that allows you to manage your budget how you see fit.
              </h3>
              <p>From building your budget to adding bills, you can do it all right here!</p>
              <p>To get started, just register or login and start creating your budget.</p>
          </div>
      )
    };
};

// Pushing to straighten things out. Fingers crossed. 

export default Message;