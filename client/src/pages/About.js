import React, { Component } from "react";
import Calendar from "../components/Calendar/Calendar";
import Container from "../components/Container/Container";
import Greeting from "../components/Greeting/Greeting";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import Message from "../components/Message/Message";
import Jumbotron from "react-bootstrap/Jumbotron";
import Roy from "../components/Roy/Roy";
import Elliot from "../components/Elliott/Elliott";

function About() {

    return (
        <Container>
            <Jumbotron fluid>
                <Message />
            </Jumbotron>
            
            <Row>
                <Col size="md-12">
                    <Roy />
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <Elliot />
                </Col>
            </Row>

        </Container>
    )
}
export default About;