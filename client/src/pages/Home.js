import React, { Component } from "react";
import Calendar from "../components/Calendar/Calendar";
import Container from "../components/Container/Container";
import Greeting from "../components/Greeting/Greeting";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import { FormBtn } from "../components/Form/Form";
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
          let myBills = res.data.bills;
          for(let i = 0; i < myBills.length; i++) {   
          let title = myBills[i].name;
          let date = myBills[i].date;
          let amount = myBills[i].amount;          
        
        this.setState({
          calendarEvents: myBills
        })
        console.log(this.state.calendarEvents)
          }
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
            <FormBtn
                text="Logout"
               
                classes="btn-success logoutBtn">
            </FormBtn>



        </Container>
    )
}
}
export default Home;