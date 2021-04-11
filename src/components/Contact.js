import React from "react";
import Tilt from "react-tilt";

import {

    Col,
    Container,
    Row,
} from 'react-bootstrap';
import Phone from "../pictures/phone-call (1).png";
import Github from "../pictures/github (1).png";
import Email from "../pictures/email.png";
import LinkedIn from "../pictures/linkedin-logo.png";



const Contact = () => {
    return (
        <div id="contact" className="contact" >
            <h1 className="py-5"> Contact Me</h1>
            <div className="container">
                <div className="row">

                    <Container>

                        <Row>
                            <Col>
                                <Tilt className="containerLogin">
                                    <div className="cardS">
                                        <div className="contentCard">
                                            <div>
                                                <img src={Phone} alt="" />
                                            </div>
                                            <div>
                                                <button><a href="tel:7022036562">Phone</a></button>
                                            </div>
                                        </div>
                                    </div>
                                </Tilt >

                            </Col>
                            <Col>
                                <Tilt className="containerLogin">
                                    <div className="cardS">
                                        <div className="contentCard">
                                            <div>
                                                <img src={Email} alt="" />
                                            </div>
                                            <div>
                                                <button><a target="_blank" rel="noreferrer" href="mailto:saipurciful@gmail.com">Email</a></button>
                                            </div>
                                        </div>
                                    </div>
                                </Tilt>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Tilt className="containerLogin">
                                    <div className="cardS">
                                        <div className="contentCard">
                                            <div>
                                                <img src={Github} alt="" />
                                            </div>
                                            <div>

                                                <button><a target="_blank" rel="noreferrer" href="https://github.com/Saipurciful">Github</a></button></div>
                                        </div>
                                    </div>
                                </Tilt >

                            </Col>
                            <Col>
                                <Tilt className="containerLogin">
                                    <div className="cardS">
                                        <div className="contentCard">
                                            <div>
                                                <img src={LinkedIn} alt="" />
                                            </div>
                                            <div>
                                                <button><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/suthunya-purciful-59956a18b/">Linkedin</a></button></div>
                                        </div>
                                    </div>
                                </Tilt>
                            </Col>
                        </Row>


                    </Container>

                </div>
            </div>
        </div>
    );

}

export default Contact
