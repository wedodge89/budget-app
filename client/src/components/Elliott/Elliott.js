import React, { Component } from "react";
import Container from "../Container/Container";
import Row from "../Row/Row";
import Col from "../Col/Col";

const Elliot = (props) => {
    return (
        <Container class="bioBlock">
            <Row>
                
                <Col size="md-2">
                <a href="https://www.github.com/wedodge89" target="_blank"><img src={'/images/elliott.jpg'} id="elliott" alt="" /></a>
                </Col>
                
                <Col size="md-2">

                </Col>
            
                <Col size="md-8">
                    <p>Elliott Dodge is a writer-turned-web-developer currently living in Orlando, Florida. Years of experience in a content production environment have given him a host of skills that he hopes to leverage for his career in web development.</p>

                    <p>He looks forward to joining a team with diverse skills to use technology to solve real world problems with functional, elegant code.</p>
                </Col>
                
            </Row>
        </Container>
    )
}

export default Elliot;