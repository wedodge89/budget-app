import React from "react";
import Calendar from "../components/Calendar/Calendar";
import Container from "../components/Container/Container";
import Greeting from "../components/Greeting/Greeting"

const Home = props => {
    return(

        <Container>
            <Greeting />
            <Calendar />
        </Container>
    )
    

}

export default Home;