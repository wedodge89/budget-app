import React, { Component } from "react";
import Container from "../Container/Container";
import Row from "../Row/Row";
import Col from "../Col/Col";

const Elliot = (props) => {
    return (
        <Container>
            <Row>
                
                <Col size="md-6">
                <img src={'/images/elliott.jpg'} id="elliott" alt="" />
                </Col>
                
            
                <Col size="md-6">
                    <p>Hi, I'm Elliott Dodge! I am almost done working on a Full-Stack Developer certificate through the University of Central Florida and Trilogy Education (graduating March 7). I am eager to bring my experiences as a writer for a large, faith-based non-profit into the world of technology and development. I am excited to join a team of diverse thinkers and collaborate to solve the world's problems using elegant, functional code.

                    Strengths that I have cultivated include meeting deadlines, working with teammates from a variety of backgrounds, and crafting content for distinct personas. I can't wait to utilize those skills for your company.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Elliot;