import React from "react";
import Container from "../Container/Container";
import Row from "../Row/Row";
import Col from "../Col/Col";

const Roy = (props) => {
    return (
        <Container class="bioBlock">
            <Row>
                <Col size="md-2">
                <a href="https://www.github.com/ryby1024" target="_blank"><img src={'/images/roy.png'} alt="" /></a>
                </Col>
            
                <Col size="md-2">

                </Col>

                <Col size="md-8">
                    <p>
                    Roy Davis is a retail professional with IT training who is making the move into Web Development and Software Engineering.</p>

                    <p>Having worked his way from a bagger in high school to his current role as a Grocery Replenishment Specialist, Roy is ready to take the project and people management skills he has developed, as well as his IT training, to use code to turn ideas into reality.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Roy;