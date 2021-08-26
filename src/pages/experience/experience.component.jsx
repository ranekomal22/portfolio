import React from "react";
import Card from "react-bootstrap/Card";
import Hexaware from "../../assets/img/experience/hexawarelogo.webp";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img id="hexaware-logo" variant="top" className="img-resize" src={Hexaware} alt="Hexaware logo" />
                
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title id="hexaware-designation" className="text-center">Software Engineer In Test</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-left style">
                  <strong>Project: Air Canada</strong>
                    <br />
                    <strong>Technologies:</strong> NodeJS, Java, Selenium WebDriverIO, Cucumber, Chai.JS, SQL, Maven, RestAssured
                    <br />
                    <strong>Tools:</strong> Jenkins, Gitlab CI, Jira, Postman, Swagger, WAVE, NVDA
                    <br />
                    <strong>Duration:</strong> Jul 2015 - Jun 2017
                    <br/>
                    <strong> Description -</strong>
                    <ul className="text-left">
                      <li>Performed test automation and manual testing of Web and Mobile applications</li>
                      <li>Created, reviewed and documented Test Cases, Test Plans and Test Strategies</li>
                      <li>Practiced Behavior Driven Development testing</li>
                      <li>Executed back-end API testing using Postman and Swagger</li>
                      <li>Automated API testing using Java, Maven and RestAssured</li>
                      <li>Used JIRA for project management, Bug Tracking, Reporting and Analysis</li>
                      <li>Performed Smoke, Integration, Regression, System, and User Acceptance Testing</li>
                      <li>Accessibility Testing using Wave and NVDA tools</li>
                      <li>Provided application maintenance while working as 'Production Support'</li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
        
    </div>
  );
};

export default Experience;
