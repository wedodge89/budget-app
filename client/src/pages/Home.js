import React, { Component } from "react";
import Calendar from "../components/Calendar/Calendar";
import Container from "../components/Container/Container";
import Greeting from "../components/Greeting/Greeting";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import moment from "moment";
import dayGridPlugin from '@fullcalendar/daygrid';
import API from "../utils/API";
import "../pageCss/Home.css";

 class  Home extends Component {
    
    state = {
    calendarEvents: [
        {title: "", date: "", amount: ""}
    ]
  }
    
  componentDidMount() {
    this.getMyBills();
  }
  getMyBills = () => {
    API.getMyBills()
      .then(res => {
        let myBills = [];
        for (let i = 0; i < res.data.bills.length; i++) {
          let title = res.data.bills[i].name + " " + res.data.bills[i].amount;
          let date = moment(res.data.bills[i].date).format("YYYY-MM-DD");
          myBills.push({title, date});
        }
        this.setState({calendarEvents: myBills})
        })          
      
      .catch(err => console.log(err));
  };

  

  

    render() {

    return (
                
        <Container>
            <Row>
                <Col size="md-12">
                    <Jumbotron fluid>
                        <Greeting />
                    </Jumbotron>
                </Col>
            </Row>
            
            <Row>
            
                <Col size="md-12">
                
                <Calendar                
            defaultView="dayGridMonth"
            header={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth'
            }}
            plugins={ dayGridPlugin}
            ref={ this.calendarComponentRef }           
            events={this.state.calendarEvents}
            />
                
          </Col> 
            </Row>
        </Container>
    )
}
}
export default Home;