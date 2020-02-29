import React, {Component} from "react";
import Calendar from "../components/Calendar/Calendar";
import Container from "../components/Container/Container";
import Greeting from "../components/Greeting/Greeting";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import Message from "../components/Message/Message";

class Home extends Component {
    render(){
    return(

        <Container>
            <Row>
                <Col size="md-12">
                <Greeting />
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                <Message />
                </Col>
            </Row>
            
        </Container>
    )
    

}
}

export default Home;