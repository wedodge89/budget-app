import React, { Component } from "react";
import Container from "../Container/Container";
import Row from "../Row/Row";
import Col from "../Col/Col";

const Roy = (props) => {
    return (
        <Container>
            <Row>
                <Col size="md-6">
                <img src={'/images/roy.png'} alt="" />
                </Col>
            
                <Col size="md-6">
                    <p>
                    Hello, my name is Roy Davis and I am an inspiring Web Developer/Software Engineer. I have worked in retail for over 20 years and have decided I want a new, rewarding career path. I have already obtained my A.S in Computer IT and I am now currently enrolled in the UCF coding bootcamp.

                    During my time working in retail, I have been responsible for many jobs. I have worked for Publix Supermarkets since 1996. I started as a bagger while in highschool and eventually moved all the way up to a Department Manager position. I eventually realized that retail management was not in the best interest of my family or I so I decided it was time for a change.

                    Shortly after the birth of my third child, my wife and I decided it would be best if I pursued a college degree. It took almost 6 years, but I was finally able to earn my Associates in Computer IT in December of 2016. It was very rewarding to know that I stuck with it and was able to accomplish something I could be proud of.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Roy;