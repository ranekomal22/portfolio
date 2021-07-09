import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image id="profile-img" className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hello! I am <strong>&nbsp;Komal Rane</strong>
                <br />I have recently graduated with Master’s degree in Information Systems from City University of New York Brooklyn College.
                <br />
                <br />
                I have two years of professional work experience as a Test Engineer in Hexaware Technologies and I worked on Air Canada Airline project during that tenure.
                My primary responsibilities were to develop Test Strategies, Test Cases, write Automated Test scripts and perform mobile application testing.
                While working with Air Canada and their clients, my goal has always been to thrive for delivering best quality software and best user experience.
                <br />
                <br />
                I love learning new technologies and understand the problems that they solve.
                I am always curious to find out how can I leverage that to develop quality products with faster deliveries.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button id="btn-lets-talk" className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/ranekomal22/resume/blob/main/Komal_Rane_Resume.pdf" target="_blank" rel="noopener noreferrer">
                      <Button id="btn-resume" className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/ranekomal22" target="_blank" rel="noopener noreferrer">
                      <Button id="about-github" className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/komal-rane-3b0b22171/" target="_blank" rel="noopener noreferrer">
                      <Button id="about-linkedin" className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
