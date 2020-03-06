import React, { Component } from "react";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import Message from "../components/Message/Message";
import Jumbotron from "react-bootstrap/Jumbotron";
import Roy from "../components/Roy/Roy";
import Elliot from "../components/Elliott/Elliott";
import "../pageCss/About.css"

function About() {

    return (
        <Container>
            <Jumbotron fluid>
                <Message />
            </Jumbotron>
            
            <Row id="roy">
                <Col size="md-12">
                    <Roy />
                </Col>
            </Row>
            <Row id="elliott">
                <Col size="md-12">
                    <Elliot />
                </Col>
            </Row>

        </Container>
    )
}
export default About;