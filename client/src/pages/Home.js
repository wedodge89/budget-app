import React, { Component } from "react";
import Calendar from "../components/Calendar/Calendar";
import Container from "../components/Container/Container";
import Greeting from "../components/Greeting/Greeting";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import { FormBtn } from "../components/Form/Form";
import "../pageCss/Home.css"






function Home({ logout }) {

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
                    <Calendar />
                </Col>
            </Row>
            <FormBtn
                text="Logout"
                onClick={logout}
                classes="btn-success logoutBtn">
            </FormBtn>



        </Container>
    )
}

export default Home;