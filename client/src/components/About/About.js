import React, { Component } from "react";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import Message from "../components/Message/Message";

const About = (props) => {
    return (
        <Container>
            <Row>
                <Col size="md-12">
                    <Message />
                </Col>
          </Row>
        </Container>
    )
}

export default About;