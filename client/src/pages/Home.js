import React, {Component} from "react";
import Calendar from "../components/Calendar/Calendar";
import Container from "../components/Container/Container";
import Greeting from "../components/Greeting/Greeting";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import Message from "../components/Message/Message";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../pageCss/Home.css"




class Home extends Component {
    render(){
    return(

        <Container>
            <Row>
                <Col size="md-12">
                    <Jumbotron fluid>
                <Greeting />
                </Jumbotron>
                </Col>
            </Row>
            <Row id="message">
                <Col size="md-12">
                <Message />
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <Calendar />
                </Col>
            </Row>
            
        </Container>
    )
    

}
}

export default Home;